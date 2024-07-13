import { cloneDeep } from 'lodash-es';
import { DefineComponent, Ref, ref, watch } from 'vue';

export type ComponentMap = {[key: string]: DefineComponent}

export const useColumn: (props: any)=> [Ref<any>, Ref<number>, ComponentMap] = (props: any) => {
  const newCols = ref();
  const deep = ref(1);
  const componentMap: ComponentMap = {};

  const dealCols = (arr: any[], deepCfg: {deep: number, maxDeep: number}) => {
    if (arr && arr.length > 0) {
      for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        // 设置最小宽度，防止表头太长换行
        if (!item.width) {
          item.width = 120;
        }
        // 默认设置ellipsis属性为true，如果不想省略，可以显性的设置{ellipsis: false}
        if (item.ellipsis === undefined) {
          item.ellipsis = { showTitle: true };
        }

        if (item.component) {
          componentMap[item.key || item.dataIndex] = item.component;
          delete item.component;
        }

        if (item.children && item.children.length > 0) {
          deepCfg.deep += 1;
          deepCfg.maxDeep = Math.max(deepCfg.maxDeep, deepCfg.deep);
          dealCols(item.children, deepCfg);
          deepCfg.deep -= 1;
        }
      }
    }
  };

  const checkCols = (columns: any[]) => {
    if (columns && columns.length > 0) {
      const deepCfg = { deep: 1, maxDeep: 1 };
      dealCols(columns, deepCfg);
      deep.value = deepCfg.maxDeep;
      return columns;
    }
    return [];
  };

  watch(() => props.columns, (newV) => {
    newCols.value = checkCols(cloneDeep(newV));
  }, { immediate: true });

  return [newCols, deep, componentMap];
};
