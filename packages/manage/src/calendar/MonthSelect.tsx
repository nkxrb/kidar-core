import { computed, defineComponent, ref, watch } from 'vue';
import { Solar } from 'lunar-typescript';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';

export default defineComponent({
  props: {
    value: {type: Number}
  },
  emits: ['change'],
  setup(props, { emit }) {
    const curSolar = ref<Solar>(Solar.fromDate(new Date()));
    watch(()=>props.value, (v)=>{
      if(props.value){
        curSolar.value = Solar.fromDate(new Date(Number(props.value)))
      }
    })

    const preMonth = () => {
      curSolar.value = curSolar.value.nextMonth(-1);
      emit('change',{
        year: curYear.value,
        month: curMonth.value,
        solar: curSolar.value
      })
    };

    const nextMonth = () => {
      curSolar.value = curSolar.value.nextMonth(1);
      emit('change',{
        year: curYear.value,
        month: curMonth.value,
        solar: curSolar.value
      })
    };

    const curYear = computed(() => curSolar.value.getYear());
    const curMonth = computed(() => curSolar.value.getMonth());

    return () => <div class="cfx-atm">
      <div class="flex items-center flex-none">
        <LeftArrow onClick={preMonth} />
        <span class="font-600 px-20px">{curYear.value} 年 {curMonth.value} 月</span>
        <RightArrow onClick={nextMonth} />
      </div>
    </div>;
  },
});
