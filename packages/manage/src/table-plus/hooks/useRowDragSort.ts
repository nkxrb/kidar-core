import { Ref } from 'vue';
import useDragSort from './useDragSort';

export interface DragEndRes {
  ids: string[] | number[],
  fromId: string,
  toId: string,
  fromIdx: number,
  toIdx: number,
}

const useRowDragSort = (tableContainerRef: Ref<Element>, props: any, emit: any, tableData: any) => {
  if (props.dragSort) {
    useDragSort(
      tableContainerRef,
      '.ant-table-tbody',
      (sortEl) => sortEl.querySelector('[data-drag-order]')?.getAttribute('data-drag-order'),
      (fromId, toId) => {
        let fromIdx = 0;
        let toIdx = 0;
        const { length } = tableData.value;
        tableData.value.forEach((r: { [x: string]: any; }, i: number) => {
          const rowId = String(r[props.rowKey]);
          if (rowId === fromId) {
            fromIdx = i;
          }
          if (rowId === toId) {
            toIdx = i;
          }
        });

        if (fromIdx + 1 === toIdx || (fromIdx === length - 1 && toId === undefined)) { // 本次拖拽未发生变化
          return;
        }

        if (fromIdx === toIdx && toId !== undefined) {
          console.error('rowKey不唯一，存在重复数据，请确保rowKey值唯一', props.rowKey, tableData.value);
          return;
        }
        emit('dragEnd', { fromId, toId, fromIdx, toIdx } as DragEndRes);
      },
      props.dragSort,
    );
  }
};

export default useRowDragSort;
