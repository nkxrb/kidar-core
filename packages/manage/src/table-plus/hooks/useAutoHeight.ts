import ResizeObserver from 'resize-observer-polyfill';
import { nextTick, onBeforeUnmount, reactive, Ref } from 'vue';

function getComputedStyle(dom: HTMLElement & {currentStyle: any}) {
  let computedStyle: Partial<CSSStyleDeclaration> = {};
  if (window.getComputedStyle instanceof Function) {
    computedStyle = window.getComputedStyle(dom);
  } else {
    computedStyle = dom.currentStyle;
  }
  return computedStyle;
}

export default function useAutoHeight(tableRef: Ref<any>, colDeep: Ref<number>) {
  const scroll = reactive({ y: 100, x: '100%' });
  const resetHeight = () => {
    const pageHeight = 48; // 分页高度
    const tableHeadHeight = 46 * colDeep.value; // 表头高度
    const style = getComputedStyle(tableRef.value.$el.parentElement);
    const paddingTop = parseFloat(style.paddingTop || '0');
    const paddingBottom = parseFloat(style.paddingBottom || '0');
    const paddingLeft = parseFloat(style.paddingLeft || '0');
    const paddingRight = parseFloat(style.paddingRight || '0');

    scroll.y = tableRef.value.$el.parentElement.offsetHeight - paddingBottom - paddingTop - pageHeight - tableHeadHeight;
  };
  const ro = new ResizeObserver(resetHeight);
  nextTick(() => {
    ro.observe(tableRef.value.$el.parentElement);
  });
  onBeforeUnmount(() => {
    ro.unobserve(tableRef.value.$el.parentElement);
  });

  return scroll;
}
