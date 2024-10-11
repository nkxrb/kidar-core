

export const getTableColumns = () => {
  const arr = [];

  for (let i = 0; i < 20; i++) {
    arr.push({ title: '名称' + i, dataIndex: 'name-' + i })
  }
  return arr;
}

export const getTableData = () => {
  const arr: any = [];
  let obj: any = {};
  for (let i = 0; i < 100; i++) {
    obj[`name-${i}`] = i
  }

  for (let i = 0; i < 100; i++) {
    arr.push({ id: i + 1100, name: i + 1100, ...obj })
  }

  return new Promise<{ list: any[], total: number }>((resolve) => {
    setTimeout(() => {
      resolve({
        list: arr,
        total: arr.length
      });
    }, 1000);
  })
}