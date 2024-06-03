
export type URLParam = {
  [key: string]: string,
}

/**
 * 设置页面标题
 * @param title
 */
export function setTitle(title: string) {
  document.title = title;
}

/**
 * 获取URL链接地址中的参数
 * @returns URLParam
 */
export function getURLQuery() {
  const param: URLParam = {};
  const idx = window.location.href.indexOf('?');
  if (idx === -1) {
    return param;
  }
  const search = window.location.href.substring(idx + 1);

  if (search) {
    search.split('&').forEach((pstr) => {
      let key = '';
      let val = '';
      [key, val] = pstr.split('=');
      const item = param[key];
      if (item) {
        param[key] = `${item},${val}`;
      } else {
        param[key] = val;
      }
    });
  }
  return param;
}

/**
 * 是否为wx浏览器环境
 * @returns boolean
 */
export const isWx = () => /micromessenger/i.test(navigator.userAgent);

/**
 * 是否为企业微信浏览器环境
 * @returns boolean
 */
export const isQw = () => /wxwork/i.test(navigator.userAgent);


/**
 * 是否为移动端
 * @returns boolean
 */
export const isMobile = () => /(iPhone|iPod|iPad|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent);

/**
 * 是否为windows环境
 * @returns boolean
 */
export const isWindows = () => /windows|win32|win64/i.test(navigator.userAgent);

export const isIOS = () => /(iPhone|iPod|iPad|ios)/i.test(navigator.userAgent);

/**
 * 是否是迅雷浏览器
 * @returns boolean
 */
export const isIThunder = () => /(ithunder)/i.test(navigator.userAgent);

/**
 * 是否是抖音浏览器
 * @returns boolean
 */
export const isDouyin = () => /(aweme)/i.test(navigator.userAgent);

/**
 * 是否为iframe嵌套
 * @returns boolean
 */
export const isIframe = () => window.self !== window.top;


export const showVConsole = () => {
  if (window) {
    return window.location.href.indexOf('debug=yes') > -1;
  }
  return false;
};

export const isMobileNumber = (val: string) => /^1[3-9]\d{9}$/.test(val);