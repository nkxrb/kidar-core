const key = 'kidar-calendar-data'

export const initData = (curTime: Date, typesNum: number)=>{
  const arr = [];
  const time = (curTime || new Date()).getTime();

  for(let i=0; i<20; i++){
    const startTime = time + Number(((Math.random() * 28 + Math.random() * (-16)) * 86400000).toFixed(0));
    const endTime = startTime + Number((Math.random() * 18 * 86400000).toFixed(0));

    arr.push({
      startTime,
      endTime,
      start: new Date(startTime).toLocaleString(),
      end: new Date(endTime).toLocaleString(),
      id: `id-${Math.random().toFixed(11)}`,
      name: `任务-${i}`,
      type: Number((Math.random() * typesNum + 1).toFixed(0))
    })
  }
  return arr;
}


export const getData = (curTime: Date, typesNum: number) => {
  const k = `${key}-${curTime}`;
  const data = localStorage.getItem(k);
  if(data){
    return JSON.parse(data);
  }

  const res = initData(curTime, typesNum);
  localStorage.setItem(k, JSON.stringify(res));
  return res;
}
