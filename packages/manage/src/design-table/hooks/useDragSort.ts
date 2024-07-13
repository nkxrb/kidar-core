import { onBeforeUnmount, ref, Ref, watch } from 'vue';
import Sortablejs from 'sortablejs';

export interface DragOptions {
  disabled: boolean, // 是否开启拖拽排序
  handle?: string, // 只有按住拖动手柄(通过class匹配的元素)才能使列表单元进行拖动
  filter?: string, // 过滤器，不需要进行拖动的元素
}

const useDragSort = <T>(
  container: Ref,
  className: string,
  findIndex: (item: Element)=> number | string | null | undefined,
  dragEnd: (fromIdx: number|string, toIdx?: number|string) => void,
  options?: DragOptions,
) => {
  const findIdx = (item: Element) => {
    if (findIndex) {
      return findIndex(item);
    }
    return item.getAttribute('data-drag-order');
  };

  const sortable = ref();

  const initSort = () => {
    const tbody = container.value.querySelector(className);
    // eslint-disable-next-line no-new
    sortable.value = new Sortablejs(tbody, {
      ...options,
      onEnd(res: any) {
        const { item, to } = res;
        const fromIdx = findIdx(item) as string;
        let nextIdx: number | string | null | undefined;

        if (to && to.children) {
          for (let index = 0; index < to.children.length; index += 1) {
            const t = to.children[index];
            const tIdx = findIdx(t);
            if (tIdx === fromIdx) {
              const nextEl = to.children[index + 1];
              if (nextEl && findIdx(nextEl)) {
                nextIdx = findIdx(nextEl) as string;
                dragEnd(fromIdx, nextIdx);
              } else {
                dragEnd(fromIdx);
              }
              return;
            }
          }
        }
      },
    });
  };

  watch(() => options, (val: any) => {
    if (val && sortable.value) {
      Object.getOwnPropertyNames(val).forEach((k) => {
        sortable.value.option(k, val[k]);
      });
    }
  }, { deep: true });

  onBeforeUnmount(() => {
    if (sortable.value) {
      sortable.value.destroy();
    }
  });

  watch(container, () => {
    if (container.value) {
      initSort();
    }
  }, { immediate: true });
};

export default useDragSort;
