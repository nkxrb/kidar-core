import { Table, Tooltip } from 'ant-design-vue';
import { FilterValue, SorterResult, TablePaginationConfig } from 'ant-design-vue/lib/table/interface';
import { defineComponent, ref, watch, DefineComponent, h, onMounted, reactive, computed, VNode } from 'vue';
import OperationCell from './operation-cell';
import useAutoHeight from './hooks/useAutoHeight';
import { useColumn } from './hooks/useColumn';
import { usePagination } from './hooks/usePagination';
import { useSorter } from './hooks/useSorter';
import { useSelectRow } from './hooks/useSelectRow';
import useRowDragSort from './hooks/useRowDragSort';
import IconTip from '../../../icons/src/IconTip';

export type AnyObj = {
  [key: string]: any
}

export interface ColumnCfg {
  title: string,
  key?: string,
  width?: string | number,
  dataIndex: string,
  fixed?: boolean | 'left' | 'right',
  component?: DefineComponent,
  props?: { [key: string]: any },
  tip?: string,
  children?: ColumnCfg[],
  dragSort?: boolean,
}

export interface TransformCellTextProps {
  text: any;
  column: ColumnCfg;
  record: any;
  index: number;
}

export interface HeaderCell {
  title: string,
  column: {
    title: string,
    key: string,
    dataIndex: string,
    fixed: boolean | 'left' | 'right',
    props: AnyObj,
    tip?: string,
  };
}

export interface ListTableRes {
  total: number,
  list: AnyObj[],
}

export interface DragSortOptions {
  disabled: boolean, // 是否开启拖拽排序
  handle?: string, // 只有按住拖动手柄(通过class匹配的元素)才能使列表单元进行拖动
  filter?: string, // 过滤器，不需要进行拖动的元素
}

export default defineComponent({
  name: 'ListTable',
  props: {
    rowKey: { type: String, require: true, default: 'id' },
    columns: { type: Array as () => any[] },
    dataSource: { type: Array as () => any[] },
    query: { type: Object as () => AnyObj },
    refresh: { type: Object },
    customRequest: { type: Function as () => any },
    virtualList: { type: Boolean, default: false },
    showSelect: { type: Boolean, default: false },
    noPage: { type: Boolean, default: false },
    hideSelectAll: { type: Boolean, default: false },
    selectRowKeys: { type: Array, default: () => [] },
    selectType: { type: String, default: 'checkbox' },
    selectRows: { type: Array, default: () => [] },
    dragSort: { type: Object as () => DragSortOptions },
    disabledChecked: { type: Function },
    defaultPageSize: { type: Number, default: 20 },
  },
  emits: ['operation', 'selectChange', 'editCell', 'dragEnd'],
  setup(props, { emit, slots, expose }) {
    const loading = ref(false);
    const tableData = ref<any>([]);
    const tableRef = ref();
    const tableContainerRef = ref();
    // 刚好显示出暂无数据
    const tableHeight = computed(() => tableData.value.length === 0 ? '350px' : '100%');

    // 处理表格列配置数据，支持多层级表头
    const [newCols, colDeep, componentMap] = useColumn(props);

    // 多层级表头，自动加上border样式
    const bordered = computed(() => colDeep.value > 1);

    // 自适应容器高度
    const scroll = useAutoHeight(tableRef, colDeep);

    // 分页配置
    const [pagination, pageChange] = usePagination(props.defaultPageSize);

    // 排序配置
    const [sortConfig, sortChange] = useSorter();
    // 配置多选行以及反显
    const rowSelection = useSelectRow(props, emit, tableData);
    // 是否开启拖拽排序
    useRowDragSort(tableContainerRef, props, emit, tableData);

    // 默认表头插槽
    const defaultHeaderCellSlot = (item: HeaderCell) => {
      if (item.column.tip) {
        return <span>
          {item.title}
          <Tooltip
            v-slots={{
              title: () => <span>{item.column.tip}</span>,
              default: () => <span style='vertical-align: -2px;margin-left: 4px;cursor: pointer;'><IconTip /></span>,
            }}
          />
        </span>;
      }
      return item.title;
    };

    // 默认列内容插槽
    const defaultBodyCellSlot = (item: TransformCellTextProps) => {
      // 避免 0 无法正常渲染
      const itemText = typeof item.text === 'object'
        ? JSON.stringify(item.text)
        : item.text === undefined
          ? ''
          : item.text;

      if (!item.column) return <span>{itemText}</span>;
      const key = item.column.key || item.column.dataIndex;

      // 声明响应式的props
      const compProps = reactive<any>({
        key: `${key}-${item.index}`,
        index: key,
        row: item.record,
        value: item.record[key],
      });

      if (item.column.dragSort) {
        compProps['data-drag-order'] = item.record[props.rowKey];
      }

      // 将自定义props同步到compProps
      const colProps = item.column.props;
      if (colProps) {
        Object.getOwnPropertyNames(colProps).forEach((propName) => {
          if (propName === 'modelValue') {
            const vmName = typeof colProps[propName] === 'string' ? colProps[propName] : 'modelValue';
            compProps[vmName] = compProps.row[key];
            compProps[`onUpdate:${vmName}`] = (val: any) => {
              const oldVal = JSON.parse(JSON.stringify(compProps.row[key]));
              compProps.row[key] = val;
              emit('editCell', val, oldVal, key, compProps.row);
            };
          } else {
            compProps[propName] = colProps[propName];
          }
        });
      }

      const component = componentMap[key];
      if (component) {
        return h(component, compProps);
      }

      if (key === 'operation') {
        return <OperationCell btns={compProps.btns} row={item.record}
          onOperation={(btn: any) => emit('operation', btn, item.record)} />;
      }

      return <span>{itemText}</span>;
    };

    const tableSlots = {
      headerCell: defaultHeaderCellSlot,
      bodyCell: defaultBodyCellSlot,
    };

    // 自定义插槽
    if (slots.headerCell) {
      tableSlots.headerCell = slots.headerCell as unknown as (item: HeaderCell) => string;
    }

    if (slots.bodyCell) {
      tableSlots.bodyCell = slots.bodyCell as unknown as (item: TransformCellTextProps) => VNode;
    }

    // 请求数据
    const getData = () => {
      if (props.customRequest) {
        loading.value = true;
        const api = props.customRequest as any;

        const param: AnyObj = {
          ...props.query,
        };

        if (pagination) {
          param.page = pagination.current - 1;
          param.size = pagination.pageSize;
        }

        if (sortConfig.order) {
          param.orderBy = sortConfig.columnKey;
          param.orderDirect = sortConfig.order === 'ascend' ? 'asc' : 'desc';
        }

        api(param).then((res: ListTableRes) => {
          loading.value = false;
          if (pagination) {
            pagination.total = res.total;
          }
          tableData.value = res.list;
        });
      } else {
        tableData.value = props.dataSource;
      }
    };

    watch(() => props.dataSource, () => {
      tableData.value = props.dataSource;
    });

    onMounted(() => {
      getData();
    });

    watch(() => props.query, () => {
      if (pagination) {
        pagination.current = 1;
      }
      getData();
    }, { deep: true });

    const tableChange = (page: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[]) => {
      if (pageChange) {
        pageChange(page);
      }
      sortChange(sorter);
      getData();
    };

    const isEmpty = computed(() => tableData.value && tableData.value.length <= 0);

    // 手动刷新页面
    const refresh = (refreshConfig?: any) => {
      const { pageIndex, isDel } = refreshConfig;
      if (!pagination) {
        getData();
        return;
      }

      if (pageIndex) {
        pagination.current = pageIndex;
      } else if (isDel && tableData.value.length === 1) { // 删除末尾一行数据时，自动向前翻一页
        pagination.current -= 1;
        if (pagination.current < 1) {
          pagination.current = 1;
        }
      }
      getData();
    };
    // 监听页面刷新
    watch(() => props.refresh, (val) => {
      refresh(val);
    });

    expose({
      refresh,
    });

    return () => <div ref={tableContainerRef} class="kidar-table-plus" style={`overflow-y: hidden;height: ${tableHeight.value}; min-height: 200px; position: relative;padding-bottom: 12px;`}>
      <Table ref={tableRef}
        rowKey={props.rowKey}
        scroll={scroll}
        bordered={bordered.value}
        loading={loading.value}
        columns={newCols.value}
        data-source={tableData.value}
        pagination={pagination}
        onChange={(page: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[]) => tableChange(page, filters, sorter)}
        rowSelection={rowSelection.value}
        v-slots={tableSlots}
      />

      {
        props.noPage ? ''
          : <div style={`padding-bottom: 6px;
        display: inline-block;
        ${isEmpty.value ? 'margin-top: 12px;' : '  transform: translateY(-100%);'}`}>
            {
              slots.footer
                ? slots.footer()
                : props.showSelect
                  ? <span>
                    当前已选择 {props.selectRowKeys.length} 条
                  </span>
                  : ''
            }
          </div>
      }
    </div>;
  },
});
