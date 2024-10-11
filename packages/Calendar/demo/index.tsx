import { Checkbox, Tooltip } from 'ant-design-vue';
import { computed, defineComponent, ref, watch } from 'vue';
import { Calendar, MonthSelect } from '../src/index';
import { DayTask, Task } from '../src/useCalendar';
import { getData } from './data';

export default defineComponent({
  setup() {
    const data = ref<Task[]>([]);
    const curDate = ref(new Date());
    const typesNum = 3;
    const colorMap: {[k:number]:string} = {
      1: 'rgba(0, 163, 234, .9)',
      2: 'rgba(84, 183, 91, .9)',
      3: 'rgba(240, 83, 134, .9)'
    }
    const types = ref([
      { type: 1, bg: colorMap[1], selected: true},
      { type: 2, bg: colorMap[2], selected: true},
      { type: 3, bg: colorMap[3], selected: true}
    ])
    const selectedTypes = computed(() => types.value.filter(t => t.selected).map(t => t.type))

    const getCalendarData = () =>{
      const res = getData(curDate.value, typesNum)
      console.log(res)
      data.value = res.filter((t: { type: number })=>selectedTypes.value.includes(t.type));
    }
    watch([curDate, selectedTypes], ()=>{
      getCalendarData();
    }, {immediate: true})

    const renderTypes = () => {
      return <div class="flex items-center">{
        types.value.map(t => <Checkbox v-model={[t.selected, 'checked']}><div class="w-40px h-18px mx-2px mt-6px cursor-pointer" style={`background: ${t.bg}`}></div></Checkbox>)
      }</div>
    }

    const renderTaskItem = (t: DayTask) => {
      return <div style={`width:100%; background: ${colorMap[t.type]}`} class="truncate text-[#fff] px-4px">{t.name}</div>
    }

    const renderMoreTask = (t: DayTask) => {
      return <Tooltip
        trigger="click"
        placement="rightTop"
        destroyTooltipOnHide={true}
        color="#fff"
        v-slots={{
          title: () => <div class="text-[#232323] w-150px">
            <div class="font-500 mb-8px">{t.date}</div>
            <div>
              {t.tasks?.map(item => <div class="flex my-4px">{renderTaskItem(item)}</div>)}
            </div>
          </div>,
          default: () => <span>还有{t.moreNum}项...</span>
        }}
      />
    }

    return () => <div>
      <div class="flex items-center justify-between">
        <MonthSelect v-model={[curDate.value, 'value']} />
        <div class="text-right">
          {renderTypes()}
        </div>
      </div>
      <Calendar date={curDate.value} 
        data={data.value} 
        v-slots={{
          taskItem: renderTaskItem,
          moreTask: renderMoreTask
        }}
      />
    </div>;
  },
});