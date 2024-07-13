import { computed, defineComponent, ref, watch } from 'vue';
import { Solar } from 'lunar-typescript';
import LeftArrow from '../../../icons/src/LeftArrow';
import RightArrow from '../../../icons/src/RightArrow';

export default defineComponent({
  props: {
    value: {type: String}
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const curSolar = computed<Solar>({
      get: () => Solar.fromDate(props.value ? new Date(props.value) : new Date()),
      set: val => {
        const dateStr = val.toYmd()
        emit('update:value', dateStr)
      }
    })

    const preMonth = () => {
      curSolar.value = curSolar.value.nextMonth(-1);
    };

    const nextMonth = () => {
      curSolar.value = curSolar.value.nextMonth(1);
    };

    const curYear = computed(() => curSolar.value.getYear());
    const curMonth = computed(() => curSolar.value.getMonth());

    return () => <div class="kidar-month-select">
      <LeftArrow onClick={preMonth} />
      <span class="">{curYear.value} 年 {curMonth.value} 月</span>
      <RightArrow onClick={nextMonth} />
    </div>;
  },
});
