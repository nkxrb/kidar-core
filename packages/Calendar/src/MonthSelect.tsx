import { computed, defineComponent } from 'vue';
import LeftArrow from '../../../icons/src/LeftArrow';
import RightArrow from '../../../icons/src/RightArrow';

type DateYearAndMonth = [number, number];

export default defineComponent({
  props: {
    value: { type: Object as () => Date, default: () => new Date() }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const dateArr = computed<DateYearAndMonth>({
      get: () => {
        const date = props.value || new Date();
        return [date.getFullYear(), date.getMonth() + 1] as DateYearAndMonth
      },
      set: val => {
        emit('update:value', new Date(`${val[0]}-${val[1]}`))
      }
    })

    const preMonth = () => {
      let [year, month] = dateArr.value;
      if (month === 1){
        dateArr.value = [--year, 12]
      } else {
        dateArr.value = [year, --month]
      }
    };

    const nextMonth = () => {
      let [year, month] = dateArr.value;
      if (month === 12) {
        dateArr.value = [++year, 1]
      } else {
        dateArr.value = [year, ++month]
      }
    };

    const curYear = computed(() => dateArr.value[0]);
    const curMonth = computed(() => dateArr.value[1]);

    return () => <div class="kidar-month-select">
      <LeftArrow onClick={preMonth} />
      <span class="kidar-month-text">{curYear.value} 年 {curMonth.value < 10 ? `0${curMonth.value}` : curMonth.value} 月</span>
      <RightArrow onClick={nextMonth} />
    </div>;
  },
});
