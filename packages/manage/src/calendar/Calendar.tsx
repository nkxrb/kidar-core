import { computed, defineComponent, ref, toRefs } from 'vue';
import { weeks } from './constant';
import { CalendarItem, DayTask, Task, useCalendar } from './useCalendar';
import { Solar } from 'lunar-typescript';

export default defineComponent({
  props: {
    date: {type: String},
    data: {type: Array as ()=> Task[], default: ()=> []},
  },
  setup(props, {slots}) {
    const { data, date } = toRefs(props);
    const curSolar = computed(() => Solar.fromDate(date.value ? new Date(date.value) : new Date()));
    const curYear = computed(() => curSolar.value.getYear());
    const curMonth = computed(() => curSolar.value.getMonth());

    const { dates, getTasksByRow } = useCalendar(data, curYear, curMonth);

    const renderWeeks = () => <div class="kidar-calendar-header">
       { weeks.map((w, i) => <div class="kidar-calendar-week">{w}</div>)}
    </div>

    const renderCell = (d: CalendarItem) => {
      const { day, jieQi, jieRi, lunarDay, isToday } = d;
      const feb = jieRi?.join() || jieQi || lunarDay;

      return <div class="kidar-calendar-date-title">
        {isToday ? <div class="kidar-calendar-today">今</div> : <span>{day}</span>}
        <span class="kidar-lunar-text">{feb}</span>
      </div>;
    };

    const renderTaskItem = (t: DayTask) => <div class="kidar-calendar-task-item">
      <span class="truncate">{t.name}</span>
    </div>;

    const renderTask = (row: CalendarItem[]) => {
      const arr = getTasksByRow(row);
      return <>
        {
          arr.map(t => {
            if (t.top === undefined) {
              return '';
            }
            if (t.moreNum) {
              return slots.moreTask ? slots.moreTask(t) : <div class="kidar-calendar-task"
                style={`
                      left:calc((100% - 48px)*${t.week - 1}/7 + ${(t.week - 1) * 8}px);
                      top:${t.top * 22 + 32}px;
                    `}>
                <div class="kidar-calendar-task-more">{`还有${t.moreNum}项...`}</div>
              </div>;
            }
            return <div class="kidar-calendar-task"
              style={`width: calc((100% - 48px)*${t.idx}/7 + ${8 * (t.idx - 1)}px);
                left:calc((100% - 48px)*${t.week - 1}/7 + ${(t.week - 1) * 8}px);
                top:${t.top * 22 + 32}px;
              `}>
              {slots.taskItem ? slots.taskItem(t) : renderTaskItem(t)}
            </div>;
          })
        }
      </>;
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
              return <div class="kidar-calendar-date" style={`${i ? 'margin-left: 8px;' : ''}`}>
                {renderCell(d)}
              </div>;
            })
          }
          {renderTask(row)}
          </div>
        )
      } 
    </div>

    return () => <div class="kidar-calendar">
      { renderWeeks() }
      { renderCalendarBody() }
    </div>;
  },
});