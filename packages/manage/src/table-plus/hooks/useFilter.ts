import { FilterValue } from 'ant-design-vue/es/table/interface';
import { Ref, ref } from 'vue';

export type FilterConfig = {
  [key: string]: any,
} | null;

export const useFilter: () => [Ref<FilterConfig>, (filter: Record<string, FilterValue | null>) => void] = () => {
  const filterConfig = ref<FilterConfig>(null);

  const filterChange = (filter: Record<string, FilterValue | null>) => {
    const keys = Object.getOwnPropertyNames(filter || {});
    const newFilter: {[key: string]: any} = {}
    if (keys && keys.length > 0) {
      keys.forEach(k => {
        let val = filter[k]
        if (val !== null && val !== undefined) {
          newFilter[k] = val
        }
      })
    }
    filterConfig.value = Object.getOwnPropertyNames(newFilter).length > 0 ? newFilter : null;
  };
  return [filterConfig, filterChange];
};
