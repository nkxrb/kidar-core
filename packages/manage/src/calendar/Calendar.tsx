import { computed, defineComponent, ref, toRefs } from 'vue';
import { weeks } from './constant';
import './index.less'
import { CalendarItem, Task, useCalendar } from './useCalendar';
import { Solar } from 'lunar-typescript';

export default defineComponent({
  props: {
    data: {type: Array as ()=> Task[], default: ()=> []},
  },
  setup(props) {
    const { data } = toRefs(props);
    // 获取当前日期
    const todayDate = Solar.fromDate(new Date());
    const todayYmd = todayDate.toYmd();
    const curSolar = ref(todayDate);
    const curYear = computed(() => curSolar.value.getYear());
    const curMonth = computed(() => curSolar.value.getMonth());

    const preMonth = () => {
      curSolar.value = curSolar.value.nextMonth(-1);
    };

    const nextMonth = () => {
      curSolar.value = curSolar.value.nextMonth(1);
    };
    const { dates } = useCalendar(data, curYear, curMonth);

    const renderMonthSelect = () => <div>

    </div>

    const renderWeeks = () => <div class="kidar-calendar-header">
       { weeks.map((w, i) => <div class="kidar-calendar-week">{w}</div>)}
    </div>

    const renderCell = (d: CalendarItem) => {
      const { day, jieQi, jieRi, lunarDay, isToday } = d;
      const feb = jieRi?.join() || jieQi || lunarDay;

      return <span class="t:inline-flex t:items-center t:h-[32px] t:w-[100%]">
        {isToday ? <div class="t:rounded-[50%] t:bg-primary t:text-[#fff] t:w-[24px] t:h-[24px] t:leading-[24px] t:text-center t:text-[14px]">今</div> : <span class="t:font-600 t:text-[#001949]">{day}</span>}
        <span class="">{feb}</span>
      </span>;
    };

    const renderCalendarBody = () => <div class="kidar-calendar-body">
      { dates.value.map(row => <div class="kidar-calendar-row">
          {
            row.map((d, i) => {
              const curSoldar = Solar.fromYmdHms(d.year as number, d.month as number, d.day as number, 23, 59, 59);
              const isTodayBefore = curSoldar.isBefore(Solar.fromDate(new Date()));
              if (isTodayBefore || d.month !== d.curMonth){
                return <div class="kidar-calendar-date" style={`${i ? 'margin-left: 8px;' : ''}`}>
                  {renderCell(d)}
                </div>;
              }
              return <div class="kidar-calendar-date" style={`${i ? 'margin-left: 8px;' : ''} ${d.isToday && d.month === d.curMonth ? 'background-color: #F8F9FA;' : ''}`}>
                      {renderCell(d)}
                    </div>;
            })
          }
          </div>
        )
      } 
    </div>

    return () => <div class="kidar-calendar">
      { renderMonthSelect() }
      { renderWeeks() }
      { renderCalendarBody() }
    </div>;
  },
});