import { Ref, ref } from 'vue';

export type RefreshTable = {pageIndex?: number, isDel?: boolean}

export const useRefresh: ()=> [Ref<RefreshTable>, (index?: number, isDel?:boolean) => void] = () => {
  const refreshData = ref<RefreshTable>({ pageIndex: 1 });
  const refresh = (pageIndex?: number, isDel?: boolean) => {
    refreshData.value = { pageIndex, isDel };
  };

  return [refreshData, refresh];
};
