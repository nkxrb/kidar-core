import { reactive } from 'vue';
import { TablePaginationConfig } from 'ant-design-vue/lib/table/interface';

export type Pagination = {
    current: number;
    defaultPageSize: number;
    pageSize: number;
    total: number;
    showLessItems: boolean,
    showTotal: (t: number)=> string,
    pageSizeOptions: string[]
};

export const usePagination: (defaultPageSize: number)=> [Pagination, (page: TablePaginationConfig) => void] = (defaultPageSize: number) => {
  const pagination = reactive({
    current: 1,
    defaultPageSize: defaultPageSize || 20,
    pageSize: defaultPageSize || 20,
    total: 0,
    showLessItems: true,
    showTotal: (total: number) => `共 ${total} 条`,
    pageSizeOptions: ['10', '20', '50', '100'],
  });

  if (!pagination.pageSizeOptions.includes(String(defaultPageSize))) {
    pagination.pageSizeOptions.push(String(defaultPageSize));
    pagination.pageSizeOptions.sort((a, b) => Number(a) - Number(b));
  }

  const pageChange = (page: TablePaginationConfig) => {
    const { current, pageSize } = page;
    pagination.current = current || 1;

    if (pageSize !== pagination.pageSize) {
      pagination.current = 1;
    }

    if (pageSize) {
      pagination.pageSize = pageSize;
    }
  };

  return [pagination, pageChange];
};
