import { defineComponent, ref, watch } from 'vue';
import { Calendar, MonthSelect } from '../index';
import { DayTask, Task } from '../useCalendar';
import { Solar } from 'lunar-typescript';

export default defineComponent({
  setup() {
    const data = ref<Task[]>([]);
    const curDate = ref('');
    const getData = (val: string) =>{
      const time = (val ? new Date(val) : new Date()).getTime();
      const res: Task[] = [];
      for(let i=0; i<10; i++){
        const startTime = time + Number(((Math.random() * 28 + Math.random() * (-16)) * 86400000).toFixed(0));
        const endTime = startTime + Number((Math.random() * 18 * 86400000).toFixed(0));

        res.push({
          startTime,
          endTime,
          id: `id-${Math.random().toFixed(11)}`,
          name: `任务-${i}`,
          start: Solar.fromDate(new Date(startTime)).toYmd(),
          end: Solar.fromDate(new Date(endTime)).toYmd(),
        })
      }
      data.value = res;
    }
    watch(curDate, (val)=>{
      getData(val);
    }, {immediate: true})

    const getColor = (type?: number) => {
      return '#dfdfdf'
    }

    const renderTaskItem = (t: DayTask) => {
      return <div style={`width:100%; background: ${getColor(t.type)}`}>{t.name}</div>
    }

    return () => <div>
      <MonthSelect v-model={[curDate.value, 'value']} />
      <Calendar date={curDate.value} 
        data={data.value} 
        v-slots={{
          taskItem: renderTaskItem
        }}
      />
    </div>;
  },
});