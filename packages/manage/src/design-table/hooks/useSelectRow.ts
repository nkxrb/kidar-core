import { ref, watch } from 'vue';
import { differenceWith, unionWith } from 'lodash-es';

export const useSelectRow = (props: any, emit: any, tableData: any) => {
  // 配置多选行以及反显
  const rowSelection = ref();
  const selectRowKeys = ref(props.selectRowKeys || []);
  const selectRows = ref<any>(props.selectRows || []);
  const selectRow = (record: any, selected: boolean) => {
    const id = record[props.rowKey];
    const index = props.selectRowKeys.indexOf(id);
    if (selected) {
      selectRowKeys.value.push(id);
      selectRows.value.push(record);
    } else {
      selectRowKeys.value.splice(index, 1);
      selectRows.value.splice(index, 1);
    }
    emit('selectChange', selectRowKeys.value, selectRows.value, record);
  };

  const selectSingleRow = (record: any, selected: boolean) => {
    const id = record[props.rowKey];
    selectRowKeys.value = [id];
    selectRows.value = [record];
    emit('selectChange', selectRowKeys.value, selectRows.value, record);
  };

  const selectAllRow = (selected: boolean) => {
    let selectAbleRows = [];
    if (props.disabledChecked) {
      selectAbleRows = tableData.value.filter((t: any) => !props.disabledChecked(t));
    } else {
      selectAbleRows = tableData.value;
    }

    const curListIds = selectAbleRows.map((t: any) => t[props.rowKey]);
    if (selected) {
      selectRowKeys.value = unionWith(selectRowKeys.value, curListIds);
      selectRows.value = unionWith(selectRows.value, tableData.value, (a:any, b:any) => a[props.rowKey] === b[props.rowKey]);
    } else {
      selectRowKeys.value = differenceWith(selectRowKeys.value, curListIds);
      selectRows.value = differenceWith(selectRows.value, tableData.value, (a:any, b:any) => a[props.rowKey] === b[props.rowKey]);
    }
    emit('selectChange', selectRowKeys.value, selectRows.value);
  };
  watch([() => props.showSelect, () => props.selectRowKeys, () => props.selectType], () => {
    selectRowKeys.value = props.selectRowKeys || [];
    if (props.selectRows && props.selectRows.length > 0) {
      selectRows.value = props.selectRows;
    } else {
      selectRows.value = [];
    }
    if (props.showSelect) {
      rowSelection.value = {
        selectedRowKeys: props.selectRowKeys,
        hideSelectAll: props.hideSelectAll,
        type: props.selectType,
        onSelect: props.selectType === 'checkbox' ? selectRow : selectSingleRow,
        onSelectAll: selectAllRow,
        getCheckboxProps: (record: any) => ({
          disabled: props.disabledChecked ? props.disabledChecked(record) : false,
          name: record[props.rowKey],
        }),
      };
    } else {
      rowSelection.value = null;
    }
  }, { immediate: true });

  return rowSelection;
};
