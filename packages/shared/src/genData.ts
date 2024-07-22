export const randomRgbaColor = () => { //随机生成RGBA颜色
  var r = Math.floor(Math.random() * 256); //随机生成256以内r值
  var g = Math.floor(Math.random() * 256); //随机生成256以内g值
  var b = Math.floor(Math.random() * 256); //随机生成256以内b值
  var alpha = Math.random(); //随机生成1以内a值
  return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
}