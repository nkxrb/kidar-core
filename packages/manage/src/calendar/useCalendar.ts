import { Ref, computed, onActivated, ref, watch } from 'vue';
import { Solar, SolarMonth } from 'lunar-typescript';

export interface Task {
  startTime: number,
  endTime: number,
  name: string,
  id: string,
  [key: string]: any
}

export interface CalendarItem {
  curYear: number,
  curMonth: number,
  key: string,
  year: number,
  month: number,
  day: number,
  week: number,
  date: string,
  lunarDay?: string,
  lunarMonth?: string,
  jieRi?: string[],
  jieQi?: string,
  isToday?: boolean,
}

export interface DayTask extends Task {
  idx: number,
  week: number,
  top: number,
  year: number,
  month: number,
  day: number,
  date: string,
  moreNum?: number,
  tasks?: DayTask[]
}

export interface DayTaskMap {
  [key: string]: DayTask[]
}

export const weeks = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export const colorMap = [
  {},
  { bgColor: 'rgba(38,126,240,0.15)', textColor: '#1364D4', hoverBgColor: 'rgba(38,126,240,0.25)' },
  { bgColor: 'rgba(38,126,240,0.15)', textColor: '#1364D4', hoverBgColor: 'rgba(38,126,240,0.25)' },
  { bgColor: 'rgba(84, 193, 81, 0.15)', textColor: '#22891F', hoverBgColor: 'rgba(84, 193, 81, 0.25)' },
  { bgColor: 'rgba(112,126,152, 0.15)', textColor: '#2C4068', hoverBgColor: 'rgba(112,126,152, 0.25)' },
  { bgColor: 'rgba(241,48,72, 0.15)', textColor: '#F13048', hoverBgColor: 'rgba(241,48,72, 0.25)' },
  { bgColor: 'rgba(251, 187, 61, 0.15)', textColor: '#ED5D00', hoverBgColor: 'rgba(251, 187, 61, 0.25)' },
  { bgColor: 'rgba(163,87,236, 0.15)', textColor: '#822FD1', hoverBgColor: 'rgba(163,87,236, 0.25)' }
];

const addMapItem = (map: any, key: any, item: any) => {
  if (map[key]){
    map[key].push(item);
  } else {
    map[key] = [item];
  }
};

const TODAY_DATE = Solar.fromDate(new Date()).toYmd();

export const useCalendar = (data: Ref<Task[]>, curYear: Ref<number>, curMonth: Ref<number>) => {

  const MAX_ROW = 4; // 最大行数

  // 设置每个日期数据对象
  const setItem: (solarDate: Solar)=> CalendarItem = (solarDate: Solar) => {
    const lunar = solarDate.getLunar();
    const lunarDay = lunar.getDayInChinese();
    const lunarMonth = lunar.getMonthInChinese();
    const lunarDate = lunar.getDay() === 1 ? `${lunarMonth === '冬' ? '十一' : lunarMonth}月` : lunarDay;
    const year = solarDate.getYear();
    const month = solarDate.getMonth();
    const day = solarDate.getDay();
    const week = solarDate.getWeek() || 7;
    const key = `${year}-${month}-${day}`;
    const date = solarDate.toYmd();
    const isToday = TODAY_DATE === date;
    return {
      key,
      curYear: curYear.value,
      curMonth: curMonth.value,
      year,
      month,
      day,
      week,
      date,
      lunarDay: lunarDate,
      lunarMonth,
      isToday,
      jieRi: [...lunar.getFestivals(), ...solarDate.getFestivals()],
      jieQi: lunar.getJieQi()
    };
  };

  // 获取当前日历页中的所有日期
  const dates = computed(() => {
    // 通过年月，算出当前时间日期范围数组,
    // 从周一开始到周日结束
    const arr: Array<CalendarItem[]> = [[]];
    const year = curYear.value;
    const month = curMonth.value;
    const startDate = Solar.fromYmd(curYear.value, curMonth.value, 1); // 每月一号
    const startWeek = startDate.getWeek() || 7; // 如果为0，则改为7（周日）
    let rowIdx = 0;

    // 上一月补齐
    let preWeek = startWeek - 1;
    let preDay = startDate.nextDay(-1);
    while (preWeek) {
      arr[rowIdx][preWeek - 1] = setItem(preDay);
      preDay = preDay.nextDay(-1);
      preWeek--;
    }

    // 当月日期
    let nextDay = startDate;
    let nextWeek = startWeek;
    while (nextDay.getMonth() === month){
      nextWeek = nextDay.getWeek() || 7;
      if (nextWeek === 1 && arr[rowIdx]?.length){
        rowIdx++;
        arr[rowIdx] = [];
      }
      arr[rowIdx][nextWeek - 1] = setItem(nextDay);
      nextDay = nextDay.nextDay(1);
    }

    // 下月日期补齐
    for (let i = nextWeek + 1; i <= 7; i++){
      arr[rowIdx][nextWeek++] = setItem(nextDay);
      nextDay = nextDay.nextDay(1);
    }

    return arr;

  });
  const calendarRange = computed(() => {
    const startDay = dates.value[0][0]
    const endDay = dates.value[dates.value.length - 1][6]
    return { startDay, endDay }
  })

  const taskList = ref<Task[]>([]);
  const dayMap = ref<DayTaskMap>({});

  const setDayMap = () => {
    const list = data.value;
    console.log('data', data.value);
    const map = {};
    if (list && list.length > 0){
      
      list.forEach((v: Task) => {
        const { name, id, startTime, endTime } = v;
        const taskStart = Solar.fromDate(new Date(startTime));
        const taskEnd = Solar.fromDate(new Date(endTime));
        const startDay = calendarRange.value.startDay
        const endDay = calendarRange.value.endDay
        const calendarStart = Solar.fromYmdHms(startDay.year, startDay.month, startDay.day, 0, 0, 0)
        const calendarEnd = Solar.fromYmdHms(endDay.year, endDay.month, endDay.day, 23, 59, 59)
        if (taskStart.isAfter(calendarEnd) || taskEnd.isBefore(calendarStart)) {
          return;
        }

        // 获取当前月内的任务开始时间
        const start = taskStart.isBefore(calendarStart) ? calendarStart : Solar.fromYmdHms(taskStart.getYear(), taskStart.getMonth(), taskStart.getDay(), 0, 0, 0);
        let end = taskEnd.isAfter(calendarEnd) ? calendarEnd : Solar.fromYmdHms(taskEnd.getYear(), taskEnd.getMonth(), taskEnd.getDay(), 23, 59, 59);
        
        // 将任务的每一天进行切片存储
        let idx = 1;
        while (start.isBefore(end)) {
          const day = end.getDay();
          const year = end.getYear();
          const month = end.getMonth();
          const key = `${year}-${month}-${day}`;
          const endWeek = end.getWeek();
          if (endWeek === 0){
            idx = 1;
          }
          addMapItem(map, key, {
            idx, 
            week: endWeek || 7,
            year,
            month,
            day,
            ...v
          });
          idx += 1;
          end = end.nextDay(-1);
        }
      });

    }
    console.log('dayMap', map);
    dayMap.value = map;
  };

  const getTasksByRow = (row: CalendarItem[]) => {
    if (Object.values(dayMap.value).length === 0){
      return [];
    }
    const map: {[key: string]: DayTask} = {};
    const weekKeyArr: string[] = [];
    // 数据去重
    row.forEach((d) => {
      const { key, week } = d;
      weekKeyArr[week as number] = key;
      const taskArr = dayMap.value[key];
      if (taskArr && taskArr.length > 0){
        taskArr.forEach((t: DayTask) => {
          if (!map[t.id]){
            map[t.id] = { ...t, date: key };
          }
        });
      }
    });

    // 按时间跨度从长到短排序
    const arr = Object.values(map).sort((a, b) => b.idx - a.idx);

    // 初始化点阵，来判断任务的占用情况，进行定位展示
    const topArr: any = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    const renderArr: DayTask[] = [];
    const renderMaxRow: { idx: number, item: DayTask }[] = [];
    arr.forEach(a => {
      const startWeek = a.week - 1;
      const dayTaskArr = dayMap.value[a.date];
      const len = a.idx + startWeek;

      let i = 0;
      for (let w = startWeek; w < len; w++){
        if (topArr[i][w]){ // 当前位置已占，重新找下一行
          i++;
          w = startWeek - 1;
        } else if (w === len - 1){ // 已经遍历到最后一个，都符合
          a.top = i;
          renderArr.push(a);
          if (i == 3 && a.idx > 1) {
            renderMaxRow[w] = { idx: renderArr.length - 1, item: a };
          }
          for (let j = startWeek; j < len; j++){
            topArr[i][j] = 1;
          }
        }

        if (dayTaskArr.length > MAX_ROW && i > 2){ // 超过4行，展示更多
          for (let j = startWeek; j < len; j++){
            topArr[3][j] = 2;
          }
          break;
        } else if (i > 3){
          break;
        }
      }
    });

    // 处理与更多选项同一行的数据，渲染溢出问题
    if (renderMaxRow.length) {
      renderMaxRow.forEach((item) => {
        const t = item.item;
        const itemLen = t.week + t.idx;
        for (let a = t.week; a < itemLen; a++) {
          if (topArr[3][a] === 2) {
            renderArr.splice(item.idx, 1); // 移除这一条数据，改为更多
            for (let b = itemLen - 1; b >= t.week - 1; b--) {
              topArr[3][b] = 2
            }
            break;
          }
        }
      })
    }

    for (let i = 0; i < 7; i++){
      if (topArr[3][i] === 2){
        for (let j = 2; j >= 0; j--){
          if (topArr[j][i]){
            let fillNum = 1;
            for (let m = j - 1; m >= 0; m--){
              fillNum += topArr[m][i] ? 1 : 0;
            }
            const tasks = dayMap.value[weekKeyArr[i + 1]];
            const { year, month, day } = tasks[0];
            renderArr.push({
              id: '',
              name: '',
              startTime: 0,
              endTime: 0,
              top: j + 1,
              week: i + 1,
              idx: 1,
              year,
              month,
              day,
              date: weekKeyArr[i + 1],
              moreNum: dayMap.value[weekKeyArr[i + 1]].length - fillNum,
              tasks
            });
            break;
          }
        }
      }
    }

    console.log('renderRow', renderArr)

    return renderArr;
  };

  // 监听日期变化，获取对应日期的任务数据
  watch(() => data.value, () => {
    setDayMap();
  }, {immediate: true});

  onActivated(() => {
    setDayMap();
  });

  return {
    dates,
    taskList,
    dayMap,
    getTasksByRow
  };
};
