import { reactive } from 'vue';
import { SorterResult } from 'ant-design-vue/lib/table/interface';

export type SortConfig = {
  columnKey: string,
  order: string,
}

export const useSorter: ()=> [SortConfig, (sorter: SorterResult<any> | SorterResult<any>[]) => void] = () => {
  const sortConfig = reactive({
    columnKey: '',
    order: '',
  });

  const sortChange = (sorter: SorterResult<any> | SorterResult<any>[]) => {
    if (Array.isArray(sorter)) {
      // 如果是多列排序，暂只取第一个，当遇到此场景时，需和接口协商处理
      sortConfig.columnKey = sorter[0].columnKey as string;
      sortConfig.order = sorter[0].order as string;
    } else {
      sortConfig.columnKey = sorter.columnKey as string;
      sortConfig.order = sorter.order as string;
    }
  };
  return [sortConfig, sortChange];
};
