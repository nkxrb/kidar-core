// node_modules/.pnpm/lunar-typescript@1.7.5/node_modules/lunar-typescript/dist/index.mjs
var _SolarUtil = class {
  static isLeapYear(year) {
    if (year < 1600) {
      return year % 4 === 0;
    }
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  static getDaysOfMonth(year, month) {
    if (1582 === year && 10 === month) {
      return 21;
    }
    const m = month - 1;
    let d = _SolarUtil.DAYS_OF_MONTH[m];
    if (m === 1 && _SolarUtil.isLeapYear(year)) {
      d++;
    }
    return d;
  }
  static getDaysOfYear(year) {
    if (1582 === year) {
      return 355;
    }
    return _SolarUtil.isLeapYear(year) ? 366 : 365;
  }
  static getDaysInYear(year, month, day) {
    let days = 0;
    for (let i = 1; i < month; i++) {
      days += _SolarUtil.getDaysOfMonth(year, i);
    }
    let d = day;
    if (1582 === year && 10 === month && day >= 15) {
      if (day >= 15) {
        d -= 10;
      } else if (day > 4) {
        throw new Error(`wrong solar year ${year} month ${month} day ${day}`);
      }
    }
    days += d;
    return days;
  }
  static getWeeksOfMonth(year, month, start) {
    return Math.ceil((_SolarUtil.getDaysOfMonth(year, month) + Solar.fromYmd(year, month, 1).getWeek() - start) / 7);
  }
  static getDaysBetween(ay, am, ad, by, bm, bd) {
    let n;
    let days;
    let i;
    if (ay == by) {
      n = _SolarUtil.getDaysInYear(by, bm, bd) - _SolarUtil.getDaysInYear(ay, am, ad);
    } else if (ay > by) {
      days = _SolarUtil.getDaysOfYear(by) - _SolarUtil.getDaysInYear(by, bm, bd);
      for (i = by + 1; i < ay; i++) {
        days += _SolarUtil.getDaysOfYear(i);
      }
      days += _SolarUtil.getDaysInYear(ay, am, ad);
      n = -days;
    } else {
      days = _SolarUtil.getDaysOfYear(ay) - _SolarUtil.getDaysInYear(ay, am, ad);
      for (i = ay + 1; i < by; i++) {
        days += _SolarUtil.getDaysOfYear(i);
      }
      days += _SolarUtil.getDaysInYear(by, bm, bd);
      n = days;
    }
    return n;
  }
};
var SolarUtil = _SolarUtil;
SolarUtil.WEEK = ["{w.sun}", "{w.mon}", "{w.tues}", "{w.wed}", "{w.thur}", "{w.fri}", "{w.sat}"];
SolarUtil.DAYS_OF_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
SolarUtil.XINGZUO = ["{xz.aries}", "{xz.taurus}", "{xz.gemini}", "{xz.cancer}", "{xz.leo}", "{xz.virgo}", "{xz.libra}", "{xz.scorpio}", "{xz.sagittarius}", "{xz.capricornus}", "{xz.aquarius}", "{xz.pisces}"];
SolarUtil.FESTIVAL = {
  "1-1": "{jr.yuanDan}",
  "2-14": "{jr.qingRen}",
  "3-8": "{jr.fuNv}",
  "3-12": "{jr.zhiShu}",
  "3-15": "{jr.xiaoFei}",
  "4-1": "{jr.yuRen}",
  "5-1": "{jr.wuYi}",
  "5-4": "{jr.qingNian}",
  "6-1": "{jr.erTong}",
  "7-1": "{jr.jianDang}",
  "8-1": "{jr.jianJun}",
  "9-10": "{jr.jiaoShi}",
  "10-1": "{jr.guoQing}",
  "10-31": "{jr.wanShengYe}",
  "11-1": "{jr.wanSheng}",
  "12-24": "{jr.pingAn}",
  "12-25": "{jr.shengDan}"
};
SolarUtil.OTHER_FESTIVAL = {
  "1-8": ["周恩来逝世纪念日"],
  "1-10": ["中国人民警察节"],
  "1-14": ["日记情人节"],
  "1-21": ["列宁逝世纪念日"],
  "1-26": ["国际海关日"],
  "1-27": ["国际大屠杀纪念日"],
  "2-2": ["世界湿地日"],
  "2-4": ["世界抗癌日"],
  "2-7": ["京汉铁路罢工纪念日"],
  "2-10": ["国际气象节"],
  "2-19": ["邓小平逝世纪念日"],
  "2-20": ["世界社会公正日"],
  "2-21": ["国际母语日"],
  "2-24": ["第三世界青年日"],
  "3-1": ["国际海豹日"],
  "3-3": ["世界野生动植物日", "全国爱耳日"],
  "3-5": ["周恩来诞辰纪念日", "中国青年志愿者服务日"],
  "3-6": ["世界青光眼日"],
  "3-7": ["女生节"],
  "3-12": ["孙中山逝世纪念日"],
  "3-14": ["马克思逝世纪念日", "白色情人节"],
  "3-17": ["国际航海日"],
  "3-18": ["全国科技人才活动日", "全国爱肝日"],
  "3-20": ["国际幸福日"],
  "3-21": ["世界森林日", "世界睡眠日", "国际消除种族歧视日"],
  "3-22": ["世界水日"],
  "3-23": ["世界气象日"],
  "3-24": ["世界防治结核病日"],
  "3-29": ["中国黄花岗七十二烈士殉难纪念日"],
  "4-2": ["国际儿童图书日", "世界自闭症日"],
  "4-4": ["国际地雷行动日"],
  "4-7": ["世界卫生日"],
  "4-8": ["国际珍稀动物保护日"],
  "4-12": ["世界航天日"],
  "4-14": ["黑色情人节"],
  "4-15": ["全民国家安全教育日"],
  "4-22": ["世界地球日", "列宁诞辰纪念日"],
  "4-23": ["世界读书日"],
  "4-24": ["中国航天日"],
  "4-25": ["儿童预防接种宣传日"],
  "4-26": ["世界知识产权日", "全国疟疾日"],
  "4-28": ["世界安全生产与健康日"],
  "4-30": ["全国交通安全反思日"],
  "5-2": ["世界金枪鱼日"],
  "5-3": ["世界新闻自由日"],
  "5-5": ["马克思诞辰纪念日"],
  "5-8": ["世界红十字日"],
  "5-11": ["世界肥胖日"],
  "5-12": ["全国防灾减灾日", "护士节"],
  "5-14": ["玫瑰情人节"],
  "5-15": ["国际家庭日"],
  "5-19": ["中国旅游日"],
  "5-20": ["网络情人节"],
  "5-22": ["国际生物多样性日"],
  "5-25": ["525心理健康节"],
  "5-27": ["上海解放日"],
  "5-29": ["国际维和人员日"],
  "5-30": ["中国五卅运动纪念日"],
  "5-31": ["世界无烟日"],
  "6-3": ["世界自行车日"],
  "6-5": ["世界环境日"],
  "6-6": ["全国爱眼日"],
  "6-8": ["世界海洋日"],
  "6-11": ["中国人口日"],
  "6-14": ["世界献血日", "亲亲情人节"],
  "6-17": ["世界防治荒漠化与干旱日"],
  "6-20": ["世界难民日"],
  "6-21": ["国际瑜伽日"],
  "6-25": ["全国土地日"],
  "6-26": ["国际禁毒日", "联合国宪章日"],
  "7-1": ["香港回归纪念日"],
  "7-6": ["国际接吻日", "朱德逝世纪念日"],
  "7-7": ["七七事变纪念日"],
  "7-11": ["世界人口日", "中国航海日"],
  "7-14": ["银色情人节"],
  "7-18": ["曼德拉国际日"],
  "7-30": ["国际友谊日"],
  "8-3": ["男人节"],
  "8-5": ["恩格斯逝世纪念日"],
  "8-6": ["国际电影节"],
  "8-8": ["全民健身日"],
  "8-9": ["国际土著人日"],
  "8-12": ["国际青年节"],
  "8-14": ["绿色情人节"],
  "8-19": ["世界人道主义日", "中国医师节"],
  "8-22": ["邓小平诞辰纪念日"],
  "8-29": ["全国测绘法宣传日"],
  "9-3": ["中国抗日战争胜利纪念日"],
  "9-5": ["中华慈善日"],
  "9-8": ["世界扫盲日"],
  "9-9": ["毛泽东逝世纪念日", "全国拒绝酒驾日"],
  "9-14": ["世界清洁地球日", "相片情人节"],
  "9-15": ["国际民主日"],
  "9-16": ["国际臭氧层保护日"],
  "9-17": ["世界骑行日"],
  "9-18": ["九一八事变纪念日"],
  "9-20": ["全国爱牙日"],
  "9-21": ["国际和平日"],
  "9-27": ["世界旅游日"],
  "9-30": ["中国烈士纪念日"],
  "10-1": ["国际老年人日"],
  "10-2": ["国际非暴力日"],
  "10-4": ["世界动物日"],
  "10-11": ["国际女童日"],
  "10-10": ["辛亥革命纪念日"],
  "10-13": ["国际减轻自然灾害日", "中国少年先锋队诞辰日"],
  "10-14": ["葡萄酒情人节"],
  "10-16": ["世界粮食日"],
  "10-17": ["全国扶贫日"],
  "10-20": ["世界统计日"],
  "10-24": ["世界发展信息日", "程序员节"],
  "10-25": ["抗美援朝纪念日"],
  "11-5": ["世界海啸日"],
  "11-8": ["记者节"],
  "11-9": ["全国消防日"],
  "11-11": ["光棍节"],
  "11-12": ["孙中山诞辰纪念日"],
  "11-14": ["电影情人节"],
  "11-16": ["国际宽容日"],
  "11-17": ["国际大学生节"],
  "11-19": ["世界厕所日"],
  "11-28": ["恩格斯诞辰纪念日"],
  "11-29": ["国际声援巴勒斯坦人民日"],
  "12-1": ["世界艾滋病日"],
  "12-2": ["全国交通安全日"],
  "12-3": ["世界残疾人日"],
  "12-4": ["全国法制宣传日"],
  "12-5": ["世界弱能人士日", "国际志愿人员日"],
  "12-7": ["国际民航日"],
  "12-9": ["世界足球日", "国际反腐败日"],
  "12-10": ["世界人权日"],
  "12-11": ["国际山岳日"],
  "12-12": ["西安事变纪念日"],
  "12-13": ["国家公祭日"],
  "12-14": ["拥抱情人节"],
  "12-18": ["国际移徙者日"],
  "12-26": ["毛泽东诞辰纪念日"]
};
SolarUtil.WEEK_FESTIVAL = {
  "3-0-1": "全国中小学生安全教育日",
  "5-2-0": "母亲节",
  "5-3-0": "全国助残日",
  "6-3-0": "父亲节",
  "9-3-6": "全民国防教育日",
  "10-1-1": "世界住房日",
  "11-4-4": "感恩节"
};
var SolarWeek = class _SolarWeek {
  static fromYmd(year, month, day, start) {
    return new _SolarWeek(year, month, day, start);
  }
  static fromDate(date, start) {
    return _SolarWeek.fromYmd(date.getFullYear(), date.getMonth() + 1, date.getDate(), start);
  }
  constructor(year, month, day, start) {
    this._year = year;
    this._month = month;
    this._day = day;
    this._start = start;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getDay() {
    return this._day;
  }
  getStart() {
    return this._start;
  }
  getIndex() {
    let offset = Solar.fromYmd(this._year, this._month, 1).getWeek() - this._start;
    if (offset < 0) {
      offset += 7;
    }
    return Math.ceil((this._day + offset) / 7);
  }
  getIndexInYear() {
    let offset = Solar.fromYmd(this._year, 1, 1).getWeek() - this._start;
    if (offset < 0) {
      offset += 7;
    }
    return Math.ceil((SolarUtil.getDaysInYear(this._year, this._month, this._day) + offset) / 7);
  }
  next(weeks, separateMonth) {
    const start = this._start;
    if (0 === weeks) {
      return _SolarWeek.fromYmd(this._year, this._month, this._day, start);
    }
    let solar = Solar.fromYmd(this._year, this._month, this._day);
    if (separateMonth) {
      let n = weeks;
      let week = _SolarWeek.fromYmd(this._year, this._month, this._day, start);
      let month = this._month;
      const plus = n > 0;
      while (0 !== n) {
        solar = solar.next(plus ? 7 : -7);
        week = _SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
        let weekMonth = week.getMonth();
        if (month !== weekMonth) {
          const index = week.getIndex();
          if (plus) {
            if (1 === index) {
              const firstDay = week.getFirstDay();
              week = _SolarWeek.fromYmd(firstDay.getYear(), firstDay.getMonth(), firstDay.getDay(), start);
              weekMonth = week.getMonth();
            } else {
              solar = Solar.fromYmd(week.getYear(), week.getMonth(), 1);
              week = _SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
            }
          } else {
            if (SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start) === index) {
              const lastDay = week.getFirstDay().next(6);
              week = _SolarWeek.fromYmd(lastDay.getYear(), lastDay.getMonth(), lastDay.getDay(), start);
              weekMonth = week.getMonth();
            } else {
              solar = Solar.fromYmd(week.getYear(), week.getMonth(), SolarUtil.getDaysOfMonth(week.getYear(), week.getMonth()));
              week = _SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
            }
          }
          month = weekMonth;
        }
        n -= plus ? 1 : -1;
      }
      return week;
    } else {
      solar = solar.next(weeks * 7);
      return _SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
    }
  }
  getFirstDay() {
    const solar = Solar.fromYmd(this._year, this._month, this._day);
    let prev = solar.getWeek() - this._start;
    if (prev < 0) {
      prev += 7;
    }
    return solar.next(-prev);
  }
  getFirstDayInMonth() {
    let index = 0;
    const days = this.getDays();
    for (let i = 0; i < days.length; i++) {
      if (this._month === days[i].getMonth()) {
        index = i;
        break;
      }
    }
    return days[index];
  }
  getDays() {
    const firstDay = this.getFirstDay();
    const l = [];
    l.push(firstDay);
    for (let i = 1; i < 7; i++) {
      l.push(firstDay.next(i));
    }
    return l;
  }
  getDaysInMonth() {
    const days = this.getDays();
    const l = [];
    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      if (this._month !== day.getMonth()) {
        continue;
      }
      l.push(day);
    }
    return l;
  }
  toString() {
    return `${this.getYear()}.${this.getMonth()}.${this.getIndex()}`;
  }
  toFullString() {
    return `${this.getYear()}年${this.getMonth()}月第${this.getIndex()}周`;
  }
};
var _LunarUtil = class {
  static getTimeZhiIndex(hm) {
    if (!hm) {
      return 0;
    }
    if (hm.length > 5) {
      hm = hm.substring(0, 5);
    }
    let x = 1;
    for (let i = 1; i < 22; i += 2) {
      if (hm >= (i < 10 ? "0" : "") + i + ":00" && hm <= (i + 1 < 10 ? "0" : "") + (i + 1) + ":59") {
        return x;
      }
      x++;
    }
    return 0;
  }
  static convertTime(hm) {
    return _LunarUtil.ZHI[_LunarUtil.getTimeZhiIndex(hm) + 1];
  }
  static getJiaZiIndex(ganZhi) {
    return _LunarUtil.index(ganZhi, _LunarUtil.JIA_ZI, 0);
  }
  static hex(n) {
    let hex = n.toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex.toUpperCase();
  }
  static getDayYi(monthGanZhi, dayGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const month = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(monthGanZhi));
    let right = _LunarUtil.DAY_YI_JI;
    let index = right.indexOf(day + "=");
    while (index > -1) {
      right = right.substring(index + 3);
      let left = right;
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 2);
      }
      let matched = false;
      const months = left.substring(0, left.indexOf(":"));
      let i, j;
      for (i = 0, j = months.length; i < j; i += 2) {
        if (months.substring(i, i + 2) == month) {
          matched = true;
          break;
        }
      }
      if (matched) {
        let ys = left.substring(left.indexOf(":") + 1);
        ys = ys.substring(0, ys.indexOf(","));
        for (i = 0, j = ys.length; i < j; i += 2) {
          l.push(_LunarUtil.YI_JI[parseInt(ys.substring(i, i + 2), 16)]);
        }
        break;
      }
      index = right.indexOf(day + "=");
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getDayJi(monthGanZhi, dayGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const month = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(monthGanZhi));
    let right = _LunarUtil.DAY_YI_JI;
    let index = right.indexOf(day + "=");
    while (index > -1) {
      right = right.substring(index + 3);
      let left = right;
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 2);
      }
      let matched = false;
      const months = left.substring(0, left.indexOf(":"));
      let i, j;
      for (i = 0, j = months.length; i < j; i += 2) {
        if (months.substring(i, i + 2) == month) {
          matched = true;
          break;
        }
      }
      if (matched) {
        let js = left.substring(left.indexOf(",") + 1);
        for (i = 0, j = js.length; i < j; i += 2) {
          l.push(_LunarUtil.YI_JI[parseInt(js.substring(i, i + 2), 16)]);
        }
        break;
      }
      index = right.indexOf(day + "=");
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getDayJiShen(lunarMonth, dayGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const month = Math.abs(lunarMonth).toString(16).toUpperCase();
    const index = _LunarUtil.DAY_SHEN_SHA.indexOf(month + day + "=");
    if (index > -1) {
      let left = _LunarUtil.DAY_SHEN_SHA.substring(index + 4);
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 3);
      }
      let js = left.substring(0, left.indexOf(","));
      for (let i = 0, j = js.length; i < j; i += 2) {
        l.push(_LunarUtil.SHEN_SHA[parseInt(js.substring(i, i + 2), 16)]);
      }
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getDayXiongSha(lunarMonth, dayGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const month = Math.abs(lunarMonth).toString(16).toUpperCase();
    const index = _LunarUtil.DAY_SHEN_SHA.indexOf(month + day + "=");
    if (index > -1) {
      let left = _LunarUtil.DAY_SHEN_SHA.substring(index + 4);
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 3);
      }
      const xs = left.substring(left.indexOf(",") + 1);
      for (let i = 0, j = xs.length; i < j; i += 2) {
        l.push(_LunarUtil.SHEN_SHA[parseInt(xs.substring(i, i + 2), 16)]);
      }
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getTimeYi(dayGanZhi, timeGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const time = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(timeGanZhi));
    const index = _LunarUtil.TIME_YI_JI.indexOf(day + time + "=");
    if (index > -1) {
      let left = _LunarUtil.TIME_YI_JI.substring(index + 5);
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 4);
      }
      let ys = left.substring(0, left.indexOf(","));
      for (let i = 0, j = ys.length; i < j; i += 2) {
        l.push(_LunarUtil.YI_JI[parseInt(ys.substring(i, i + 2), 16)]);
      }
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getTimeJi(dayGanZhi, timeGanZhi) {
    const l = [];
    const day = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(dayGanZhi));
    const time = _LunarUtil.hex(_LunarUtil.getJiaZiIndex(timeGanZhi));
    const index = _LunarUtil.TIME_YI_JI.indexOf(day + time + "=");
    if (index > -1) {
      let left = _LunarUtil.TIME_YI_JI.substring(index + 5);
      if (left.indexOf("=") > -1) {
        left = left.substring(0, left.indexOf("=") - 4);
      }
      let js = left.substring(left.indexOf(",") + 1);
      for (let i = 0, j = js.length; i < j; i += 2) {
        l.push(_LunarUtil.YI_JI[parseInt(js.substring(i, i + 2), 16)]);
      }
    }
    if (l.length < 1) {
      l.push(_LunarUtil.SHEN_SHA[0]);
    }
    return l;
  }
  static getXunIndex(ganZhi) {
    const gan = _LunarUtil.find(ganZhi, _LunarUtil.GAN);
    const zhi = _LunarUtil.find(ganZhi, _LunarUtil.ZHI);
    let diff = gan.index - zhi.index;
    if (diff < 0) {
      diff += 12;
    }
    return Math.floor(diff / 2);
  }
  static getXun(ganZhi) {
    return _LunarUtil.XUN[_LunarUtil.getXunIndex(ganZhi)];
  }
  static getXunKong(ganZhi) {
    return _LunarUtil.XUN_KONG[_LunarUtil.getXunIndex(ganZhi)];
  }
  static find(s, arr) {
    for (let i = 0, j = arr.length; i < j; i++) {
      const v = arr[i];
      if (v.length < 1) {
        continue;
      }
      if (s.indexOf(v) > -1) {
        return {
          "index": i,
          "value": v
        };
      }
    }
    return null;
  }
  static index(name, names, offset) {
    for (let i = 0, j = names.length; i < j; i++) {
      if (names[i] === name) {
        return i + offset;
      }
    }
    return -1;
  }
};
var LunarUtil = _LunarUtil;
LunarUtil.BASE_MONTH_ZHI_INDEX = 2;
LunarUtil.XUN = [
  "{jz.jiaZi}",
  "{jz.jiaXu}",
  "{jz.jiaShen}",
  "{jz.jiaWu}",
  "{jz.jiaChen}",
  "{jz.jiaYin}"
];
LunarUtil.XUN_KONG = [
  "{dz.xu}{dz.hai}",
  "{dz.shen}{dz.you}",
  "{dz.wu}{dz.wei}",
  "{dz.chen}{dz.si}",
  "{dz.yin}{dz.mao}",
  "{dz.zi}{dz.chou}"
];
LunarUtil.CHANG_SHENG = [
  "{ds.changSheng}",
  "{ds.muYu}",
  "{ds.guanDai}",
  "{ds.linGuan}",
  "{ds.diWang}",
  "{ds.shuai}",
  "{ds.bing}",
  "{ds.si}",
  "{ds.mu}",
  "{ds.jue}",
  "{ds.tai}",
  "{ds.yang}"
];
LunarUtil.MONTH_ZHI = [
  "",
  "{dz.yin}",
  "{dz.mao}",
  "{dz.chen}",
  "{dz.si}",
  "{dz.wu}",
  "{dz.wei}",
  "{dz.shen}",
  "{dz.you}",
  "{dz.xu}",
  "{dz.hai}",
  "{dz.zi}",
  "{dz.chou}"
];
LunarUtil.JIE_QI = [
  "{jq.dongZhi}",
  "{jq.xiaoHan}",
  "{jq.daHan}",
  "{jq.liChun}",
  "{jq.yuShui}",
  "{jq.jingZhe}",
  "{jq.chunFen}",
  "{jq.qingMing}",
  "{jq.guYu}",
  "{jq.liXia}",
  "{jq.xiaoMan}",
  "{jq.mangZhong}",
  "{jq.xiaZhi}",
  "{jq.xiaoShu}",
  "{jq.daShu}",
  "{jq.liQiu}",
  "{jq.chuShu}",
  "{jq.baiLu}",
  "{jq.qiuFen}",
  "{jq.hanLu}",
  "{jq.shuangJiang}",
  "{jq.liDong}",
  "{jq.xiaoXue}",
  "{jq.daXue}"
];
LunarUtil.JIE_QI_IN_USE = [
  "DA_XUE",
  "{jq.dongZhi}",
  "{jq.xiaoHan}",
  "{jq.daHan}",
  "{jq.liChun}",
  "{jq.yuShui}",
  "{jq.jingZhe}",
  "{jq.chunFen}",
  "{jq.qingMing}",
  "{jq.guYu}",
  "{jq.liXia}",
  "{jq.xiaoMan}",
  "{jq.mangZhong}",
  "{jq.xiaZhi}",
  "{jq.xiaoShu}",
  "{jq.daShu}",
  "{jq.liQiu}",
  "{jq.chuShu}",
  "{jq.baiLu}",
  "{jq.qiuFen}",
  "{jq.hanLu}",
  "{jq.shuangJiang}",
  "{jq.liDong}",
  "{jq.xiaoXue}",
  "{jq.daXue}",
  "DONG_ZHI",
  "XIAO_HAN",
  "DA_HAN",
  "LI_CHUN",
  "YU_SHUI",
  "JING_ZHE"
];
LunarUtil.LIU_YAO = [
  "{ly.xianSheng}",
  "{ly.youYin}",
  "{ly.xianFu}",
  "{ly.foMie}",
  "{ly.daAn}",
  "{ly.chiKou}"
];
LunarUtil.HOU = [
  "{h.first}",
  "{h.second}",
  "{h.third}"
];
LunarUtil.WU_HOU = [
  "{h.qiuYinJie}",
  "{h.miJiao}",
  "{h.shuiQuan}",
  "{h.yanBei}",
  "{h.queShi}",
  "{h.zhiShi}",
  "{h.jiShi}",
  "{h.zhengNiao}",
  "{h.shuiZe}",
  "{h.dongFeng}",
  "{h.zheChongShiZhen}",
  "{h.yuZhi}",
  "{h.taJi}",
  "{h.houYan}",
  "{h.caoMuMengDong}",
  "{h.taoShi}",
  "{h.cangGeng}",
  "{h.yingHua}",
  "{h.xuanNiaoZhi}",
  "{h.leiNai}",
  "{h.shiDian}",
  "{h.tongShi}",
  "{h.tianShu}",
  "{h.hongShi}",
  "{h.pingShi}",
  "{h.mingJiu}",
  "{h.daiSheng}",
  "{h.louGuo}",
  "{h.qiuYinChu}",
  "{h.wangGua}",
  "{h.kuCai}",
  "{h.miCao}",
  "{h.maiQiu}",
  "{h.tangLang}",
  "{h.juShi}",
  "{h.fanShe}",
  "{h.luJia}",
  "{h.tiaoShi}",
  "{h.banXia}",
  "{h.wenFeng}",
  "{h.xiShuai}",
  "{h.yingShi}",
  "{h.fuCao}",
  "{h.tuRun}",
  "{h.daYu}",
  "{h.liangFeng}",
  "{h.baiLu}",
  "{h.hanChan}",
  "{h.yingNai}",
  "{h.tianDi}",
  "{h.heNai}",
  "{h.hongYanLai}",
  "{h.xuanNiaoGui}",
  "{h.qunNiao}",
  "{h.leiShi}",
  "{h.zheChongPiHu}",
  "{h.shuiShiHe}",
  "{h.hongYanLaiBin}",
  "{h.queRu}",
  "{h.juYou}",
  "{h.caiNai}",
  "{h.caoMuHuangLuo}",
  "{h.zheChongXianFu}",
  "{h.shuiShiBing}",
  "{h.diShi}",
  "{h.zhiRu}",
  "{h.hongCang}",
  "{h.tianQi}",
  "{h.biSe}",
  "{h.heDan}",
  "{h.huShi}",
  "{h.liTing}"
];
LunarUtil.GAN = ["", "{tg.jia}", "{tg.yi}", "{tg.bing}", "{tg.ding}", "{tg.wu}", "{tg.ji}", "{tg.geng}", "{tg.xin}", "{tg.ren}", "{tg.gui}"];
LunarUtil.POSITION_XI = ["", "{bg.gen}", "{bg.qian}", "{bg.kun}", "{bg.li}", "{bg.xun}", "{bg.gen}", "{bg.qian}", "{bg.kun}", "{bg.li}", "{bg.xun}"];
LunarUtil.POSITION_YANG_GUI = ["", "{bg.kun}", "{bg.kun}", "{bg.dui}", "{bg.qian}", "{bg.gen}", "{bg.kan}", "{bg.li}", "{bg.gen}", "{bg.zhen}", "{bg.xun}"];
LunarUtil.POSITION_YIN_GUI = ["", "{bg.gen}", "{bg.kan}", "{bg.qian}", "{bg.dui}", "{bg.kun}", "{bg.kun}", "{bg.gen}", "{bg.li}", "{bg.xun}", "{bg.zhen}"];
LunarUtil.POSITION_FU = ["", "{bg.xun}", "{bg.xun}", "{bg.zhen}", "{bg.zhen}", "{bg.kan}", "{bg.li}", "{bg.kun}", "{bg.kun}", "{bg.qian}", "{bg.dui}"];
LunarUtil.POSITION_FU_2 = ["", "{bg.kan}", "{bg.kun}", "{bg.qian}", "{bg.xun}", "{bg.gen}", "{bg.kan}", "{bg.kun}", "{bg.qian}", "{bg.xun}", "{bg.gen}"];
LunarUtil.POSITION_CAI = ["", "{bg.gen}", "{bg.gen}", "{bg.kun}", "{bg.kun}", "{bg.kan}", "{bg.kan}", "{bg.zhen}", "{bg.zhen}", "{bg.li}", "{bg.li}"];
LunarUtil.POSITION_TAI_SUI_YEAR = ["{bg.kan}", "{bg.gen}", "{bg.gen}", "{bg.zhen}", "{bg.xun}", "{bg.xun}", "{bg.li}", "{bg.kun}", "{bg.kun}", "{bg.dui}", "{bg.kan}", "{bg.kan}"];
LunarUtil.POSITION_GAN = ["{bg.zhen}", "{bg.zhen}", "{bg.li}", "{bg.li}", "{ps.center}", "{ps.center}", "{bg.dui}", "{bg.dui}", "{bg.kan}", "{bg.kan}"];
LunarUtil.POSITION_ZHI = ["{bg.kan}", "{ps.center}", "{bg.zhen}", "{bg.zhen}", "{ps.center}", "{bg.li}", "{bg.li}", "{ps.center}", "{bg.dui}", "{bg.dui}", "{ps.center}", "{bg.kan}"];
LunarUtil.POSITION_TAI_DAY = [
  "{ts.zhan}{ts.men}{ts.dui} {ps.wai}{ps.dongNan}",
  "{ts.dui}{ts.mo}{ts.ce} {ps.wai}{ps.dongNan}",
  "{ts.chu}{ts.zao}{ts.lu} {ps.wai}{ps.zhengNan}",
  "{ts.cangKu}{ts.men} {ps.wai}{ps.zhengNan}",
  "{ts.fang}{ts.chuang}{ts.xi} {ps.wai}{ps.zhengNan}",
  "{ts.zhan}{ts.men}{ts.chuang} {ps.wai}{ps.zhengNan}",
  "{ts.zhan}{ts.dui}{ts.mo} {ps.wai}{ps.zhengNan}",
  "{ts.chu}{ts.zao}{ts.ce} {ps.wai}{ps.xiNan}",
  "{ts.cangKu}{ts.lu} {ps.wai}{ps.xiNan}",
  "{ts.fang}{ts.chuang}{ts.men} {ps.wai}{ps.xiNan}",
  "{ts.zhan}{ts.men}{ts.xi} {ps.wai}{ps.xiNan}",
  "{ts.dui}{ts.mo}{ts.chuang} {ps.wai}{ps.xiNan}",
  "{ts.chu}{ts.zao}{ts.dui} {ps.wai}{ps.xiNan}",
  "{ts.cangKu}{ts.ce} {ps.wai}{ps.zhengXi}",
  "{ts.fang}{ts.chuang}{ts.lu} {ps.wai}{ps.zhengXi}",
  "{ts.zhan}{ts.daMen} {ps.wai}{ps.zhengXi}",
  "{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.zhengXi}",
  "{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.zhengXi}",
  "{ts.cangKu}{ts.dui} {ps.wai}{ps.xiBei}",
  "{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.xiBei}",
  "{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.xiBei}",
  "{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.xiBei}",
  "{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.xiBei}",
  "{ts.cangKu}{ts.chuang} {ps.wai}{ps.xiBei}",
  "{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengBei}",
  "{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengBei}",
  "{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.zhengBei}",
  "{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.zhengBei}",
  "{ts.cangKu}{ts.xi} {ps.wai}{ps.zhengBei}",
  "{ts.zhan}{ts.fang}{ts.chuang} {ps.fangNei}{ps.bei}",
  "{ts.zhan}{ts.men}{ts.dui} {ps.fangNei}{ps.bei}",
  "{ts.dui}{ts.mo}{ts.ce} {ps.fangNei}{ps.bei}",
  "{ts.chu}{ts.zao}{ts.lu} {ps.fangNei}{ps.bei}",
  "{ts.cangKu}{ts.men} {ps.fangNei}{ps.bei}",
  "{ts.fang}{ts.chuang}{ts.xi} {ps.fangNei}{ps.center}",
  "{ts.zhan}{ts.men}{ts.chuang} {ps.fangNei}{ps.center}",
  "{ts.zhan}{ts.dui}{ts.mo} {ps.fangNei}{ps.nan}",
  "{ts.chu}{ts.zao}{ts.ce} {ps.fangNei}{ps.nan}",
  "{ts.cangKu}{ts.lu} {ps.fangNei}{ps.nan}",
  "{ts.fang}{ts.chuang}{ts.men} {ps.fangNei}{ps.xi}",
  "{ts.zhan}{ts.men}{ts.xi} {ps.fangNei}{ps.dong}",
  "{ts.dui}{ts.mo}{ts.chuang} {ps.fangNei}{ps.dong}",
  "{ts.chu}{ts.zao}{ts.dui} {ps.fangNei}{ps.dong}",
  "{ts.cangKu}{ts.ce} {ps.fangNei}{ps.dong}",
  "{ts.fang}{ts.chuang}{ts.lu} {ps.fangNei}{ps.center}",
  "{ts.zhan}{ts.daMen} {ps.wai}{ps.dongBei}",
  "{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.dongBei}",
  "{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.dongBei}",
  "{ts.cangKu}{ts.dui} {ps.wai}{ps.dongBei}",
  "{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.dongBei}",
  "{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.dongBei}",
  "{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.zhengDong}",
  "{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.zhengDong}",
  "{ts.cangKu}{ts.chuang} {ps.wai}{ps.zhengDong}",
  "{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengDong}",
  "{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengDong}",
  "{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.dongNan}",
  "{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.dongNan}",
  "{ts.cangKu}{ts.xi} {ps.wai}{ps.dongNan}",
  "{ts.zhan}{ts.fang}{ts.chuang} {ps.wai}{ps.dongNan}"
];
LunarUtil.POSITION_TAI_MONTH = [
  "{ts.zhan}{ts.fang}{ts.chuang}",
  "{ts.zhan}{ts.hu}{ts.win}",
  "{ts.zhan}{ts.men}{ts.tang}",
  "{ts.zhan}{ts.chu}{ts.zao}",
  "{ts.zhan}{ts.fang}{ts.chuang}",
  "{ts.zhan}{ts.chuang}{ts.cang}",
  "{ts.zhan}{ts.dui}{ts.mo}",
  "{ts.zhan}{ts.ce}{ts.hu}",
  "{ts.zhan}{ts.men}{ts.fang}",
  "{ts.zhan}{ts.fang}{ts.chuang}",
  "{ts.zhan}{ts.zao}{ts.lu}",
  "{ts.zhan}{ts.fang}{ts.chuang}"
];
LunarUtil.ZHI = ["", "{dz.zi}", "{dz.chou}", "{dz.yin}", "{dz.mao}", "{dz.chen}", "{dz.si}", "{dz.wu}", "{dz.wei}", "{dz.shen}", "{dz.you}", "{dz.xu}", "{dz.hai}"];
LunarUtil.ZHI_XING = [
  "",
  "{zx.jian}",
  "{zx.chu}",
  "{zx.man}",
  "{zx.ping}",
  "{zx.ding}",
  "{zx.zhi}",
  "{zx.po}",
  "{zx.wei}",
  "{zx.cheng}",
  "{zx.shou}",
  "{zx.kai}",
  "{zx.bi}"
];
LunarUtil.JIA_ZI = [
  "{jz.jiaZi}",
  "{jz.yiChou}",
  "{jz.bingYin}",
  "{jz.dingMao}",
  "{jz.wuChen}",
  "{jz.jiSi}",
  "{jz.gengWu}",
  "{jz.xinWei}",
  "{jz.renShen}",
  "{jz.guiYou}",
  "{jz.jiaXu}",
  "{jz.yiHai}",
  "{jz.bingZi}",
  "{jz.dingChou}",
  "{jz.wuYin}",
  "{jz.jiMao}",
  "{jz.gengChen}",
  "{jz.xinSi}",
  "{jz.renWu}",
  "{jz.guiWei}",
  "{jz.jiaShen}",
  "{jz.yiYou}",
  "{jz.bingXu}",
  "{jz.dingHai}",
  "{jz.wuZi}",
  "{jz.jiChou}",
  "{jz.gengYin}",
  "{jz.xinMao}",
  "{jz.renChen}",
  "{jz.guiSi}",
  "{jz.jiaWu}",
  "{jz.yiWei}",
  "{jz.bingShen}",
  "{jz.dingYou}",
  "{jz.wuXu}",
  "{jz.jiHai}",
  "{jz.gengZi}",
  "{jz.xinChou}",
  "{jz.renYin}",
  "{jz.guiMao}",
  "{jz.jiaChen}",
  "{jz.yiSi}",
  "{jz.bingWu}",
  "{jz.dingWei}",
  "{jz.wuShen}",
  "{jz.jiYou}",
  "{jz.gengXu}",
  "{jz.xinHai}",
  "{jz.renZi}",
  "{jz.guiChou}",
  "{jz.jiaYin}",
  "{jz.yiMao}",
  "{jz.bingChen}",
  "{jz.dingSi}",
  "{jz.wuWu}",
  "{jz.jiWei}",
  "{jz.gengShen}",
  "{jz.xinYou}",
  "{jz.renXu}",
  "{jz.guiHai}"
];
LunarUtil.CHANG_SHENG_OFFSET = {
  "{tg.jia}": 1,
  "{tg.bing}": 10,
  "{tg.wu}": 10,
  "{tg.geng}": 7,
  "{tg.ren}": 4,
  "{tg.yi}": 6,
  "{tg.ding}": 9,
  "{tg.ji}": 9,
  "{tg.xin}": 0,
  "{tg.gui}": 3
};
LunarUtil.TIAN_SHEN = ["", "{sn.qingLong}", "{sn.mingTang}", "{sn.tianXing}", "{sn.zhuQue}", "{sn.jinKui}", "{sn.tianDe}", "{sn.baiHu}", "{sn.yuTang}", "{sn.tianLao}", "{sn.xuanWu}", "{sn.siMing}", "{sn.gouChen}"];
LunarUtil.ZHI_TIAN_SHEN_OFFSET = {
  "{dz.zi}": 4,
  "{dz.chou}": 2,
  "{dz.yin}": 0,
  "{dz.mao}": 10,
  "{dz.chen}": 8,
  "{dz.si}": 6,
  "{dz.wu}": 4,
  "{dz.wei}": 2,
  "{dz.shen}": 0,
  "{dz.you}": 10,
  "{dz.xu}": 8,
  "{dz.hai}": 6
};
LunarUtil.TIAN_SHEN_TYPE = {
  "{sn.qingLong}": "{s.huangDao}",
  "{sn.mingTang}": "{s.huangDao}",
  "{sn.jinKui}": "{s.huangDao}",
  "{sn.tianDe}": "{s.huangDao}",
  "{sn.yuTang}": "{s.huangDao}",
  "{sn.siMing}": "{s.huangDao}",
  "{sn.tianXing}": "{s.heiDao}",
  "{sn.zhuQue}": "{s.heiDao}",
  "{sn.baiHu}": "{s.heiDao}",
  "{sn.tianLao}": "{s.heiDao}",
  "{sn.xuanWu}": "{s.heiDao}",
  "{sn.gouChen}": "{s.heiDao}"
};
LunarUtil.TIAN_SHEN_TYPE_LUCK = {
  "{s.huangDao}": "{s.goodLuck}",
  "{s.heiDao}": "{s.badLuck}"
};
LunarUtil.LU = {
  "{tg.jia}": "{dz.yin}",
  "{tg.yi}": "{dz.mao}",
  "{tg.bing}": "{dz.si}",
  "{tg.ding}": "{dz.wu}",
  "{tg.wu}": "{dz.si}",
  "{tg.ji}": "{dz.wu}",
  "{tg.geng}": "{dz.shen}",
  "{tg.xin}": "{dz.you}",
  "{tg.ren}": "{dz.hai}",
  "{tg.gui}": "{dz.zi}",
  "{dz.yin}": "{tg.jia}",
  "{dz.mao}": "{tg.yi}",
  "{dz.si}": "{tg.bing},{tg.wu}",
  "{dz.wu}": "{tg.ding},{tg.ji}",
  "{dz.shen}": "{tg.geng}",
  "{dz.you}": "{tg.xin}",
  "{dz.hai}": "{tg.ren}",
  "{dz.zi}": "{tg.gui}"
};
LunarUtil.PENGZU_GAN = ["", "{tg.jia}不开仓财物耗散", "{tg.yi}不栽植千株不长", "{tg.bing}不修灶必见灾殃", "{tg.ding}不剃头头必生疮", "{tg.wu}不受田田主不祥", "{tg.ji}不破券二比并亡", "{tg.geng}不经络织机虚张", "{tg.xin}不合酱主人不尝", "{tg.ren}不泱水更难提防", "{tg.gui}不词讼理弱敌强"];
LunarUtil.PENGZU_ZHI = ["", "{dz.zi}不问卜自惹祸殃", "{dz.chou}不冠带主不还乡", "{dz.yin}不祭祀神鬼不尝", "{dz.mao}不穿井水泉不香", "{dz.chen}不哭泣必主重丧", "{dz.si}不远行财物伏藏", "{dz.wu}不苫盖屋主更张", "{dz.wei}不服药毒气入肠", "{dz.shen}不安床鬼祟入房", "{dz.you}不会客醉坐颠狂", "{dz.xu}不吃犬作怪上床", "{dz.hai}不嫁娶不利新郎"];
LunarUtil.NUMBER = ["{n.zero}", "{n.one}", "{n.two}", "{n.three}", "{n.four}", "{n.five}", "{n.six}", "{n.seven}", "{n.eight}", "{n.nine}", "{n.ten}", "{n.eleven}", "{n.twelve}"];
LunarUtil.MONTH = [
  "",
  "{m.one}",
  "{m.two}",
  "{m.three}",
  "{m.four}",
  "{m.five}",
  "{m.six}",
  "{m.seven}",
  "{m.eight}",
  "{m.nine}",
  "{m.ten}",
  "{m.eleven}",
  "{m.twelve}"
];
LunarUtil.SEASON = [
  "",
  "{od.first}{sz.chun}",
  "{od.second}{sz.chun}",
  "{od.third}{sz.chun}",
  "{od.first}{sz.xia}",
  "{od.second}{sz.xia}",
  "{od.third}{sz.xia}",
  "{od.first}{sz.qiu}",
  "{od.second}{sz.qiu}",
  "{od.third}{sz.qiu}",
  "{od.first}{sz.dong}",
  "{od.second}{sz.dong}",
  "{od.third}{sz.dong}"
];
LunarUtil.SHENGXIAO = ["", "{sx.rat}", "{sx.ox}", "{sx.tiger}", "{sx.rabbit}", "{sx.dragon}", "{sx.snake}", "{sx.horse}", "{sx.goat}", "{sx.monkey}", "{sx.rooster}", "{sx.dog}", "{sx.pig}"];
LunarUtil.DAY = [
  "",
  "{d.one}",
  "{d.two}",
  "{d.three}",
  "{d.four}",
  "{d.five}",
  "{d.six}",
  "{d.seven}",
  "{d.eight}",
  "{d.nine}",
  "{d.ten}",
  "{d.eleven}",
  "{d.twelve}",
  "{d.thirteen}",
  "{d.fourteen}",
  "{d.fifteen}",
  "{d.sixteen}",
  "{d.seventeen}",
  "{d.eighteen}",
  "{d.nighteen}",
  "{d.twenty}",
  "{d.twentyOne}",
  "{d.twentyTwo}",
  "{d.twentyThree}",
  "{d.twentyFour}",
  "{d.twentyFive}",
  "{d.twentySix}",
  "{d.twentySeven}",
  "{d.twentyEight}",
  "{d.twentyNine}",
  "{d.thirty}"
];
LunarUtil.YUE_XIANG = [
  "",
  "{yx.shuo}",
  "{yx.jiShuo}",
  "{yx.eMeiXin}",
  "{yx.eMeiXin}",
  "{yx.eMei}",
  "{yx.xi}",
  "{yx.shangXian}",
  "{yx.shangXian}",
  "{yx.jiuYe}",
  "{yx.night}",
  "{yx.night}",
  "{yx.night}",
  "{yx.jianYingTu}",
  "{yx.xiaoWang}",
  "{yx.wang}",
  "{yx.jiWang}",
  "{yx.liDai}",
  "{yx.juDai}",
  "{yx.qinDai}",
  "{yx.gengDai}",
  "{yx.jianKuiTu}",
  "{yx.xiaXian}",
  "{yx.xiaXian}",
  "{yx.youMing}",
  "{yx.youMing}",
  "{yx.eMeiCan}",
  "{yx.eMeiCan}",
  "{yx.can}",
  "{yx.xiao}",
  "{yx.hui}"
];
LunarUtil.XIU = {
  "{dz.shen}1": "{xx.bi}",
  "{dz.shen}2": "{xx.yi}",
  "{dz.shen}3": "{xx.ji}",
  "{dz.shen}4": "{xx.kui}",
  "{dz.shen}5": "{xx.gui}",
  "{dz.shen}6": "{xx.di}",
  "{dz.shen}0": "{xx.xu}",
  "{dz.zi}1": "{xx.bi}",
  "{dz.zi}2": "{xx.yi}",
  "{dz.zi}3": "{xx.ji}",
  "{dz.zi}4": "{xx.kui}",
  "{dz.zi}5": "{xx.gui}",
  "{dz.zi}6": "{xx.di}",
  "{dz.zi}0": "{xx.xu}",
  "{dz.chen}1": "{xx.bi}",
  "{dz.chen}2": "{xx.yi}",
  "{dz.chen}3": "{xx.ji}",
  "{dz.chen}4": "{xx.kui}",
  "{dz.chen}5": "{xx.gui}",
  "{dz.chen}6": "{xx.di}",
  "{dz.chen}0": "{xx.xu}",
  "{dz.si}1": "{xx.wei}",
  "{dz.si}2": "{xx.zi}",
  "{dz.si}3": "{xx.zhen}",
  "{dz.si}4": "{xx.dou}",
  "{dz.si}5": "{xx.lou}",
  "{dz.si}6": "{xx.liu}",
  "{dz.si}0": "{xx.fang}",
  "{dz.you}1": "{xx.wei}",
  "{dz.you}2": "{xx.zi}",
  "{dz.you}3": "{xx.zhen}",
  "{dz.you}4": "{xx.dou}",
  "{dz.you}5": "{xx.lou}",
  "{dz.you}6": "{xx.liu}",
  "{dz.you}0": "{xx.fang}",
  "{dz.chou}1": "{xx.wei}",
  "{dz.chou}2": "{xx.zi}",
  "{dz.chou}3": "{xx.zhen}",
  "{dz.chou}4": "{xx.dou}",
  "{dz.chou}5": "{xx.lou}",
  "{dz.chou}6": "{xx.liu}",
  "{dz.chou}0": "{xx.fang}",
  "{dz.yin}1": "{xx.xin}",
  "{dz.yin}2": "{xx.shi}",
  "{dz.yin}3": "{xx.can}",
  "{dz.yin}4": "{xx.jiao}",
  "{dz.yin}5": "{xx.niu}",
  "{dz.yin}6": "{xx.vei}",
  "{dz.yin}0": "{xx.xing}",
  "{dz.wu}1": "{xx.xin}",
  "{dz.wu}2": "{xx.shi}",
  "{dz.wu}3": "{xx.can}",
  "{dz.wu}4": "{xx.jiao}",
  "{dz.wu}5": "{xx.niu}",
  "{dz.wu}6": "{xx.vei}",
  "{dz.wu}0": "{xx.xing}",
  "{dz.xu}1": "{xx.xin}",
  "{dz.xu}2": "{xx.shi}",
  "{dz.xu}3": "{xx.can}",
  "{dz.xu}4": "{xx.jiao}",
  "{dz.xu}5": "{xx.niu}",
  "{dz.xu}6": "{xx.vei}",
  "{dz.xu}0": "{xx.xing}",
  "{dz.hai}1": "{xx.zhang}",
  "{dz.hai}2": "{xx.tail}",
  "{dz.hai}3": "{xx.qiang}",
  "{dz.hai}4": "{xx.jing}",
  "{dz.hai}5": "{xx.kang}",
  "{dz.hai}6": "{xx.nv}",
  "{dz.hai}0": "{xx.mao}",
  "{dz.mao}1": "{xx.zhang}",
  "{dz.mao}2": "{xx.tail}",
  "{dz.mao}3": "{xx.qiang}",
  "{dz.mao}4": "{xx.jing}",
  "{dz.mao}5": "{xx.kang}",
  "{dz.mao}6": "{xx.nv}",
  "{dz.mao}0": "{xx.mao}",
  "{dz.wei}1": "{xx.zhang}",
  "{dz.wei}2": "{xx.tail}",
  "{dz.wei}3": "{xx.qiang}",
  "{dz.wei}4": "{xx.jing}",
  "{dz.wei}5": "{xx.kang}",
  "{dz.wei}6": "{xx.nv}",
  "{dz.wei}0": "{xx.mao}"
};
LunarUtil.XIU_LUCK = {
  "{xx.jiao}": "{s.goodLuck}",
  "{xx.kang}": "{s.badLuck}",
  "{xx.di}": "{s.badLuck}",
  "{xx.fang}": "{s.goodLuck}",
  "{xx.xin}": "{s.badLuck}",
  "{xx.tail}": "{s.goodLuck}",
  "{xx.ji}": "{s.goodLuck}",
  "{xx.dou}": "{s.goodLuck}",
  "{xx.niu}": "{s.badLuck}",
  "{xx.nv}": "{s.badLuck}",
  "{xx.xu}": "{s.badLuck}",
  "{xx.wei}": "{s.badLuck}",
  "{xx.shi}": "{s.goodLuck}",
  "{xx.qiang}": "{s.goodLuck}",
  "{xx.kui}": "{s.badLuck}",
  "{xx.lou}": "{s.goodLuck}",
  "{xx.vei}": "{s.goodLuck}",
  "{xx.mao}": "{s.badLuck}",
  "{xx.bi}": "{s.goodLuck}",
  "{xx.zi}": "{s.badLuck}",
  "{xx.can}": "{s.goodLuck}",
  "{xx.jing}": "{s.goodLuck}",
  "{xx.gui}": "{s.badLuck}",
  "{xx.liu}": "{s.badLuck}",
  "{xx.xing}": "{s.badLuck}",
  "{xx.zhang}": "{s.goodLuck}",
  "{xx.yi}": "{s.badLuck}",
  "{xx.zhen}": "{s.goodLuck}"
};
LunarUtil.XIU_SONG = {
  "{xx.jiao}": "角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。",
  "{xx.kang}": "亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。",
  "{xx.di}": "氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。",
  "{xx.fang}": "房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。",
  "{xx.xin}": "心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。",
  "{xx.tail}": "尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。",
  "{xx.ji}": "箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。",
  "{xx.dou}": "斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。",
  "{xx.niu}": "牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。",
  "{xx.nv}": "女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。",
  "{xx.xu}": "虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。",
  "{xx.wei}": "危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。",
  "{xx.shi}": "室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。",
  "{xx.qiang}": "壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。",
  "{xx.kui}": "奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。",
  "{xx.lou}": "娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。",
  "{xx.vei}": "胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。",
  "{xx.mao}": "昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。",
  "{xx.bi}": "毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。",
  "{xx.zi}": "觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。",
  "{xx.can}": "参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。",
  "{xx.jing}": "井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。",
  "{xx.gui}": "鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。",
  "{xx.liu}": "柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。",
  "{xx.xing}": "星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。",
  "{xx.zhang}": "张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。",
  "{xx.yi}": "翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。",
  "{xx.zhen}": "轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"
};
LunarUtil.ZHENG = {
  "{xx.jiao}": "{wx.mu}",
  "{xx.jing}": "{wx.mu}",
  "{xx.kui}": "{wx.mu}",
  "{xx.dou}": "{wx.mu}",
  "{xx.kang}": "{wx.jin}",
  "{xx.gui}": "{wx.jin}",
  "{xx.lou}": "{wx.jin}",
  "{xx.niu}": "{wx.jin}",
  "{xx.di}": "{wx.tu}",
  "{xx.liu}": "{wx.tu}",
  "{xx.vei}": "{wx.tu}",
  "{xx.nv}": "{wx.tu}",
  "{xx.fang}": "{wx.ri}",
  "{xx.xing}": "{wx.ri}",
  "{xx.mao}": "{wx.ri}",
  "{xx.xu}": "{wx.ri}",
  "{xx.xin}": "{wx.yue}",
  "{xx.zhang}": "{wx.yue}",
  "{xx.bi}": "{wx.yue}",
  "{xx.wei}": "{wx.yue}",
  "{xx.tail}": "{wx.huo}",
  "{xx.yi}": "{wx.huo}",
  "{xx.zi}": "{wx.huo}",
  "{xx.shi}": "{wx.huo}",
  "{xx.ji}": "{wx.shui}",
  "{xx.zhen}": "{wx.shui}",
  "{xx.can}": "{wx.shui}",
  "{xx.qiang}": "{wx.shui}"
};
LunarUtil.ANIMAL = {
  "{xx.jiao}": "{dw.jiao}",
  "{xx.dou}": "{dw.xie}",
  "{xx.kui}": "{dw.lang}",
  "{xx.jing}": "{dw.han}",
  "{xx.kang}": "{dw.long}",
  "{xx.niu}": "{dw.niu}",
  "{xx.lou}": "{dw.gou}",
  "{xx.gui}": "{dw.yang}",
  "{xx.nv}": "{dw.fu}",
  "{xx.di}": "{dw.he}",
  "{xx.vei}": "{dw.zhi}",
  "{xx.liu}": "{dw.zhang}",
  "{xx.fang}": "{dw.tu}",
  "{xx.xu}": "{dw.shu}",
  "{xx.mao}": "{dw.ji}",
  "{xx.xing}": "{dw.ma}",
  "{xx.xin}": "{dw.huLi}",
  "{xx.wei}": "{dw.yan}",
  "{xx.bi}": "{dw.wu}",
  "{xx.zhang}": "{dw.lu}",
  "{xx.tail}": "{dw.hu}",
  "{xx.shi}": "{dw.zhu}",
  "{xx.zi}": "{dw.hou}",
  "{xx.yi}": "{dw.she}",
  "{xx.ji}": "{dw.bao}",
  "{xx.qiang}": "{dw.xu}",
  "{xx.can}": "{dw.yuan}",
  "{xx.zhen}": "{dw.yin}"
};
LunarUtil.GONG = {
  "{xx.jiao}": "{ps.dong}",
  "{xx.jing}": "{ps.nan}",
  "{xx.kui}": "{ps.xi}",
  "{xx.dou}": "{ps.bei}",
  "{xx.kang}": "{ps.dong}",
  "{xx.gui}": "{ps.nan}",
  "{xx.lou}": "{ps.xi}",
  "{xx.niu}": "{ps.bei}",
  "{xx.di}": "{ps.dong}",
  "{xx.liu}": "{ps.nan}",
  "{xx.vei}": "{ps.xi}",
  "{xx.nv}": "{ps.bei}",
  "{xx.fang}": "{ps.dong}",
  "{xx.xing}": "{ps.nan}",
  "{xx.mao}": "{ps.xi}",
  "{xx.xu}": "{ps.bei}",
  "{xx.xin}": "{ps.dong}",
  "{xx.zhang}": "{ps.nan}",
  "{xx.bi}": "{ps.xi}",
  "{xx.wei}": "{ps.bei}",
  "{xx.tail}": "{ps.dong}",
  "{xx.yi}": "{ps.nan}",
  "{xx.zi}": "{ps.xi}",
  "{xx.shi}": "{ps.bei}",
  "{xx.ji}": "{ps.dong}",
  "{xx.zhen}": "{ps.nan}",
  "{xx.can}": "{ps.xi}",
  "{xx.qiang}": "{ps.bei}"
};
LunarUtil.SHOU = {
  "{ps.dong}": "{sn.qingLong}",
  "{ps.nan}": "{sn.zhuQue}",
  "{ps.xi}": "{sn.baiHu}",
  "{ps.bei}": "{sn.xuanWu}"
};
LunarUtil.FESTIVAL = {
  "1-1": "{jr.chunJie}",
  "1-15": "{jr.yuanXiao}",
  "2-2": "{jr.longTou}",
  "5-5": "{jr.duanWu}",
  "7-7": "{jr.qiXi}",
  "8-15": "{jr.zhongQiu}",
  "9-9": "{jr.chongYang}",
  "12-8": "{jr.laBa}"
};
LunarUtil.OTHER_FESTIVAL = {
  "1-4": ["接神日"],
  "1-5": ["隔开日"],
  "1-7": ["人日"],
  "1-8": ["谷日", "顺星节"],
  "1-9": ["天日"],
  "1-10": ["地日"],
  "1-20": ["天穿节"],
  "1-25": ["填仓节"],
  "1-30": ["正月晦"],
  "2-1": ["中和节"],
  "2-2": ["社日节"],
  "3-3": ["上巳节"],
  "5-20": ["分龙节"],
  "5-25": ["会龙节"],
  "6-6": ["天贶节"],
  "6-24": ["观莲节"],
  "6-25": ["五谷母节"],
  "7-15": ["中元节"],
  "7-22": ["财神节"],
  "7-29": ["地藏节"],
  "8-1": ["天灸日"],
  "10-1": ["寒衣节"],
  "10-10": ["十成节"],
  "10-15": ["下元节"],
  "12-7": ["驱傩日"],
  "12-16": ["尾牙"],
  "12-24": ["祭灶日"]
};
LunarUtil.CHONG = ["{dz.wu}", "{dz.wei}", "{dz.shen}", "{dz.you}", "{dz.xu}", "{dz.hai}", "{dz.zi}", "{dz.chou}", "{dz.yin}", "{dz.mao}", "{dz.chen}", "{dz.si}"];
LunarUtil.CHONG_GAN = ["{tg.wu}", "{tg.ji}", "{tg.geng}", "{tg.xin}", "{tg.ren}", "{tg.gui}", "{tg.jia}", "{tg.yi}", "{tg.bing}", "{tg.ding}"];
LunarUtil.CHONG_GAN_TIE = ["{tg.ji}", "{tg.wu}", "{tg.xin}", "{tg.geng}", "{tg.gui}", "{tg.ren}", "{tg.yi}", "{tg.jia}", "{tg.ding}", "{tg.bing}"];
LunarUtil.CHONG_GAN_4 = ["{tg.geng}", "{tg.xin}", "{tg.ren}", "{tg.gui}", "", "", "{tg.jia}", "{tg.yi}", "{tg.bing}", "{tg.ding}"];
LunarUtil.HE_GAN_5 = ["{tg.ji}", "{tg.geng}", "{tg.xin}", "{tg.ren}", "{tg.gui}", "{tg.jia}", "{tg.yi}", "{tg.bing}", "{tg.ding}", "{tg.wu}"];
LunarUtil.HE_ZHI_6 = ["{dz.chou}", "{dz.zi}", "{dz.hai}", "{dz.xu}", "{dz.you}", "{dz.shen}", "{dz.wei}", "{dz.wu}", "{dz.si}", "{dz.chen}", "{dz.mao}", "{dz.yin}"];
LunarUtil.SHA = {
  "{dz.zi}": "{ps.nan}",
  "{dz.chou}": "{ps.dong}",
  "{dz.yin}": "{ps.bei}",
  "{dz.mao}": "{ps.xi}",
  "{dz.chen}": "{ps.nan}",
  "{dz.si}": "{ps.dong}",
  "{dz.wu}": "{ps.bei}",
  "{dz.wei}": "{ps.xi}",
  "{dz.shen}": "{ps.nan}",
  "{dz.you}": "{ps.dong}",
  "{dz.xu}": "{ps.bei}",
  "{dz.hai}": "{ps.xi}"
};
LunarUtil.POSITION_DESC = {
  "{bg.kan}": "{ps.zhengBei}",
  "{bg.gen}": "{ps.dongBei}",
  "{bg.zhen}": "{ps.zhengDong}",
  "{bg.xun}": "{ps.dongNan}",
  "{bg.li}": "{ps.zhengNan}",
  "{bg.kun}": "{ps.xiNan}",
  "{bg.dui}": "{ps.zhengXi}",
  "{bg.qian}": "{ps.xiBei}",
  "{ps.center}": "{ps.zhong}"
};
LunarUtil.NAYIN = {
  "{jz.jiaZi}": "{ny.haiZhong}{wx.jin}",
  "{jz.jiaWu}": "{ny.shaZhong}{wx.jin}",
  "{jz.bingYin}": "{ny.luZhong}{wx.huo}",
  "{jz.bingShen}": "{ny.shanXia}{wx.huo}",
  "{jz.wuChen}": "{ny.daLin}{wx.mu}",
  "{jz.wuXu}": "{ny.pingDi}{wx.mu}",
  "{jz.gengWu}": "{ny.luPang}{wx.tu}",
  "{jz.gengZi}": "{ny.biShang}{wx.tu}",
  "{jz.renShen}": "{ny.jianFeng}{wx.jin}",
  "{jz.renYin}": "{ny.jinBo}{wx.jin}",
  "{jz.jiaXu}": "{ny.shanTou}{wx.huo}",
  "{jz.jiaChen}": "{ny.fuDeng}{wx.huo}",
  "{jz.bingZi}": "{ny.jianXia}{wx.shui}",
  "{jz.bingWu}": "{ny.tianHe}{wx.shui}",
  "{jz.wuYin}": "{ny.chengTou}{wx.tu}",
  "{jz.wuShen}": "{ny.daYi}{wx.tu}",
  "{jz.gengChen}": "{ny.baiLa}{wx.jin}",
  "{jz.gengXu}": "{ny.chaiChuan}{wx.jin}",
  "{jz.renWu}": "{ny.yangLiu}{wx.mu}",
  "{jz.renZi}": "{ny.sangZhe}{wx.mu}",
  "{jz.jiaShen}": "{ny.quanZhong}{wx.shui}",
  "{jz.jiaYin}": "{ny.daXi}{wx.shui}",
  "{jz.bingXu}": "{ny.wuShang}{wx.tu}",
  "{jz.bingChen}": "{ny.shaZhong}{wx.tu}",
  "{jz.wuZi}": "{ny.piLi}{wx.huo}",
  "{jz.wuWu}": "{ny.tianShang}{wx.huo}",
  "{jz.gengYin}": "{ny.songBo}{wx.mu}",
  "{jz.gengShen}": "{ny.shiLiu}{wx.mu}",
  "{jz.renChen}": "{ny.changLiu}{wx.shui}",
  "{jz.renXu}": "{ny.daHai}{wx.shui}",
  "{jz.yiChou}": "{ny.haiZhong}{wx.jin}",
  "{jz.yiWei}": "{ny.shaZhong}{wx.jin}",
  "{jz.dingMao}": "{ny.luZhong}{wx.huo}",
  "{jz.dingYou}": "{ny.shanXia}{wx.huo}",
  "{jz.jiSi}": "{ny.daLin}{wx.mu}",
  "{jz.jiHai}": "{ny.pingDi}{wx.mu}",
  "{jz.xinWei}": "{ny.luPang}{wx.tu}",
  "{jz.xinChou}": "{ny.biShang}{wx.tu}",
  "{jz.guiYou}": "{ny.jianFeng}{wx.jin}",
  "{jz.guiMao}": "{ny.jinBo}{wx.jin}",
  "{jz.yiHai}": "{ny.shanTou}{wx.huo}",
  "{jz.yiSi}": "{ny.fuDeng}{wx.huo}",
  "{jz.dingChou}": "{ny.jianXia}{wx.shui}",
  "{jz.dingWei}": "{ny.tianHe}{wx.shui}",
  "{jz.jiMao}": "{ny.chengTou}{wx.tu}",
  "{jz.jiYou}": "{ny.daYi}{wx.tu}",
  "{jz.xinSi}": "{ny.baiLa}{wx.jin}",
  "{jz.xinHai}": "{ny.chaiChuan}{wx.jin}",
  "{jz.guiWei}": "{ny.yangLiu}{wx.mu}",
  "{jz.guiChou}": "{ny.sangZhe}{wx.mu}",
  "{jz.yiYou}": "{ny.quanZhong}{wx.shui}",
  "{jz.yiMao}": "{ny.daXi}{wx.shui}",
  "{jz.dingHai}": "{ny.wuShang}{wx.tu}",
  "{jz.dingSi}": "{ny.shaZhong}{wx.tu}",
  "{jz.jiChou}": "{ny.piLi}{wx.huo}",
  "{jz.jiWei}": "{ny.tianShang}{wx.huo}",
  "{jz.xinMao}": "{ny.songBo}{wx.mu}",
  "{jz.xinYou}": "{ny.shiLiu}{wx.mu}",
  "{jz.guiSi}": "{ny.changLiu}{wx.shui}",
  "{jz.guiHai}": "{ny.daHai}{wx.shui}"
};
LunarUtil.WU_XING_GAN = {
  "{tg.jia}": "{wx.mu}",
  "{tg.yi}": "{wx.mu}",
  "{tg.bing}": "{wx.huo}",
  "{tg.ding}": "{wx.huo}",
  "{tg.wu}": "{wx.tu}",
  "{tg.ji}": "{wx.tu}",
  "{tg.geng}": "{wx.jin}",
  "{tg.xin}": "{wx.jin}",
  "{tg.ren}": "{wx.shui}",
  "{tg.gui}": "{wx.shui}"
};
LunarUtil.WU_XING_ZHI = {
  "{dz.yin}": "{wx.mu}",
  "{dz.mao}": "{wx.mu}",
  "{dz.si}": "{wx.huo}",
  "{dz.wu}": "{wx.huo}",
  "{dz.chen}": "{wx.tu}",
  "{dz.chou}": "{wx.tu}",
  "{dz.xu}": "{wx.tu}",
  "{dz.wei}": "{wx.tu}",
  "{dz.shen}": "{wx.jin}",
  "{dz.you}": "{wx.jin}",
  "{dz.hai}": "{wx.shui}",
  "{dz.zi}": "{wx.shui}"
};
LunarUtil.SHI_SHEN = {
  "{tg.jia}{tg.jia}": "{ss.biJian}",
  "{tg.jia}{tg.yi}": "{ss.jieCai}",
  "{tg.jia}{tg.bing}": "{ss.shiShen}",
  "{tg.jia}{tg.ding}": "{ss.shangGuan}",
  "{tg.jia}{tg.wu}": "{ss.pianCai}",
  "{tg.jia}{tg.ji}": "{ss.zhengCai}",
  "{tg.jia}{tg.geng}": "{ss.qiSha}",
  "{tg.jia}{tg.xin}": "{ss.zhengGuan}",
  "{tg.jia}{tg.ren}": "{ss.pianYin}",
  "{tg.jia}{tg.gui}": "{ss.zhengYin}",
  "{tg.yi}{tg.yi}": "{ss.biJian}",
  "{tg.yi}{tg.jia}": "{ss.jieCai}",
  "{tg.yi}{tg.ding}": "{ss.shiShen}",
  "{tg.yi}{tg.bing}": "{ss.shangGuan}",
  "{tg.yi}{tg.ji}": "{ss.pianCai}",
  "{tg.yi}{tg.wu}": "{ss.zhengCai}",
  "{tg.yi}{tg.xin}": "{ss.qiSha}",
  "{tg.yi}{tg.geng}": "{ss.zhengGuan}",
  "{tg.yi}{tg.gui}": "{ss.pianYin}",
  "{tg.yi}{tg.ren}": "{ss.zhengYin}",
  "{tg.bing}{tg.bing}": "{ss.biJian}",
  "{tg.bing}{tg.ding}": "{ss.jieCai}",
  "{tg.bing}{tg.wu}": "{ss.shiShen}",
  "{tg.bing}{tg.ji}": "{ss.shangGuan}",
  "{tg.bing}{tg.geng}": "{ss.pianCai}",
  "{tg.bing}{tg.xin}": "{ss.zhengCai}",
  "{tg.bing}{tg.ren}": "{ss.qiSha}",
  "{tg.bing}{tg.gui}": "{ss.zhengGuan}",
  "{tg.bing}{tg.jia}": "{ss.pianYin}",
  "{tg.bing}{tg.yi}": "{ss.zhengYin}",
  "{tg.ding}{tg.ding}": "{ss.biJian}",
  "{tg.ding}{tg.bing}": "{ss.jieCai}",
  "{tg.ding}{tg.ji}": "{ss.shiShen}",
  "{tg.ding}{tg.wu}": "{ss.shangGuan}",
  "{tg.ding}{tg.xin}": "{ss.pianCai}",
  "{tg.ding}{tg.geng}": "{ss.zhengCai}",
  "{tg.ding}{tg.gui}": "{ss.qiSha}",
  "{tg.ding}{tg.ren}": "{ss.zhengGuan}",
  "{tg.ding}{tg.yi}": "{ss.pianYin}",
  "{tg.ding}{tg.jia}": "{ss.zhengYin}",
  "{tg.wu}{tg.wu}": "{ss.biJian}",
  "{tg.wu}{tg.ji}": "{ss.jieCai}",
  "{tg.wu}{tg.geng}": "{ss.shiShen}",
  "{tg.wu}{tg.xin}": "{ss.shangGuan}",
  "{tg.wu}{tg.ren}": "{ss.pianCai}",
  "{tg.wu}{tg.gui}": "{ss.zhengCai}",
  "{tg.wu}{tg.jia}": "{ss.qiSha}",
  "{tg.wu}{tg.yi}": "{ss.zhengGuan}",
  "{tg.wu}{tg.bing}": "{ss.pianYin}",
  "{tg.wu}{tg.ding}": "{ss.zhengYin}",
  "{tg.ji}{tg.ji}": "{ss.biJian}",
  "{tg.ji}{tg.wu}": "{ss.jieCai}",
  "{tg.ji}{tg.xin}": "{ss.shiShen}",
  "{tg.ji}{tg.geng}": "{ss.shangGuan}",
  "{tg.ji}{tg.gui}": "{ss.pianCai}",
  "{tg.ji}{tg.ren}": "{ss.zhengCai}",
  "{tg.ji}{tg.yi}": "{ss.qiSha}",
  "{tg.ji}{tg.jia}": "{ss.zhengGuan}",
  "{tg.ji}{tg.ding}": "{ss.pianYin}",
  "{tg.ji}{tg.bing}": "{ss.zhengYin}",
  "{tg.geng}{tg.geng}": "{ss.biJian}",
  "{tg.geng}{tg.xin}": "{ss.jieCai}",
  "{tg.geng}{tg.ren}": "{ss.shiShen}",
  "{tg.geng}{tg.gui}": "{ss.shangGuan}",
  "{tg.geng}{tg.jia}": "{ss.pianCai}",
  "{tg.geng}{tg.yi}": "{ss.zhengCai}",
  "{tg.geng}{tg.bing}": "{ss.qiSha}",
  "{tg.geng}{tg.ding}": "{ss.zhengGuan}",
  "{tg.geng}{tg.wu}": "{ss.pianYin}",
  "{tg.geng}{tg.ji}": "{ss.zhengYin}",
  "{tg.xin}{tg.xin}": "{ss.biJian}",
  "{tg.xin}{tg.geng}": "{ss.jieCai}",
  "{tg.xin}{tg.gui}": "{ss.shiShen}",
  "{tg.xin}{tg.ren}": "{ss.shangGuan}",
  "{tg.xin}{tg.yi}": "{ss.pianCai}",
  "{tg.xin}{tg.jia}": "{ss.zhengCai}",
  "{tg.xin}{tg.ding}": "{ss.qiSha}",
  "{tg.xin}{tg.bing}": "{ss.zhengGuan}",
  "{tg.xin}{tg.ji}": "{ss.pianYin}",
  "{tg.xin}{tg.wu}": "{ss.zhengYin}",
  "{tg.ren}{tg.ren}": "{ss.biJian}",
  "{tg.ren}{tg.gui}": "{ss.jieCai}",
  "{tg.ren}{tg.jia}": "{ss.shiShen}",
  "{tg.ren}{tg.yi}": "{ss.shangGuan}",
  "{tg.ren}{tg.bing}": "{ss.pianCai}",
  "{tg.ren}{tg.ding}": "{ss.zhengCai}",
  "{tg.ren}{tg.wu}": "{ss.qiSha}",
  "{tg.ren}{tg.ji}": "{ss.zhengGuan}",
  "{tg.ren}{tg.geng}": "{ss.pianYin}",
  "{tg.ren}{tg.xin}": "{ss.zhengYin}",
  "{tg.gui}{tg.gui}": "{ss.biJian}",
  "{tg.gui}{tg.ren}": "{ss.jieCai}",
  "{tg.gui}{tg.yi}": "{ss.shiShen}",
  "{tg.gui}{tg.jia}": "{ss.shangGuan}",
  "{tg.gui}{tg.ding}": "{ss.pianCai}",
  "{tg.gui}{tg.bing}": "{ss.zhengCai}",
  "{tg.gui}{tg.ji}": "{ss.qiSha}",
  "{tg.gui}{tg.wu}": "{ss.zhengGuan}",
  "{tg.gui}{tg.xin}": "{ss.pianYin}",
  "{tg.gui}{tg.geng}": "{ss.zhengYin}"
};
LunarUtil.ZHI_HIDE_GAN = {
  "{dz.zi}": ["{tg.gui}"],
  "{dz.chou}": ["{tg.ji}", "{tg.gui}", "{tg.xin}"],
  "{dz.yin}": ["{tg.jia}", "{tg.bing}", "{tg.wu}"],
  "{dz.mao}": ["{tg.yi}"],
  "{dz.chen}": ["{tg.wu}", "{tg.yi}", "{tg.gui}"],
  "{dz.si}": ["{tg.bing}", "{tg.geng}", "{tg.wu}"],
  "{dz.wu}": ["{tg.ding}", "{tg.ji}"],
  "{dz.wei}": ["{tg.ji}", "{tg.ding}", "{tg.yi}"],
  "{dz.shen}": ["{tg.geng}", "{tg.ren}", "{tg.wu}"],
  "{dz.you}": ["{tg.xin}"],
  "{dz.xu}": ["{tg.wu}", "{tg.xin}", "{tg.ding}"],
  "{dz.hai}": ["{tg.ren}", "{tg.jia}"]
};
LunarUtil.YI_JI = [
  "{yj.jiSi}",
  "{yj.qiFu}",
  "{yj.qiuSi}",
  "{yj.kaiGuang}",
  "{yj.suHui}",
  "{yj.qiJiao}",
  "{yj.zhaiJiao}",
  "{yj.muYu}",
  "{yj.chouShen}",
  "{yj.zaoMiao}",
  "{yj.siZhao}",
  "{yj.fenXiang}",
  "{yj.xieTu}",
  "{yj.chuHuo}",
  "{yj.diaoKe}",
  "{yj.jiaQu}",
  "{yj.DingHun}",
  "{yj.naCai}",
  "{yj.wenMing}",
  "{yj.naXu}",
  "{yj.guiNing}",
  "{yj.anChuang}",
  "{yj.heZhang}",
  "{yj.guanJi}",
  "{yj.dingMeng}",
  "{yj.jinRenKou}",
  "{yj.caiYi}",
  "{yj.wanMian}",
  "{yj.kaiRong}",
  "{yj.xiuFen}",
  "{yj.qiZuan}",
  "{yj.poTu}",
  "{yj.anZang}",
  "{yj.liBei}",
  "{yj.chengFu}",
  "{yj.chuFu}",
  "{yj.kaiShengFen}",
  "{yj.heShouMu}",
  "{yj.ruLian}",
  "{yj.yiJiu}",
  "{yj.puDu}",
  "{yj.ruZhai}",
  "{yj.anXiang}",
  "{yj.anMen}",
  "{yj.xiuZao}",
  "{yj.qiJi}",
  "{yj.dongTu}",
  "{yj.shangLiang}",
  "{yj.shuZhu}",
  "{yj.kaiJing}",
  "{yj.zuoBei}",
  "{yj.chaiXie}",
  "{yj.poWu}",
  "{yj.huaiYuan}",
  "{yj.buYuan}",
  "{yj.faMuZuoLiang}",
  "{yj.zuoZhao}",
  "{yj.jieChu}",
  "{yj.kaiZhuYan}",
  "{yj.chuanPing}",
  "{yj.gaiWuHeJi}",
  "{yj.kaiCe}",
  "{yj.zaoCang}",
  "{yj.saiXue}",
  "{yj.pingZhi}",
  "{yj.zaoQiao}",
  "{yj.zuoCe}",
  "{yj.zhuDi}",
  "{yj.kaiChi}",
  "{yj.faMu}",
  "{yj.kaiQu}",
  "{yj.jueJing}",
  "{yj.saoShe}",
  "{yj.fangShui}",
  "{yj.zaoWu}",
  "{yj.heJi}",
  "{yj.zaoChuChou}",
  "{yj.xiuMen}",
  "{yj.dingSang}",
  "{yj.zuoLiang}",
  "{yj.xiuShi}",
  "{yj.jiaMa}",
  "{yj.kaiShi}",
  "{yj.guaBian}",
  "{yj.naChai}",
  "{yj.qiuCai}",
  "{yj.kaiCang}",
  "{yj.maiChe}",
  "{yj.zhiChan}",
  "{yj.guYong}",
  "{yj.chuHuoCai}",
  "{yj.anJiXie}",
  "{yj.zaoCheQi}",
  "{yj.jingLuo}",
  "{yj.yunNiang}",
  "{yj.zuoRan}",
  "{yj.guZhu}",
  "{yj.zaoChuan}",
  "{yj.geMi}",
  "{yj.zaiZhong}",
  "{yj.quYu}",
  "{yj.jieWang}",
  "{yj.muYang}",
  "{yj.anDuiWei}",
  "{yj.xiYi}",
  "{yj.ruXue}",
  "{yj.liFa}",
  "{yj.tanBing}",
  "{yj.jianGui}",
  "{yj.chengChuan}",
  "{yj.duShui}",
  "{yj.zhenJiu}",
  "{yj.chuXing}",
  "{yj.yiXi}",
  "{yj.fenJu}",
  "{yj.TiTou}",
  "{yj.zhengShou}",
  "{yj.naChu}",
  "{yj.buZhuo}",
  "{yj.tianLie}",
  "{yj.jiaoNiuMa}",
  "{yj.huiQinYou}",
  "{yj.fuRen}",
  "{yj.qiuYi}",
  "{yj.zhiBing}",
  "{yj.ciSong}",
  "{yj.qiJiDongTu}",
  "{yj.poWuHuaiYuan}",
  "{yj.gaiWu}",
  "{yj.zaoCangKu}",
  "{yj.liQuanJiaoYi}",
  "{yj.jiaoYi}",
  "{yj.liQuan}",
  "{yj.anJi}",
  "{yj.huiYou}",
  "{yj.qiuYiLiaoBing}",
  "{yj.zhuShi}",
  "{yj.yuShi}",
  "{yj.xingSang}",
  "{yj.duanYi}",
  "{yj.guiXiu}",
  "{s.none}"
];
LunarUtil.DAY_YI_JI = "30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:7917155B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F1554,7001203810=0E1A263202:79026A17657603,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F52156320010347200B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C52032971152A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,450075000F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384637020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C304E153375664923221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E192971155363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D70332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D097170292D302F1575761320,521F47251D=1F2B370713:0F18000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E80151F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F582938=112935051D:03700F,79192C2E2D715275262322271F201D217936=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D54528483696A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C71295283842A0D532D24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F111869565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E20232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A7919712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F21797001022F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A1752848354230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B75712904032D302F382B2A0D801E20,2E1F0F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D8A382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352032E1F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A0F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:117154528384292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D580F292000=222E3A0A16:111879076A1A171523221E272024,5229700F1D012E292B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E2F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2D2B15093954444C66,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D33485324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F3900010203700D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D304E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C,292E565A36=1A2632020E:5C11180001027170520D2984832B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D";
LunarUtil.TIME_YI_JI = "0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70";
LunarUtil.SHEN_SHA = [
  "{s.none}",
  "{sn.tianEn}",
  "{sn.muCang}",
  "{sn.shiYang}",
  "{sn.shengQi}",
  "{sn.yiHou}",
  "{sn.qingLong}",
  "{sn.zaiSha}",
  "{sn.tianHuo}",
  "{sn.siJi}",
  "{sn.baLong}",
  "{sn.fuRi}",
  "{sn.xuShi}",
  "{sn.mingTang}",
  "{sn.yueSha}",
  "{sn.yueXu}",
  "{sn.xueZhi}",
  "{sn.tianZei}",
  "{sn.wuXu}",
  "{sn.tuFu}",
  "{sn.guiJi}",
  "{sn.xueJi}",
  "{sn.yueDe}",
  "{sn.yueEn}",
  "{sn.siXiang}",
  "{sn.wangRi}",
  "{sn.tianCang}",
  "{sn.buJiang}",
  "{sn.yaoAn}",
  "{sn.wuHe}",
  "{sn.mingFeiDui}",
  "{sn.yueJian}",
  "{sn.xiaoShi}",
  "{sn.tuHu}",
  "{sn.wangWang}",
  "{sn.tianXing}",
  "{sn.tianDe}",
  "{sn.guanRi}",
  "{sn.jiQi}",
  "{sn.yuYu}",
  "{sn.daShi}",
  "{sn.daBai}",
  "{sn.xianChi}",
  "{sn.zhuQue}",
  "{sn.shouRi}",
  "{sn.tianWu}",
  "{sn.fuDe}",
  "{sn.liuYi}",
  "{sn.jinTang}",
  "{sn.jinKui}",
  "{sn.yanDui}",
  "{sn.zhaoYao}",
  "{sn.jiuKong}",
  "{sn.jiuKan}",
  "{sn.jiuJiao}",
  "{sn.xiangRi}",
  "{sn.baoGuang}",
  "{sn.tianGang}",
  "{sn.siShen}",
  "{sn.yueXing}",
  "{sn.yueHai}",
  "{sn.youHuo}",
  "{sn.chongRi}",
  "{sn.shiDe}",
  "{sn.minRi}",
  "{sn.sanHe}",
  "{sn.linRi}",
  "{sn.tianMa}",
  "{sn.shiYin}",
  "{sn.mingFei}",
  "{sn.siQi}",
  "{sn.diNang}",
  "{sn.baiHu}",
  "{sn.yueDeHe}",
  "{sn.jingAn}",
  "{sn.yuTang}",
  "{sn.puHu}",
  "{sn.jieShen}",
  "{sn.xiaoHao}",
  "{sn.tianDeHe}",
  "{sn.yueKong}",
  "{sn.yiMa}",
  "{sn.tianHou}",
  "{sn.chuShen}",
  "{sn.yuePo}",
  "{sn.daHao}",
  "{sn.wuLi}",
  "{sn.tianLao}",
  "{sn.yinDe}",
  "{sn.fuSheng}",
  "{sn.tianLi}",
  "{sn.zhiSi}",
  "{sn.yuanWu}",
  "{sn.yangDe}",
  "{sn.tianXi}",
  "{sn.tianYi}",
  "{sn.siMing}",
  "{sn.yueYan}",
  "{sn.diHuo}",
  "{sn.fourHit}",
  "{sn.daSha}",
  "{sn.daHui}",
  "{sn.tianYuan}",
  "{sn.liuHe}",
  "{sn.wuFu}",
  "{sn.shengXin}",
  "{sn.heKui}",
  "{sn.jieSha}",
  "{sn.siQiong}",
  "{sn.gouChen}",
  "{sn.chuShuiLong}",
  "{sn.baFeng}",
  "{sn.tianShe}",
  "{sn.wuMu}",
  "{sn.baZhuan}",
  "{sn.yinCuo}",
  "{sn.siHao}",
  "{sn.yangCuo}",
  "{sn.siFei}",
  "{sn.sanYin}",
  "{sn.xiaoHui}",
  "{sn.yinDaoChongYang}",
  "{sn.danYin}",
  "{sn.guChen}",
  "{sn.yinWei}",
  "{sn.xingHen}",
  "{sn.liaoLi}",
  "{sn.jueYin}",
  "{sn.chunYang}",
  "{sn.qiNiao}",
  "{sn.suiBo}",
  "{sn.yinYangJiaoPo}",
  "{sn.yinYangJuCuo}",
  "{sn.yinYangJiChong}",
  "{sn.zhuZhen}",
  "{sn.yangCuoYinChong}",
  "{sn.qiFu}",
  "{sn.tianGou}",
  "{sn.jiuHu}",
  "{sn.chengRi}",
  "{sn.tianFu}",
  "{sn.guYang}",
  "{sn.jueYang}",
  "{sn.chunYin}",
  "{sn.liuShe}",
  "{sn.yinShen}",
  "{sn.jieChu}",
  "{sn.yangPoYinChong}"
];
LunarUtil.DAY_SHEN_SHA = "100=010203040506,0708090A0B101=010C0D,0E0F101112131415102=16011718191A1B1C1D1E,1F20212223103=24011825261B271D1E,28292A2B104=012C2D2E2F3031,3233343536105=3738,393A3B3C3D123E106=3F404142434445,464748107=494A4B4C4D,4E108=4F5051524C4D5345,54555657109=58595345,5A5B12565C10A=5D415E5F60,616263640B6510B=0266676869,6A6B6C0A3E6D10C=1602171803041B05061E,07086E10D=24181B0C0D,0E0F1011126F13141510E=70191A1C1D,1F2021222310F=0125261B271D,28292A2B110=012C2D2E2F3031,3233343536111=49013738,393A3B3C3D123E112=4F50013F404142434445,4648113=014A4B,4E6E114=51524C4D5345,54550B5657115=0158595345,5A5B12565C116=1601185D415E5F60,61626364117=24021867681B69,6A6B3E6D118=0203040506,0708119=1B0C0D,0E0F10111213141511A=191A1B1C1D1E,1F2021222311B=4925261B271D1E,28292A11C=4F502C2D2E2F3031,323334353611D=3738,393A3B3C3D123E11E=3F404142434445,460B4811F=4A4B,4E71120=16171851524C4D5345,545556121=241858595345,5A5B12565C122=5D415E5F60,61626364123=0267681B69,6A6B3E6D124=0203041B05061E,070847125=491B0C0D,0E0F101112131415126=4F50191A1C1D1E,1F20212223127=2526271D1E,28292A2B128=2C2D2E2F3031,32333435360B129=3738,393A3B3C3D123E12A=1617183F404142434445,464812B=24184A4B,4E7212C=51524C4D53,5455565712D=0158595345,5A5B12565C12E=015D415E5F60,616263647312F=49010267681B69,6A6B3E6D130=4F500102030405061E,070874131=010C0D,0E0F101112131415726E132=191A1C1D1E,1F2021220B722375133=2526271D1E,28292A2B134=1617182C2D2E2F3031,3233343536135=24183738,393A3B3C3D126F3E136=3F4041424344,4648137=4A4B,4E72138=51524C4D5345,545576567257139=4958595345,5A5B7612565C7713A=4F505D415E5F60,6162636413B=02676869,6A6B3E6D200=1601025D60,393B28292A11090A201=0103041A1B4A,123435360B6D202=011819681B4C1D061E,3D1014203=011718252F591D0D1E,1F20213233204=012C26,3C23205=493751522D2E69,121364223E2B206=503F4005311E,6A3A5A5B207=5841440C38,4615208=431C4D45,6B4E5648209=27534B45,545507086162125620A=16666730,0E0F635720B=0241425E5F1B,6C0A0B3E5C20C=02185D1B601E,393B28292A116E20D=171803041B4A,126F3435366D20E=7019684C1D06,3D101420F=4901252F591D0D,1F2021323378210=50012C26,3C23211=013751522D2E69,121364223E2B212=013F40053145,6A3A5A5B213=015841440C38,46156E214=16431C4D5345,6B4E5648215=27534B45,545507086162120B5648216=18671B30,0E0F6357217=02171841425E5F1B,3E5C218=025D60,393B28292A11219=4903041A1B4A,123435366D21A=5019681B4C1D061E,3D101421B=252F591D0D45,1F2021323321C=2C26,3C2321D=3751522D2E69,121364223E2B21E=163F40053145,6A3A5A5B21F=5841440C38,467147150B220=18431C4D5345,6B4E5648221=171827534B45,5455070861621256222=6730,0E0F6357223=490241425E5F1B,3E5C224=50025D1B601E,393B28292A11225=03041A4A,123435366D226=19684C1D061E,3D1014227=252F591D0D1E,1F20213233228=162C26,3C23229=3751522D2E69,121364220B3E2B22A=183F40053145,6A3A5A5B22B=17185841440C38,46157222C=431C4D53,6B4E564822D=490127534B45,54550708616212567922E=5001671B30,0E0F635722F=010241425E5F,3E5C230=01025D601E,393B28292A1174231=0103041A4A,1234353647726E6D232=1619684C1D061E,3D1014233=252F591D0D1E,1F202132330B75234=182C26,3C23235=17183751522D2E69,126F1364223E2B236=3F400531,6A3A5A5B237=495841440C38,461572238=50431C4D5345,6B4E76567248239=27534B45,5455070861627612567323A=6730,0E0F635723B=0241425E5F,3E5C300=0102415E5F1A1B69,090A471457301=011B05,6A125C302=5001185D19515203042F0C1D601E,323315303=4F490118251C1D1E,3C5A5B106D304=012C2706,1F20213B710B787A305=58372668300D,6B123E306=173F402D2E45,07086423307=00,393A0E2B308=24164142444A533145,61624622567B309=674C533845,28292A4E12135630A=431B594D,5455633435364830B=021B27,3D116C0A3E30C=500218415E5F1A1B691E,146E5730D=4F49181B05,6A126F5C30E=705D19515203042F0C1D60,3233150B30F=01251C1D,3C5A5B106D310=01172C2706,1F20213B7C311=0158372668300D,6B123E312=2416013F402D2E45,0708476423313=01,393A0E0F6E2B314=4142444A533145,61624622567D315=66671B4C533845,28292A4E121356316=5018431B594D,54556334353648317=4F4902181B4B,3D113E318=02415E5F1A69,140B57319=1B05,6A125C31A=175D19515203042F0C1D601E,32331531B=251C1D1E,3C5A5B106D31C=24162C2706,1F20213B31D=58372668300D,6B123E31E=3F402D2E45,0708642331F=00,393A0E0F2B320=50184142444A533145,61624622567E321=4F4918671B4C533845,28292A4E121356322=43594D,5455633435360B48323=021B4B,3D113E324=0217415E5F1A691E,1457325=05,6A125C326=58165D19515203042F0C1D601E,323315327=251C1D1E,3C5A5B106D328=2C2706,1F20213B75329=58372668300D,6B123E32A=50183F402D2E45,0708642332B=4F4918,393A0E0F722B32C=4142444A5331,616246220B567B32D=01671B4C533845,28292A4E12135632E=011743594D,5455633435364832F=01024B,3D113E330=24160102415E5F1A691E,741457331=0105,6A12726E5C332=5D19515203042F0C1D601E,32331572333=251C1D1E,3C5A5B106D334=50182C2706,1F20213B335=4F491858372668300D,6B126F3E336=3F402D2E,0708640B23337=00,393A0E0F722B338=174142444A533145,616246762256727B73339=674C533845,28292A4E7612135633A=241643594D,5455633435364833B=024B,3D113E400=5001431B,5A5B1248401=490141425E5F2F4B,32336314402=4F01024A1D1E,396B3C130B57403=01025803044C1D1E,07085C404=01183F5D5960,0E0F10127F405=171819,1F20213E6D788075406=162526690645,28292A407=242C2D2E050D,6162343536647B408=3767680C5345,6A3A3B3D12155623409=4041441C5345,46562B40A=501B274D31,4E1140B=4951521A1B3038,5455223E40C=4F431B1E,5A5B0981120B6E4840D=41425E5F2F4B,3233631440E=02184A1D,396B3C135740F=010217185803044C1D,0708475C410=16013F585960,0E0F1012411=240119,1F20213E6D412=012526690645,28292A413=012C2D2E050D,6162343536646E7B414=503767681B0C5345,6A3A3B3D126F155623415=494041441B1C5345,46562B416=4F1B274D31,4E11710B417=51521A1B3038,54556C81223E418=18431B,5A5B1248419=171841425E5F2F4B,3233631441A=16024A1D1E,396B3C135741B=24025844044C1D1E,07085C41C=3F5D5960,0E0F101241D=19,1F20213E6D41E=50702526690645,28292A41F=492C2D2E050D,6162343536647D420=4F663767681B0C5345,6A3A3B3D12150B5623421=4041441B1C5345,46562B422=181B274D31,4E11423=171851521A3038,5455223E424=16431E,5A5B1248425=2441425E5F2F4B,32336314426=024A1D1E,396B3C1357427=025803044C1D1E,07085C428=503F5D5960,0E0F10126F429=4919,1F20213E6D42A=4F2526690645,28292A0B8242B=2C2D2E050D,616234353664727E7342C=183767681B0C53,6A3A3B3D1215562342D=0117184041441C5345,4647562B42E=1601274D31,4E1142F=240151521A3038,5455223E430=01431E,5A5B761248431=0141425E5F2F4B,32336314726E432=50024A1D1E,396B3C137257433=49025844044C1D1E,0708745C434=4F3F5D5960,0E0F10120B435=19,1F20213E6D75436=1825266906,28292A82437=17182C2D2E050D,616234353664727B73438=163767680C5345,6A3A3B3D1215567223439=244041441C5345,46562B43A=274D31,4E1143B=51521A3038,545576223E83500=012F4D31,54550708323312501=01586938,0E0F3C63502=16010241435E5F051D1E,641448503=01020C1D4B1E,6A28292A353615220B504=0117183F03041C,123457505=181927,3D103E5C506=5D25306045,1F20213B616213507=492C2667,6D508=503751522D2E530645,1256509=401B4A530D45,393A5A5B115650A=4142441A1B4C,462350B=681B59,6B4E3E2B50C=162F4D311E,5455070832330981126E50D=586938,0E0F3C0B50E=02171841435E5F051D,64144850F=0102180C1D4B,6A28292A35361522510=013F03041C,123457511=49011927,3D103E5C512=50015D25306045,1F20213B616213513=012C26671B,6E6D514=3751522D2E1B530645,126F56515=401B4A530D45,393A5A5B1156516=164142441A1B4C,467123517=6859,6B4E6C810B3E2B518=17182F4D31,54550708323312519=18586938,0E0F3C6351A=0241435E5F051D1E,64144851B=49020C1D4B1E,6A28292A3536152251C=503F03041C,12345751D=1927,3D103E5C51E=705D25306045,1F20213B61621351F=2C26671B,6D520=163751522D2E1B530645,1256521=404A530D45,393A5A5B110B56522=17184142441A1B,4623523=186859,6B4E3E2B524=2F4D311E,54550708323312525=49586938,0E0F3C63526=500241435E5F051D1E,641448527=020C1D4B1E,6A28292A35361522528=3F03041C,126F344757529=1927,3D103E5C52A=165D25306045,1F20213B616213658452B=662C2667,0B726D52C=17183751522D2E1B5306,125652D=0118404A530D45,393A5A5B115652E=014142441A4C,462352F=49016859,6B4E3E2B530=50012F4D311E,545507083233761285531=01586938,0E0F3C63726E532=0241435E5F051D1E,64147248533=020C1D4B1E,6A28292A7435361522534=163F03041C,123457535=1927,3D100B3E5C536=16185D253060,1F20213B61621378537=182C2667,726D538=3751522D2E530645,125672539=49404A530D45,393A5A5B115653A=504142441A4C,46472353B=681B59,6B4E763E2B600=241601304D,3C28292A4E1235361423601=01,54553B63342B602=0102681D311E,3D603=010241425E5F4A1D381E,64604=01183F434C,39127148605=4F49181951520304594B,61620B3E73606=50256745,5A5B102257607=172C69,1F20215C608=5D37261B05536045,6B111256609=402D2E1A1B0C5345,6B11125660A=24161B1C06,6A3A0E0F1360B=5841442F270D,3233463E60C=304D1E,3C28292A4E0981123536146E2360D=00,54553B63342B60E=0218681D31,3D60F=4F4901021841425E5F4A1D38,640B610=50013F434C,391248611=01171951520304594B,61623E612=0125671B45,5A5B102257613=012C1B69,1F20216E5C614=24165D37261B05536045,6B11126F56615=402D2E1A1B0C5345,070815566D616=1C06,6A3A0E0F1347617=5841442F270D,3233466C813E618=18304D,3C28292A4E1235361423619=4F4918,54553B63340B2B61A=5002681D311E,3D61B=021741425E5F4A1D381E,6461C=3F434C,39124861D=1951520304594B,61623E61E=24167025671B45,5A5B10225761F=2C1B69,1F20215C620=5D372605536045,6B111256621=402D2E1A0C5345,070815566D622=181B1C06,6A3A0E0F13623=4F49185841442F270D,3233460B3E624=50304D1E,3C28292A4E1235361423625=17,54553B63342B626=02681D311E,3D627=0241425E5F4A1D381E,64628=24163F434C,39126F48629=1951520304594B,61623E62A=256745,5A5B1022578662B=2C69,1F2021725C7562C=185D37261B055360,6B11125662D=4F490118402D2E1A0C5345,0708150B566D62E=50011C06,6A3A0E0F1362F=01175841442F270D,3233463E630=01304D1E,3C28292A4E761235361423631=01,54553B6334726E2B87632=241602681D311E,3D72633=0241425E5F4A1D381E,7464634=3F434C,39124748635=1951520304594B,61623E6573636=661825671B,5A5B10225786637=4F49182C69,1F20210B725C75638=505D372605536045,6B11125672639=17402D2E1A0C5345,070815566D63A=1B1C06,6A3A0E0F1363B=5841442F270D,323346763E700=0103404142445906,46701=01020D,4E14702=50015152694D1D1E,54553B23703=4901051D1E,5A5B2B1288704=4F0102415E5F0C31,6162636415705=6667681C38,6A6B3E706=4303042745,07080B48707=02304B,0E0F101112708=16171819,1F20135657709=24185825261B5345,28292A353622565C70A=025D2C2D2E2F4A60,3233893470B=374C,393A3C3D3E6D70C=503F4041424459061E,466E70D=49020D,4E1470E=4F5152694D1D,54553B70F=01051D,5A5B12132B710=0102415E5F0C31,61626364150B65711=0167681C38,6A6B3E712=162417184303041B2745,070848713=240102181B304B,0E0F1011126E714=191A1B5345,1F20215657715=5825261B5345,28292A353622565C717=49374C,393A3C3D126F473E6D718=4F3F404142445906,46719=020D,4E1471A=515269,1D1E71B=051D1E,5A5B12132B71C=16021718415E5F0C31,616263641571D=241867681B1C38,6A6B3E71E=4303041B2745,07084871F=021B30,0E0F101112720=50191A5345,1F20215657721=495825265345,28292A353622565C722=4F025D2C2D2E2F4A60,32338934723=374C,393A3C3D123E6D724=3F4041424459061E,46098A0B725=020D,4E7114726=1617185152694D1D1E,54553B23727=2418051D1E,5A5B12132B728=02415E5F0C31,616263641573729=67681B1C38,6A6B3E72A=504303042745,07084872B=4902304B,0E0F1011126F7272C=4F70191A1B,1F2021565772D=015825265345,28292A353622565C72E=01025D2C2D2E2F4A60,323389340B72F=01374C,393A3C3D6C8A123E6D730=160117183F4041424459061E,46731=240102180D,4E14726E732=5152694D1D1E,54553B767223733=051D1E,5A5B7612132B77734=5002415E5F0C31,6162636415735=4967681C38,6A6B473E736=4F4303041B27,7448737=02304B,0E0F10111272738=191A5345,1F20210B56725775739=5825265345,28292A353622565C73A=160217185D2C2D2E2F4A60,3233893473B=2418374C,393A3C3D123E6D800=50013F5D402760,6A3A5A5B22801=490102414430,466D802=014D1D061E,6B4E4714803=011D0D1E,54550708616212804=0102671B4A,0E0F6323805=41425E5F4C,8B2B806=16593145,3928292A113536807=025803041A1B38,1234130B808=181943681B695345,3D105648809=1718252F0553534B45,1F20213B32335680A=50022C260C,3C155780B=493751522D2E1C,12643E5C80C=3F5D4027601E,6A3A5A5B226E80D=02414430,466D80E=4D1D06,6B4E1480F=011D0D,5455070861621279810=16010266674A,0E0F6323811=0141425E5F1B4C,0B3E2B812=01181B593145,3928292A113536813=010217185803041A1B38,1234136E814=501943681B695345,3D105648815=49252F05534B45,1F20213B323356816=022C260C,3C1557817=3751522D2E1C,126F643E5C818=3F5D402760,6A3A5A5B22819=02414430,466D81A=164D1D061E,6B4E1481B=1D0D1E,545507086162120B6581C=0218671B4A,0E0F632381D=171841425E5F1B4C,3E2B81E=501B593145,3928292A11353681F=49025D03041A38,123413820=194368695345,3D10475648821=252F05534B45,1F20213B323356716=50025D2C2D2E2F4A60,32338934822=022C260C,3C1557823=3751522D2E1C,12643E5C824=163F5D4027601E,6A3A5A5B098A22825=02414430,46710B6D826=184D1D061E,6B4E14827=17181D0D1E,54550708616212828=5002671B4A,0E0F6323829=4941425E5F4C,3E2B82A=593145,3928292A11353682B=025803041A38,126F34137282C=701943681B6953,3D10564882D=01252F05534B45,1F2021613233567882E=1601022C260C,3C155782F=013751522D2E1C,6C8A12640B3E5C830=01183F5D4027601E,6A3A5A5B22831=01021718414430,46726E6D832=504D1D061E,6B4E761472833=491D0D1E,545507086162761273834=02674A,0E0F6323835=41425E5F4C,3E2B836=1B5931,3928292A11743536837=025803041A38,12341372838=16194368695345,3D10567248839=252F05534B45,1F20213B32330B567583A=02182C260C,3C155783B=17183751522D2E1C,12643E5C900=013F408C2E4C,0708641457901=010259,393A0E0F5C902=2416015D4142441D601E,61624635367B903=0167691D1E,28292A4E126D904=01021B054D06,5455637134220B905=580C0D,3D11153E906=17415E5F1A1B1C45,23907=4F49021B27,6A3B12472B908=501819515203042F30533145,323356909=1825533845,3C5A5B105690A=022C43,1F2021487C90B=3726684A4B,6B12133E90C=24163F402D2E4C1E,070864146E5790D=0259,393A0E0F5C90E=5D4142441D60,61624635360B7B90F=0167691D,28292A4E126D910=0102171B054D06,5455633422911=4F4901581B0C0D,3D11153E912=500118415E5F1A1B1C45,23913=0102181B27,6A3B126E2B914=19515203042F30533145,323356915=25533845,3C5A5B1056916=2416022C43,1F202148917=3726684A4B,6B126F133E918=3F402D2E4C,070864140B57919=0259,393A0E0F5C91A=175D4142441D601E,61624635367D91B=4F4966671B691D1E,28292A4E126D91C=5002181B054D06,545563342291D=18581B0C0D,3D11153E91E=415E5F1A1C45,2391F=0227,6A3B122B920=241619515203042F305331,323356921=25533845,3C5A5B1056922=022C43,1F20210B48788D923=3726684A4B,6B12133E924=173F402D2E4C1E,0708098A641457925=4F49022E,393A0E0F475C926=50185D4142441D601E,61624635367E927=18671B691D1E,28292A4E126D928=02054D06,5455633422929=580C0D,3D11153E92A=2416415E5F1A1C45,2392B=0227,6A3B126F722B92C=7019515203042F305331,32330B5692D=0125533845,3C5A5B105692E=0102162C43,1F2021487592F=4F49013726684A4B,6B6C8A12133E930=5001183F402D2E4C1E,0708641457931=01021859,393A0E0F726E5C932=5D4142441D601E,616246763536727B73933=67691D1E,28292A4E76126D934=241602054D06,5455633422935=580C0D,3D11153E936=415E5F1A1B1C,740B23937=0227,6A3B12722B938=1719515203042F30533145,32335672939=4F4925533845,3C5A5B105693A=5002182C43,1F20214893B=183726684A4B,6B12133EA00=160170182543261C,28292A48A01=240117182C2D2E274B,61623464147BA02=013F376768301D1E,6A3A3D1257A03=01584041441D1E,465CA04=015D4D60,4E1113A05=4951521A1B4A,54553E6DA06=4F501B4C0645,5A5B12A07=41425E5F2F590D,32336322A08=025345,396B3C0B5623A09=020304695345,0708562BA0A=16180531,0E0F10126FA0B=241618190C38,1F20213B3536103EA0C=2543261C1E,28292A6E48A0D=2C2D2E274B,61623464147BA0E=3F376768301D,6A3A3D124757A0F=4924584041441B1D,465CA10=4F50015D1B4D60,4E1113A11=0151521A1B4A,54553E6DA12=011B4C0645,5A5B120BA13=0141425E5F2F590D,323363226EA14=1602185345,396B3C5623A15=240217180304695345,0708562BA16=0531,0E0F1012A17=190C38,1F20213B3536153EA18=2543261C,28292A4882A19=49503F3767681B301D1E,6A3A3D1257A1A=4F503F3767681B301D1E,6A3A3D1257A1B=584041441B1D1E,465CA1C=5D1B4D60,4E1171130BA1D=51521A1B4A,54553E6DA1E=16184C0645,5A5B12A1F=24171841425E5F2F590D,32336322A20=025345,396B3C5623A21=020304695345,0708562BA22=0531,0E0F10128EA23=49190C38,1F20213B3536153E788FA24=4F502543261C1E,28292A48A25=2C2D2E274B,61623464147DA26=663F3767681B301D1E,6A3A3D120B57A27=584041441B1D1E,465CA28=16185D4D60,4E1113A29=24171851521A4A,54553E6DA2A=4C0645,5A5B7612A2B=41425E5F2F590D,3233632272A2C=0253,396B3C475623A2D=1601020304695345,0708562BA2E=4F50010531,0E0F1012A2F=01190C38,1F20213B3536153EA30=012543261C1E,28292A09900B4882A31=012C2D2E274B,6162346414726E7E73A32=16183F376768301D1E,6A3A3D126F7257A33=2417185D4041441D1E,465CA34=5D4D60,4E1113A35=51521A4A,5455763E6D83A36=4C06,5A5B12A37=4941425E5F2F590D,3233632272A38=4F50029145,396B3C567223A39=020304695345,070874562BA3A=0531,0E0F10120BA3B=190C38,1F20213B6C903536153E75B00=01701718254A31,1F20216162B01=0118582C26,674C38B02=50013F375152432D2E591D1E,121448B03=4901401B1D4B1E,393A5B11B04=014142441A69,4657B05=681B05,6B4E3E5CB06=682F0C4D6045,5455070832331215B07=1C,0E0F3C636DB08=1602415E5F27530645,3536136456B09=0230530D45,6A28292A0B56B0A=17180304,126F342223B0B=1819,3D103E2BB0C=50254A311E,1F202161626EB0D=49582C26,671B4C38B0E=3F375152432D2E591D,121448B0F=01401B1D4B,393A3B5A5B11B10=014142441A1B69,4657B11=01681B05,6B4E3E5CB12=16015D2F0C4D6045,5455070832331215B13=011C,0E0F3C630B6E6DB14=021718415E5F27530645,3536136456B15=021830530D45,6A28292A56B16=500304,12342223B17=4919,3D103E2BB18=254A31,1F4E21616278B19=582C26,671B4C38B1A=3F375152432D2E1B591D1E,121448B1B=401B1D4B1E,393A3B5A5B1147B1C=164142441A1B69,467157B1D=6805,6B4E0B3E5CB1E=17185D2F0C926045,5455070832331215B1F=181C,0E0F3C636DB20=5002415E5F27530645,3536136456B21=490230530D45,6A28292A56B22=0304,12342223B23=19,3D103E2BB24=254A311E,1F20136162B25=582C26671B4C38,00B26=163F375152432D2E1B591D1E,121448B27=401D4B1E,393A3B5A5B110BB28=17184142441A69,4657B29=186805,6B4E3E5CB2A=505D2F0C4D6045,54550708323376121585B2B=491C,0E0F3C63726DB2C=02415E5F275306,3536136456B2D=010230530D45,6A28292A56B2E=010304,12342223B2F=0119,3D103E2BB30=1601254A311E,1F2021616209906584B31=0166582C26674C38,0B726EB32=17183F375152432D2E591D1E,126F147248B33=18401D4B1E,393A3B5A5B11B34=504142441A69,4657B35=49681B05,6B4E763E5CB36=5D2F0C4D60,5455070832331215B37=1C,0E0F3C63726DB38=02415E5F27530645,353613645672B39=0230530D45,6A28292A744756B3A=160304,12342223B3B=19,3D106C900B3E2BC00=500170661825670C,5A5B1013141523C01=4F4901182C1C,1F2021222BC02=011637261B271D311E,6B1112C03=01402D2E1A1B311D381E,0708C04=0143,6A3A0E0F7148C05=41442F4B,32334635360B3EC06=24164A4D45,3C28292A4E1257C07=174C,545563345CC08=025D6859536045,3D56C09=0241425E5F5345,4764566DC0A=50186906,393B126FC0B=4F4918581951520304050D,61623EC0C=25671B0C1E,5A5B101314156E23C0D=2C1B1C,1F2021222BC0E=3F37264B1D31,6B1112C0F=01402D2E1A1B301D38,07080BC10=241601431B,6A3A0E0F48C11=011741442F4B,32334635363EC12=014A4D45,3C28292A4E1257C13=014C,545563346E5CC14=5002185D6804536045,3D56C15=4F49021841425E5F5345,64566DC16=6906,393B12C17=581951524404050D,61623EC18=25670C,5A5B101314152386C19=2C1B1C,1F2021220B2BC1A=24163F37261B271D31,6B1112C1B=17402D2E1A1B301D381E,0708C1C=43,6A3A0E0F48C1D=41582F4B,32334635363EC1E=50184A4D45,3C28292A4E1257C1F=4F49184C,545563345CC20=025D6859536045,3D56C21=0241425E5F5345,64566DC22=6906,393B12C23=581951520304050D,61620B3EC24=241625671B0C1E,5A5B1013141523C25=172C1B1C,1F2021222BC26=3F3726271D311E,6B1112C27=402D2E1A301D381E,0708C28=501843,6A5B0E0F48C29=4F491841442F4B,32334635363EC2A=4A4D45,3C28292A4E761257C2B=4C,54556334725C93C2C=025D68595360,3D56C2D=010241425E5F5345,640B566DC2E=2416016906,393B12C2F=0117581951520304050D,61623EC30=0125670C,5A5B1009901314152386C31=012C1C,1F202122726E2B75C32=50183F3726271D311E,6B11126F72C33=4F4918402D2E1A301D381E,070847C34=431B,6A3A0E0F48C35=41442F4B,3233467635363EC36=4A4D,3C28292A4E1257C37=4C,545563340B725CC38=2416025D6859536045,3D5672C39=021741425E5F5345,7464566DC3A=6906,393B12C3B=581951520304050D,61626C903E6573";
var Holiday = class _Holiday {
  constructor(day, name, work, target) {
    this._day = _Holiday._ymd(day);
    this._name = name;
    this._work = work;
    this._target = _Holiday._ymd(target);
  }
  static _ymd(s) {
    return s.indexOf("-") < 0 ? s.substring(0, 4) + "-" + s.substring(4, 6) + "-" + s.substring(6) : s;
  }
  getDay() {
    return this._day;
  }
  setDay(value) {
    this._day = _Holiday._ymd(value);
  }
  getName() {
    return this._name;
  }
  setName(value) {
    this._name = value;
  }
  isWork() {
    return this._work;
  }
  setWork(value) {
    this._work = value;
  }
  getTarget() {
    return this._target;
  }
  setTarget(value) {
    this._target = _Holiday._ymd(value);
  }
  toString() {
    return this._day + " " + this._name + (this._work ? "调休" : "") + " " + this._target;
  }
};
var _HolidayUtil = class {
  static _padding(n) {
    return (n < 10 ? "0" : "") + n;
  }
  static _findForward(key) {
    const start = _HolidayUtil._DATA_IN_USE.indexOf(key);
    if (start < 0) {
      return null;
    }
    let right = _HolidayUtil._DATA_IN_USE.substring(start);
    const n = right.length % _HolidayUtil._SIZE;
    if (n > 0) {
      right = right.substring(n);
    }
    while (0 !== right.indexOf(key) && right.length >= _HolidayUtil._SIZE) {
      right = right.substring(_HolidayUtil._SIZE);
    }
    return right;
  }
  static _findBackward(key) {
    const start = _HolidayUtil._DATA_IN_USE.lastIndexOf(key);
    if (start < 0) {
      return null;
    }
    let keySize = key.length;
    let left = _HolidayUtil._DATA_IN_USE.substring(0, start + keySize);
    let size = left.length;
    const n = size % _HolidayUtil._SIZE;
    if (n > 0) {
      left = left.substring(0, size - n);
    }
    size = left.length;
    while (size - keySize !== left.lastIndexOf(key) && size >= _HolidayUtil._SIZE) {
      left = left.substring(0, size - _HolidayUtil._SIZE);
      size = left.length;
    }
    return left;
  }
  static _buildHolidayForward(s) {
    const day = s.substring(0, 8);
    const name = _HolidayUtil._NAMES_IN_USE[s.charCodeAt(8) - _HolidayUtil._ZERO];
    const work = s.charCodeAt(9) === _HolidayUtil._ZERO;
    const target = s.substring(10, 18);
    return new Holiday(day, name, work, target);
  }
  static _buildHolidayBackward(s) {
    const size = s.length;
    const day = s.substring(size - 18, size - 10);
    const name = _HolidayUtil._NAMES_IN_USE[s.charCodeAt(size - 10) - _HolidayUtil._ZERO];
    const work = s.charCodeAt(size - 9) === _HolidayUtil._ZERO;
    const target = s.substring(size - 8);
    return new Holiday(day, name, work, target);
  }
  static _findHolidaysForward(key) {
    const l = [];
    let s = _HolidayUtil._findForward(key);
    if (null == s) {
      return l;
    }
    while (0 === s.indexOf(key)) {
      l.push(_HolidayUtil._buildHolidayForward(s));
      s = s.substring(_HolidayUtil._SIZE);
    }
    return l;
  }
  static _findHolidaysBackward(key) {
    let l = [];
    let s = _HolidayUtil._findBackward(key);
    if (null == s) {
      return l;
    }
    let size = s.length;
    let keySize = key.length;
    while (size - keySize === s.lastIndexOf(key)) {
      l.push(_HolidayUtil._buildHolidayBackward(s));
      s = s.substring(0, size - _HolidayUtil._SIZE);
      size = s.length;
    }
    l.reverse();
    return l;
  }
  static getHoliday(yearOrYmd, month = 0, day = 0) {
    let l;
    if (month == 0 || day == 0) {
      l = _HolidayUtil._findHolidaysForward((yearOrYmd + "").replace(/-/g, ""));
    } else {
      l = _HolidayUtil._findHolidaysForward(yearOrYmd + _HolidayUtil._padding(month) + _HolidayUtil._padding(day));
    }
    return l.length < 1 ? null : l[0];
  }
  static getHolidays(yearOrYmd, month = 0) {
    if (month == 0) {
      return _HolidayUtil._findHolidaysForward((yearOrYmd + "").replace(/-/g, ""));
    }
    return _HolidayUtil._findHolidaysForward(yearOrYmd + _HolidayUtil._padding(month));
  }
  static getHolidaysByTarget(yearOrYmd, month = 0) {
    if (month == 0) {
      return _HolidayUtil._findHolidaysBackward((yearOrYmd + "").replace(/-/g, ""));
    }
    return _HolidayUtil._findHolidaysBackward(yearOrYmd + _HolidayUtil._padding(month));
  }
  static _fixNames(names) {
    if (names) {
      _HolidayUtil._NAMES_IN_USE = names;
    }
  }
  static _fixData(data) {
    if (!data) {
      return;
    }
    const append = [];
    while (data.length >= _HolidayUtil._SIZE) {
      const segment = data.substring(0, _HolidayUtil._SIZE);
      const day = segment.substring(0, 8);
      const remove = _HolidayUtil._TAG_REMOVE == segment.substring(8, 9);
      const holiday = _HolidayUtil.getHoliday(day);
      if (!holiday) {
        if (!remove) {
          append.push(segment);
        }
      } else {
        let nameIndex = -1;
        for (let i = 0, j = _HolidayUtil._NAMES_IN_USE.length; i < j; i++) {
          if (_HolidayUtil._NAMES_IN_USE[i] === holiday.getName()) {
            nameIndex = i;
            break;
          }
        }
        if (nameIndex > -1) {
          const old = day + String.fromCharCode(nameIndex + _HolidayUtil._ZERO) + (holiday.isWork() ? "0" : "1") + holiday.getTarget().replace(/-/g, "");
          _HolidayUtil._DATA_IN_USE = _HolidayUtil._DATA_IN_USE.replace(new RegExp(old, "g"), remove ? "" : segment);
        }
      }
      data = data.substring(_HolidayUtil._SIZE);
    }
    if (append.length > 0) {
      _HolidayUtil._DATA_IN_USE += append.join("");
    }
  }
  static fix(a, b) {
    if (!b) {
      _HolidayUtil._fixData(a);
    } else {
      _HolidayUtil._fixNames(a);
      _HolidayUtil._fixData(b);
    }
  }
};
var HolidayUtil = _HolidayUtil;
HolidayUtil.NAMES = ["元旦节", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节", "国庆中秋", "抗战胜利日"];
HolidayUtil.DATA = "200112290020020101200112300020020101200201010120020101200201020120020101200201030120020101200202091020020212200202101020020212200202121120020212200202131120020212200202141120020212200202151120020212200202161120020212200202171120020212200202181120020212200204273020020501200204283020020501200205013120020501200205023120020501200205033120020501200205043120020501200205053120020501200205063120020501200205073120020501200209286020021001200209296020021001200210016120021001200210026120021001200210036120021001200210046120021001200210056120021001200210066120021001200210076120021001200301010120030101200302011120030201200302021120030201200302031120030201200302041120030201200302051120030201200302061120030201200302071120030201200302081020030201200302091020030201200304263020030501200304273020030501200305013120030501200305023120030501200305033120030501200305043120030501200305053120030501200305063120030501200305073120030501200309276020031001200309286020031001200310016120031001200310026120031001200310036120031001200310046120031001200310056120031001200310066120031001200310076120031001200401010120040101200401171020040122200401181020040122200401221120040122200401231120040122200401241120040122200401251120040122200401261120040122200401271120040122200401281120040122200405013120040501200405023120040501200405033120040501200405043120040501200405053120040501200405063120040501200405073120040501200405083020040501200405093020040501200410016120041001200410026120041001200410036120041001200410046120041001200410056120041001200410066120041001200410076120041001200410096020041001200410106020041001200501010120050101200501020120050101200501030120050101200502051020050209200502061020050209200502091120050209200502101120050209200502111120050209200502121120050209200502131120050209200502141120050209200502151120050209200504303020050501200505013120050501200505023120050501200505033120050501200505043120050501200505053120050501200505063120050501200505073120050501200505083020050501200510016120051001200510026120051001200510036120051001200510046120051001200510056120051001200510066120051001200510076120051001200510086020051001200510096020051001200512310020060101200601010120060101200601020120060101200601030120060101200601281020060129200601291120060129200601301120060129200601311120060129200602011120060129200602021120060129200602031120060129200602041120060129200602051020060129200604293020060501200604303020060501200605013120060501200605023120060501200605033120060501200605043120060501200605053120060501200605063120060501200605073120060501200609306020061001200610016120061001200610026120061001200610036120061001200610046120061001200610056120061001200610066120061001200610076120061001200610086020061001200612300020070101200612310020070101200701010120070101200701020120070101200701030120070101200702171020070218200702181120070218200702191120070218200702201120070218200702211120070218200702221120070218200702231120070218200702241120070218200702251020070218200704283020070501200704293020070501200705013120070501200705023120070501200705033120070501200705043120070501200705053120070501200705063120070501200705073120070501200709296020071001200709306020071001200710016120071001200710026120071001200710036120071001200710046120071001200710056120071001200710066120071001200710076120071001200712290020080101200712300120080101200712310120080101200801010120080101200802021020080206200802031020080206200802061120080206200802071120080206200802081120080206200802091120080206200802101120080206200802111120080206200802121120080206200804042120080404200804052120080404200804062120080404200805013120080501200805023120080501200805033120080501200805043020080501200806074120080608200806084120080608200806094120080608200809135120080914200809145120080914200809155120080914200809276020081001200809286020081001200809296120081001200809306120081001200810016120081001200810026120081001200810036120081001200810046120081001200810056120081001200901010120090101200901020120090101200901030120090101200901040020090101200901241020090125200901251120090125200901261120090125200901271120090125200901281120090125200901291120090125200901301120090125200901311120090125200902011020090125200904042120090404200904052120090404200904062120090404200905013120090501200905023120090501200905033120090501200905284120090528200905294120090528200905304120090528200905314020090528200909276020091001200910016120091001200910026120091001200910036120091001200910046120091001200910055120091003200910065120091003200910075120091003200910085120091003200910105020091003201001010120100101201001020120100101201001030120100101201002131120100213201002141120100213201002151120100213201002161120100213201002171120100213201002181120100213201002191120100213201002201020100213201002211020100213201004032120100405201004042120100405201004052120100405201005013120100501201005023120100501201005033120100501201006124020100616201006134020100616201006144120100616201006154120100616201006164120100616201009195020100922201009225120100922201009235120100922201009245120100922201009255020100922201009266020101001201010016120101001201010026120101001201010036120101001201010046120101001201010056120101001201010066120101001201010076120101001201010096020101001201101010120110101201101020120110101201101030120110101201101301020110203201102021120110203201102031120110203201102041120110203201102051120110203201102061120110203201102071120110203201102081120110203201102121020110203201104022020110405201104032120110405201104042120110405201104052120110405201104303120110501201105013120110501201105023120110501201106044120110606201106054120110606201106064120110606201109105120110912201109115120110912201109125120110912201110016120111001201110026120111001201110036120111001201110046120111001201110056120111001201110066120111001201110076120111001201110086020111001201110096020111001201112310020120101201201010120120101201201020120120101201201030120120101201201211020120123201201221120120123201201231120120123201201241120120123201201251120120123201201261120120123201201271120120123201201281120120123201201291020120123201203312020120404201204012020120404201204022120120404201204032120120404201204042120120404201204283020120501201204293120120501201204303120120501201205013120120501201205023020120501201206224120120623201206234120120623201206244120120623201209295020120930201209305120120930201210016120121001201210026120121001201210036120121001201210046120121001201210056120121001201210066120121001201210076120121001201210086020121001201301010120130101201301020120130101201301030120130101201301050020130101201301060020130101201302091120130210201302101120130210201302111120130210201302121120130210201302131120130210201302141120130210201302151120130210201302161020130210201302171020130210201304042120130404201304052120130404201304062120130404201304273020130501201304283020130501201304293120130501201304303120130501201305013120130501201306084020130612201306094020130612201306104120130612201306114120130612201306124120130612201309195120130919201309205120130919201309215120130919201309225020130919201309296020131001201310016120131001201310026120131001201310036120131001201310046120131001201310056120131001201310066120131001201310076120131001201401010120140101201401261020140131201401311120140131201402011120140131201402021120140131201402031120140131201402041120140131201402051120140131201402061120140131201402081020140131201404052120140405201404062120140405201404072120140405201405013120140501201405023120140501201405033120140501201405043020140501201405314120140602201406014120140602201406024120140602201409065120140908201409075120140908201409085120140908201409286020141001201410016120141001201410026120141001201410036120141001201410046120141004201410056120141001201410066120141001201410076120141001201410116020141001201501010120150101201501020120150101201501030120150101201501040020150101201502151020150219201502181120150219201502191120150219201502201120150219201502211120150219201502221120150219201502231120150219201502241120150219201502281020150219201504042120150405201504052120150405201504062120150405201505013120150501201505023120150501201505033120150501201506204120150620201506214120150620201506224120150620201509038120150903201509048120150903201509058120150903201509068020150903201509265120150927201509275120150927201510016120151001201510026120151001201510036120151001201510046120151004201510056120151001201510066120151001201510076120151001201510106020151001201601010120160101201601020120160101201601030120160101201602061020160208201602071120160208201602081120160208201602091120160208201602101120160208201602111120160208201602121120160208201602131120160208201602141020160208201604022120160404201604032120160404201604042120160404201604303120160501201605013120160501201605023120160501201606094120160609201606104120160609201606114120160609201606124020160609201609155120160915201609165120160915201609175120160915201609185020160915201610016120161001201610026120161001201610036120161001201610046120161001201610056120161001201610066120161001201610076120161001201610086020161001201610096020161001201612310120170101201701010120170101201701020120170101201701221020170128201701271120170128201701281120170128201701291120170128201701301120170128201701311120170128201702011120170128201702021120170128201702041020170128201704012020170404201704022120170404201704032120170404201704042120170404201704293120170501201704303120170501201705013120170501201705274020170530201705284120170530201705294120170530201705304120170530201709306020171001201710016120171001201710026120171001201710036120171001201710045120171004201710056120171001201710066120171001201710076120171001201710086120171001201712300120180101201712310120180101201801010120180101201802111020180216201802151120180216201802161120180216201802171120180216201802181120180216201802191120180216201802201120180216201802211120180216201802241020180216201804052120180405201804062120180405201804072120180405201804082020180405201804283020180501201804293120180501201804303120180501201805013120180501201806164120180618201806174120180618201806184120180618201809225120180924201809235120180924201809245120180924201809296020181001201809306020181001201810016120181001201810026120181001201810036120181001201810046120181001201810056120181001201810066120181001201810076120181001201812290020190101201812300120190101201812310120190101201901010120190101201902021020190205201902031020190205201902041120190205201902051120190205201902061120190205201902071120190205201902081120190205201902091120190205201902101120190205201904052120190405201904062120190405201904072120190405201904283020190501201905013120190501201905023120190501201905033120190501201905043120190501201905053020190501201906074120190607201906084120190607201906094120190607201909135120190913201909145120190913201909155120190913201909296020191001201910016120191001201910026120191001201910036120191001201910046120191001201910056120191001201910066120191001201910076120191001201910126020191001202001010120200101202001191020200125202001241120200125202001251120200125202001261120200125202001271120200125202001281120200125202001291120200125202001301120200125202001311120200125202002011120200125202002021120200125202004042120200404202004052120200404202004062120200404202004263020200501202005013120200501202005023120200501202005033120200501202005043120200501202005053120200501202005093020200501202006254120200625202006264120200625202006274120200625202006284020200625202009277020201001202010017120201001202010026120201001202010036120201001202010046120201001202010056120201001202010066120201001202010076120201001202010086120201001202010106020201001202101010120210101202101020120210101202101030120210101202102071020210212202102111120210212202102121120210212202102131120210212202102141120210212202102151120210212202102161120210212202102171120210212202102201020210212202104032120210404202104042120210404202104052120210404202104253020210501202105013120210501202105023120210501202105033120210501202105043120210501202105053120210501202105083020210501202106124120210614202106134120210614202106144120210614202109185020210921202109195120210921202109205120210921202109215120210921202109266020211001202110016120211001202110026120211001202110036120211001202110046120211001202110056120211001202110066120211001202110076120211001202110096020211001202201010120220101202201020120220101202201030120220101202201291020220201202201301020220201202201311120220201202202011120220201202202021120220201202202031120220201202202041120220201202202051120220201202202061120220201202204022020220405202204032120220405202204042120220405202204052120220405202204243020220501202204303120220501202205013120220501202205023120220501202205033120220501202205043120220501202205073020220501202206034120220603202206044120220603202206054120220603202209105120220910202209115120220910202209125120220910202210016120221001202210026120221001202210036120221001202210046120221001202210056120221001202210066120221001202210076120221001202210086020221001202210096020221001202212310120230101202301010120230101202301020120230101202301211120230122202301221120230122202301231120230122202301241120230122202301251120230122202301261120230122202301271120230122202301281020230122202301291020230122202304052120230405202304233020230501202304293120230501202304303120230501202305013120230501202305023120230501202305033120230501202305063020230501202306224120230622202306234120230622202306244120230622202306254020230622202309295120230929202309306120231001202310016120231001202310026120231001202310036120231001202310046120231001202310056120231001202310066120231001202310076020231001202310086020231001202312300120240101202312310120240101202401010120240101202402041020240210202402101120240210202402111120240210202402121120240210202402131120240210202402141120240210202402151120240210202402161120240210202402171120240210202402181020240210202404042120240404202404052120240404202404062120240404202404072020240404202404283020240501202405013120240501202405023120240501202405033120240501202405043120240501202405053120240501202405113020240501202406084120240610202406094120240610202406104120240610202409145020240917202409155120240917202409165120240917202409175120240917202409296020241001202410016120241001202410026120241001202410036120241001202410046120241001202410056120241001202410066120241001202410076120241001202410126020241001";
HolidayUtil._SIZE = 18;
HolidayUtil._ZERO = "0".charCodeAt(0);
HolidayUtil._TAG_REMOVE = "~";
HolidayUtil._NAMES_IN_USE = _HolidayUtil.NAMES;
HolidayUtil._DATA_IN_USE = _HolidayUtil.DATA;
var JieQi = class {
  constructor(name, solar) {
    let jie = false, qi = false, i, j;
    for (i = 0, j = LunarUtil.JIE_QI.length; i < j; i++) {
      if (LunarUtil.JIE_QI[i] === name) {
        if (i % 2 == 0) {
          qi = true;
        } else {
          jie = true;
        }
        break;
      }
    }
    this._name = name;
    this._solar = solar;
    this._jie = jie;
    this._qi = qi;
  }
  getName() {
    return this._name;
  }
  getSolar() {
    return this._solar;
  }
  setName(name) {
    this._name = name;
  }
  setSolar(solar) {
    this._solar = solar;
  }
  isJie() {
    return this._jie;
  }
  isQi() {
    return this._qi;
  }
  toString() {
    return this.getName();
  }
};
var LiuYue = class {
  constructor(liuNian, index) {
    this._liuNian = liuNian;
    this._index = index;
  }
  getIndex() {
    return this._index;
  }
  getMonthInChinese() {
    return LunarUtil.MONTH[this._index + 1];
  }
  getGanZhi() {
    const yearGanIndex = LunarUtil.find(this._liuNian.getGanZhi(), LunarUtil.GAN).index - 1;
    const offset = [2, 4, 6, 8, 0][yearGanIndex % 5];
    const gan = LunarUtil.GAN[(this._index + offset) % 10 + 1];
    const zhi = LunarUtil.ZHI[(this._index + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12 + 1];
    return gan + zhi;
  }
  getXun() {
    return LunarUtil.getXun(this.getGanZhi());
  }
  getXunKong() {
    return LunarUtil.getXunKong(this.getGanZhi());
  }
};
var TaoFestival = class {
  constructor(name, remark = "") {
    this._name = name;
    this._remark = remark;
  }
  getName() {
    return this._name;
  }
  getRemark() {
    return this._remark;
  }
  toString() {
    return this._name;
  }
  toFullString() {
    const l = [this._name];
    if (this._remark) {
      l.push("[" + this._remark + "]");
    }
    return l.join("");
  }
};
var TaoUtil = class {
};
TaoUtil.SAN_HUI = ["1-7", "7-7", "10-15"];
TaoUtil.SAN_YUAN = ["1-15", "7-15", "10-15"];
TaoUtil.WU_LA = ["1-1", "5-5", "7-7", "10-1", "12-8"];
TaoUtil.AN_WU = ["{dz.wei}", "{dz.xu}", "{dz.chen}", "{dz.yin}", "{dz.wu}", "{dz.zi}", "{dz.you}", "{dz.shen}", "{dz.si}", "{dz.hai}", "{dz.mao}", "{dz.chou}"];
TaoUtil.BA_HUI = {
  "{jz.bingWu}": "天会",
  "{jz.renWu}": "地会",
  "{jz.renZi}": "人会",
  "{jz.gengWu}": "日会",
  "{jz.gengShen}": "月会",
  "{jz.xinYou}": "星辰会",
  "{jz.jiaChen}": "五行会",
  "{jz.jiaXu}": "四时会"
};
TaoUtil.BA_JIE = {
  "{jq.liChun}": "东北方度仙上圣天尊同梵炁始青天君下降",
  "{jq.chunFen}": "东方玉宝星上天尊同青帝九炁天君下降",
  "{jq.liXia}": "东南方好生度命天尊同梵炁始丹天君下降",
  "{jq.xiaZhi}": "南方玄真万福天尊同赤帝三炁天君下降",
  "{jq.liQiu}": "西南方太灵虚皇天尊同梵炁始素天君下降",
  "{jq.qiuFen}": "西方太妙至极天尊同白帝七炁天君下降",
  "{jq.liDong}": "西北方无量太华天尊同梵炁始玄天君下降",
  "{jq.dongZhi}": "北方玄上玉宸天尊同黑帝五炁天君下降"
};
TaoUtil.FESTIVAL = {
  "1-1": [new TaoFestival("天腊之辰", "天腊，此日五帝会于东方九炁青天")],
  "1-3": [new TaoFestival("郝真人圣诞"), new TaoFestival("孙真人圣诞")],
  "1-5": [new TaoFestival("孙祖清静元君诞")],
  "1-7": [new TaoFestival("举迁赏会", "此日上元赐福，天官同地水二官考校罪福")],
  "1-9": [new TaoFestival("玉皇上帝圣诞")],
  "1-13": [new TaoFestival("关圣帝君飞升")],
  "1-15": [new TaoFestival("上元天官圣诞"), new TaoFestival("老祖天师圣诞")],
  "1-19": [new TaoFestival("长春邱真人(邱处机)圣诞")],
  "1-28": [new TaoFestival("许真君(许逊天师)圣诞")],
  "2-1": [new TaoFestival("勾陈天皇大帝圣诞"), new TaoFestival("长春刘真人(刘渊然)圣诞")],
  "2-2": [new TaoFestival("土地正神诞"), new TaoFestival("姜太公圣诞")],
  "2-3": [new TaoFestival("文昌梓潼帝君圣诞")],
  "2-6": [new TaoFestival("东华帝君圣诞")],
  "2-13": [new TaoFestival("度人无量葛真君圣诞")],
  "2-15": [new TaoFestival("太清道德天尊(太上老君)圣诞")],
  "2-19": [new TaoFestival("慈航真人圣诞")],
  "3-1": [new TaoFestival("谭祖(谭处端)长真真人圣诞")],
  "3-3": [new TaoFestival("玄天上帝圣诞")],
  "3-6": [new TaoFestival("眼光娘娘圣诞")],
  "3-15": [new TaoFestival("天师张大真人圣诞"), new TaoFestival("财神赵公元帅圣诞")],
  "3-16": [new TaoFestival("三茅真君得道之辰"), new TaoFestival("中岳大帝圣诞")],
  "3-18": [new TaoFestival("王祖(王处一)玉阳真人圣诞"), new TaoFestival("后土娘娘圣诞")],
  "3-19": [new TaoFestival("太阳星君圣诞")],
  "3-20": [new TaoFestival("子孙娘娘圣诞")],
  "3-23": [new TaoFestival("天后妈祖圣诞")],
  "3-26": [new TaoFestival("鬼谷先师诞")],
  "3-28": [new TaoFestival("东岳大帝圣诞")],
  "4-1": [new TaoFestival("长生谭真君成道之辰")],
  "4-10": [new TaoFestival("何仙姑圣诞")],
  "4-14": [new TaoFestival("吕祖纯阳祖师圣诞")],
  "4-15": [new TaoFestival("钟离祖师圣诞")],
  "4-18": [new TaoFestival("北极紫微大帝圣诞"), new TaoFestival("泰山圣母碧霞元君诞"), new TaoFestival("华佗神医先师诞")],
  "4-20": [new TaoFestival("眼光圣母娘娘诞")],
  "4-28": [new TaoFestival("神农先帝诞")],
  "5-1": [new TaoFestival("南极长生大帝圣诞")],
  "5-5": [new TaoFestival("地腊之辰", "地腊，此日五帝会于南方三炁丹天"), new TaoFestival("南方雷祖圣诞"), new TaoFestival("地祗温元帅圣诞"), new TaoFestival("雷霆邓天君圣诞")],
  "5-11": [new TaoFestival("城隍爷圣诞")],
  "5-13": [new TaoFestival("关圣帝君降神"), new TaoFestival("关平太子圣诞")],
  "5-18": [new TaoFestival("张天师圣诞")],
  "5-20": [new TaoFestival("马祖丹阳真人圣诞")],
  "5-29": [new TaoFestival("紫青白祖师圣诞")],
  "6-1": [new TaoFestival("南斗星君下降")],
  "6-2": [new TaoFestival("南斗星君下降")],
  "6-3": [new TaoFestival("南斗星君下降")],
  "6-4": [new TaoFestival("南斗星君下降")],
  "6-5": [new TaoFestival("南斗星君下降")],
  "6-6": [new TaoFestival("南斗星君下降")],
  "6-10": [new TaoFestival("刘海蟾祖师圣诞")],
  "6-15": [new TaoFestival("灵官王天君圣诞")],
  "6-19": [new TaoFestival("慈航(观音)成道日")],
  "6-23": [new TaoFestival("火神圣诞")],
  "6-24": [new TaoFestival("南极大帝中方雷祖圣诞"), new TaoFestival("关圣帝君圣诞")],
  "6-26": [new TaoFestival("二郎真君圣诞")],
  "7-7": [new TaoFestival("道德腊之辰", "道德腊，此日五帝会于西方七炁素天"), new TaoFestival("庆生中会", "此日中元赦罪，地官同天水二官考校罪福")],
  "7-12": [new TaoFestival("西方雷祖圣诞")],
  "7-15": [new TaoFestival("中元地官大帝圣诞")],
  "7-18": [new TaoFestival("王母娘娘圣诞")],
  "7-20": [new TaoFestival("刘祖(刘处玄)长生真人圣诞")],
  "7-22": [new TaoFestival("财帛星君文财神增福相公李诡祖圣诞")],
  "7-26": [new TaoFestival("张三丰祖师圣诞")],
  "8-1": [new TaoFestival("许真君飞升日")],
  "8-3": [new TaoFestival("九天司命灶君诞")],
  "8-5": [new TaoFestival("北方雷祖圣诞")],
  "8-10": [new TaoFestival("北岳大帝诞辰")],
  "8-15": [new TaoFestival("太阴星君诞")],
  "9-1": [new TaoFestival("北斗九皇降世之辰")],
  "9-2": [new TaoFestival("北斗九皇降世之辰")],
  "9-3": [new TaoFestival("北斗九皇降世之辰")],
  "9-4": [new TaoFestival("北斗九皇降世之辰")],
  "9-5": [new TaoFestival("北斗九皇降世之辰")],
  "9-6": [new TaoFestival("北斗九皇降世之辰")],
  "9-7": [new TaoFestival("北斗九皇降世之辰")],
  "9-8": [new TaoFestival("北斗九皇降世之辰")],
  "9-9": [new TaoFestival("北斗九皇降世之辰"), new TaoFestival("斗姥元君圣诞"), new TaoFestival("重阳帝君圣诞"), new TaoFestival("玄天上帝飞升"), new TaoFestival("酆都大帝圣诞")],
  "9-22": [new TaoFestival("增福财神诞")],
  "9-23": [new TaoFestival("萨翁真君圣诞")],
  "9-28": [new TaoFestival("五显灵官马元帅圣诞")],
  "10-1": [new TaoFestival("民岁腊之辰", "民岁腊，此日五帝会于北方五炁黑天"), new TaoFestival("东皇大帝圣诞")],
  "10-3": [new TaoFestival("三茅应化真君圣诞")],
  "10-6": [new TaoFestival("天曹诸司五岳五帝圣诞")],
  "10-15": [new TaoFestival("下元水官大帝圣诞"), new TaoFestival("建生大会", "此日下元解厄，水官同天地二官考校罪福")],
  "10-18": [new TaoFestival("地母娘娘圣诞")],
  "10-19": [new TaoFestival("长春邱真君飞升")],
  "10-20": [new TaoFestival("虚靖天师(即三十代天师弘悟张真人)诞")],
  "11-6": [new TaoFestival("西岳大帝圣诞")],
  "11-9": [new TaoFestival("湘子韩祖圣诞")],
  "11-11": [new TaoFestival("太乙救苦天尊圣诞")],
  "11-26": [new TaoFestival("北方五道圣诞")],
  "12-8": [new TaoFestival("王侯腊之辰", "王侯腊，此日五帝会于上方玄都玉京")],
  "12-16": [new TaoFestival("南岳大帝圣诞"), new TaoFestival("福德正神诞")],
  "12-20": [new TaoFestival("鲁班先师圣诞")],
  "12-21": [new TaoFestival("天猷上帝圣诞")],
  "12-22": [new TaoFestival("重阳祖师圣诞")],
  "12-23": [new TaoFestival("祭灶王", "最适宜谢旧年太岁，开启拜新年太岁")],
  "12-25": [new TaoFestival("玉帝巡天"), new TaoFestival("天神下降")],
  "12-29": [new TaoFestival("清静孙真君(孙不二)成道")]
};
var FotoFestival = class {
  constructor(name, result = "", everyMonth = false, remark = "") {
    this._name = name;
    this._result = result ? result : "";
    this._everyMonth = everyMonth;
    this._remark = remark;
  }
  getName() {
    return this._name;
  }
  getResult() {
    return this._result;
  }
  isEveryMonth() {
    return this._everyMonth;
  }
  getRemark() {
    return this._remark;
  }
  toString() {
    return this._name;
  }
  toFullString() {
    const l = [this._name];
    if (this._result) {
      l.push(this._result);
    }
    if (this._remark) {
      l.push(this._remark);
    }
    return l.join(" ");
  }
};
var _FotoUtil = class {
  static getXiu(month, day) {
    return _FotoUtil.XIU_27[(_FotoUtil.XIU_OFFSET[Math.abs(month) - 1] + day - 1) % _FotoUtil.XIU_27.length];
  }
};
var FotoUtil = _FotoUtil;
FotoUtil.DAY_ZHAI_GUAN_YIN = ["1-8", "2-7", "2-9", "2-19", "3-3", "3-6", "3-13", "4-22", "5-3", "5-17", "6-16", "6-18", "6-19", "6-23", "7-13", "8-16", "9-19", "9-23", "10-2", "11-19", "11-24", "12-25"];
FotoUtil.XIU_27 = [
  "{xx.jiao}",
  "{xx.kang}",
  "{xx.di}",
  "{xx.fang}",
  "{xx.xin}",
  "{xx.tail}",
  "{xx.ji}",
  "{xx.dou}",
  "{xx.nv}",
  "{xx.xu}",
  "{xx.wei}",
  "{xx.shi}",
  "{xx.qiang}",
  "{xx.kui}",
  "{xx.lou}",
  "{xx.vei}",
  "{xx.mao}",
  "{xx.bi}",
  "{xx.zi}",
  "{xx.can}",
  "{xx.jing}",
  "{xx.gui}",
  "{xx.liu}",
  "{xx.xing}",
  "{xx.zhang}",
  "{xx.yi}",
  "{xx.zhen}"
];
FotoUtil.XIU_OFFSET = [11, 13, 15, 17, 19, 21, 24, 0, 2, 4, 7, 9];
FotoUtil._DJ = "犯者夺纪";
FotoUtil._JS = "犯者减寿";
FotoUtil._SS = "犯者损寿";
FotoUtil._XL = "犯者削禄夺纪";
FotoUtil._JW = "犯者三年内夫妇俱亡";
FotoUtil._Y = new FotoFestival("杨公忌");
FotoUtil._T = new FotoFestival("四天王巡行", "", true);
FotoUtil._D = new FotoFestival("斗降", _FotoUtil._DJ, true);
FotoUtil._S = new FotoFestival("月朔", _FotoUtil._DJ, true);
FotoUtil._W = new FotoFestival("月望", _FotoUtil._DJ, true);
FotoUtil._H = new FotoFestival("月晦", _FotoUtil._JS, true);
FotoUtil._L = new FotoFestival("雷斋日", _FotoUtil._JS, true);
FotoUtil._J = new FotoFestival("九毒日", "犯者夭亡，奇祸不测");
FotoUtil._R = new FotoFestival("人神在阴", "犯者得病", true, "宜先一日即戒");
FotoUtil._M = new FotoFestival("司命奏事", _FotoUtil._JS, true, "如月小，即戒廿九");
FotoUtil._HH = new FotoFestival("月晦", _FotoUtil._JS, true, "如月小，即戒廿九");
FotoUtil.FESTIVAL = {
  "1-1": [new FotoFestival("天腊，玉帝校世人神气禄命", _FotoUtil._XL), _FotoUtil._S],
  "1-3": [new FotoFestival("万神都会", _FotoUtil._DJ), _FotoUtil._D],
  "1-5": [new FotoFestival("五虚忌")],
  "1-6": [new FotoFestival("六耗忌"), _FotoUtil._L],
  "1-7": [new FotoFestival("上会日", _FotoUtil._SS)],
  "1-8": [new FotoFestival("五殿阎罗天子诞", _FotoUtil._DJ), _FotoUtil._T],
  "1-9": [new FotoFestival("玉皇上帝诞", _FotoUtil._DJ)],
  "1-13": [_FotoUtil._Y],
  "1-14": [new FotoFestival("三元降", _FotoUtil._JS), _FotoUtil._T],
  "1-15": [new FotoFestival("三元降", _FotoUtil._JS), new FotoFestival("上元神会", _FotoUtil._DJ), _FotoUtil._W, _FotoUtil._T],
  "1-16": [new FotoFestival("三元降", _FotoUtil._JS)],
  "1-19": [new FotoFestival("长春真人诞")],
  "1-23": [new FotoFestival("三尸神奏事"), _FotoUtil._T],
  "1-25": [_FotoUtil._H, new FotoFestival("天地仓开日", "犯者损寿，子带疾")],
  "1-27": [_FotoUtil._D],
  "1-28": [_FotoUtil._R],
  "1-29": [_FotoUtil._T],
  "1-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "2-1": [new FotoFestival("一殿秦广王诞", _FotoUtil._DJ), _FotoUtil._S],
  "2-2": [new FotoFestival("万神都会", _FotoUtil._DJ), new FotoFestival("福德土地正神诞", "犯者得祸")],
  "2-3": [new FotoFestival("文昌帝君诞", _FotoUtil._XL), _FotoUtil._D],
  "2-6": [new FotoFestival("东华帝君诞"), _FotoUtil._L],
  "2-8": [new FotoFestival("释迦牟尼佛出家", _FotoUtil._DJ), new FotoFestival("三殿宋帝王诞", _FotoUtil._DJ), new FotoFestival("张大帝诞", _FotoUtil._DJ), _FotoUtil._T],
  "2-11": [_FotoUtil._Y],
  "2-14": [_FotoUtil._T],
  "2-15": [new FotoFestival("释迦牟尼佛涅槃", _FotoUtil._XL), new FotoFestival("太上老君诞", _FotoUtil._XL), new FotoFestival("月望", _FotoUtil._XL, true), _FotoUtil._T],
  "2-17": [new FotoFestival("东方杜将军诞")],
  "2-18": [new FotoFestival("四殿五官王诞", _FotoUtil._XL), new FotoFestival("至圣先师孔子讳辰", _FotoUtil._XL)],
  "2-19": [new FotoFestival("观音大士诞", _FotoUtil._DJ)],
  "2-21": [new FotoFestival("普贤菩萨诞")],
  "2-23": [_FotoUtil._T],
  "2-25": [_FotoUtil._H],
  "2-27": [_FotoUtil._D],
  "2-28": [_FotoUtil._R],
  "2-29": [_FotoUtil._T],
  "2-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "3-1": [new FotoFestival("二殿楚江王诞", _FotoUtil._DJ), _FotoUtil._S],
  "3-3": [new FotoFestival("玄天上帝诞", _FotoUtil._DJ), _FotoUtil._D],
  "3-6": [_FotoUtil._L],
  "3-8": [new FotoFestival("六殿卞城王诞", _FotoUtil._DJ), _FotoUtil._T],
  "3-9": [new FotoFestival("牛鬼神出", "犯者产恶胎"), _FotoUtil._Y],
  "3-12": [new FotoFestival("中央五道诞")],
  "3-14": [_FotoUtil._T],
  "3-15": [new FotoFestival("昊天上帝诞", _FotoUtil._DJ), new FotoFestival("玄坛诞", _FotoUtil._DJ), _FotoUtil._W, _FotoUtil._T],
  "3-16": [new FotoFestival("准提菩萨诞", _FotoUtil._DJ)],
  "3-19": [new FotoFestival("中岳大帝诞"), new FotoFestival("后土娘娘诞"), new FotoFestival("三茅降")],
  "3-20": [new FotoFestival("天地仓开日", _FotoUtil._SS), new FotoFestival("子孙娘娘诞")],
  "3-23": [_FotoUtil._T],
  "3-25": [_FotoUtil._H],
  "3-27": [new FotoFestival("七殿泰山王诞"), _FotoUtil._D],
  "3-28": [_FotoUtil._R, new FotoFestival("苍颉至圣先师诞", _FotoUtil._XL), new FotoFestival("东岳大帝诞")],
  "3-29": [_FotoUtil._T],
  "3-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "4-1": [new FotoFestival("八殿都市王诞", _FotoUtil._DJ), _FotoUtil._S],
  "4-3": [_FotoUtil._D],
  "4-4": [new FotoFestival("万神善会", "犯者失瘼夭胎"), new FotoFestival("文殊菩萨诞")],
  "4-6": [_FotoUtil._L],
  "4-7": [new FotoFestival("南斗、北斗、西斗同降", _FotoUtil._JS), _FotoUtil._Y],
  "4-8": [new FotoFestival("释迦牟尼佛诞", _FotoUtil._DJ), new FotoFestival("万神善会", "犯者失瘼夭胎"), new FotoFestival("善恶童子降", "犯者血死"), new FotoFestival("九殿平等王诞"), _FotoUtil._T],
  "4-14": [new FotoFestival("纯阳祖师诞", _FotoUtil._JS), _FotoUtil._T],
  "4-15": [_FotoUtil._W, new FotoFestival("钟离祖师诞"), _FotoUtil._T],
  "4-16": [new FotoFestival("天地仓开日", _FotoUtil._SS)],
  "4-17": [new FotoFestival("十殿转轮王诞", _FotoUtil._DJ)],
  "4-18": [new FotoFestival("天地仓开日", _FotoUtil._SS), new FotoFestival("紫徽大帝诞", _FotoUtil._SS)],
  "4-20": [new FotoFestival("眼光圣母诞")],
  "4-23": [_FotoUtil._T],
  "4-25": [_FotoUtil._H],
  "4-27": [_FotoUtil._D],
  "4-28": [_FotoUtil._R],
  "4-29": [_FotoUtil._T],
  "4-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "5-1": [new FotoFestival("南极长生大帝诞", _FotoUtil._DJ), _FotoUtil._S],
  "5-3": [_FotoUtil._D],
  "5-5": [new FotoFestival("地腊", _FotoUtil._XL), new FotoFestival("五帝校定生人官爵", _FotoUtil._XL), _FotoUtil._J, _FotoUtil._Y],
  "5-6": [_FotoUtil._J, _FotoUtil._L],
  "5-7": [_FotoUtil._J],
  "5-8": [new FotoFestival("南方五道诞"), _FotoUtil._T],
  "5-11": [new FotoFestival("天地仓开日", _FotoUtil._SS), new FotoFestival("天下都城隍诞")],
  "5-12": [new FotoFestival("炳灵公诞")],
  "5-13": [new FotoFestival("关圣降", _FotoUtil._XL)],
  "5-14": [new FotoFestival("夜子时为天地交泰", _FotoUtil._JW), _FotoUtil._T],
  "5-15": [_FotoUtil._W, _FotoUtil._J, _FotoUtil._T],
  "5-16": [new FotoFestival("九毒日", _FotoUtil._JW), new FotoFestival("天地元气造化万物之辰", _FotoUtil._JW)],
  "5-17": [_FotoUtil._J],
  "5-18": [new FotoFestival("张天师诞")],
  "5-22": [new FotoFestival("孝娥神诞", _FotoUtil._DJ)],
  "5-23": [_FotoUtil._T],
  "5-25": [_FotoUtil._J, _FotoUtil._H],
  "5-26": [_FotoUtil._J],
  "5-27": [_FotoUtil._J, _FotoUtil._D],
  "5-28": [_FotoUtil._R],
  "5-29": [_FotoUtil._T],
  "5-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "6-1": [_FotoUtil._S],
  "6-3": [new FotoFestival("韦驮菩萨圣诞"), _FotoUtil._D, _FotoUtil._Y],
  "6-5": [new FotoFestival("南赡部洲转大轮", _FotoUtil._SS)],
  "6-6": [new FotoFestival("天地仓开日", _FotoUtil._SS), _FotoUtil._L],
  "6-8": [_FotoUtil._T],
  "6-10": [new FotoFestival("金粟如来诞")],
  "6-14": [_FotoUtil._T],
  "6-15": [_FotoUtil._W, _FotoUtil._T],
  "6-19": [new FotoFestival("观世音菩萨成道", _FotoUtil._DJ)],
  "6-23": [new FotoFestival("南方火神诞", "犯者遭回禄"), _FotoUtil._T],
  "6-24": [new FotoFestival("雷祖诞", _FotoUtil._XL), new FotoFestival("关帝诞", _FotoUtil._XL)],
  "6-25": [_FotoUtil._H],
  "6-27": [_FotoUtil._D],
  "6-28": [_FotoUtil._R],
  "6-29": [_FotoUtil._T],
  "6-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "7-1": [_FotoUtil._S, _FotoUtil._Y],
  "7-3": [_FotoUtil._D],
  "7-5": [new FotoFestival("中会日", _FotoUtil._SS, false, "一作初七")],
  "7-6": [_FotoUtil._L],
  "7-7": [new FotoFestival("道德腊", _FotoUtil._XL), new FotoFestival("五帝校生人善恶", _FotoUtil._XL), new FotoFestival("魁星诞", _FotoUtil._XL)],
  "7-8": [_FotoUtil._T],
  "7-10": [new FotoFestival("阴毒日", "", false, "大忌")],
  "7-12": [new FotoFestival("长真谭真人诞")],
  "7-13": [new FotoFestival("大势至菩萨诞", _FotoUtil._JS)],
  "7-14": [new FotoFestival("三元降", _FotoUtil._JS), _FotoUtil._T],
  "7-15": [_FotoUtil._W, new FotoFestival("三元降", _FotoUtil._DJ), new FotoFestival("地官校籍", _FotoUtil._DJ), _FotoUtil._T],
  "7-16": [new FotoFestival("三元降", _FotoUtil._JS)],
  "7-18": [new FotoFestival("西王母诞", _FotoUtil._DJ)],
  "7-19": [new FotoFestival("太岁诞", _FotoUtil._DJ)],
  "7-22": [new FotoFestival("增福财神诞", _FotoUtil._XL)],
  "7-23": [_FotoUtil._T],
  "7-25": [_FotoUtil._H],
  "7-27": [_FotoUtil._D],
  "7-28": [_FotoUtil._R],
  "7-29": [_FotoUtil._Y, _FotoUtil._T],
  "7-30": [new FotoFestival("地藏菩萨诞", _FotoUtil._DJ), _FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "8-1": [_FotoUtil._S, new FotoFestival("许真君诞")],
  "8-3": [_FotoUtil._D, new FotoFestival("北斗诞", _FotoUtil._XL), new FotoFestival("司命灶君诞", "犯者遭回禄")],
  "8-5": [new FotoFestival("雷声大帝诞", _FotoUtil._DJ)],
  "8-6": [_FotoUtil._L],
  "8-8": [_FotoUtil._T],
  "8-10": [new FotoFestival("北斗大帝诞")],
  "8-12": [new FotoFestival("西方五道诞")],
  "8-14": [_FotoUtil._T],
  "8-15": [_FotoUtil._W, new FotoFestival("太明朝元", "犯者暴亡", false, "宜焚香守夜"), _FotoUtil._T],
  "8-16": [new FotoFestival("天曹掠刷真君降", "犯者贫夭")],
  "8-18": [new FotoFestival("天人兴福之辰", "", false, "宜斋戒，存想吉事")],
  "8-23": [new FotoFestival("汉恒候张显王诞"), _FotoUtil._T],
  "8-24": [new FotoFestival("灶君夫人诞")],
  "8-25": [_FotoUtil._H],
  "8-27": [_FotoUtil._D, new FotoFestival("至圣先师孔子诞", _FotoUtil._XL), _FotoUtil._Y],
  "8-28": [_FotoUtil._R, new FotoFestival("四天会事")],
  "8-29": [_FotoUtil._T],
  "8-30": [new FotoFestival("诸神考校", "犯者夺算"), _FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "9-1": [_FotoUtil._S, new FotoFestival("南斗诞", _FotoUtil._XL), new FotoFestival("北斗九星降世", _FotoUtil._DJ, false, "此九日俱宜斋戒")],
  "9-3": [_FotoUtil._D, new FotoFestival("五瘟神诞")],
  "9-6": [_FotoUtil._L],
  "9-8": [_FotoUtil._T],
  "9-9": [new FotoFestival("斗母诞", _FotoUtil._XL), new FotoFestival("酆都大帝诞"), new FotoFestival("玄天上帝飞升")],
  "9-10": [new FotoFestival("斗母降", _FotoUtil._DJ)],
  "9-11": [new FotoFestival("宜戒")],
  "9-13": [new FotoFestival("孟婆尊神诞")],
  "9-14": [_FotoUtil._T],
  "9-15": [_FotoUtil._W, _FotoUtil._T],
  "9-17": [new FotoFestival("金龙四大王诞", "犯者遭水厄")],
  "9-19": [new FotoFestival("日宫月宫会合", _FotoUtil._JS), new FotoFestival("观世音菩萨诞", _FotoUtil._JS)],
  "9-23": [_FotoUtil._T],
  "9-25": [_FotoUtil._H, _FotoUtil._Y],
  "9-27": [_FotoUtil._D],
  "9-28": [_FotoUtil._R],
  "9-29": [_FotoUtil._T],
  "9-30": [new FotoFestival("药师琉璃光佛诞", "犯者危疾"), _FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "10-1": [_FotoUtil._S, new FotoFestival("民岁腊", _FotoUtil._DJ), new FotoFestival("四天王降", "犯者一年内死")],
  "10-3": [_FotoUtil._D, new FotoFestival("三茅诞")],
  "10-5": [new FotoFestival("下会日", _FotoUtil._JS), new FotoFestival("达摩祖师诞", _FotoUtil._JS)],
  "10-6": [_FotoUtil._L, new FotoFestival("天曹考察", _FotoUtil._DJ)],
  "10-8": [new FotoFestival("佛涅槃日", "", false, "大忌色欲"), _FotoUtil._T],
  "10-10": [new FotoFestival("四天王降", "犯者一年内死")],
  "10-11": [new FotoFestival("宜戒")],
  "10-14": [new FotoFestival("三元降", _FotoUtil._JS), _FotoUtil._T],
  "10-15": [_FotoUtil._W, new FotoFestival("三元降", _FotoUtil._DJ), new FotoFestival("下元水府校籍", _FotoUtil._DJ), _FotoUtil._T],
  "10-16": [new FotoFestival("三元降", _FotoUtil._JS), _FotoUtil._T],
  "10-23": [_FotoUtil._Y, _FotoUtil._T],
  "10-25": [_FotoUtil._H],
  "10-27": [_FotoUtil._D, new FotoFestival("北极紫徽大帝降")],
  "10-28": [_FotoUtil._R],
  "10-29": [_FotoUtil._T],
  "10-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "11-1": [_FotoUtil._S],
  "11-3": [_FotoUtil._D],
  "11-4": [new FotoFestival("至圣先师孔子诞", _FotoUtil._XL)],
  "11-6": [new FotoFestival("西岳大帝诞")],
  "11-8": [_FotoUtil._T],
  "11-11": [new FotoFestival("天地仓开日", _FotoUtil._DJ), new FotoFestival("太乙救苦天尊诞", _FotoUtil._DJ)],
  "11-14": [_FotoUtil._T],
  "11-15": [new FotoFestival("月望", "上半夜犯男死 下半夜犯女死"), new FotoFestival("四天王巡行", "上半夜犯男死 下半夜犯女死")],
  "11-17": [new FotoFestival("阿弥陀佛诞")],
  "11-19": [new FotoFestival("太阳日宫诞", "犯者得奇祸")],
  "11-21": [_FotoUtil._Y],
  "11-23": [new FotoFestival("张仙诞", "犯者绝嗣"), _FotoUtil._T],
  "11-25": [new FotoFestival("掠刷大夫降", "犯者遭大凶"), _FotoUtil._H],
  "11-26": [new FotoFestival("北方五道诞")],
  "11-27": [_FotoUtil._D],
  "11-28": [_FotoUtil._R],
  "11-29": [_FotoUtil._T],
  "11-30": [_FotoUtil._HH, _FotoUtil._M, _FotoUtil._T],
  "12-1": [_FotoUtil._S],
  "12-3": [_FotoUtil._D],
  "12-6": [new FotoFestival("天地仓开日", _FotoUtil._JS), _FotoUtil._L],
  "12-7": [new FotoFestival("掠刷大夫降", "犯者得恶疾")],
  "12-8": [new FotoFestival("王侯腊", _FotoUtil._DJ), new FotoFestival("释迦如来成佛之辰"), _FotoUtil._T, new FotoFestival("初旬内戊日，亦名王侯腊", _FotoUtil._DJ)],
  "12-12": [new FotoFestival("太素三元君朝真")],
  "12-14": [_FotoUtil._T],
  "12-15": [_FotoUtil._W, _FotoUtil._T],
  "12-16": [new FotoFestival("南岳大帝诞")],
  "12-19": [_FotoUtil._Y],
  "12-20": [new FotoFestival("天地交道", "犯者促寿")],
  "12-21": [new FotoFestival("天猷上帝诞")],
  "12-23": [new FotoFestival("五岳诞降"), _FotoUtil._T],
  "12-24": [new FotoFestival("司今朝天奏人善恶", "犯者得大祸")],
  "12-25": [new FotoFestival("三清玉帝同降，考察善恶", "犯者得奇祸"), _FotoUtil._H],
  "12-27": [_FotoUtil._D],
  "12-28": [_FotoUtil._R],
  "12-29": [new FotoFestival("华严菩萨诞"), _FotoUtil._T],
  "12-30": [new FotoFestival("诸神下降，察访善恶", "犯者男女俱亡")]
};
FotoUtil.OTHER_FESTIVAL = {
  "1-1": ["弥勒菩萨圣诞"],
  "1-6": ["定光佛圣诞"],
  "2-8": ["释迦牟尼佛出家"],
  "2-15": ["释迦牟尼佛涅槃"],
  "2-19": ["观世音菩萨圣诞"],
  "2-21": ["普贤菩萨圣诞"],
  "3-16": ["准提菩萨圣诞"],
  "4-4": ["文殊菩萨圣诞"],
  "4-8": ["释迦牟尼佛圣诞"],
  "4-15": ["佛吉祥日"],
  "4-28": ["药王菩萨圣诞"],
  "5-13": ["伽蓝菩萨圣诞"],
  "6-3": ["韦驮菩萨圣诞"],
  "6-19": ["观音菩萨成道"],
  "7-13": ["大势至菩萨圣诞"],
  "7-15": ["佛欢喜日"],
  "7-24": ["龙树菩萨圣诞"],
  "7-30": ["地藏菩萨圣诞"],
  "8-15": ["月光菩萨圣诞"],
  "8-22": ["燃灯佛圣诞"],
  "9-9": ["摩利支天菩萨圣诞"],
  "9-19": ["观世音菩萨出家"],
  "9-30": ["药师琉璃光佛圣诞"],
  "10-5": ["达摩祖师圣诞"],
  "10-20": ["文殊菩萨出家"],
  "11-17": ["阿弥陀佛圣诞"],
  "11-19": ["日光菩萨圣诞"],
  "12-8": ["释迦牟尼佛成道"],
  "12-23": ["监斋菩萨圣诞"],
  "12-29": ["华严菩萨圣诞"]
};
var NineStarUtil = class {
};
NineStarUtil.NUMBER = [
  "{n.one}",
  "{n.two}",
  "{n.three}",
  "{n.four}",
  "{n.five}",
  "{n.six}",
  "{n.seven}",
  "{n.eight}",
  "{n.nine}"
];
NineStarUtil.WU_XING = [
  "{wx.shui}",
  "{wx.tu}",
  "{wx.mu}",
  "{wx.mu}",
  "{wx.tu}",
  "{wx.jin}",
  "{wx.jin}",
  "{wx.tu}",
  "{wx.huo}"
];
NineStarUtil.POSITION = [
  "{bg.kan}",
  "{bg.kun}",
  "{bg.zhen}",
  "{bg.xun}",
  "{ps.center}",
  "{bg.qian}",
  "{bg.dui}",
  "{bg.gen}",
  "{bg.li}"
];
NineStarUtil.LUCK_XUAN_KONG = [
  "{s.goodLuck}",
  "{s.badLuck}",
  "{s.badLuck}",
  "{s.goodLuck}",
  "{s.badLuck}",
  "{s.goodLuck}",
  "{s.badLuck}",
  "{s.goodLuck}",
  "{s.goodLuck}"
];
NineStarUtil.YIN_YANG_QI_MEN = [
  "{s.yang}",
  "{s.yin}",
  "{s.yang}",
  "{s.yang}",
  "{s.yang}",
  "{s.yin}",
  "{s.yin}",
  "{s.yang}",
  "{s.yin}"
];
NineStarUtil.COLOR = [
  "{s.white}",
  "{s.black}",
  "{s.blue}",
  "{s.green}",
  "{s.yellow}",
  "{s.white}",
  "{s.red}",
  "{s.white}",
  "{s.purple}"
];
var _I18n = class {
  static updateArray(c) {
    const v = _I18n._ARRAYS[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const arr = v[k];
      for (let i = 0, j = arr.length; i < j; i++) {
        o[k][i] = arr[i].replace(/{(.[^}]*)}/g, ($0, $1) => {
          return _I18n.getMessage($1);
        });
      }
    }
  }
  static updateStringDictionary(c) {
    const v = _I18n._DICT_STRING[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = v[k];
      for (let key in dict) {
        const i = key.replace(/{(.[^}]*)}/g, ($0, $1) => {
          return _I18n.getMessage($1);
        });
        o[k][i] = dict[key].replace(/{(.[^}]*)}/g, ($0, $1) => {
          return _I18n.getMessage($1);
        });
      }
    }
  }
  static updateNumberDictionary(c) {
    const v = _I18n._DICT_NUMBER[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = v[k];
      for (let key in dict) {
        const i = key.replace(/{(.[^}]*)}/g, ($0, $1) => {
          return _I18n.getMessage($1);
        });
        o[k][i] = dict[key];
      }
    }
  }
  static updateArrayDictionary(c) {
    const v = _I18n._DICT_ARRAY[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = v[k];
      for (let key in dict) {
        const x = key.replace(/{(.[^}]*)}/g, ($0, $1) => {
          return _I18n.getMessage($1);
        });
        const arr = dict[key];
        for (let i = 0, j = arr.length; i < j; i++) {
          arr[i] = arr[i].replace(/{(.[^}]*)}/g, ($0, $1) => {
            return _I18n.getMessage($1);
          });
        }
        o[k][x] = arr;
      }
    }
  }
  static update() {
    for (let c in _I18n._ARRAYS) {
      _I18n.updateArray(c);
    }
    for (let c in _I18n._DICT_STRING) {
      _I18n.updateStringDictionary(c);
    }
    for (let c in _I18n._DICT_NUMBER) {
      _I18n.updateNumberDictionary(c);
    }
    for (let c in _I18n._DICT_ARRAY) {
      _I18n.updateArrayDictionary(c);
    }
  }
  static setMessages(lang, messages) {
    if (!messages) {
      return;
    }
    if (!_I18n._MESSAGES[lang]) {
      _I18n._MESSAGES[lang] = {};
    }
    for (const key in messages) {
      _I18n._MESSAGES[lang][key] = messages[key];
    }
    _I18n.update();
  }
  static getMessage(key) {
    let s = _I18n._MESSAGES[_I18n._LANG][key];
    if (void 0 == s) {
      s = _I18n._MESSAGES[_I18n._DEFAULT_LANG][key];
    }
    if (void 0 == s) {
      s = key;
    }
    return s;
  }
  static setLanguage(lang) {
    if (_I18n._MESSAGES[lang]) {
      _I18n._LANG = lang;
      _I18n.update();
    }
  }
  static getLanguage() {
    return _I18n._LANG;
  }
  static initArray(c) {
    const v = _I18n._ARRAYS[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      v[k].length = 0;
      const arr = o[k];
      for (let i = 0, j = arr.length; i < j; i++) {
        v[k].push(arr[i]);
      }
    }
  }
  static initArrayDictionary(c) {
    const v = _I18n._DICT_ARRAY[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = o[k];
      for (let key in dict) {
        v[k][key] = dict[key];
      }
    }
  }
  static initStringDictionary(c) {
    const v = _I18n._DICT_STRING[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = o[k];
      for (let key in dict) {
        v[k][key] = dict[key];
      }
    }
  }
  static initNumberDictionary(c) {
    const v = _I18n._DICT_NUMBER[c];
    const o = _I18n._OBJS[c];
    for (let k in v) {
      const dict = o[k];
      for (let key in dict) {
        v[k][key] = dict[key];
      }
    }
  }
  static init() {
    if (_I18n._INIT) {
      return;
    }
    _I18n._INIT = true;
    for (let c in _I18n._ARRAYS) {
      _I18n.initArray(c);
    }
    for (let c in _I18n._DICT_STRING) {
      _I18n.initStringDictionary(c);
    }
    for (let c in _I18n._DICT_NUMBER) {
      _I18n.initNumberDictionary(c);
    }
    for (let c in _I18n._DICT_ARRAY) {
      _I18n.initArrayDictionary(c);
    }
    _I18n.setLanguage(_I18n._DEFAULT_LANG);
  }
};
var I18n = _I18n;
I18n._DEFAULT_LANG = "chs";
I18n._INIT = false;
I18n._MESSAGES = {
  "chs": {
    "tg.jia": "甲",
    "tg.yi": "乙",
    "tg.bing": "丙",
    "tg.ding": "丁",
    "tg.wu": "戊",
    "tg.ji": "己",
    "tg.geng": "庚",
    "tg.xin": "辛",
    "tg.ren": "壬",
    "tg.gui": "癸",
    "dz.zi": "子",
    "dz.chou": "丑",
    "dz.yin": "寅",
    "dz.mao": "卯",
    "dz.chen": "辰",
    "dz.si": "巳",
    "dz.wu": "午",
    "dz.wei": "未",
    "dz.shen": "申",
    "dz.you": "酉",
    "dz.xu": "戌",
    "dz.hai": "亥",
    "zx.jian": "建",
    "zx.chu": "除",
    "zx.man": "满",
    "zx.ping": "平",
    "zx.ding": "定",
    "zx.zhi": "执",
    "zx.po": "破",
    "zx.wei": "危",
    "zx.cheng": "成",
    "zx.shou": "收",
    "zx.kai": "开",
    "zx.bi": "闭",
    "jz.jiaZi": "甲子",
    "jz.yiChou": "乙丑",
    "jz.bingYin": "丙寅",
    "jz.dingMao": "丁卯",
    "jz.wuChen": "戊辰",
    "jz.jiSi": "己巳",
    "jz.gengWu": "庚午",
    "jz.xinWei": "辛未",
    "jz.renShen": "壬申",
    "jz.guiYou": "癸酉",
    "jz.jiaXu": "甲戌",
    "jz.yiHai": "乙亥",
    "jz.bingZi": "丙子",
    "jz.dingChou": "丁丑",
    "jz.wuYin": "戊寅",
    "jz.jiMao": "己卯",
    "jz.gengChen": "庚辰",
    "jz.xinSi": "辛巳",
    "jz.renWu": "壬午",
    "jz.guiWei": "癸未",
    "jz.jiaShen": "甲申",
    "jz.yiYou": "乙酉",
    "jz.bingXu": "丙戌",
    "jz.dingHai": "丁亥",
    "jz.wuZi": "戊子",
    "jz.jiChou": "己丑",
    "jz.gengYin": "庚寅",
    "jz.xinMao": "辛卯",
    "jz.renChen": "壬辰",
    "jz.guiSi": "癸巳",
    "jz.jiaWu": "甲午",
    "jz.yiWei": "乙未",
    "jz.bingShen": "丙申",
    "jz.dingYou": "丁酉",
    "jz.wuXu": "戊戌",
    "jz.jiHai": "己亥",
    "jz.gengZi": "庚子",
    "jz.xinChou": "辛丑",
    "jz.renYin": "壬寅",
    "jz.guiMao": "癸卯",
    "jz.jiaChen": "甲辰",
    "jz.yiSi": "乙巳",
    "jz.bingWu": "丙午",
    "jz.dingWei": "丁未",
    "jz.wuShen": "戊申",
    "jz.jiYou": "己酉",
    "jz.gengXu": "庚戌",
    "jz.xinHai": "辛亥",
    "jz.renZi": "壬子",
    "jz.guiChou": "癸丑",
    "jz.jiaYin": "甲寅",
    "jz.yiMao": "乙卯",
    "jz.bingChen": "丙辰",
    "jz.dingSi": "丁巳",
    "jz.wuWu": "戊午",
    "jz.jiWei": "己未",
    "jz.gengShen": "庚申",
    "jz.xinYou": "辛酉",
    "jz.renXu": "壬戌",
    "jz.guiHai": "癸亥",
    "sx.rat": "鼠",
    "sx.ox": "牛",
    "sx.tiger": "虎",
    "sx.rabbit": "兔",
    "sx.dragon": "龙",
    "sx.snake": "蛇",
    "sx.horse": "马",
    "sx.goat": "羊",
    "sx.monkey": "猴",
    "sx.rooster": "鸡",
    "sx.dog": "狗",
    "sx.pig": "猪",
    "dw.long": "龙",
    "dw.niu": "牛",
    "dw.gou": "狗",
    "dw.yang": "羊",
    "dw.tu": "兔",
    "dw.shu": "鼠",
    "dw.ji": "鸡",
    "dw.ma": "马",
    "dw.hu": "虎",
    "dw.zhu": "猪",
    "dw.hou": "猴",
    "dw.she": "蛇",
    "dw.huLi": "狐",
    "dw.yan": "燕",
    "dw.bao": "豹",
    "dw.yuan": "猿",
    "dw.yin": "蚓",
    "dw.lu": "鹿",
    "dw.wu": "乌",
    "dw.jiao": "蛟",
    "dw.lang": "狼",
    "dw.fu": "蝠",
    "dw.zhang": "獐",
    "dw.xu": "獝",
    "dw.xie": "獬",
    "dw.han": "犴",
    "dw.he": "貉",
    "dw.zhi": "彘",
    "wx.jin": "金",
    "wx.mu": "木",
    "wx.shui": "水",
    "wx.huo": "火",
    "wx.tu": "土",
    "wx.ri": "日",
    "wx.yue": "月",
    "n.zero": "〇",
    "n.one": "一",
    "n.two": "二",
    "n.three": "三",
    "n.four": "四",
    "n.five": "五",
    "n.six": "六",
    "n.seven": "七",
    "n.eight": "八",
    "n.nine": "九",
    "n.ten": "十",
    "n.eleven": "十一",
    "n.twelve": "十二",
    "d.one": "初一",
    "d.two": "初二",
    "d.three": "初三",
    "d.four": "初四",
    "d.five": "初五",
    "d.six": "初六",
    "d.seven": "初七",
    "d.eight": "初八",
    "d.nine": "初九",
    "d.ten": "初十",
    "d.eleven": "十一",
    "d.twelve": "十二",
    "d.thirteen": "十三",
    "d.fourteen": "十四",
    "d.fifteen": "十五",
    "d.sixteen": "十六",
    "d.seventeen": "十七",
    "d.eighteen": "十八",
    "d.nighteen": "十九",
    "d.twenty": "二十",
    "d.twentyOne": "廿一",
    "d.twentyTwo": "廿二",
    "d.twentyThree": "廿三",
    "d.twentyFour": "廿四",
    "d.twentyFive": "廿五",
    "d.twentySix": "廿六",
    "d.twentySeven": "廿七",
    "d.twentyEight": "廿八",
    "d.twentyNine": "廿九",
    "d.thirty": "三十",
    "m.one": "正",
    "m.two": "二",
    "m.three": "三",
    "m.four": "四",
    "m.five": "五",
    "m.six": "六",
    "m.seven": "七",
    "m.eight": "八",
    "m.nine": "九",
    "m.ten": "十",
    "m.eleven": "冬",
    "m.twelve": "腊",
    "w.sun": "日",
    "w.mon": "一",
    "w.tues": "二",
    "w.wed": "三",
    "w.thur": "四",
    "w.fri": "五",
    "w.sat": "六",
    "xz.aries": "白羊",
    "xz.taurus": "金牛",
    "xz.gemini": "双子",
    "xz.cancer": "巨蟹",
    "xz.leo": "狮子",
    "xz.virgo": "处女",
    "xz.libra": "天秤",
    "xz.scorpio": "天蝎",
    "xz.sagittarius": "射手",
    "xz.capricornus": "摩羯",
    "xz.aquarius": "水瓶",
    "xz.pisces": "双鱼",
    "bg.qian": "乾",
    "bg.kun": "坤",
    "bg.zhen": "震",
    "bg.xun": "巽",
    "bg.kan": "坎",
    "bg.li": "离",
    "bg.gen": "艮",
    "bg.dui": "兑",
    "ps.center": "中",
    "ps.dong": "东",
    "ps.nan": "南",
    "ps.xi": "西",
    "ps.bei": "北",
    "ps.zhong": "中宫",
    "ps.zhengDong": "正东",
    "ps.zhengNan": "正南",
    "ps.zhengXi": "正西",
    "ps.zhengBei": "正北",
    "ps.dongBei": "东北",
    "ps.dongNan": "东南",
    "ps.xiBei": "西北",
    "ps.xiNan": "西南",
    "ps.wai": "外",
    "ps.fangNei": "房内",
    "jq.dongZhi": "冬至",
    "jq.xiaoHan": "小寒",
    "jq.daHan": "大寒",
    "jq.liChun": "立春",
    "jq.yuShui": "雨水",
    "jq.jingZhe": "惊蛰",
    "jq.chunFen": "春分",
    "jq.qingMing": "清明",
    "jq.guYu": "谷雨",
    "jq.liXia": "立夏",
    "jq.xiaoMan": "小满",
    "jq.mangZhong": "芒种",
    "jq.xiaZhi": "夏至",
    "jq.xiaoShu": "小暑",
    "jq.daShu": "大暑",
    "jq.liQiu": "立秋",
    "jq.chuShu": "处暑",
    "jq.baiLu": "白露",
    "jq.qiuFen": "秋分",
    "jq.hanLu": "寒露",
    "jq.shuangJiang": "霜降",
    "jq.liDong": "立冬",
    "jq.xiaoXue": "小雪",
    "jq.daXue": "大雪",
    "sn.qingLong": "青龙",
    "sn.baiHu": "白虎",
    "sn.zhuQue": "朱雀",
    "sn.xuanWu": "玄武",
    "sn.mingTang": "明堂",
    "sn.tianXing": "天刑",
    "sn.tianDe": "天德",
    "sn.jinKui": "金匮",
    "sn.yuTang": "玉堂",
    "sn.siMing": "司命",
    "sn.tianLao": "天牢",
    "sn.gouChen": "勾陈",
    "sn.tianEn": "天恩",
    "sn.muCang": "母仓",
    "sn.shiYang": "时阳",
    "sn.shengQi": "生气",
    "sn.yiHou": "益后",
    "sn.zaiSha": "灾煞",
    "sn.tianHuo": "天火",
    "sn.siJi": "四忌",
    "sn.baLong": "八龙",
    "sn.fuRi": "复日",
    "sn.xuShi": "续世",
    "sn.yueSha": "月煞",
    "sn.yueXu": "月虚",
    "sn.xueZhi": "血支",
    "sn.tianZei": "天贼",
    "sn.wuXu": "五虚",
    "sn.tuFu": "土符",
    "sn.guiJi": "归忌",
    "sn.xueJi": "血忌",
    "sn.yueDe": "月德",
    "sn.yueEn": "月恩",
    "sn.siXiang": "四相",
    "sn.wangRi": "王日",
    "sn.tianCang": "天仓",
    "sn.buJiang": "不将",
    "sn.wuHe": "五合",
    "sn.mingFeiDui": "鸣吠对",
    "sn.yueJian": "月建",
    "sn.xiaoShi": "小时",
    "sn.tuHu": "土府",
    "sn.wangWang": "往亡",
    "sn.yaoAn": "要安",
    "sn.siShen": "死神",
    "sn.tianMa": "天马",
    "sn.jiuHu": "九虎",
    "sn.qiNiao": "七鸟",
    "sn.liuShe": "六蛇",
    "sn.guanRi": "官日",
    "sn.jiQi": "吉期",
    "sn.yuYu": "玉宇",
    "sn.daShi": "大时",
    "sn.daBai": "大败",
    "sn.xianChi": "咸池",
    "sn.shouRi": "守日",
    "sn.tianWu": "天巫",
    "sn.fuDe": "福德",
    "sn.liuYi": "六仪",
    "sn.jinTang": "金堂",
    "sn.yanDui": "厌对",
    "sn.zhaoYao": "招摇",
    "sn.jiuKong": "九空",
    "sn.jiuKan": "九坎",
    "sn.jiuJiao": "九焦",
    "sn.xiangRi": "相日",
    "sn.baoGuang": "宝光",
    "sn.tianGang": "天罡",
    "sn.yueXing": "月刑",
    "sn.yueHai": "月害",
    "sn.youHuo": "游祸",
    "sn.chongRi": "重日",
    "sn.shiDe": "时德",
    "sn.minRi": "民日",
    "sn.sanHe": "三合",
    "sn.linRi": "临日",
    "sn.shiYin": "时阴",
    "sn.mingFei": "鸣吠",
    "sn.siQi": "死气",
    "sn.diNang": "地囊",
    "sn.yueDeHe": "月德合",
    "sn.jingAn": "敬安",
    "sn.puHu": "普护",
    "sn.jieShen": "解神",
    "sn.xiaoHao": "小耗",
    "sn.tianDeHe": "天德合",
    "sn.yueKong": "月空",
    "sn.yiMa": "驿马",
    "sn.tianHou": "天后",
    "sn.chuShen": "除神",
    "sn.yuePo": "月破",
    "sn.daHao": "大耗",
    "sn.wuLi": "五离",
    "sn.yinDe": "阴德",
    "sn.fuSheng": "福生",
    "sn.tianLi": "天吏",
    "sn.zhiSi": "致死",
    "sn.yuanWu": "元武",
    "sn.yangDe": "阳德",
    "sn.tianXi": "天喜",
    "sn.tianYi": "天医",
    "sn.yueYan": "月厌",
    "sn.diHuo": "地火",
    "sn.fourHit": "四击",
    "sn.daSha": "大煞",
    "sn.daHui": "大会",
    "sn.tianYuan": "天愿",
    "sn.liuHe": "六合",
    "sn.wuFu": "五富",
    "sn.shengXin": "圣心",
    "sn.heKui": "河魁",
    "sn.jieSha": "劫煞",
    "sn.siQiong": "四穷",
    "sn.chuShuiLong": "触水龙",
    "sn.baFeng": "八风",
    "sn.tianShe": "天赦",
    "sn.wuMu": "五墓",
    "sn.baZhuan": "八专",
    "sn.yinCuo": "阴错",
    "sn.siHao": "四耗",
    "sn.yangCuo": "阳错",
    "sn.siFei": "四废",
    "sn.sanYin": "三阴",
    "sn.xiaoHui": "小会",
    "sn.yinDaoChongYang": "阴道冲阳",
    "sn.danYin": "单阴",
    "sn.guChen": "孤辰",
    "sn.yinWei": "阴位",
    "sn.xingHen": "行狠",
    "sn.liaoLi": "了戾",
    "sn.jueYin": "绝阴",
    "sn.chunYang": "纯阳",
    "sn.suiBo": "岁薄",
    "sn.yinYangJiaoPo": "阴阳交破",
    "sn.yinYangJuCuo": "阴阳俱错",
    "sn.yinYangJiChong": "阴阳击冲",
    "sn.zhuZhen": "逐阵",
    "sn.yangCuoYinChong": "阳错阴冲",
    "sn.qiFu": "七符",
    "sn.tianGou": "天狗",
    "sn.chengRi": "成日",
    "sn.tianFu": "天符",
    "sn.guYang": "孤阳",
    "sn.jueYang": "绝阳",
    "sn.chunYin": "纯阴",
    "sn.yinShen": "阴神",
    "sn.jieChu": "解除",
    "sn.yangPoYinChong": "阳破阴冲",
    "ss.biJian": "比肩",
    "ss.jieCai": "劫财",
    "ss.shiShen": "食神",
    "ss.shangGuan": "伤官",
    "ss.pianCai": "偏财",
    "ss.zhengCai": "正财",
    "ss.qiSha": "七杀",
    "ss.zhengGuan": "正官",
    "ss.pianYin": "偏印",
    "ss.zhengYin": "正印",
    "s.none": "无",
    "s.huangDao": "黄道",
    "s.heiDao": "黑道",
    "s.goodLuck": "吉",
    "s.badLuck": "凶",
    "s.yin": "阴",
    "s.yang": "阳",
    "s.white": "白",
    "s.black": "黑",
    "s.blue": "碧",
    "s.green": "绿",
    "s.yellow": "黄",
    "s.red": "赤",
    "s.purple": "紫",
    "jr.chuXi": "除夕",
    "jr.chunJie": "春节",
    "jr.yuanXiao": "元宵节",
    "jr.longTou": "龙头节",
    "jr.duanWu": "端午节",
    "jr.qiXi": "七夕节",
    "jr.zhongQiu": "中秋节",
    "jr.chongYang": "重阳节",
    "jr.laBa": "腊八节",
    "jr.yuanDan": "元旦节",
    "jr.qingRen": "情人节",
    "jr.fuNv": "妇女节",
    "jr.zhiShu": "植树节",
    "jr.xiaoFei": "消费者权益日",
    "jr.wuYi": "劳动节",
    "jr.qingNian": "青年节",
    "jr.erTong": "儿童节",
    "jr.yuRen": "愚人节",
    "jr.jianDang": "建党节",
    "jr.jianJun": "建军节",
    "jr.jiaoShi": "教师节",
    "jr.guoQing": "国庆节",
    "jr.wanShengYe": "万圣节前夜",
    "jr.wanSheng": "万圣节",
    "jr.pingAn": "平安夜",
    "jr.shengDan": "圣诞节",
    "ds.changSheng": "长生",
    "ds.muYu": "沐浴",
    "ds.guanDai": "冠带",
    "ds.linGuan": "临官",
    "ds.diWang": "帝旺",
    "ds.shuai": "衰",
    "ds.bing": "病",
    "ds.si": "死",
    "ds.mu": "墓",
    "ds.jue": "绝",
    "ds.tai": "胎",
    "ds.yang": "养",
    "h.first": "初候",
    "h.second": "二候",
    "h.third": "三候",
    "h.qiuYinJie": "蚯蚓结",
    "h.miJiao": "麋角解",
    "h.shuiQuan": "水泉动",
    "h.yanBei": "雁北乡",
    "h.queShi": "鹊始巢",
    "h.zhiShi": "雉始雊",
    "h.jiShi": "鸡始乳",
    "h.zhengNiao": "征鸟厉疾",
    "h.shuiZe": "水泽腹坚",
    "h.dongFeng": "东风解冻",
    "h.zheChongShiZhen": "蛰虫始振",
    "h.yuZhi": "鱼陟负冰",
    "h.taJi": "獭祭鱼",
    "h.houYan": "候雁北",
    "h.caoMuMengDong": "草木萌动",
    "h.taoShi": "桃始华",
    "h.cangGeng": "仓庚鸣",
    "h.yingHua": "鹰化为鸠",
    "h.xuanNiaoZhi": "玄鸟至",
    "h.leiNai": "雷乃发声",
    "h.shiDian": "始电",
    "h.tongShi": "桐始华",
    "h.tianShu": "田鼠化为鴽",
    "h.hongShi": "虹始见",
    "h.pingShi": "萍始生",
    "h.mingJiu": "鸣鸠拂奇羽",
    "h.daiSheng": "戴胜降于桑",
    "h.louGuo": "蝼蝈鸣",
    "h.qiuYinChu": "蚯蚓出",
    "h.wangGua": "王瓜生",
    "h.kuCai": "苦菜秀",
    "h.miCao": "靡草死",
    "h.maiQiu": "麦秋至",
    "h.tangLang": "螳螂生",
    "h.juShi": "鵙始鸣",
    "h.fanShe": "反舌无声",
    "h.luJia": "鹿角解",
    "h.tiaoShi": "蜩始鸣",
    "h.banXia": "半夏生",
    "h.wenFeng": "温风至",
    "h.xiShuai": "蟋蟀居壁",
    "h.yingShi": "鹰始挚",
    "h.fuCao": "腐草为萤",
    "h.tuRun": "土润溽暑",
    "h.daYu": "大雨行时",
    "h.liangFeng": "凉风至",
    "h.baiLu": "白露降",
    "h.hanChan": "寒蝉鸣",
    "h.yingNai": "鹰乃祭鸟",
    "h.tianDi": "天地始肃",
    "h.heNai": "禾乃登",
    "h.hongYanLai": "鸿雁来",
    "h.xuanNiaoGui": "玄鸟归",
    "h.qunNiao": "群鸟养羞",
    "h.leiShi": "雷始收声",
    "h.zheChongPiHu": "蛰虫坯户",
    "h.shuiShiHe": "水始涸",
    "h.hongYanLaiBin": "鸿雁来宾",
    "h.queRu": "雀入大水为蛤",
    "h.juYou": "菊有黄花",
    "h.caiNai": "豺乃祭兽",
    "h.caoMuHuangLuo": "草木黄落",
    "h.zheChongXianFu": "蛰虫咸俯",
    "h.shuiShiBing": "水始冰",
    "h.diShi": "地始冻",
    "h.zhiRu": "雉入大水为蜃",
    "h.hongCang": "虹藏不见",
    "h.tianQi": "天气上升地气下降",
    "h.biSe": "闭塞而成冬",
    "h.heDan": "鹖鴠不鸣",
    "h.huShi": "虎始交",
    "h.liTing": "荔挺出",
    "ts.zhan": "占",
    "ts.hu": "户",
    "ts.win": "窗",
    "ts.fang": "房",
    "ts.chuang": "床",
    "ts.lu": "炉",
    "ts.zao": "灶",
    "ts.dui": "碓",
    "ts.mo": "磨",
    "ts.xi": "栖",
    "ts.chu": "厨",
    "ts.ce": "厕",
    "ts.cang": "仓",
    "ts.cangKu": "仓库",
    "ts.daMen": "大门",
    "ts.men": "门",
    "ts.tang": "堂",
    "ly.xianSheng": "先胜",
    "ly.xianFu": "先负",
    "ly.youYin": "友引",
    "ly.foMie": "佛灭",
    "ly.daAn": "大安",
    "ly.chiKou": "赤口",
    "yj.jiSi": "祭祀",
    "yj.qiFu": "祈福",
    "yj.qiuSi": "求嗣",
    "yj.kaiGuang": "开光",
    "yj.suHui": "塑绘",
    "yj.qiJiao": "齐醮",
    "yj.zhaiJiao": "斋醮",
    "yj.muYu": "沐浴",
    "yj.chouShen": "酬神",
    "yj.zaoMiao": "造庙",
    "yj.siZhao": "祀灶",
    "yj.fenXiang": "焚香",
    "yj.xieTu": "谢土",
    "yj.chuHuo": "出火",
    "yj.diaoKe": "雕刻",
    "yj.jiaQu": "嫁娶",
    "yj.DingHun": "订婚",
    "yj.naCai": "纳采",
    "yj.wenMing": "问名",
    "yj.naXu": "纳婿",
    "yj.guiNing": "归宁",
    "yj.anChuang": "安床",
    "yj.heZhang": "合帐",
    "yj.guanJi": "冠笄",
    "yj.dingMeng": "订盟",
    "yj.jinRenKou": "进人口",
    "yj.caiYi": "裁衣",
    "yj.wanMian": "挽面",
    "yj.kaiRong": "开容",
    "yj.xiuFen": "修坟",
    "yj.qiZuan": "启钻",
    "yj.poTu": "破土",
    "yj.anZang": "安葬",
    "yj.liBei": "立碑",
    "yj.chengFu": "成服",
    "yj.chuFu": "除服",
    "yj.kaiShengFen": "开生坟",
    "yj.heShouMu": "合寿木",
    "yj.ruLian": "入殓",
    "yj.yiJiu": "移柩",
    "yj.puDu": "普渡",
    "yj.ruZhai": "入宅",
    "yj.anXiang": "安香",
    "yj.anMen": "安门",
    "yj.xiuZao": "修造",
    "yj.qiJi": "起基",
    "yj.dongTu": "动土",
    "yj.shangLiang": "上梁",
    "yj.shuZhu": "竖柱",
    "yj.kaiJing": "开井开池",
    "yj.zuoBei": "作陂放水",
    "yj.chaiXie": "拆卸",
    "yj.poWu": "破屋",
    "yj.huaiYuan": "坏垣",
    "yj.buYuan": "补垣",
    "yj.faMuZuoLiang": "伐木做梁",
    "yj.zuoZhao": "作灶",
    "yj.jieChu": "解除",
    "yj.kaiZhuYan": "开柱眼",
    "yj.chuanPing": "穿屏扇架",
    "yj.gaiWuHeJi": "盖屋合脊",
    "yj.kaiCe": "开厕",
    "yj.zaoCang": "造仓",
    "yj.saiXue": "塞穴",
    "yj.pingZhi": "平治道涂",
    "yj.zaoQiao": "造桥",
    "yj.zuoCe": "作厕",
    "yj.zhuDi": "筑堤",
    "yj.kaiChi": "开池",
    "yj.faMu": "伐木",
    "yj.kaiQu": "开渠",
    "yj.jueJing": "掘井",
    "yj.saoShe": "扫舍",
    "yj.fangShui": "放水",
    "yj.zaoWu": "造屋",
    "yj.heJi": "合脊",
    "yj.zaoChuChou": "造畜稠",
    "yj.xiuMen": "修门",
    "yj.dingSang": "定磉",
    "yj.zuoLiang": "作梁",
    "yj.xiuShi": "修饰垣墙",
    "yj.jiaMa": "架马",
    "yj.kaiShi": "开市",
    "yj.guaBian": "挂匾",
    "yj.naChai": "纳财",
    "yj.qiuCai": "求财",
    "yj.kaiCang": "开仓",
    "yj.maiChe": "买车",
    "yj.zhiChan": "置产",
    "yj.guYong": "雇庸",
    "yj.chuHuoCai": "出货财",
    "yj.anJiXie": "安机械",
    "yj.zaoCheQi": "造车器",
    "yj.jingLuo": "经络",
    "yj.yunNiang": "酝酿",
    "yj.zuoRan": "作染",
    "yj.guZhu": "鼓铸",
    "yj.zaoChuan": "造船",
    "yj.geMi": "割蜜",
    "yj.zaiZhong": "栽种",
    "yj.quYu": "取渔",
    "yj.jieWang": "结网",
    "yj.muYang": "牧养",
    "yj.anDuiWei": "安碓磑",
    "yj.xiYi": "习艺",
    "yj.ruXue": "入学",
    "yj.liFa": "理发",
    "yj.tanBing": "探病",
    "yj.jianGui": "见贵",
    "yj.chengChuan": "乘船",
    "yj.duShui": "渡水",
    "yj.zhenJiu": "针灸",
    "yj.chuXing": "出行",
    "yj.yiXi": "移徙",
    "yj.fenJu": "分居",
    "yj.TiTou": "剃头",
    "yj.zhengShou": "整手足甲",
    "yj.naChu": "纳畜",
    "yj.buZhuo": "捕捉",
    "yj.tianLie": "畋猎",
    "yj.jiaoNiuMa": "教牛马",
    "yj.huiQinYou": "会亲友",
    "yj.fuRen": "赴任",
    "yj.qiuYi": "求医",
    "yj.zhiBing": "治病",
    "yj.ciSong": "词讼",
    "yj.qiJiDongTu": "起基动土",
    "yj.poWuHuaiYuan": "破屋坏垣",
    "yj.gaiWu": "盖屋",
    "yj.zaoCangKu": "造仓库",
    "yj.liQuanJiaoYi": "立券交易",
    "yj.jiaoYi": "交易",
    "yj.liQuan": "立券",
    "yj.anJi": "安机",
    "yj.huiYou": "会友",
    "yj.qiuYiLiaoBing": "求医疗病",
    "yj.zhuShi": "诸事不宜",
    "yj.yuShi": "馀事勿取",
    "yj.xingSang": "行丧",
    "yj.duanYi": "断蚁",
    "yj.guiXiu": "归岫",
    "xx.bi": "毕",
    "xx.yi": "翼",
    "xx.ji": "箕",
    "xx.kui": "奎",
    "xx.gui": "鬼",
    "xx.di": "氐",
    "xx.xu": "虚",
    "xx.wei": "危",
    "xx.zi": "觜",
    "xx.zhen": "轸",
    "xx.dou": "斗",
    "xx.lou": "娄",
    "xx.liu": "柳",
    "xx.fang": "房",
    "xx.xin": "心",
    "xx.shi": "室",
    "xx.can": "参",
    "xx.jiao": "角",
    "xx.niu": "牛",
    "xx.vei": "胃",
    "xx.xing": "星",
    "xx.zhang": "张",
    "xx.tail": "尾",
    "xx.qiang": "壁",
    "xx.jing": "井",
    "xx.kang": "亢",
    "xx.nv": "女",
    "xx.mao": "昴",
    "sz.chun": "春",
    "sz.xia": "夏",
    "sz.qiu": "秋",
    "sz.dong": "冬",
    "od.first": "孟",
    "od.second": "仲",
    "od.third": "季",
    "yx.shuo": "朔",
    "yx.jiShuo": "既朔",
    "yx.eMeiXin": "蛾眉新",
    "yx.eMei": "蛾眉",
    "yx.xi": "夕",
    "yx.shangXian": "上弦",
    "yx.jiuYe": "九夜",
    "yx.night": "宵",
    "yx.jianYingTu": "渐盈凸",
    "yx.xiaoWang": "小望",
    "yx.wang": "望",
    "yx.jiWang": "既望",
    "yx.liDai": "立待",
    "yx.juDai": "居待",
    "yx.qinDai": "寝待",
    "yx.gengDai": "更待",
    "yx.jianKuiTu": "渐亏凸",
    "yx.xiaXian": "下弦",
    "yx.youMing": "有明",
    "yx.eMeiCan": "蛾眉残",
    "yx.can": "残",
    "yx.xiao": "晓",
    "yx.hui": "晦",
    "ny.sangZhe": "桑柘",
    "ny.baiLa": "白蜡",
    "ny.yangLiu": "杨柳",
    "ny.jinBo": "金箔",
    "ny.haiZhong": "海中",
    "ny.daHai": "大海",
    "ny.shaZhong": "沙中",
    "ny.luZhong": "炉中",
    "ny.shanXia": "山下",
    "ny.daLin": "大林",
    "ny.pingDi": "平地",
    "ny.luPang": "路旁",
    "ny.biShang": "壁上",
    "ny.jianFeng": "剑锋",
    "ny.shanTou": "山头",
    "ny.fuDeng": "覆灯",
    "ny.jianXia": "涧下",
    "ny.tianHe": "天河",
    "ny.chengTou": "城头",
    "ny.daYi": "大驿",
    "ny.chaiChuan": "钗钏",
    "ny.quanZhong": "泉中",
    "ny.daXi": "大溪",
    "ny.wuShang": "屋上",
    "ny.piLi": "霹雳",
    "ny.tianShang": "天上",
    "ny.songBo": "松柏",
    "ny.shiLiu": "石榴",
    "ny.changLiu": "长流"
  },
  "en": {
    "tg.jia": "Jia",
    "tg.yi": "Yi",
    "tg.bing": "Bing",
    "tg.ding": "Ding",
    "tg.wu": "Wu",
    "tg.ji": "Ji",
    "tg.geng": "Geng",
    "tg.xin": "Xin",
    "tg.ren": "Ren",
    "tg.gui": "Gui",
    "dz.zi": "Zi",
    "dz.chou": "Chou",
    "dz.yin": "Yin",
    "dz.mao": "Mao",
    "dz.chen": "Chen",
    "dz.si": "Si",
    "dz.wu": "Wu",
    "dz.wei": "Wei",
    "dz.shen": "Shen",
    "dz.you": "You",
    "dz.xu": "Xu",
    "dz.hai": "Hai",
    "zx.jian": "Build",
    "zx.chu": "Remove",
    "zx.man": "Full",
    "zx.ping": "Flat",
    "zx.ding": "Stable",
    "zx.zhi": "Hold",
    "zx.po": "Break",
    "zx.wei": "Danger",
    "zx.cheng": "Complete",
    "zx.shou": "Collect",
    "zx.kai": "Open",
    "zx.bi": "Close",
    "jz.jiaZi": "JiaZi",
    "jz.yiChou": "YiChou",
    "jz.bingYin": "BingYin",
    "jz.dingMao": "DingMao",
    "jz.wuChen": "WuChen",
    "jz.jiSi": "JiSi",
    "jz.gengWu": "GengWu",
    "jz.xinWei": "XinWei",
    "jz.renShen": "RenShen",
    "jz.guiYou": "GuiYou",
    "jz.jiaXu": "JiaXu",
    "jz.yiHai": "YiHai",
    "jz.bingZi": "BingZi",
    "jz.dingChou": "DingChou",
    "jz.wuYin": "WuYin",
    "jz.jiMao": "JiMao",
    "jz.gengChen": "GengChen",
    "jz.xinSi": "XinSi",
    "jz.renWu": "RenWu",
    "jz.guiWei": "GuiWei",
    "jz.jiaShen": "JiaShen",
    "jz.yiYou": "YiYou",
    "jz.bingXu": "BingXu",
    "jz.dingHai": "DingHai",
    "jz.wuZi": "WuZi",
    "jz.jiChou": "JiChou",
    "jz.gengYin": "GengYin",
    "jz.xinMao": "XinMao",
    "jz.renChen": "RenChen",
    "jz.guiSi": "GuiSi",
    "jz.jiaWu": "JiaWu",
    "jz.yiWei": "YiWei",
    "jz.bingShen": "BingShen",
    "jz.dingYou": "DingYou",
    "jz.wuXu": "WuXu",
    "jz.jiHai": "JiHai",
    "jz.gengZi": "GengZi",
    "jz.xinChou": "XinChou",
    "jz.renYin": "RenYin",
    "jz.guiMao": "GuiMao",
    "jz.jiaChen": "JiaChen",
    "jz.yiSi": "YiSi",
    "jz.bingWu": "BingWu",
    "jz.dingWei": "DingWei",
    "jz.wuShen": "WuShen",
    "jz.jiYou": "JiYou",
    "jz.gengXu": "GengXu",
    "jz.xinHai": "XinHai",
    "jz.renZi": "RenZi",
    "jz.guiChou": "GuiChou",
    "jz.jiaYin": "JiaYin",
    "jz.yiMao": "YiMao",
    "jz.bingChen": "BingChen",
    "jz.dingSi": "DingSi",
    "jz.wuWu": "WuWu",
    "jz.jiWei": "JiWei",
    "jz.gengShen": "GengShen",
    "jz.xinYou": "XinYou",
    "jz.renXu": "RenXu",
    "jz.guiHai": "GuiHai",
    "sx.rat": "Rat",
    "sx.ox": "Ox",
    "sx.tiger": "Tiger",
    "sx.rabbit": "Rabbit",
    "sx.dragon": "Dragon",
    "sx.snake": "Snake",
    "sx.horse": "Horse",
    "sx.goat": "Goat",
    "sx.monkey": "Monkey",
    "sx.rooster": "Rooster",
    "sx.dog": "Dog",
    "sx.pig": "Pig",
    "dw.long": "Dragon",
    "dw.niu": "Ox",
    "dw.gou": "Dog",
    "dw.yang": "Goat",
    "dw.tu": "Rabbit",
    "dw.shu": "Rat",
    "dw.ji": "Rooster",
    "dw.ma": "Horse",
    "dw.hu": "Tiger",
    "dw.zhu": "Pig",
    "dw.hou": "Monkey",
    "dw.she": "Snake",
    "dw.huLi": "Fox",
    "dw.yan": "Swallow",
    "dw.bao": "Leopard",
    "dw.yuan": "Ape",
    "dw.yin": "Earthworm",
    "dw.lu": "Deer",
    "dw.wu": "Crow",
    "dw.lang": "Wolf",
    "dw.fu": "Bat",
    "wx.jin": "Metal",
    "wx.mu": "Wood",
    "wx.shui": "Water",
    "wx.huo": "Fire",
    "wx.tu": "Earth",
    "wx.ri": "Sun",
    "wx.yue": "Moon",
    "n.zero": "0",
    "n.one": "1",
    "n.two": "2",
    "n.three": "3",
    "n.four": "4",
    "n.five": "5",
    "n.six": "6",
    "n.seven": "7",
    "n.eight": "8",
    "n.nine": "9",
    "n.ten": "10",
    "n.eleven": "11",
    "n.twelve": "12",
    "w.sun": "Sunday",
    "w.mon": "Monday",
    "w.tues": "Tuesday",
    "w.wed": "Wednesday",
    "w.thur": "Thursday",
    "w.fri": "Friday",
    "w.sat": "Saturday",
    "xz.aries": "Aries",
    "xz.taurus": "Taurus",
    "xz.gemini": "Gemini",
    "xz.cancer": "Cancer",
    "xz.leo": "Leo",
    "xz.virgo": "Virgo",
    "xz.libra": "Libra",
    "xz.scorpio": "Scorpio",
    "xz.sagittarius": "Sagittarius",
    "xz.capricornus": "Capricornus",
    "xz.aquarius": "Aquarius",
    "xz.pisces": "Pisces",
    "bg.qian": "Qian",
    "bg.kun": "Kun",
    "bg.zhen": "Zhen",
    "bg.xun": "Xun",
    "bg.kan": "Kan",
    "bg.li": "Li",
    "bg.gen": "Gen",
    "bg.dui": "Dui",
    "ps.center": "Center",
    "ps.dong": "East",
    "ps.nan": "South",
    "ps.xi": "West",
    "ps.bei": "North",
    "ps.zhong": "Center",
    "ps.zhengDong": "East",
    "ps.zhengNan": "South",
    "ps.zhengXi": "West",
    "ps.zhengBei": "North",
    "ps.dongBei": "Northeast",
    "ps.dongNan": "Southeast",
    "ps.xiBei": "Northwest",
    "ps.xiNan": "Southwest",
    "jq.dongZhi": "Winter Solstice",
    "jq.xiaoHan": "Lesser Cold",
    "jq.daHan": "Great Cold",
    "jq.liChun": "Spring Beginning",
    "jq.yuShui": "Rain Water",
    "jq.jingZhe": "Awakening from Hibernation",
    "jq.chunFen": "Spring Equinox",
    "jq.qingMing": "Fresh Green",
    "jq.guYu": "Grain Rain",
    "jq.liXia": "Beginning of Summer",
    "jq.xiaoMan": "Lesser Fullness",
    "jq.mangZhong": "Grain in Ear",
    "jq.xiaZhi": "Summer Solstice",
    "jq.xiaoShu": "Lesser Heat",
    "jq.daShu": "Greater Heat",
    "jq.liQiu": "Beginning of Autumn",
    "jq.chuShu": "End of Heat",
    "jq.baiLu": "White Dew",
    "jq.qiuFen": "Autumnal Equinox",
    "jq.hanLu": "Cold Dew",
    "jq.shuangJiang": "First Frost",
    "jq.liDong": "Beginning of Winter",
    "jq.xiaoXue": "Light Snow",
    "jq.daXue": "Heavy Snow",
    "sn.qingLong": "Azure Dragon",
    "sn.baiHu": "White Tiger",
    "sn.zhuQue": "Rosefinch",
    "sn.xuanWu": "Black Tortoise",
    "sn.tianEn": "Serene Grace",
    "sn.siShen": "Death",
    "sn.tianMa": "Pegasus",
    "sn.baLong": "Eight Dragon",
    "sn.jiuHu": "Nine Tiger",
    "sn.qiNiao": "Seven Bird",
    "sn.liuShe": "Six Snake",
    "s.none": "None",
    "s.goodLuck": "Good luck",
    "s.badLuck": "Bad luck",
    "s.yin": "Yin",
    "s.yang": "Yang",
    "s.white": "White",
    "s.black": "Black",
    "s.blue": "Blue",
    "s.green": "Green",
    "s.yellow": "Yellow",
    "s.red": "Red",
    "s.purple": "Purple",
    "jr.chuXi": "Chinese New Year's Eve",
    "jr.chunJie": "Luna New Year",
    "jr.yuanXiao": "Lantern Festival",
    "jr.duanWu": "Dragon Boat Festival",
    "jr.qiXi": "Begging Festival",
    "jr.zhongQiu": "Mid-Autumn Festival",
    "jr.laBa": "Laba Festival",
    "jr.yuanDan": "New Year's Day",
    "jr.qingRen": "Valentine's Day",
    "jr.fuNv": "Women's Day",
    "jr.xiaoFei": "Consumer Rights Day",
    "jr.zhiShu": "Arbor Day",
    "jr.wuYi": "International Worker's Day",
    "jr.erTong": "Children's Day",
    "jr.qingNian": "Youth Day",
    "jr.yuRen": "April Fools' Day",
    "jr.jianDang": "Party's Day",
    "jr.jianJun": "Army Day",
    "jr.jiaoShi": "Teachers' Day",
    "jr.guoQing": "National Day",
    "jr.wanShengYe": "All Saints' Eve",
    "jr.wanSheng": "All Saints' Day",
    "jr.pingAn": "Christmas Eve",
    "jr.shengDan": "Christmas Day",
    "ts.zhan": "At",
    "ts.hu": "Household",
    "ts.zao": "Cooker",
    "ts.dui": "Pestle",
    "ts.xi": "Habitat",
    "ts.win": "Window",
    "ts.fang": "Room",
    "ts.chuang": "Bed",
    "ts.lu": "Stove",
    "ts.mo": "Mill",
    "ts.chu": "Kitchen",
    "ts.ce": "Toilet",
    "ts.cang": "Depot",
    "ts.cangKu": "Depot",
    "ts.daMen": "Gate",
    "ts.men": "Door",
    "ts.tang": "Hall",
    "ly.xianSheng": "Win first",
    "ly.xianFu": "Lose first",
    "ly.youYin": "Friend's referral",
    "ly.foMie": "Buddhism's demise",
    "ly.daAn": "Great safety",
    "ly.chiKou": "Chikagoro",
    "yj.jiSi": "Sacrifice",
    "yj.qiFu": "Pray",
    "yj.qiuSi": "Seek heirs",
    "yj.kaiGuang": "Consecretion",
    "yj.suHui": "Paint sculptural",
    "yj.qiJiao": "Build altar",
    "yj.zhaiJiao": "Taoist rites",
    "yj.muYu": "Bathing",
    "yj.chouShen": "Reward gods",
    "yj.zaoMiao": "Build temple",
    "yj.siZhao": "Offer kitchen god",
    "yj.fenXiang": "Burn incense",
    "yj.xieTu": "Earth gratitude",
    "yj.chuHuo": "Expel the flame",
    "yj.diaoKe": "Carving",
    "yj.jiaQu": "Marriage",
    "yj.DingHun": "Engagement",
    "yj.naCai": "Proposing",
    "yj.wenMing": "Ask name",
    "yj.naXu": "Uxorilocal marriage",
    "yj.guiNing": "Visit parents",
    "yj.anChuang": "Bed placing",
    "yj.heZhang": "Make up accounts",
    "yj.guanJi": "Crowning adulthood",
    "yj.dingMeng": "Make alliance",
    "yj.jinRenKou": "Adopt",
    "yj.caiYi": "Dressmaking",
    "yj.wanMian": "Cosmeticsurgery",
    "yj.kaiRong": "Open face",
    "yj.xiuFen": "Grave repair",
    "yj.qiZuan": "Open coffin",
    "yj.poTu": "Break earth",
    "yj.anZang": "Burial",
    "yj.liBei": "Tombstone erecting",
    "yj.chengFu": "Formation of clothes",
    "yj.chuFu": "Mourning clothes removal",
    "yj.kaiShengFen": "Open grave",
    "yj.heShouMu": "Make coffin",
    "yj.ruLian": "Body placing",
    "yj.yiJiu": "Move coffin",
    "yj.puDu": "Save soul",
    "yj.ruZhai": "Enter house",
    "yj.anXiang": "Incenst placement",
    "yj.anMen": "Door placing",
    "yj.xiuZao": "Repair",
    "yj.qiJi": "Digging",
    "yj.dongTu": "Break ground",
    "yj.shangLiang": "Beam placing",
    "yj.shuZhu": "Erecting pillars",
    "yj.kaiJing": "Open pond and well",
    "yj.zuoBei": "Make pond and fill water",
    "yj.chaiXie": "Smash house",
    "yj.poWu": "Break house",
    "yj.huaiYuan": "Demolish",
    "yj.buYuan": "Mending",
    "yj.faMuZuoLiang": "Make beams",
    "yj.zuoZhao": "Make stove",
    "yj.jieChu": "Removal",
    "yj.kaiZhuYan": "Build beam",
    "yj.chuanPing": "Build door",
    "yj.gaiWuHeJi": "Cover house",
    "yj.kaiCe": "Open toilet",
    "yj.zaoCang": "Build depot",
    "yj.saiXue": "Block nest",
    "yj.pingZhi": "Repair roads",
    "yj.zaoQiao": "Build bridge",
    "yj.zuoCe": "Build toilet",
    "yj.zhuDi": "Fill",
    "yj.kaiChi": "Open pond",
    "yj.faMu": "Lumbering",
    "yj.kaiQu": "Canalization",
    "yj.jueJing": "Dig well",
    "yj.saoShe": "Sweep house",
    "yj.fangShui": "Drainage",
    "yj.zaoWu": "Build house",
    "yj.heJi": "Close ridge",
    "yj.zaoChuChou": "Livestock thickening",
    "yj.xiuMen": "Repair door",
    "yj.dingSang": "Fix stone",
    "yj.zuoLiang": "Beam construction",
    "yj.xiuShi": "Decorate wall",
    "yj.jiaMa": "Erect horse",
    "yj.kaiShi": "Opening",
    "yj.guaBian": "Hang plaque",
    "yj.naChai": "Accept wealth",
    "yj.qiuCai": "Seek wealth",
    "yj.kaiCang": "Open depot",
    "yj.maiChe": "Buy car",
    "yj.zhiChan": "Buy property",
    "yj.guYong": "Hire",
    "yj.chuHuoCai": "Delivery",
    "yj.anJiXie": "Build machine",
    "yj.zaoCheQi": "Build car",
    "yj.jingLuo": "Build loom",
    "yj.yunNiang": "Brew",
    "yj.zuoRan": "Dye",
    "yj.guZhu": "Cast",
    "yj.zaoChuan": "Build boat",
    "yj.geMi": "Harvest honey",
    "yj.zaiZhong": "Farming",
    "yj.quYu": "Fishing",
    "yj.jieWang": "Netting",
    "yj.muYang": "Graze",
    "yj.anDuiWei": "Build rub",
    "yj.xiYi": "Learn",
    "yj.ruXue": "Enter school",
    "yj.liFa": "Haircut",
    "yj.tanBing": "Visiting",
    "yj.jianGui": "Meet noble",
    "yj.chengChuan": "Ride boat",
    "yj.duShui": "Cross water",
    "yj.zhenJiu": "Acupuncture",
    "yj.chuXing": "Travel",
    "yj.yiXi": "Move",
    "yj.fenJu": "Live apart",
    "yj.TiTou": "Shave",
    "yj.zhengShou": "Manicure",
    "yj.naChu": "Feed livestock",
    "yj.buZhuo": "Catch",
    "yj.tianLie": "Hunt",
    "yj.jiaoNiuMa": "Train horse",
    "yj.huiQinYou": "Meet friends",
    "yj.fuRen": "Go post",
    "yj.qiuYi": "See doctor",
    "yj.zhiBing": "Treat",
    "yj.ciSong": "Litigation",
    "yj.qiJiDongTu": "Lay foundation",
    "yj.poWuHuaiYuan": "Demolish",
    "yj.gaiWu": "Build house",
    "yj.zaoCangKu": "Build depot",
    "yj.liQuanJiaoYi": "Covenant trade",
    "yj.jiaoYi": "Trade",
    "yj.liQuan": "Covenant",
    "yj.anJi": "Install machine",
    "yj.huiYou": "Meet friends",
    "yj.qiuYiLiaoBing": "Seek treatment",
    "yj.zhuShi": "Everything Sucks",
    "yj.yuShi": "Do nothing else",
    "yj.xingSang": "Funeral",
    "yj.duanYi": "Block ant hole",
    "yj.guiXiu": "Place beam",
    "xx.bi": "Finish",
    "xx.yi": "Wing",
    "xx.ji": "Sieve",
    "xx.kui": "Qui",
    "xx.gui": "Ghost",
    "xx.di": "Foundation",
    "xx.xu": "Virtual",
    "xx.wei": "Danger",
    "xx.zi": "Mouth",
    "xx.zhen": "Cross-bar",
    "xx.dou": "Fight",
    "xx.lou": "Weak",
    "xx.liu": "Willow",
    "xx.fang": "House",
    "xx.xin": "Heart",
    "xx.shi": "Room",
    "xx.can": "Join",
    "xx.jiao": "Horn",
    "xx.niu": "Ox",
    "xx.vei": "Stomach",
    "xx.xing": "Star",
    "xx.zhang": "Chang",
    "xx.tail": "Tail",
    "xx.qiang": "Wall",
    "xx.jing": "Well",
    "xx.kang": "Kang",
    "xx.nv": "Female",
    "xx.mao": "Mao",
    "sz.chun": "Spring",
    "sz.xia": "Summer",
    "sz.qiu": "Autumn",
    "sz.dong": "Winter",
    "yx.shuo": "New",
    "yx.eMeiXin": "New waxing",
    "yx.eMei": "Waxing",
    "yx.xi": "Evening",
    "yx.shangXian": "First quarter",
    "yx.jiuYe": "Nine night",
    "yx.night": "Night",
    "yx.jianYingTu": "Gibbous",
    "yx.xiaoWang": "Little full",
    "yx.wang": "Full",
    "yx.jianKuiTu": "Disseminating",
    "yx.xiaXian": "Third quarter",
    "yx.eMeiCan": "Waning waxing",
    "yx.can": "Waning",
    "yx.xiao": "Daybreak",
    "yx.hui": "Obscure",
    "ny.sangZhe": "Cudrania",
    "ny.baiLa": "Wax",
    "ny.yangLiu": "Willow",
    "ny.jinBo": "Foil",
    "ny.haiZhong": "Sea",
    "ny.daHai": "Ocean",
    "ny.shaZhong": "Sand",
    "ny.luZhong": "Stove",
    "ny.shanXia": "Piedmont",
    "ny.daLin": "Forest",
    "ny.pingDi": "Land",
    "ny.luPang": "Roadside",
    "ny.biShang": "Wall",
    "ny.jianFeng": "Blade",
    "ny.shanTou": "Hilltop",
    "ny.fuDeng": "Light",
    "ny.jianXia": "Valleyn",
    "ny.tianHe": "River",
    "ny.chengTou": "City",
    "ny.daYi": "Post",
    "ny.chaiChuan": "Ornaments",
    "ny.quanZhong": "Spring",
    "ny.daXi": "Stream",
    "ny.wuShang": "Roof",
    "ny.piLi": "Thunderbolt",
    "ny.tianShang": "Sky",
    "ny.songBo": "Coniferin",
    "ny.shiLiu": "Pomegranate",
    "ny.changLiu": "Flows"
  }
};
I18n._OBJS = {
  "LunarUtil": LunarUtil,
  "SolarUtil": SolarUtil,
  "TaoUtil": TaoUtil,
  "FotoUtil": FotoUtil,
  "NineStarUtil": NineStarUtil
};
I18n._DICT_STRING = {
  "LunarUtil": {
    "TIAN_SHEN_TYPE": {},
    "TIAN_SHEN_TYPE_LUCK": {},
    "XIU_LUCK": {},
    "LU": {},
    "XIU": {},
    "SHA": {},
    "POSITION_DESC": {},
    "NAYIN": {},
    "WU_XING_GAN": {},
    "WU_XING_ZHI": {},
    "SHOU": {},
    "GONG": {},
    "FESTIVAL": {},
    "ZHENG": {},
    "ANIMAL": {},
    "SHI_SHEN": {},
    "XIU_SONG": {}
  },
  "SolarUtil": {
    "FESTIVAL": {}
  },
  "TaoUtil": {
    "BA_HUI": {},
    "BA_JIE": {}
  }
};
I18n._DICT_NUMBER = {
  "LunarUtil": {
    "ZHI_TIAN_SHEN_OFFSET": {},
    "CHANG_SHENG_OFFSET": {}
  }
};
I18n._DICT_ARRAY = {
  "LunarUtil": {
    "ZHI_HIDE_GAN": {}
  }
};
I18n._ARRAYS = {
  "LunarUtil": {
    "GAN": [],
    "ZHI": [],
    "JIA_ZI": [],
    "ZHI_XING": [],
    "XUN": [],
    "XUN_KONG": [],
    "CHONG": [],
    "CHONG_GAN": [],
    "CHONG_GAN_TIE": [],
    "HE_GAN_5": [],
    "HE_ZHI_6": [],
    "SHENGXIAO": [],
    "NUMBER": [],
    "POSITION_XI": [],
    "POSITION_YANG_GUI": [],
    "POSITION_YIN_GUI": [],
    "POSITION_FU": [],
    "POSITION_FU_2": [],
    "POSITION_CAI": [],
    "POSITION_TAI_SUI_YEAR": [],
    "POSITION_GAN": [],
    "POSITION_ZHI": [],
    "JIE_QI": [],
    "JIE_QI_IN_USE": [],
    "TIAN_SHEN": [],
    "SHEN_SHA": [],
    "PENGZU_GAN": [],
    "PENGZU_ZHI": [],
    "MONTH_ZHI": [],
    "CHANG_SHENG": [],
    "HOU": [],
    "WU_HOU": [],
    "POSITION_TAI_DAY": [],
    "POSITION_TAI_MONTH": [],
    "YI_JI": [],
    "LIU_YAO": [],
    "MONTH": [],
    "SEASON": [],
    "DAY": [],
    "YUE_XIANG": []
  },
  "SolarUtil": {
    "WEEK": [],
    "XINGZUO": []
  },
  "TaoUtil": {
    "AN_WU": []
  },
  "FotoUtil": {
    "XIU_27": []
  },
  "NineStarUtil": {
    "NUMBER": [],
    "WU_XING": [],
    "POSITION": [],
    "LUCK_XUAN_KONG": [],
    "YIN_YANG_QI_MEN": [],
    "COLOR": []
  }
};
var LiuNian = class {
  constructor(daYun, index) {
    this._year = daYun.getStartYear() + index;
    this._age = daYun.getStartAge() + index;
    this._index = index;
    this._daYun = daYun;
    this._lunar = daYun.getLunar();
  }
  getYear() {
    return this._year;
  }
  getAge() {
    return this._age;
  }
  getIndex() {
    return this._index;
  }
  getLunar() {
    return this._lunar;
  }
  getGanZhi() {
    let offset = LunarUtil.getJiaZiIndex(this._lunar.getJieQiTable()[I18n.getMessage("jq.liChun")].getLunar().getYearInGanZhiExact()) + this._index;
    if (this._daYun.getIndex() > 0) {
      offset += this._daYun.getStartAge() - 1;
    }
    offset %= LunarUtil.JIA_ZI.length;
    return LunarUtil.JIA_ZI[offset];
  }
  getXun() {
    return LunarUtil.getXun(this.getGanZhi());
  }
  getXunKong() {
    return LunarUtil.getXunKong(this.getGanZhi());
  }
  getLiuYue() {
    const l = [];
    for (let i = 0; i < 12; i++) {
      l.push(new LiuYue(this, i));
    }
    return l;
  }
};
var XiaoYun = class {
  constructor(daYun, index, forward) {
    this._year = daYun.getStartYear() + index;
    this._age = daYun.getStartAge() + index;
    this._index = index;
    this._daYun = daYun;
    this._lunar = daYun.getLunar();
    this._forward = forward;
  }
  getYear() {
    return this._year;
  }
  getAge() {
    return this._age;
  }
  getIndex() {
    return this._index;
  }
  getGanZhi() {
    let offset = LunarUtil.getJiaZiIndex(this._lunar.getTimeInGanZhi());
    let add = this._index + 1;
    if (this._daYun.getIndex() > 0) {
      add += this._daYun.getStartAge() - 1;
    }
    offset += this._forward ? add : -add;
    const size = LunarUtil.JIA_ZI.length;
    while (offset < 0) {
      offset += size;
    }
    offset %= size;
    return LunarUtil.JIA_ZI[offset];
  }
  getXun() {
    return LunarUtil.getXun(this.getGanZhi());
  }
  getXunKong() {
    return LunarUtil.getXunKong(this.getGanZhi());
  }
};
var DaYun = class {
  constructor(yun, index) {
    const lunar = yun.getLunar();
    const birthYear = lunar.getSolar().getYear();
    const year = yun.getStartSolar().getYear();
    let startYear, startAge, endYear, endAge;
    if (index < 1) {
      startYear = birthYear;
      startAge = 1;
      endYear = year - 1;
      endAge = year - birthYear;
    } else {
      startYear = year + (index - 1) * 10;
      startAge = startYear - birthYear + 1;
      endYear = startYear + 9;
      endAge = startAge + 9;
    }
    this._startYear = startYear;
    this._endYear = endYear;
    this._startAge = startAge;
    this._endAge = endAge;
    this._index = index;
    this._yun = yun;
    this._lunar = lunar;
  }
  getStartYear() {
    return this._startYear;
  }
  getEndYear() {
    return this._endYear;
  }
  getStartAge() {
    return this._startAge;
  }
  getEndAge() {
    return this._endAge;
  }
  getIndex() {
    return this._index;
  }
  getLunar() {
    return this._lunar;
  }
  getGanZhi() {
    if (this._index < 1) {
      return "";
    }
    let offset = LunarUtil.getJiaZiIndex(this._lunar.getMonthInGanZhiExact());
    offset += this._yun.isForward() ? this._index : -this._index;
    const size = LunarUtil.JIA_ZI.length;
    if (offset >= size) {
      offset -= size;
    }
    if (offset < 0) {
      offset += size;
    }
    return LunarUtil.JIA_ZI[offset];
  }
  getXun() {
    return LunarUtil.getXun(this.getGanZhi());
  }
  getXunKong() {
    return LunarUtil.getXunKong(this.getGanZhi());
  }
  getLiuNian(n = 10) {
    if (this._index < 1) {
      n = this._endYear - this._startYear + 1;
    }
    const l = [];
    for (let i = 0; i < n; i++) {
      l.push(new LiuNian(this, i));
    }
    return l;
  }
  getXiaoYun(n = 10) {
    if (this._index < 1) {
      n = this._endYear - this._startYear + 1;
    }
    const l = [];
    for (let i = 0; i < n; i++) {
      l.push(new XiaoYun(this, i, this._yun.isForward()));
    }
    return l;
  }
};
var Yun = class {
  constructor(lunar, gender, sect = 1) {
    this._gender = gender;
    this._lunar = lunar;
    const yang = 0 === lunar.getYearGanIndexExact() % 2;
    const man = 1 === gender;
    const forward = yang && man || !yang && !man;
    this._forward = forward;
    const prev = lunar.getPrevJie();
    const next = lunar.getNextJie();
    const current = lunar.getSolar();
    const start = forward ? current : prev.getSolar();
    const end = forward ? next.getSolar() : current;
    let year;
    let month;
    let day;
    let hour = 0;
    if (2 === sect) {
      let minutes = end.subtractMinute(start);
      year = Math.floor(minutes / 4320);
      minutes -= year * 4320;
      month = Math.floor(minutes / 360);
      minutes -= month * 360;
      day = Math.floor(minutes / 12);
      minutes -= day * 12;
      hour = minutes * 2;
    } else {
      const endTimeZhiIndex = end.getHour() == 23 ? 11 : LunarUtil.getTimeZhiIndex(end.toYmdHms().substring(11, 16));
      const startTimeZhiIndex = start.getHour() == 23 ? 11 : LunarUtil.getTimeZhiIndex(start.toYmdHms().substring(11, 16));
      let hourDiff = endTimeZhiIndex - startTimeZhiIndex;
      let dayDiff = end.subtract(start);
      if (hourDiff < 0) {
        hourDiff += 12;
        dayDiff--;
      }
      let monthDiff = Math.floor(hourDiff * 10 / 30);
      month = dayDiff * 4 + monthDiff;
      day = hourDiff * 10 - monthDiff * 30;
      year = Math.floor(month / 12);
      month = month - year * 12;
    }
    this._startYear = year;
    this._startMonth = month;
    this._startDay = day;
    this._startHour = hour;
  }
  getGender() {
    return this._gender;
  }
  getStartYear() {
    return this._startYear;
  }
  getStartMonth() {
    return this._startMonth;
  }
  getStartDay() {
    return this._startDay;
  }
  getStartHour() {
    return this._startHour;
  }
  isForward() {
    return this._forward;
  }
  getLunar() {
    return this._lunar;
  }
  getStartSolar() {
    let solar = this._lunar.getSolar();
    solar = solar.nextYear(this._startYear);
    solar = solar.nextMonth(this._startMonth);
    solar = solar.next(this._startDay);
    return solar.nextHour(this._startHour);
  }
  getDaYun(n = 10) {
    const l = [];
    for (let i = 0; i < n; i++) {
      l.push(new DaYun(this, i));
    }
    return l;
  }
};
var EightChar = class _EightChar {
  constructor(lunar) {
    this._sect = 2;
    this._lunar = lunar;
  }
  static fromLunar(lunar) {
    return new _EightChar(lunar);
  }
  getSect() {
    return this._sect;
  }
  setSect(sect) {
    this._sect = 1 == sect ? 1 : 2;
  }
  getDayGanIndex() {
    return 2 === this._sect ? this._lunar.getDayGanIndexExact2() : this._lunar.getDayGanIndexExact();
  }
  getDayZhiIndex() {
    return 2 === this._sect ? this._lunar.getDayZhiIndexExact2() : this._lunar.getDayZhiIndexExact();
  }
  getYear() {
    return this._lunar.getYearInGanZhiExact();
  }
  getYearGan() {
    return this._lunar.getYearGanExact();
  }
  getYearZhi() {
    return this._lunar.getYearZhiExact();
  }
  getYearHideGan() {
    const v = LunarUtil.ZHI_HIDE_GAN[this.getYearZhi()];
    return v ? v : [];
  }
  getYearWuXing() {
    const gan = LunarUtil.WU_XING_GAN[this.getYearGan()];
    const zhi = LunarUtil.WU_XING_ZHI[this.getYearZhi()];
    return gan && zhi ? gan + zhi : "";
  }
  getYearNaYin() {
    const v = LunarUtil.NAYIN[this.getYear()];
    return v ? v : "";
  }
  getYearShiShenGan() {
    const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getYearGan()];
    return v ? v : "";
  }
  getYearShiShenZhi() {
    const dayGan = this.getDayGan();
    const hideGan = LunarUtil.ZHI_HIDE_GAN[this.getYearZhi()];
    const l = [];
    if (hideGan) {
      for (let i = 0, j = hideGan.length; i < j; i++) {
        const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
        if (v) {
          l.push(v);
        }
      }
    }
    return l;
  }
  getDiShi(zhiIndex) {
    const offset = LunarUtil.CHANG_SHENG_OFFSET[this.getDayGan()];
    if (offset == void 0) {
      return "";
    }
    let index = offset + (this.getDayGanIndex() % 2 == 0 ? zhiIndex : -zhiIndex);
    if (index >= 12) {
      index -= 12;
    }
    if (index < 0) {
      index += 12;
    }
    return LunarUtil.CHANG_SHENG[index];
  }
  getYearDiShi() {
    return this.getDiShi(this._lunar.getYearZhiIndexExact());
  }
  getYearXun() {
    return this._lunar.getYearXunExact();
  }
  getYearXunKong() {
    return this._lunar.getYearXunKongExact();
  }
  getMonth() {
    return this._lunar.getMonthInGanZhiExact();
  }
  getMonthGan() {
    return this._lunar.getMonthGanExact();
  }
  getMonthZhi() {
    return this._lunar.getMonthZhiExact();
  }
  getMonthHideGan() {
    const v = LunarUtil.ZHI_HIDE_GAN[this.getMonthZhi()];
    return v ? v : [];
  }
  getMonthWuXing() {
    const gan = LunarUtil.WU_XING_GAN[this.getMonthGan()];
    const zhi = LunarUtil.WU_XING_ZHI[this.getMonthZhi()];
    return gan && zhi ? gan + zhi : "";
  }
  getMonthNaYin() {
    const v = LunarUtil.NAYIN[this.getMonth()];
    return v ? v : "";
  }
  getMonthShiShenGan() {
    const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getMonthGan()];
    return v ? v : "";
  }
  getMonthShiShenZhi() {
    const dayGan = this.getDayGan();
    const hideGan = LunarUtil.ZHI_HIDE_GAN[this.getMonthZhi()];
    const l = [];
    if (hideGan) {
      for (let i = 0, j = hideGan.length; i < j; i++) {
        const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
        if (v) {
          l.push(v);
        }
      }
    }
    return l;
  }
  getMonthDiShi() {
    return this.getDiShi(this._lunar.getMonthZhiIndexExact());
  }
  getMonthXun() {
    return this._lunar.getMonthXunExact();
  }
  getMonthXunKong() {
    return this._lunar.getMonthXunKongExact();
  }
  getDay() {
    return 2 === this._sect ? this._lunar.getDayInGanZhiExact2() : this._lunar.getDayInGanZhiExact();
  }
  getDayGan() {
    return 2 === this._sect ? this._lunar.getDayGanExact2() : this._lunar.getDayGanExact();
  }
  getDayZhi() {
    return 2 === this._sect ? this._lunar.getDayZhiExact2() : this._lunar.getDayZhiExact();
  }
  getDayHideGan() {
    const v = LunarUtil.ZHI_HIDE_GAN[this.getDayZhi()];
    return v ? v : [];
  }
  getDayWuXing() {
    const gan = LunarUtil.WU_XING_GAN[this.getDayGan()];
    const zhi = LunarUtil.WU_XING_ZHI[this.getDayZhi()];
    return gan && zhi ? gan + zhi : "";
  }
  getDayNaYin() {
    const v = LunarUtil.NAYIN[this.getDay()];
    return v ? v : "";
  }
  getDayShiShenGan() {
    return "日主";
  }
  getDayShiShenZhi() {
    const dayGan = this.getDayGan();
    const hideGan = LunarUtil.ZHI_HIDE_GAN[this.getDayZhi()];
    const l = [];
    if (hideGan) {
      for (let i = 0, j = hideGan.length; i < j; i++) {
        const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
        if (v) {
          l.push(v);
        }
      }
    }
    return l;
  }
  getDayDiShi() {
    return this.getDiShi(this.getDayZhiIndex());
  }
  getDayXun() {
    return 2 === this._sect ? this._lunar.getDayXunExact2() : this._lunar.getDayXunExact();
  }
  getDayXunKong() {
    return 2 === this._sect ? this._lunar.getDayXunKongExact2() : this._lunar.getDayXunKongExact();
  }
  getTime() {
    return this._lunar.getTimeInGanZhi();
  }
  getTimeGan() {
    return this._lunar.getTimeGan();
  }
  getTimeZhi() {
    return this._lunar.getTimeZhi();
  }
  getTimeHideGan() {
    const v = LunarUtil.ZHI_HIDE_GAN[this.getTimeZhi()];
    return v ? v : [];
  }
  getTimeWuXing() {
    const gan = LunarUtil.WU_XING_GAN[this._lunar.getTimeGan()];
    const zhi = LunarUtil.WU_XING_ZHI[this._lunar.getTimeZhi()];
    return gan && zhi ? gan + zhi : "";
  }
  getTimeNaYin() {
    const v = LunarUtil.NAYIN[this.getTime()];
    return v ? v : "";
  }
  getTimeShiShenGan() {
    const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getTimeGan()];
    return v ? v : "";
  }
  getTimeShiShenZhi() {
    const dayGan = this.getDayGan();
    const hideGan = LunarUtil.ZHI_HIDE_GAN[this.getTimeZhi()];
    const l = [];
    if (hideGan) {
      for (let i = 0, j = hideGan.length; i < j; i++) {
        const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
        if (v) {
          l.push(v);
        }
      }
    }
    return l;
  }
  getTimeDiShi() {
    return this.getDiShi(this._lunar.getTimeZhiIndex());
  }
  getTimeXun() {
    return this._lunar.getTimeXun();
  }
  getTimeXunKong() {
    return this._lunar.getTimeXunKong();
  }
  getTaiYuan() {
    let ganIndex = this._lunar.getMonthGanIndexExact() + 1;
    if (ganIndex >= 10) {
      ganIndex -= 10;
    }
    let zhiIndex = this._lunar.getMonthZhiIndexExact() + 3;
    if (zhiIndex >= 12) {
      zhiIndex -= 12;
    }
    return LunarUtil.GAN[ganIndex + 1] + LunarUtil.ZHI[zhiIndex + 1];
  }
  getTaiYuanNaYin() {
    const v = LunarUtil.NAYIN[this.getTaiYuan()];
    return v ? v : "";
  }
  getTaiXi() {
    const ganIndex = 2 == this._sect ? this._lunar.getDayGanIndexExact2() : this._lunar.getDayGanIndexExact();
    const zhiIndex = 2 == this._sect ? this._lunar.getDayZhiIndexExact2() : this._lunar.getDayZhiIndexExact();
    return LunarUtil.HE_GAN_5[ganIndex] + LunarUtil.HE_ZHI_6[zhiIndex];
  }
  getTaiXiNaYin() {
    const v = LunarUtil.NAYIN[this.getTaiXi()];
    return v ? v : "";
  }
  getMingGong() {
    const monthZhiIndex = LunarUtil.find(this.getMonthZhi(), LunarUtil.MONTH_ZHI).index;
    const timeZhiIndex = LunarUtil.find(this.getTimeZhi(), LunarUtil.MONTH_ZHI).index;
    let offset = monthZhiIndex + timeZhiIndex;
    offset = (offset >= 14 ? 26 : 14) - offset;
    let ganIndex = (this._lunar.getYearGanIndexExact() + 1) * 2 + offset;
    while (ganIndex > 10) {
      ganIndex -= 10;
    }
    return LunarUtil.GAN[ganIndex] + LunarUtil.MONTH_ZHI[offset];
  }
  getMingGongNaYin() {
    const v = LunarUtil.NAYIN[this.getMingGong()];
    return v ? v : "";
  }
  getShenGong() {
    const monthZhiIndex = LunarUtil.find(this.getMonthZhi(), LunarUtil.MONTH_ZHI).index;
    const timeZhiIndex = LunarUtil.find(this.getTimeZhi(), LunarUtil.ZHI).index;
    let offset = monthZhiIndex + timeZhiIndex;
    while (offset > 12) {
      offset -= 12;
    }
    let ganIndex = (this._lunar.getYearGanIndexExact() + 1) * 2 + offset % 12;
    while (ganIndex > 10) {
      ganIndex -= 10;
    }
    return LunarUtil.GAN[ganIndex] + LunarUtil.MONTH_ZHI[offset];
  }
  getShenGongNaYin() {
    const v = LunarUtil.NAYIN[this.getShenGong()];
    return v ? v : "";
  }
  getLunar() {
    return this._lunar;
  }
  getYun(gender, sect = 1) {
    return new Yun(this._lunar, gender, sect);
  }
  toString() {
    return this.getYear() + " " + this.getMonth() + " " + this.getDay() + " " + this.getTime();
  }
};
var _NineStar = class {
  static fromIndex(index) {
    return new _NineStar(index);
  }
  constructor(index) {
    this._index = index;
  }
  getNumber() {
    return NineStarUtil.NUMBER[this._index];
  }
  getColor() {
    return NineStarUtil.COLOR[this._index];
  }
  getWuXing() {
    return NineStarUtil.WU_XING[this._index];
  }
  getPosition() {
    return NineStarUtil.POSITION[this._index];
  }
  getPositionDesc() {
    const v = LunarUtil.POSITION_DESC[this.getPosition()];
    return v ? v : "";
  }
  getNameInXuanKong() {
    return _NineStar.NAME_XUAN_KONG[this._index];
  }
  getNameInBeiDou() {
    return _NineStar.NAME_BEI_DOU[this._index];
  }
  getNameInQiMen() {
    return _NineStar.NAME_QI_MEN[this._index];
  }
  getNameInTaiYi() {
    return _NineStar.NAME_TAI_YI[this._index];
  }
  getLuckInQiMen() {
    return _NineStar.LUCK_QI_MEN[this._index];
  }
  getLuckInXuanKong() {
    return NineStarUtil.LUCK_XUAN_KONG[this._index];
  }
  getYinYangInQiMen() {
    return NineStarUtil.YIN_YANG_QI_MEN[this._index];
  }
  getTypeInTaiYi() {
    return _NineStar.TYPE_TAI_YI[this._index];
  }
  getBaMenInQiMen() {
    return _NineStar.BA_MEN_QI_MEN[this._index];
  }
  getSongInTaiYi() {
    return _NineStar.SONG_TAI_YI[this._index];
  }
  getIndex() {
    return this._index;
  }
  toString() {
    return this.getNumber() + this.getColor() + this.getWuXing() + this.getNameInBeiDou();
  }
  toFullString() {
    let s = this.getNumber();
    s += this.getColor();
    s += this.getWuXing();
    s += " ";
    s += this.getPosition();
    s += "(";
    s += this.getPositionDesc();
    s += ") ";
    s += this.getNameInBeiDou();
    s += " 玄空[";
    s += this.getNameInXuanKong();
    s += " ";
    s += this.getLuckInXuanKong();
    s += "] 奇门[";
    s += this.getNameInQiMen();
    s += " ";
    s += this.getLuckInQiMen();
    if (this.getBaMenInQiMen().length > 0) {
      s += " ";
      s += this.getBaMenInQiMen();
      s += "门";
    }
    s += " ";
    s += this.getYinYangInQiMen();
    s += "] 太乙[";
    s += this.getNameInTaiYi();
    s += " ";
    s += this.getTypeInTaiYi();
    s += "]";
    return s;
  }
};
var NineStar = _NineStar;
NineStar.NAME_BEI_DOU = ["天枢", "天璇", "天玑", "天权", "玉衡", "开阳", "摇光", "洞明", "隐元"];
NineStar.NAME_XUAN_KONG = ["贪狼", "巨门", "禄存", "文曲", "廉贞", "武曲", "破军", "左辅", "右弼"];
NineStar.NAME_QI_MEN = ["天蓬", "天芮", "天冲", "天辅", "天禽", "天心", "天柱", "天任", "天英"];
NineStar.BA_MEN_QI_MEN = ["休", "死", "伤", "杜", "", "开", "惊", "生", "景"];
NineStar.NAME_TAI_YI = ["太乙", "摄提", "轩辕", "招摇", "天符", "青龙", "咸池", "太阴", "天乙"];
NineStar.TYPE_TAI_YI = ["吉神", "凶神", "安神", "安神", "凶神", "吉神", "凶神", "吉神", "吉神"];
NineStar.SONG_TAI_YI = ["门中太乙明，星官号贪狼，赌彩财喜旺，婚姻大吉昌，出入无阻挡，参谒见贤良，此行三五里，黑衣别阴阳。", "门前见摄提，百事必忧疑，相生犹自可，相克祸必临，死门并相会，老妇哭悲啼，求谋并吉事，尽皆不相宜，只可藏隐遁，若动伤身疾。", "出入会轩辕，凡事必缠牵，相生全不美，相克更忧煎，远行多不利，博彩尽输钱，九天玄女法，句句不虚言。", "招摇号木星，当之事莫行，相克行人阻，阴人口舌迎，梦寐多惊惧，屋响斧自鸣，阴阳消息理，万法弗违情。", "五鬼为天符，当门阴女谋，相克无好事，行路阻中途，走失难寻觅，道逢有尼姑，此星当门值，万事有灾除。", "神光跃青龙，财气喜重重，投入有酒食，赌彩最兴隆，更逢相生旺，休言克破凶，见贵安营寨，万事总吉同。", "吾将为咸池，当之尽不宜，出入多不利，相克有灾情，赌彩全输尽，求财空手回，仙人真妙语，愚人莫与知，动用虚惊退，反复逆风吹。", "坐临太阴星，百祸不相侵，求谋悉成就，知交有觅寻，回风归来路，恐有殃伏起，密语中记取，慎乎莫轻行。", "迎来天乙星，相逢百事兴，运用和合庆，茶酒喜相迎，求谋并嫁娶，好合有天成，祸福如神验，吉凶甚分明。"];
NineStar.LUCK_QI_MEN = ["大凶", "大凶", "小吉", "大吉", "大吉", "大吉", "小凶", "小吉", "小凶"];
var ShuJiu = class {
  constructor(name, index) {
    this._name = name;
    this._index = index;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getIndex() {
    return this._index;
  }
  setIndex(index) {
    this._index = index;
  }
  toString() {
    return this.getName();
  }
  toFullString() {
    return this.getName() + "第" + this.getIndex() + "天";
  }
};
var Fu = class {
  constructor(name, index) {
    this._name = name;
    this._index = index;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getIndex() {
    return this._index;
  }
  setIndex(index) {
    this._index = index;
  }
  toString() {
    return this.getName();
  }
  toFullString() {
    return this.getName() + "第" + this.getIndex() + "天";
  }
};
var LunarMonth = class _LunarMonth {
  static fromYm(lunarYear, lunarMonth) {
    return LunarYear.fromYear(lunarYear).getMonth(lunarMonth);
  }
  constructor(lunarYear, lunarMonth, dayCount, firstJulianDay, index) {
    this._year = lunarYear;
    this._month = lunarMonth;
    this._dayCount = dayCount;
    this._firstJulianDay = firstJulianDay;
    this._index = index;
    this._zhiIndex = (index - 1 + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getIndex() {
    return this._index;
  }
  getGanIndex() {
    const offset = (LunarYear.fromYear(this._year).getGanIndex() + 1) % 5 * 2;
    return (this._index - 1 + offset) % 10;
  }
  getZhiIndex() {
    return this._zhiIndex;
  }
  getGan() {
    return LunarUtil.GAN[this.getGanIndex() + 1];
  }
  getZhi() {
    return LunarUtil.ZHI[this._zhiIndex + 1];
  }
  getGanZhi() {
    return this.getGan() + this.getZhi();
  }
  isLeap() {
    return this._month < 0;
  }
  getDayCount() {
    return this._dayCount;
  }
  getFirstJulianDay() {
    return this._firstJulianDay;
  }
  getPositionXi() {
    return LunarUtil.POSITION_XI[this.getGanIndex() + 1];
  }
  getPositionXiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionXi()];
  }
  getPositionYangGui() {
    return LunarUtil.POSITION_YANG_GUI[this.getGanIndex() + 1];
  }
  getPositionYangGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
  }
  getPositionYinGui() {
    return LunarUtil.POSITION_YIN_GUI[this.getGanIndex() + 1];
  }
  getPositionYinGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
  }
  getPositionFu(sect = 2) {
    return (1 == sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this.getGanIndex() + 1];
  }
  getPositionFuDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getPositionFu(sect)];
  }
  getPositionCai() {
    return LunarUtil.POSITION_CAI[this.getGanIndex() + 1];
  }
  getPositionCaiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionCai()];
  }
  getPositionTaiSui() {
    let p;
    const m = Math.abs(this._month);
    switch (m) {
      case 1:
      case 5:
      case 9:
        p = "艮";
        break;
      case 3:
      case 7:
      case 11:
        p = "坤";
        break;
      case 4:
      case 8:
      case 12:
        p = "巽";
        break;
      default:
        p = LunarUtil.POSITION_GAN[Solar.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()];
    }
    return p;
  }
  getPositionTaiSuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionTaiSui()];
  }
  getNineStar() {
    const index = LunarYear.fromYear(this._year).getZhiIndex() % 3;
    const m = Math.abs(this._month);
    const monthZhiIndex = (13 + m) % 12;
    let n = 27 - index * 3;
    if (monthZhiIndex < LunarUtil.BASE_MONTH_ZHI_INDEX) {
      n -= 3;
    }
    const offset = (n - monthZhiIndex) % 9;
    return NineStar.fromIndex(offset);
  }
  toString() {
    return `${this.getYear()}年${this.isLeap() ? "闰" : ""}${LunarUtil.MONTH[Math.abs(this.getMonth())]}月(${this.getDayCount()})天`;
  }
  next(n) {
    if (0 == n) {
      return _LunarMonth.fromYm(this._year, this._month);
    } else {
      let rest = Math.abs(n);
      let ny = this._year;
      let iy = ny;
      let im = this._month;
      let index = 0;
      let months = LunarYear.fromYear(ny).getMonths();
      let i;
      let m;
      let size;
      if (n > 0) {
        while (true) {
          size = months.length;
          for (i = 0; i < size; i++) {
            m = months[i];
            if (m.getYear() === iy && m.getMonth() === im) {
              index = i;
              break;
            }
          }
          const more = size - index - 1;
          if (rest < more) {
            break;
          }
          rest -= more;
          const lastMonth = months[size - 1];
          iy = lastMonth.getYear();
          im = lastMonth.getMonth();
          ny++;
          months = LunarYear.fromYear(ny).getMonths();
        }
        return months[index + rest];
      } else {
        while (true) {
          size = months.length;
          for (i = 0; i < size; i++) {
            m = months[i];
            if (m.getYear() === iy && m.getMonth() === im) {
              index = i;
              break;
            }
          }
          if (rest <= index) {
            break;
          }
          rest -= index;
          const firstMonth = months[0];
          iy = firstMonth.getYear();
          im = firstMonth.getMonth();
          ny--;
          months = LunarYear.fromYear(ny).getMonths();
        }
        return months[index - rest];
      }
    }
  }
};
var _ShouXingUtil = class {
  static decode(s) {
    const o = "0000000000";
    const o2 = o + o;
    s = s.replace(/J/g, "00");
    s = s.replace(/I/g, "000");
    s = s.replace(/H/g, "0000");
    s = s.replace(/G/g, "00000");
    s = s.replace(/t/g, "02");
    s = s.replace(/s/g, "002");
    s = s.replace(/r/g, "0002");
    s = s.replace(/q/g, "00002");
    s = s.replace(/p/g, "000002");
    s = s.replace(/o/g, "0000002");
    s = s.replace(/n/g, "00000002");
    s = s.replace(/m/g, "000000002");
    s = s.replace(/l/g, "0000000002");
    s = s.replace(/k/g, "01");
    s = s.replace(/j/g, "0101");
    s = s.replace(/i/g, "001");
    s = s.replace(/h/g, "001001");
    s = s.replace(/g/g, "0001");
    s = s.replace(/f/g, "00001");
    s = s.replace(/e/g, "000001");
    s = s.replace(/d/g, "0000001");
    s = s.replace(/c/g, "00000001");
    s = s.replace(/b/g, "000000001");
    s = s.replace(/a/g, "0000000001");
    s = s.replace(/A/g, o2 + o2 + o2);
    s = s.replace(/B/g, o2 + o2 + o);
    s = s.replace(/C/g, o2 + o2);
    s = s.replace(/D/g, o2 + o);
    s = s.replace(/E/g, o2);
    s = s.replace(/F/g, o);
    return s;
  }
  static nutationLon2(t) {
    let a = -1.742 * t, t2 = t * t, dl = 0;
    for (let i = 0, j = _ShouXingUtil.NUT_B.length; i < j; i += 5) {
      dl += (_ShouXingUtil.NUT_B[i + 3] + a) * Math.sin(_ShouXingUtil.NUT_B[i] + _ShouXingUtil.NUT_B[i + 1] * t + _ShouXingUtil.NUT_B[i + 2] * t2);
      a = 0;
    }
    return dl / 100 / _ShouXingUtil.SECOND_PER_RAD;
  }
  static eLon(t, n) {
    t /= 10;
    let v = 0, tn = 1;
    let n1, n2;
    let m;
    let c;
    let pn = 1;
    let n0, m0 = _ShouXingUtil.XL0[pn + 1] - _ShouXingUtil.XL0[pn];
    for (let i = 0; i < 6; i++, tn *= t) {
      n1 = Math.floor(_ShouXingUtil.XL0[pn + i]);
      n2 = Math.floor(_ShouXingUtil.XL0[pn + 1 + i]);
      n0 = n2 - n1;
      if (n0 == 0) {
        continue;
      }
      if (n < 0) {
        m = n2;
      } else {
        m = Math.floor(3 * n * n0 / m0 + 0.5 + n1);
        if (i != 0) {
          m += 3;
        }
        if (m > n2) {
          m = n2;
        }
      }
      c = 0;
      for (let j = n1; j < m; j += 3) {
        c += _ShouXingUtil.XL0[j] * Math.cos(_ShouXingUtil.XL0[j + 1] + t * _ShouXingUtil.XL0[j + 2]);
      }
      v += c * tn;
    }
    v /= _ShouXingUtil.XL0[0];
    let t2 = t * t;
    v += (-0.0728 - 2.7702 * t - 1.1019 * t2 - 0.0996 * t2 * t) / _ShouXingUtil.SECOND_PER_RAD;
    return v;
  }
  static mLon(t, n) {
    let ob = _ShouXingUtil.XL1;
    let obl = ob[0].length;
    let tn = 1;
    let v = 0;
    let j;
    let c;
    let t2 = t * t, t3 = t2 * t, t4 = t3 * t, t5 = t4 * t, tx = t - 10;
    v += (3.81034409 + 8399.684730072 * t - 3319e-8 * t2 + 311e-10 * t3 - 2033e-13 * t4) * _ShouXingUtil.SECOND_PER_RAD;
    v += 5028.792262 * t + 1.1124406 * t2 + 7699e-8 * t3 - 23479e-9 * t4 - 178e-10 * t5;
    if (tx > 0) {
      v += -0.866 + 1.43 * tx + 0.054 * tx * tx;
    }
    t2 /= 1e4;
    t3 /= 1e8;
    t4 /= 1e8;
    n *= 6;
    if (n < 0) {
      n = obl;
    }
    for (let i = 0, x = ob.length; i < x; i++, tn *= t) {
      let f = ob[i];
      let l = f.length;
      let m = Math.floor(n * l / obl + 0.5);
      if (i > 0) {
        m += 6;
      }
      if (m >= l) {
        m = l;
      }
      for (j = 0, c = 0; j < m; j += 6) {
        c += f[j] * Math.cos(f[j + 1] + t * f[j + 2] + t2 * f[j + 3] + t3 * f[j + 4] + t4 * f[j + 5]);
      }
      v += c * tn;
    }
    v /= _ShouXingUtil.SECOND_PER_RAD;
    return v;
  }
  static gxcSunLon(t) {
    let t2 = t * t;
    let v = -0.043126 + 628.301955 * t - 2732e-9 * t2;
    let e = 0.016708634 - 42037e-9 * t - 1267e-10 * t2;
    return -20.49552 * (1 + e * Math.cos(v)) / _ShouXingUtil.SECOND_PER_RAD;
  }
  static ev(t) {
    let f = 628.307585 * t;
    return 628.332 + 21 * Math.sin(1.527 + f) + 0.44 * Math.sin(1.48 + f * 2) + 0.129 * Math.sin(5.82 + f) * t + 55e-5 * Math.sin(4.21 + f) * t * t;
  }
  static saLon(t, n) {
    return _ShouXingUtil.eLon(t, n) + _ShouXingUtil.nutationLon2(t) + _ShouXingUtil.gxcSunLon(t) + Math.PI;
  }
  static dtExt(y, jsd) {
    let dy = (y - 1820) / 100;
    return -20 + jsd * dy * dy;
  }
  static dtCalc(y) {
    let size = _ShouXingUtil.DT_AT.length;
    let y0 = _ShouXingUtil.DT_AT[size - 2];
    let t0 = _ShouXingUtil.DT_AT[size - 1];
    if (y >= y0) {
      let jsd = 31;
      if (y > y0 + 100) {
        return _ShouXingUtil.dtExt(y, jsd);
      }
      return _ShouXingUtil.dtExt(y, jsd) - (_ShouXingUtil.dtExt(y0, jsd) - t0) * (y0 + 100 - y) / 100;
    }
    let i;
    for (i = 0; i < size; i += 5) {
      if (y < _ShouXingUtil.DT_AT[i + 5]) {
        break;
      }
    }
    let t1 = (y - _ShouXingUtil.DT_AT[i]) / (_ShouXingUtil.DT_AT[i + 5] - _ShouXingUtil.DT_AT[i]) * 10, t2 = t1 * t1, t3 = t2 * t1;
    return _ShouXingUtil.DT_AT[i + 1] + _ShouXingUtil.DT_AT[i + 2] * t1 + _ShouXingUtil.DT_AT[i + 3] * t2 + _ShouXingUtil.DT_AT[i + 4] * t3;
  }
  static dtT(t) {
    return _ShouXingUtil.dtCalc(t / 365.2425 + 2e3) / _ShouXingUtil.SECOND_PER_DAY;
  }
  static mv(t) {
    let v = 8399.71 - 914 * Math.sin(0.7848 + 8328.691425 * t + 1523e-7 * t * t);
    v -= 179 * Math.sin(2.543 + 15542.7543 * t) + 160 * Math.sin(0.1874 + 7214.0629 * t) + 62 * Math.sin(3.14 + 16657.3828 * t) + 34 * Math.sin(4.827 + 16866.9323 * t) + 22 * Math.sin(4.9 + 23871.4457 * t) + 12 * Math.sin(2.59 + 14914.4523 * t) + 7 * Math.sin(0.23 + 6585.7609 * t) + 5 * Math.sin(0.9 + 25195.624 * t) + 5 * Math.sin(2.32 - 7700.3895 * t) + 5 * Math.sin(3.88 + 8956.9934 * t) + 5 * Math.sin(0.49 + 7771.3771 * t);
    return v;
  }
  static saLonT(w) {
    let t, v = 628.3319653318;
    t = (w - 1.75347 - Math.PI) / v;
    v = _ShouXingUtil.ev(t);
    t += (w - _ShouXingUtil.saLon(t, 10)) / v;
    v = _ShouXingUtil.ev(t);
    t += (w - _ShouXingUtil.saLon(t, -1)) / v;
    return t;
  }
  static msaLon(t, mn, sn) {
    return _ShouXingUtil.mLon(t, mn) + -34e-7 - (_ShouXingUtil.eLon(t, sn) + _ShouXingUtil.gxcSunLon(t) + Math.PI);
  }
  static msaLonT(w) {
    let t, v = 7771.37714500204;
    t = (w + 1.08472) / v;
    t += (w - _ShouXingUtil.msaLon(t, 3, 3)) / v;
    v = _ShouXingUtil.mv(t) - _ShouXingUtil.ev(t);
    t += (w - _ShouXingUtil.msaLon(t, 20, 10)) / v;
    t += (w - _ShouXingUtil.msaLon(t, -1, 60)) / v;
    return t;
  }
  static saLonT2(w) {
    const v = 628.3319653318;
    let t = (w - 1.75347 - Math.PI) / v;
    t -= (5297e-9 * t * t + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 2061e-7 * Math.cos(2.67823 + 628.307585 * t) * t) / v;
    t += (w - _ShouXingUtil.eLon(t, 8) - Math.PI + (20.5 + 17.2 * Math.sin(2.1824 - 33.75705 * t)) / _ShouXingUtil.SECOND_PER_RAD) / v;
    return t;
  }
  static msaLonT2(w) {
    let t, v = 7771.37714500204;
    t = (w + 1.08472) / v;
    let l, t2 = t * t;
    t -= (-3309e-8 * t2 + 0.10976 * Math.cos(0.784758 + 8328.6914246 * t + 152292e-9 * t2) + 0.02224 * Math.cos(0.1874 + 7214.0628654 * t - 21848e-8 * t2) - 0.03342 * Math.cos(4.669257 + 628.307585 * t)) / v;
    t2 = t * t;
    l = _ShouXingUtil.mLon(t, 20) - (4.8950632 + 628.3319653318 * t + 5297e-9 * t2 + 0.0334166 * Math.cos(4.669257 + 628.307585 * t) + 2061e-7 * Math.cos(2.67823 + 628.307585 * t) * t + 349e-6 * Math.cos(4.6261 + 1256.61517 * t) - 20.5 / _ShouXingUtil.SECOND_PER_RAD);
    v = 7771.38 - 914 * Math.sin(0.7848 + 8328.691425 * t + 1523e-7 * t2) - 179 * Math.sin(2.543 + 15542.7543 * t) - 160 * Math.sin(0.1874 + 7214.0629 * t);
    t += (w - l) / v;
    return t;
  }
  static qiHigh(w) {
    let t = _ShouXingUtil.saLonT2(w) * 36525;
    t = t - _ShouXingUtil.dtT(t) + _ShouXingUtil.ONE_THIRD;
    const v = (t + 0.5) % 1 * _ShouXingUtil.SECOND_PER_DAY;
    if (v < 1200 || v > _ShouXingUtil.SECOND_PER_DAY - 1200) {
      t = _ShouXingUtil.saLonT(w) * 36525 - _ShouXingUtil.dtT(t) + _ShouXingUtil.ONE_THIRD;
    }
    return t;
  }
  static shuoHigh(w) {
    let t = _ShouXingUtil.msaLonT2(w) * 36525;
    t = t - _ShouXingUtil.dtT(t) + _ShouXingUtil.ONE_THIRD;
    let v = (t + 0.5) % 1 * _ShouXingUtil.SECOND_PER_DAY;
    if (v < 1800 || v > _ShouXingUtil.SECOND_PER_DAY - 1800) {
      t = _ShouXingUtil.msaLonT(w) * 36525 - _ShouXingUtil.dtT(t) + _ShouXingUtil.ONE_THIRD;
    }
    return t;
  }
  static qiLow(w) {
    const v = 628.3319653318;
    let t = (w - 4.895062166) / v;
    t -= (53 * t * t + 334116 * Math.cos(4.67 + 628.307585 * t) + 2061 * Math.cos(2.678 + 628.3076 * t) * t) / v / 1e7;
    const n = 4895062166e-2 + 6283319653318e-3 * t + 53 * t * t + 334166 * Math.cos(4.669257 + 628.307585 * t) + 3489 * Math.cos(4.6261 + 1256.61517 * t) + 2060.6 * Math.cos(2.67823 + 628.307585 * t) * t - 994 - 834 * Math.sin(2.1824 - 33.75705 * t);
    t -= (n / 1e7 - w) / 628.332 + (32 * (t + 1.8) * (t + 1.8) - 20) / _ShouXingUtil.SECOND_PER_DAY / 36525;
    return t * 36525 + _ShouXingUtil.ONE_THIRD;
  }
  static shuoLow(w) {
    let v = 7771.37714500204;
    let t = (w + 1.08472) / v;
    t -= (-331e-7 * t * t + 0.10976 * Math.cos(0.785 + 8328.6914 * t) + 0.02224 * Math.cos(0.187 + 7214.0629 * t) - 0.03342 * Math.cos(4.669 + 628.3076 * t)) / v + (32 * (t + 1.8) * (t + 1.8) - 20) / _ShouXingUtil.SECOND_PER_DAY / 36525;
    return t * 36525 + _ShouXingUtil.ONE_THIRD;
  }
  static calcShuo(jd) {
    let size = _ShouXingUtil.SHUO_KB.length;
    let d = 0;
    let pc = 14, i;
    jd += Solar.J2000;
    let f1 = _ShouXingUtil.SHUO_KB[0] - pc, f2 = _ShouXingUtil.SHUO_KB[size - 1] - pc, f3 = 2436935;
    if (jd < f1 || jd >= f3) {
      d = Math.floor(_ShouXingUtil.shuoHigh(Math.floor((jd + pc - 2451551) / 29.5306) * Math.PI * 2) + 0.5);
    } else if (jd >= f1 && jd < f2) {
      for (i = 0; i < size; i += 2) {
        if (jd + pc < _ShouXingUtil.SHUO_KB[i + 2]) {
          break;
        }
      }
      d = _ShouXingUtil.SHUO_KB[i] + _ShouXingUtil.SHUO_KB[i + 1] * Math.floor((jd + pc - _ShouXingUtil.SHUO_KB[i]) / _ShouXingUtil.SHUO_KB[i + 1]);
      d = Math.floor(d + 0.5);
      if (d == 1683460) {
        d++;
      }
      d -= Solar.J2000;
    } else if (jd >= f2 && jd < f3) {
      d = Math.floor(_ShouXingUtil.shuoLow(Math.floor((jd + pc - 2451551) / 29.5306) * Math.PI * 2) + 0.5);
      let from = Math.floor((jd - f2) / 29.5306);
      let n = _ShouXingUtil.SB.substring(from, from + 1);
      if ("1" == n) {
        d += 1;
      } else if ("2" == n) {
        d -= 1;
      }
    }
    return d;
  }
  static calcQi(jd) {
    let size = _ShouXingUtil.QI_KB.length;
    let d = 0;
    let pc = 7, i;
    jd += Solar.J2000;
    let f1 = _ShouXingUtil.QI_KB[0] - pc, f2 = _ShouXingUtil.QI_KB[size - 1] - pc, f3 = 2436935;
    if (jd < f1 || jd >= f3) {
      d = Math.floor(_ShouXingUtil.qiHigh(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
    } else if (jd >= f1 && jd < f2) {
      for (i = 0; i < size; i += 2) {
        if (jd + pc < _ShouXingUtil.QI_KB[i + 2]) {
          break;
        }
      }
      d = _ShouXingUtil.QI_KB[i] + _ShouXingUtil.QI_KB[i + 1] * Math.floor((jd + pc - _ShouXingUtil.QI_KB[i]) / _ShouXingUtil.QI_KB[i + 1]);
      d = Math.floor(d + 0.5);
      if (d == 1683460) {
        d++;
      }
      d -= Solar.J2000;
    } else if (jd >= f2 && jd < f3) {
      d = Math.floor(_ShouXingUtil.qiLow(Math.floor((jd + pc - 2451259) / 365.2422 * 24) * Math.PI / 12) + 0.5);
      let from = Math.floor((jd - f2) / 365.2422 * 24);
      let n = _ShouXingUtil.QB.substring(from, from + 1);
      if ("1" == n) {
        d += 1;
      } else if ("2" == n) {
        d -= 1;
      }
    }
    return d;
  }
  static qiAccurate(w) {
    const t = _ShouXingUtil.saLonT(w) * 36525;
    return t - _ShouXingUtil.dtT(t) + _ShouXingUtil.ONE_THIRD;
  }
  static qiAccurate2(jd) {
    const d = Math.PI / 12;
    const w = Math.floor((jd + 293) / 365.2422 * 24) * d;
    const a = _ShouXingUtil.qiAccurate(w);
    if (a - jd > 5) {
      return _ShouXingUtil.qiAccurate(w - d);
    }
    if (a - jd < -5) {
      return _ShouXingUtil.qiAccurate(w + d);
    }
    return a;
  }
};
var ShouXingUtil = _ShouXingUtil;
ShouXingUtil.PI_2 = 2 * Math.PI;
ShouXingUtil.ONE_THIRD = 1 / 3;
ShouXingUtil.SECOND_PER_DAY = 86400;
ShouXingUtil.SECOND_PER_RAD = 648e3 / Math.PI;
ShouXingUtil.NUT_B = [
  2.1824,
  -33.75705,
  36e-6,
  -1720,
  920,
  3.5069,
  1256.66393,
  11e-6,
  -132,
  57,
  1.3375,
  16799.4182,
  -51e-6,
  -23,
  10,
  4.3649,
  -67.5141,
  72e-6,
  21,
  -9,
  0.04,
  -628.302,
  0,
  -14,
  0,
  2.36,
  8328.691,
  0,
  7,
  0,
  3.46,
  1884.966,
  0,
  -5,
  2,
  5.44,
  16833.175,
  0,
  -4,
  2,
  3.69,
  25128.11,
  0,
  -3,
  0,
  3.55,
  628.362,
  0,
  2,
  0
];
ShouXingUtil.DT_AT = [
  -4e3,
  108371.7,
  -13036.8,
  392,
  0,
  -500,
  17201,
  -627.82,
  16.17,
  -0.3413,
  -150,
  12200.6,
  -346.41,
  5.403,
  -0.1593,
  150,
  9113.8,
  -328.13,
  -1.647,
  0.0377,
  500,
  5707.5,
  -391.41,
  0.915,
  0.3145,
  900,
  2203.4,
  -283.45,
  13.034,
  -0.1778,
  1300,
  490.1,
  -57.35,
  2.085,
  -72e-4,
  1600,
  120,
  -9.81,
  -1.532,
  0.1403,
  1700,
  10.2,
  -0.91,
  0.51,
  -0.037,
  1800,
  13.4,
  -0.72,
  0.202,
  -0.0193,
  1830,
  7.8,
  -1.81,
  0.416,
  -0.0247,
  1860,
  8.3,
  -0.13,
  -0.406,
  0.0292,
  1880,
  -5.4,
  0.32,
  -0.183,
  0.0173,
  1900,
  -2.3,
  2.06,
  0.169,
  -0.0135,
  1920,
  21.2,
  1.69,
  -0.304,
  0.0167,
  1940,
  24.2,
  1.22,
  -0.064,
  31e-4,
  1960,
  33.2,
  0.51,
  0.231,
  -0.0109,
  1980,
  51,
  1.29,
  -0.026,
  32e-4,
  2e3,
  63.87,
  0.1,
  0,
  0,
  2005,
  64.7,
  0.21,
  0,
  0,
  2012,
  66.8,
  0.22,
  0,
  0,
  2018,
  69,
  0.36,
  0,
  0,
  2028,
  72.6
];
ShouXingUtil.XL0 = [
  1e10,
  20,
  578,
  920,
  1100,
  1124,
  1136,
  1148,
  1217,
  1226,
  1229,
  1229,
  1229,
  1229,
  1937,
  2363,
  2618,
  2633,
  2660,
  2666,
  17534704567,
  0,
  0,
  334165646,
  4.669256804,
  6283.075849991,
  3489428,
  4.6261024,
  12566.1517,
  349706,
  2.744118,
  5753.384885,
  341757,
  2.828866,
  3.523118,
  313590,
  3.62767,
  77713.771468,
  267622,
  4.418084,
  7860.419392,
  234269,
  6.135162,
  3930.209696,
  132429,
  0.742464,
  11506.76977,
  127317,
  2.037097,
  529.690965,
  119917,
  1.109629,
  1577.343542,
  99025,
  5.23268,
  5884.92685,
  90186,
  2.04505,
  26.29832,
  85722,
  3.50849,
  398.149,
  77979,
  1.17883,
  5223.69392,
  75314,
  2.53339,
  5507.55324,
  50526,
  4.58293,
  18849.22755,
  49238,
  4.20507,
  775.52261,
  35666,
  2.91954,
  0.06731,
  31709,
  5.84902,
  11790.62909,
  28413,
  1.89869,
  796.29801,
  27104,
  0.31489,
  10977.0788,
  24281,
  0.34481,
  5486.77784,
  20616,
  4.80647,
  2544.31442,
  20539,
  1.86948,
  5573.1428,
  20226,
  2.45768,
  6069.77675,
  15552,
  0.83306,
  213.2991,
  13221,
  3.41118,
  2942.46342,
  12618,
  1.08303,
  20.7754,
  11513,
  0.64545,
  0.98032,
  10285,
  0.636,
  4694.00295,
  10190,
  0.97569,
  15720.83878,
  10172,
  4.2668,
  7.11355,
  9921,
  6.2099,
  2146.1654,
  9761,
  0.681,
  155.4204,
  8580,
  5.9832,
  161000.6857,
  8513,
  1.2987,
  6275.9623,
  8471,
  3.6708,
  71430.6956,
  7964,
  1.8079,
  17260.1547,
  7876,
  3.037,
  12036.4607,
  7465,
  1.7551,
  5088.6288,
  7387,
  3.5032,
  3154.6871,
  7355,
  4.6793,
  801.8209,
  6963,
  0.833,
  9437.7629,
  6245,
  3.9776,
  8827.3903,
  6115,
  1.8184,
  7084.8968,
  5696,
  2.7843,
  6286.599,
  5612,
  4.3869,
  14143.4952,
  5558,
  3.4701,
  6279.5527,
  5199,
  0.1891,
  12139.5535,
  5161,
  1.3328,
  1748.0164,
  5115,
  0.2831,
  5856.4777,
  4900,
  0.4874,
  1194.447,
  4104,
  5.3682,
  8429.2413,
  4094,
  2.3985,
  19651.0485,
  3920,
  6.1683,
  10447.3878,
  3677,
  6.0413,
  10213.2855,
  3660,
  2.5696,
  1059.3819,
  3595,
  1.7088,
  2352.8662,
  3557,
  1.776,
  6812.7668,
  3329,
  0.5931,
  17789.8456,
  3041,
  0.4429,
  83996.8473,
  3005,
  2.7398,
  1349.8674,
  2535,
  3.1647,
  4690.4798,
  2474,
  0.2148,
  3.5904,
  2366,
  0.4847,
  8031.0923,
  2357,
  2.0653,
  3340.6124,
  2282,
  5.222,
  4705.7323,
  2189,
  5.5559,
  553.5694,
  2142,
  1.4256,
  16730.4637,
  2109,
  4.1483,
  951.7184,
  2030,
  0.3713,
  283.8593,
  1992,
  5.2221,
  12168.0027,
  1986,
  5.7747,
  6309.3742,
  1912,
  3.8222,
  23581.2582,
  1889,
  5.3863,
  149854.4001,
  1790,
  2.2149,
  13367.9726,
  1748,
  4.5605,
  135.0651,
  1622,
  5.9884,
  11769.8537,
  1508,
  4.1957,
  6256.7775,
  1442,
  4.1932,
  242.7286,
  1435,
  3.7236,
  38.0277,
  1397,
  4.4014,
  6681.2249,
  1362,
  1.8893,
  7632.9433,
  1250,
  1.1305,
  5.5229,
  1205,
  2.6223,
  955.5997,
  1200,
  1.0035,
  632.7837,
  1129,
  0.1774,
  4164.312,
  1083,
  0.3273,
  103.0928,
  1052,
  0.9387,
  11926.2544,
  1050,
  5.3591,
  1592.596,
  1033,
  6.1998,
  6438.4962,
  1001,
  6.0291,
  5746.2713,
  980,
  0.999,
  11371.705,
  980,
  5.244,
  27511.468,
  938,
  2.624,
  5760.498,
  923,
  0.483,
  522.577,
  922,
  4.571,
  4292.331,
  905,
  5.337,
  6386.169,
  862,
  4.165,
  7058.598,
  841,
  3.299,
  7234.794,
  836,
  4.539,
  25132.303,
  813,
  6.112,
  4732.031,
  812,
  6.271,
  426.598,
  801,
  5.821,
  28.449,
  787,
  0.996,
  5643.179,
  776,
  2.957,
  23013.54,
  769,
  3.121,
  7238.676,
  758,
  3.974,
  11499.656,
  735,
  4.386,
  316.392,
  731,
  0.607,
  11513.883,
  719,
  3.998,
  74.782,
  706,
  0.323,
  263.084,
  676,
  5.911,
  90955.552,
  663,
  3.665,
  17298.182,
  653,
  5.791,
  18073.705,
  630,
  4.717,
  6836.645,
  615,
  1.458,
  233141.314,
  612,
  1.075,
  19804.827,
  596,
  3.321,
  6283.009,
  596,
  2.876,
  6283.143,
  555,
  2.452,
  12352.853,
  541,
  5.392,
  419.485,
  531,
  0.382,
  31441.678,
  519,
  4.065,
  6208.294,
  513,
  2.361,
  10973.556,
  494,
  5.737,
  9917.697,
  450,
  3.272,
  11015.106,
  449,
  3.653,
  206.186,
  447,
  2.064,
  7079.374,
  435,
  4.423,
  5216.58,
  421,
  1.906,
  245.832,
  413,
  0.921,
  3738.761,
  402,
  0.84,
  20.355,
  387,
  1.826,
  11856.219,
  379,
  2.344,
  3.881,
  374,
  2.954,
  3128.389,
  370,
  5.031,
  536.805,
  365,
  1.018,
  16200.773,
  365,
  1.083,
  88860.057,
  352,
  5.978,
  3894.182,
  352,
  2.056,
  244287.6,
  351,
  3.713,
  6290.189,
  340,
  1.106,
  14712.317,
  339,
  0.978,
  8635.942,
  339,
  3.202,
  5120.601,
  333,
  0.837,
  6496.375,
  325,
  3.479,
  6133.513,
  316,
  5.089,
  21228.392,
  316,
  1.328,
  10873.986,
  309,
  3.646,
  10.637,
  303,
  1.802,
  35371.887,
  296,
  3.397,
  9225.539,
  288,
  6.026,
  154717.61,
  281,
  2.585,
  14314.168,
  262,
  3.856,
  266.607,
  262,
  2.579,
  22483.849,
  257,
  1.561,
  23543.231,
  255,
  3.949,
  1990.745,
  251,
  3.744,
  10575.407,
  240,
  1.161,
  10984.192,
  238,
  0.106,
  7.046,
  236,
  4.272,
  6040.347,
  234,
  3.577,
  10969.965,
  211,
  3.714,
  65147.62,
  210,
  0.754,
  13521.751,
  207,
  4.228,
  5650.292,
  202,
  0.814,
  170.673,
  201,
  4.629,
  6037.244,
  200,
  0.381,
  6172.87,
  199,
  3.933,
  6206.81,
  199,
  5.197,
  6262.3,
  197,
  1.046,
  18209.33,
  195,
  1.07,
  5230.807,
  195,
  4.869,
  36.028,
  194,
  4.313,
  6244.943,
  192,
  1.229,
  709.933,
  192,
  5.595,
  6282.096,
  192,
  0.602,
  6284.056,
  189,
  3.744,
  23.878,
  188,
  1.904,
  15.252,
  188,
  0.867,
  22003.915,
  182,
  3.681,
  15110.466,
  181,
  0.491,
  1.484,
  179,
  3.222,
  39302.097,
  179,
  1.259,
  12559.038,
  62833196674749,
  0,
  0,
  20605886,
  2.67823456,
  6283.07584999,
  430343,
  2.635127,
  12566.1517,
  42526,
  1.59047,
  3.52312,
  11926,
  5.79557,
  26.29832,
  10898,
  2.96618,
  1577.34354,
  9348,
  2.5921,
  18849.2275,
  7212,
  1.1385,
  529.691,
  6777,
  1.8747,
  398.149,
  6733,
  4.4092,
  5507.5532,
  5903,
  2.888,
  5223.6939,
  5598,
  2.1747,
  155.4204,
  4541,
  0.398,
  796.298,
  3637,
  0.4662,
  775.5226,
  2896,
  2.6471,
  7.1135,
  2084,
  5.3414,
  0.9803,
  1910,
  1.8463,
  5486.7778,
  1851,
  4.9686,
  213.2991,
  1729,
  2.9912,
  6275.9623,
  1623,
  0.0322,
  2544.3144,
  1583,
  1.4305,
  2146.1654,
  1462,
  1.2053,
  10977.0788,
  1246,
  2.8343,
  1748.0164,
  1188,
  3.258,
  5088.6288,
  1181,
  5.2738,
  1194.447,
  1151,
  2.075,
  4694.003,
  1064,
  0.7661,
  553.5694,
  997,
  1.303,
  6286.599,
  972,
  4.239,
  1349.867,
  945,
  2.7,
  242.729,
  858,
  5.645,
  951.718,
  758,
  5.301,
  2352.866,
  639,
  2.65,
  9437.763,
  610,
  4.666,
  4690.48,
  583,
  1.766,
  1059.382,
  531,
  0.909,
  3154.687,
  522,
  5.661,
  71430.696,
  520,
  1.854,
  801.821,
  504,
  1.425,
  6438.496,
  433,
  0.241,
  6812.767,
  426,
  0.774,
  10447.388,
  413,
  5.24,
  7084.897,
  374,
  2.001,
  8031.092,
  356,
  2.429,
  14143.495,
  350,
  4.8,
  6279.553,
  337,
  0.888,
  12036.461,
  337,
  3.862,
  1592.596,
  325,
  3.4,
  7632.943,
  322,
  0.616,
  8429.241,
  318,
  3.188,
  4705.732,
  297,
  6.07,
  4292.331,
  295,
  1.431,
  5746.271,
  290,
  2.325,
  20.355,
  275,
  0.935,
  5760.498,
  270,
  4.804,
  7234.794,
  253,
  6.223,
  6836.645,
  228,
  5.003,
  17789.846,
  225,
  5.672,
  11499.656,
  215,
  5.202,
  11513.883,
  208,
  3.955,
  10213.286,
  208,
  2.268,
  522.577,
  206,
  2.224,
  5856.478,
  206,
  2.55,
  25132.303,
  203,
  0.91,
  6256.778,
  189,
  0.532,
  3340.612,
  188,
  4.735,
  83996.847,
  179,
  1.474,
  4164.312,
  178,
  3.025,
  5.523,
  177,
  3.026,
  5753.385,
  159,
  4.637,
  3.286,
  157,
  6.124,
  5216.58,
  155,
  3.077,
  6681.225,
  154,
  4.2,
  13367.973,
  143,
  1.191,
  3894.182,
  138,
  3.093,
  135.065,
  136,
  4.245,
  426.598,
  134,
  5.765,
  6040.347,
  128,
  3.085,
  5643.179,
  127,
  2.092,
  6290.189,
  125,
  3.077,
  11926.254,
  125,
  3.445,
  536.805,
  114,
  3.244,
  12168.003,
  112,
  2.318,
  16730.464,
  111,
  3.901,
  11506.77,
  111,
  5.32,
  23.878,
  105,
  3.75,
  7860.419,
  103,
  2.447,
  1990.745,
  96,
  0.82,
  3.88,
  96,
  4.08,
  6127.66,
  91,
  5.42,
  206.19,
  91,
  0.42,
  7079.37,
  88,
  5.17,
  11790.63,
  81,
  0.34,
  9917.7,
  80,
  3.89,
  10973.56,
  78,
  2.4,
  1589.07,
  78,
  2.58,
  11371.7,
  77,
  3.98,
  955.6,
  77,
  3.36,
  36.03,
  76,
  1.3,
  103.09,
  75,
  5.18,
  10969.97,
  75,
  4.96,
  6496.37,
  73,
  5.21,
  38.03,
  72,
  2.65,
  6309.37,
  70,
  5.61,
  3738.76,
  69,
  2.6,
  3496.03,
  69,
  0.39,
  15.25,
  69,
  2.78,
  20.78,
  65,
  1.13,
  7058.6,
  64,
  4.28,
  28.45,
  61,
  5.63,
  10984.19,
  60,
  0.73,
  419.48,
  60,
  5.28,
  10575.41,
  58,
  5.55,
  17298.18,
  58,
  3.19,
  4732.03,
  5291887,
  0,
  0,
  871984,
  1.072097,
  6283.07585,
  30913,
  0.86729,
  12566.1517,
  2734,
  0.053,
  3.5231,
  1633,
  5.1883,
  26.2983,
  1575,
  3.6846,
  155.4204,
  954,
  0.757,
  18849.228,
  894,
  2.057,
  77713.771,
  695,
  0.827,
  775.523,
  506,
  4.663,
  1577.344,
  406,
  1.031,
  7.114,
  381,
  3.441,
  5573.143,
  346,
  5.141,
  796.298,
  317,
  6.053,
  5507.553,
  302,
  1.192,
  242.729,
  289,
  6.117,
  529.691,
  271,
  0.306,
  398.149,
  254,
  2.28,
  553.569,
  237,
  4.381,
  5223.694,
  208,
  3.754,
  0.98,
  168,
  0.902,
  951.718,
  153,
  5.759,
  1349.867,
  145,
  4.364,
  1748.016,
  134,
  3.721,
  1194.447,
  125,
  2.948,
  6438.496,
  122,
  2.973,
  2146.165,
  110,
  1.271,
  161000.686,
  104,
  0.604,
  3154.687,
  100,
  5.986,
  6286.599,
  92,
  4.8,
  5088.63,
  89,
  5.23,
  7084.9,
  83,
  3.31,
  213.3,
  76,
  3.42,
  5486.78,
  71,
  6.19,
  4690.48,
  68,
  3.43,
  4694,
  65,
  1.6,
  2544.31,
  64,
  1.98,
  801.82,
  61,
  2.48,
  10977.08,
  50,
  1.44,
  6836.65,
  49,
  2.34,
  1592.6,
  46,
  1.31,
  4292.33,
  46,
  3.81,
  149854.4,
  43,
  0.04,
  7234.79,
  40,
  4.94,
  7632.94,
  39,
  1.57,
  71430.7,
  38,
  3.17,
  6309.37,
  35,
  0.99,
  6040.35,
  35,
  0.67,
  1059.38,
  31,
  3.18,
  2352.87,
  31,
  3.55,
  8031.09,
  30,
  1.92,
  10447.39,
  30,
  2.52,
  6127.66,
  28,
  4.42,
  9437.76,
  28,
  2.71,
  3894.18,
  27,
  0.67,
  25132.3,
  26,
  5.27,
  6812.77,
  25,
  0.55,
  6279.55,
  23,
  1.38,
  4705.73,
  22,
  0.64,
  6256.78,
  20,
  6.07,
  640.88,
  28923,
  5.84384,
  6283.07585,
  3496,
  0,
  0,
  1682,
  5.4877,
  12566.1517,
  296,
  5.196,
  155.42,
  129,
  4.722,
  3.523,
  71,
  5.3,
  18849.23,
  64,
  5.97,
  242.73,
  40,
  3.79,
  553.57,
  11408,
  3.14159,
  0,
  772,
  4.134,
  6283.076,
  77,
  3.84,
  12566.15,
  42,
  0.42,
  155.42,
  88,
  3.14,
  0,
  17,
  2.77,
  6283.08,
  5,
  2.01,
  155.42,
  3,
  2.21,
  12566.15,
  27962,
  3.1987,
  84334.66158,
  10164,
  5.42249,
  5507.55324,
  8045,
  3.8801,
  5223.6939,
  4381,
  3.7044,
  2352.8662,
  3193,
  4.0003,
  1577.3435,
  2272,
  3.9847,
  1047.7473,
  1814,
  4.9837,
  6283.0758,
  1639,
  3.5646,
  5856.4777,
  1444,
  3.7028,
  9437.7629,
  1430,
  3.4112,
  10213.2855,
  1125,
  4.8282,
  14143.4952,
  1090,
  2.0857,
  6812.7668,
  1037,
  4.0566,
  71092.8814,
  971,
  3.473,
  4694.003,
  915,
  1.142,
  6620.89,
  878,
  4.44,
  5753.385,
  837,
  4.993,
  7084.897,
  770,
  5.554,
  167621.576,
  719,
  3.602,
  529.691,
  692,
  4.326,
  6275.962,
  558,
  4.41,
  7860.419,
  529,
  2.484,
  4705.732,
  521,
  6.25,
  18073.705,
  903,
  3.897,
  5507.553,
  618,
  1.73,
  5223.694,
  380,
  5.244,
  2352.866,
  166,
  1.627,
  84334.662,
  10001398880,
  0,
  0,
  167069963,
  3.098463508,
  6283.075849991,
  1395602,
  3.0552461,
  12566.1517,
  308372,
  5.198467,
  77713.771468,
  162846,
  1.173877,
  5753.384885,
  157557,
  2.846852,
  7860.419392,
  92480,
  5.45292,
  11506.76977,
  54244,
  4.56409,
  3930.2097,
  47211,
  3.661,
  5884.92685,
  34598,
  0.96369,
  5507.55324,
  32878,
  5.89984,
  5223.69392,
  30678,
  0.29867,
  5573.1428,
  24319,
  4.2735,
  11790.62909,
  21183,
  5.84715,
  1577.34354,
  18575,
  5.02194,
  10977.0788,
  17484,
  3.01194,
  18849.22755,
  10984,
  5.05511,
  5486.77784,
  9832,
  0.8868,
  6069.7768,
  8650,
  5.6896,
  15720.8388,
  8583,
  1.2708,
  161000.6857,
  6490,
  0.2725,
  17260.1547,
  6292,
  0.9218,
  529.691,
  5706,
  2.0137,
  83996.8473,
  5574,
  5.2416,
  71430.6956,
  4938,
  3.245,
  2544.3144,
  4696,
  2.5781,
  775.5226,
  4466,
  5.5372,
  9437.7629,
  4252,
  6.0111,
  6275.9623,
  3897,
  5.3607,
  4694.003,
  3825,
  2.3926,
  8827.3903,
  3749,
  0.8295,
  19651.0485,
  3696,
  4.9011,
  12139.5535,
  3566,
  1.6747,
  12036.4607,
  3454,
  1.8427,
  2942.4634,
  3319,
  0.2437,
  7084.8968,
  3192,
  0.1837,
  5088.6288,
  3185,
  1.7778,
  398.149,
  2846,
  1.2134,
  6286.599,
  2779,
  1.8993,
  6279.5527,
  2628,
  4.589,
  10447.3878,
  2460,
  3.7866,
  8429.2413,
  2393,
  4.996,
  5856.4777,
  2359,
  0.2687,
  796.298,
  2329,
  2.8078,
  14143.4952,
  2210,
  1.95,
  3154.6871,
  2035,
  4.6527,
  2146.1654,
  1951,
  5.3823,
  2352.8662,
  1883,
  0.6731,
  149854.4001,
  1833,
  2.2535,
  23581.2582,
  1796,
  0.1987,
  6812.7668,
  1731,
  6.152,
  16730.4637,
  1717,
  4.4332,
  10213.2855,
  1619,
  5.2316,
  17789.8456,
  1381,
  5.1896,
  8031.0923,
  1364,
  3.6852,
  4705.7323,
  1314,
  0.6529,
  13367.9726,
  1041,
  4.3329,
  11769.8537,
  1017,
  1.5939,
  4690.4798,
  998,
  4.201,
  6309.374,
  966,
  3.676,
  27511.468,
  874,
  6.064,
  1748.016,
  779,
  3.674,
  12168.003,
  771,
  0.312,
  7632.943,
  756,
  2.626,
  6256.778,
  746,
  5.648,
  11926.254,
  693,
  2.924,
  6681.225,
  680,
  1.423,
  23013.54,
  674,
  0.563,
  3340.612,
  663,
  5.661,
  11371.705,
  659,
  3.136,
  801.821,
  648,
  2.65,
  19804.827,
  615,
  3.029,
  233141.314,
  612,
  5.134,
  1194.447,
  563,
  4.341,
  90955.552,
  552,
  2.091,
  17298.182,
  534,
  5.1,
  31441.678,
  531,
  2.407,
  11499.656,
  523,
  4.624,
  6438.496,
  513,
  5.324,
  11513.883,
  477,
  0.256,
  11856.219,
  461,
  1.722,
  7234.794,
  458,
  3.766,
  6386.169,
  458,
  4.466,
  5746.271,
  423,
  1.055,
  5760.498,
  422,
  1.557,
  7238.676,
  415,
  2.599,
  7058.598,
  401,
  3.03,
  1059.382,
  397,
  1.201,
  1349.867,
  379,
  4.907,
  4164.312,
  360,
  5.707,
  5643.179,
  352,
  3.626,
  244287.6,
  348,
  0.761,
  10973.556,
  342,
  3.001,
  4292.331,
  336,
  4.546,
  4732.031,
  334,
  3.138,
  6836.645,
  324,
  4.164,
  9917.697,
  316,
  1.691,
  11015.106,
  307,
  0.238,
  35371.887,
  298,
  1.306,
  6283.143,
  298,
  1.75,
  6283.009,
  293,
  5.738,
  16200.773,
  286,
  5.928,
  14712.317,
  281,
  3.515,
  21228.392,
  280,
  5.663,
  8635.942,
  277,
  0.513,
  26.298,
  268,
  4.207,
  18073.705,
  266,
  0.9,
  12352.853,
  260,
  2.962,
  25132.303,
  255,
  2.477,
  6208.294,
  242,
  2.8,
  709.933,
  231,
  1.054,
  22483.849,
  229,
  1.07,
  14314.168,
  216,
  1.314,
  154717.61,
  215,
  6.038,
  10873.986,
  200,
  0.561,
  7079.374,
  198,
  2.614,
  951.718,
  197,
  4.369,
  167283.762,
  186,
  2.861,
  5216.58,
  183,
  1.66,
  39302.097,
  183,
  5.912,
  3738.761,
  175,
  2.145,
  6290.189,
  173,
  2.168,
  10575.407,
  171,
  3.702,
  1592.596,
  171,
  1.343,
  3128.389,
  164,
  5.55,
  6496.375,
  164,
  5.856,
  10984.192,
  161,
  1.998,
  10969.965,
  161,
  1.909,
  6133.513,
  157,
  4.955,
  25158.602,
  154,
  6.216,
  23543.231,
  153,
  5.357,
  13521.751,
  150,
  5.77,
  18209.33,
  150,
  5.439,
  155.42,
  139,
  1.778,
  9225.539,
  139,
  1.626,
  5120.601,
  128,
  2.46,
  13916.019,
  123,
  0.717,
  143571.324,
  122,
  2.654,
  88860.057,
  121,
  4.414,
  3894.182,
  121,
  1.192,
  3.523,
  120,
  4.03,
  553.569,
  119,
  1.513,
  17654.781,
  117,
  3.117,
  14945.316,
  113,
  2.698,
  6040.347,
  110,
  3.085,
  43232.307,
  109,
  0.998,
  955.6,
  108,
  2.939,
  17256.632,
  107,
  5.285,
  65147.62,
  103,
  0.139,
  11712.955,
  103,
  5.85,
  213.299,
  102,
  3.046,
  6037.244,
  101,
  2.842,
  8662.24,
  100,
  3.626,
  6262.3,
  98,
  2.36,
  6206.81,
  98,
  5.11,
  6172.87,
  98,
  2,
  15110.47,
  97,
  2.67,
  5650.29,
  97,
  2.75,
  6244.94,
  96,
  4.02,
  6282.1,
  96,
  5.31,
  6284.06,
  92,
  0.1,
  29088.81,
  85,
  3.26,
  20426.57,
  84,
  2.6,
  28766.92,
  81,
  3.58,
  10177.26,
  80,
  5.81,
  5230.81,
  78,
  2.53,
  16496.36,
  77,
  4.06,
  6127.66,
  73,
  0.04,
  5481.25,
  72,
  5.96,
  12559.04,
  72,
  5.92,
  4136.91,
  71,
  5.49,
  22003.91,
  70,
  3.41,
  7.11,
  69,
  0.62,
  11403.68,
  69,
  3.9,
  1589.07,
  69,
  1.96,
  12416.59,
  69,
  4.51,
  426.6,
  67,
  1.61,
  11087.29,
  66,
  4.5,
  47162.52,
  66,
  5.08,
  283.86,
  66,
  4.32,
  16858.48,
  65,
  1.04,
  6062.66,
  64,
  1.59,
  18319.54,
  63,
  5.7,
  45892.73,
  63,
  4.6,
  66567.49,
  63,
  3.82,
  13517.87,
  62,
  2.62,
  11190.38,
  61,
  1.54,
  33019.02,
  60,
  5.58,
  10344.3,
  60,
  5.38,
  316428.23,
  60,
  5.78,
  632.78,
  59,
  6.12,
  9623.69,
  57,
  0.16,
  17267.27,
  57,
  3.86,
  6076.89,
  57,
  1.98,
  7668.64,
  56,
  4.78,
  20199.09,
  55,
  4.56,
  18875.53,
  55,
  3.51,
  17253.04,
  54,
  3.07,
  226858.24,
  54,
  4.83,
  18422.63,
  53,
  5.02,
  12132.44,
  52,
  3.63,
  5333.9,
  52,
  0.97,
  155427.54,
  51,
  3.36,
  20597.24,
  50,
  0.99,
  11609.86,
  50,
  2.21,
  1990.75,
  48,
  1.62,
  12146.67,
  48,
  1.17,
  12569.67,
  47,
  4.62,
  5436.99,
  47,
  1.81,
  12562.63,
  47,
  0.59,
  21954.16,
  47,
  0.76,
  7342.46,
  46,
  0.27,
  4590.91,
  46,
  3.77,
  156137.48,
  45,
  5.66,
  10454.5,
  44,
  5.84,
  3496.03,
  43,
  0.24,
  17996.03,
  41,
  5.93,
  51092.73,
  41,
  4.21,
  12592.45,
  40,
  5.14,
  1551.05,
  40,
  5.28,
  15671.08,
  39,
  3.69,
  18052.93,
  39,
  4.94,
  24356.78,
  38,
  2.72,
  11933.37,
  38,
  5.23,
  7477.52,
  38,
  4.99,
  9779.11,
  37,
  3.7,
  9388.01,
  37,
  4.44,
  4535.06,
  36,
  2.16,
  28237.23,
  36,
  2.54,
  242.73,
  36,
  0.22,
  5429.88,
  35,
  6.15,
  19800.95,
  35,
  2.92,
  36949.23,
  34,
  5.63,
  2379.16,
  34,
  5.73,
  16460.33,
  34,
  5.11,
  5849.36,
  33,
  6.19,
  6268.85,
  10301861,
  1.1074897,
  6283.07584999,
  172124,
  1.064423,
  12566.1517,
  70222,
  3.14159,
  0,
  3235,
  1.0217,
  18849.2275,
  3080,
  2.8435,
  5507.5532,
  2497,
  1.3191,
  5223.6939,
  1849,
  1.4243,
  1577.3435,
  1008,
  5.9138,
  10977.0788,
  865,
  1.42,
  6275.962,
  863,
  0.271,
  5486.778,
  507,
  1.686,
  5088.629,
  499,
  6.014,
  6286.599,
  467,
  5.987,
  529.691,
  440,
  0.518,
  4694.003,
  410,
  1.084,
  9437.763,
  387,
  4.75,
  2544.314,
  375,
  5.071,
  796.298,
  352,
  0.023,
  83996.847,
  344,
  0.949,
  71430.696,
  341,
  5.412,
  775.523,
  322,
  6.156,
  2146.165,
  286,
  5.484,
  10447.388,
  284,
  3.42,
  2352.866,
  255,
  6.132,
  6438.496,
  252,
  0.243,
  398.149,
  243,
  3.092,
  4690.48,
  225,
  3.689,
  7084.897,
  220,
  4.952,
  6812.767,
  219,
  0.42,
  8031.092,
  209,
  1.282,
  1748.016,
  193,
  5.314,
  8429.241,
  185,
  1.82,
  7632.943,
  175,
  3.229,
  6279.553,
  173,
  1.537,
  4705.732,
  158,
  4.097,
  11499.656,
  158,
  5.539,
  3154.687,
  150,
  3.633,
  11513.883,
  148,
  3.222,
  7234.794,
  147,
  3.653,
  1194.447,
  144,
  0.817,
  14143.495,
  135,
  6.151,
  5746.271,
  134,
  4.644,
  6836.645,
  128,
  2.693,
  1349.867,
  123,
  5.65,
  5760.498,
  118,
  2.577,
  13367.973,
  113,
  3.357,
  17789.846,
  110,
  4.497,
  4292.331,
  108,
  5.828,
  12036.461,
  102,
  5.621,
  6256.778,
  99,
  1.14,
  1059.38,
  98,
  0.66,
  5856.48,
  93,
  2.32,
  10213.29,
  92,
  0.77,
  16730.46,
  88,
  1.5,
  11926.25,
  86,
  1.42,
  5753.38,
  85,
  0.66,
  155.42,
  81,
  1.64,
  6681.22,
  80,
  4.11,
  951.72,
  66,
  4.55,
  5216.58,
  65,
  0.98,
  25132.3,
  64,
  4.19,
  6040.35,
  64,
  0.52,
  6290.19,
  63,
  1.51,
  5643.18,
  59,
  6.18,
  4164.31,
  57,
  2.3,
  10973.56,
  55,
  2.32,
  11506.77,
  55,
  2.2,
  1592.6,
  55,
  5.27,
  3340.61,
  54,
  5.54,
  553.57,
  53,
  5.04,
  9917.7,
  53,
  0.92,
  11371.7,
  52,
  3.98,
  17298.18,
  52,
  3.6,
  10969.97,
  49,
  5.91,
  3894.18,
  49,
  2.51,
  6127.66,
  48,
  1.67,
  12168,
  46,
  0.31,
  801.82,
  42,
  3.7,
  10575.41,
  42,
  4.05,
  10984.19,
  40,
  2.17,
  7860.42,
  40,
  4.17,
  26.3,
  38,
  5.82,
  7058.6,
  37,
  3.39,
  6496.37,
  36,
  1.08,
  6309.37,
  36,
  5.34,
  7079.37,
  34,
  3.62,
  11790.63,
  32,
  0.32,
  16200.77,
  31,
  4.24,
  3738.76,
  29,
  4.55,
  11856.22,
  29,
  1.26,
  8635.94,
  27,
  3.45,
  5884.93,
  26,
  5.08,
  10177.26,
  26,
  5.38,
  21228.39,
  24,
  2.26,
  11712.96,
  24,
  1.05,
  242.73,
  24,
  5.59,
  6069.78,
  23,
  3.63,
  6284.06,
  23,
  1.64,
  4732.03,
  22,
  3.46,
  213.3,
  21,
  1.05,
  3496.03,
  21,
  3.92,
  13916.02,
  21,
  4.01,
  5230.81,
  20,
  5.16,
  12352.85,
  20,
  0.69,
  1990.75,
  19,
  2.73,
  6062.66,
  19,
  5.01,
  11015.11,
  18,
  6.04,
  6283.01,
  18,
  2.85,
  7238.68,
  18,
  5.6,
  6283.14,
  18,
  5.16,
  17253.04,
  18,
  2.54,
  14314.17,
  17,
  1.58,
  7.11,
  17,
  0.98,
  3930.21,
  17,
  4.75,
  17267.27,
  16,
  2.19,
  6076.89,
  16,
  2.19,
  18073.7,
  16,
  6.12,
  3.52,
  16,
  4.61,
  9623.69,
  16,
  3.4,
  16496.36,
  15,
  0.19,
  9779.11,
  15,
  5.3,
  13517.87,
  15,
  4.26,
  3128.39,
  15,
  0.81,
  709.93,
  14,
  0.5,
  25158.6,
  14,
  4.38,
  4136.91,
  13,
  0.98,
  65147.62,
  13,
  3.31,
  154717.61,
  13,
  2.11,
  1589.07,
  13,
  1.92,
  22483.85,
  12,
  6.03,
  9225.54,
  12,
  1.53,
  12559.04,
  12,
  5.82,
  6282.1,
  12,
  5.61,
  5642.2,
  12,
  2.38,
  167283.76,
  12,
  0.39,
  12132.44,
  12,
  3.98,
  4686.89,
  12,
  5.81,
  12569.67,
  12,
  0.56,
  5849.36,
  11,
  0.45,
  6172.87,
  11,
  5.8,
  16858.48,
  11,
  6.22,
  12146.67,
  11,
  2.27,
  5429.88,
  435939,
  5.784551,
  6283.07585,
  12363,
  5.57935,
  12566.1517,
  1234,
  3.1416,
  0,
  879,
  3.628,
  77713.771,
  569,
  1.87,
  5573.143,
  330,
  5.47,
  18849.228,
  147,
  4.48,
  5507.553,
  110,
  2.842,
  161000.686,
  101,
  2.815,
  5223.694,
  85,
  3.11,
  1577.34,
  65,
  5.47,
  775.52,
  61,
  1.38,
  6438.5,
  50,
  4.42,
  6286.6,
  47,
  3.66,
  7084.9,
  46,
  5.39,
  149854.4,
  42,
  0.9,
  10977.08,
  40,
  3.2,
  5088.63,
  35,
  1.81,
  5486.78,
  32,
  5.35,
  3154.69,
  30,
  3.52,
  796.3,
  29,
  4.62,
  4690.48,
  28,
  1.84,
  4694,
  27,
  3.14,
  71430.7,
  27,
  6.17,
  6836.65,
  26,
  1.42,
  2146.17,
  25,
  2.81,
  1748.02,
  24,
  2.18,
  155.42,
  23,
  4.76,
  7234.79,
  21,
  3.38,
  7632.94,
  21,
  0.22,
  4705.73,
  20,
  4.22,
  1349.87,
  20,
  2.01,
  1194.45,
  20,
  4.58,
  529.69,
  19,
  1.59,
  6309.37,
  18,
  5.7,
  6040.35,
  18,
  6.03,
  4292.33,
  17,
  2.9,
  9437.76,
  17,
  2,
  8031.09,
  17,
  5.78,
  83996.85,
  16,
  0.05,
  2544.31,
  15,
  0.95,
  6127.66,
  14,
  0.36,
  10447.39,
  14,
  1.48,
  2352.87,
  13,
  0.77,
  553.57,
  13,
  5.48,
  951.72,
  13,
  5.27,
  6279.55,
  13,
  3.76,
  6812.77,
  11,
  5.41,
  6256.78,
  10,
  0.68,
  1592.6,
  10,
  4.95,
  398.15,
  10,
  1.15,
  3894.18,
  10,
  5.2,
  244287.6,
  10,
  1.94,
  11856.22,
  9,
  5.39,
  25132.3,
  8,
  6.18,
  1059.38,
  8,
  0.69,
  8429.24,
  8,
  5.85,
  242.73,
  7,
  5.26,
  14143.5,
  7,
  0.52,
  801.82,
  6,
  2.24,
  8635.94,
  6,
  4,
  13367.97,
  6,
  2.77,
  90955.55,
  6,
  5.17,
  7058.6,
  5,
  1.46,
  233141.31,
  5,
  4.13,
  7860.42,
  5,
  3.91,
  26.3,
  5,
  3.89,
  12036.46,
  5,
  5.58,
  6290.19,
  5,
  5.54,
  1990.75,
  5,
  0.83,
  11506.77,
  5,
  6.22,
  6681.22,
  4,
  5.26,
  10575.41,
  4,
  1.91,
  7477.52,
  4,
  0.43,
  10213.29,
  4,
  1.09,
  709.93,
  4,
  5.09,
  11015.11,
  4,
  4.22,
  88860.06,
  4,
  3.57,
  7079.37,
  4,
  1.98,
  6284.06,
  4,
  3.93,
  10973.56,
  4,
  6.18,
  9917.7,
  4,
  0.36,
  10177.26,
  4,
  2.75,
  3738.76,
  4,
  3.33,
  5643.18,
  4,
  5.36,
  25158.6,
  14459,
  4.27319,
  6283.07585,
  673,
  3.917,
  12566.152,
  77,
  0,
  0,
  25,
  3.73,
  18849.23,
  4,
  2.8,
  6286.6,
  386,
  2.564,
  6283.076,
  31,
  2.27,
  12566.15,
  5,
  3.44,
  5573.14,
  2,
  2.05,
  18849.23,
  1,
  2.06,
  77713.77,
  1,
  4.41,
  161000.69,
  1,
  3.82,
  149854.4,
  1,
  4.08,
  6127.66,
  1,
  5.26,
  6438.5,
  9,
  1.22,
  6283.08,
  1,
  0.66,
  12566.15
];
ShouXingUtil.XL1 = [
  [22639.586, 0.78475822, 8328.691424623, 1.5229241, 25.0719, -0.123598, 4586.438, 0.1873974, 7214.06286536, -2.184756, -18.86, 0.0828, 2369.914, 2.542952, 15542.75428998, -0.661832, 6.212, -0.0408, 769.026, 3.140313, 16657.38284925, 3.04585, 50.144, -0.2472, 666.418, 1.527671, 628.30195521, -0.02664, 0.062, -54e-4, 411.596, 4.826607, 16866.932315, -1.28012, -1.07, -59e-4, 211.656, 4.115028, -1114.6285593, -3.70768, -43.93, 0.2064, 205.436, 0.230523, 6585.7609101, -2.15812, -18.92, 0.0882, 191.956, 4.898507, 23871.4457146, 0.86109, 31.28, -0.164, 164.729, 2.586078, 14914.4523348, -0.6352, 6.15, -0.035, 147.321, 5.4553, -7700.3894694, -1.5496, -25.01, 0.118, 124.988, 0.48608, 7771.377145, -0.3309, 3.11, -0.02, 109.38, 3.88323, 8956.9933798, 1.4963, 25.13, -0.129, 55.177, 5.57033, -1324.178025, 0.6183, 7.3, -0.035, 45.1, 0.89898, 25195.62374, 0.2428, 24, -0.129, 39.533, 3.81213, -8538.24089, 2.803, 26.1, -0.118, 38.43, 4.30115, 22756.817155, -2.8466, -12.6, 0.042, 36.124, 5.49587, 24986.074274, 4.5688, 75.2, -0.371, 30.773, 1.94559, 14428.125731, -4.3695, -37.7, 0.166, 28.397, 3.28586, 7842.364821, -2.2114, -18.8, 0.077, 24.358, 5.64142, 16171.056245, -0.6885, 6.3, -0.046, 18.585, 4.41371, -557.31428, -1.8538, -22, 0.1, 17.954, 3.58454, 8399.6791, -0.3576, 3.2, -0.03, 14.53, 4.9416, 23243.143759, 0.888, 31.2, -0.16, 14.38, 0.9709, 32200.137139, 2.384, 56.4, -0.29, 14.251, 5.7641, -2.3012, 1.523, 25.1, -0.12, 13.899, 0.3735, 31085.50858, -1.324, 12.4, -0.08, 13.194, 1.7595, -9443.319984, -5.231, -69, 0.33, 9.679, 3.0997, -16029.080894, -3.072, -50.1, 0.24, 9.366, 0.3016, 24080.99518, -3.465, -19.9, 0.08, 8.606, 4.1582, -1742.930514, -3.681, -44, 0.21, 8.453, 2.8416, 16100.06857, 1.192, 28.2, -0.14, 8.05, 2.6292, 14286.15038, -0.609, 6.1, -0.03, 7.63, 6.2388, 17285.684804, 3.019, 50.2, -0.25, 7.447, 1.4845, 1256.60391, -0.053, 0.1, -0.01, 7.371, 0.2736, 5957.458955, -2.131, -19, 0.09, 7.063, 5.6715, 33.757047, -0.308, -3.6, 0.02, 6.383, 4.7843, 7004.5134, 2.141, 32.4, -0.16, 5.742, 2.6572, 32409.686605, -1.942, 5, -0.05, 4.374, 4.3443, 22128.5152, -2.82, -13, 0.05, 3.998, 3.2545, 33524.31516, 1.766, 49, -0.25, 3.21, 2.2443, 14985.44001, -2.516, -16, 0.06, 2.915, 1.7138, 24499.74767, 0.834, 31, -0.17, 2.732, 1.9887, 13799.82378, -4.343, -38, 0.17, 2.568, 5.4122, -7072.08751, -1.576, -25, 0.11, 2.521, 3.2427, 8470.66678, -2.238, -19, 0.07, 2.489, 4.0719, -486.3266, -3.734, -44, 0.2, 2.146, 5.6135, -1952.47998, 0.645, 7, -0.03, 1.978, 2.7291, 39414.2, 0.199, 37, -0.21, 1.934, 1.5682, 33314.7657, 6.092, 100, -0.5, 1.871, 0.4166, 30457.20662, -1.297, 12, -0.1, 1.753, 2.0582, -8886.0057, -3.38, -47, 0.2, 1.437, 2.386, -695.87607, 0.59, 7, 0, 1.373, 3.026, -209.54947, 4.33, 51, -0.2, 1.262, 5.94, 16728.37052, 1.17, 28, -0.1, 1.224, 6.172, 6656.74859, -4.04, -41, 0.2, 1.187, 5.873, 6099.43431, -5.89, -63, 0.3, 1.177, 1.014, 31571.83518, 2.41, 56, -0.3, 1.162, 3.84, 9585.29534, 1.47, 25, -0.1, 1.143, 5.639, 8364.73984, -2.18, -19, 0.1, 1.078, 1.229, 70.98768, -1.88, -22, 0.1, 1.059, 3.326, 40528.82856, 3.91, 81, -0.4, 0.99, 5.013, 40738.37803, -0.42, 30, -0.2, 0.948, 5.687, -17772.01141, -6.75, -94, 0.5, 0.876, 0.298, -0.35232, 0, 0, 0, 0.822, 2.994, 393.02097, 0, 0, 0, 0.788, 1.836, 8326.39022, 3.05, 50, -0.2, 0.752, 4.985, 22614.8418, 0.91, 31, -0.2, 0.74, 2.875, 8330.99262, 0, 0, 0, 0.669, 0.744, -24357.77232, -4.6, -75, 0.4, 0.644, 1.314, 8393.12577, -2.18, -19, 0.1, 0.639, 5.888, 575.33849, 0, 0, 0, 0.635, 1.116, 23385.11911, -2.87, -13, 0, 0.584, 5.197, 24428.75999, 2.71, 53, -0.3, 0.583, 3.513, -9095.55517, 0.95, 4, 0, 0.572, 6.059, 29970.88002, -5.03, -32, 0.1, 0.565, 2.96, 0.32863, 1.52, 25, -0.1, 0.561, 4.001, -17981.56087, -2.43, -43, 0.2, 0.557, 0.529, 7143.07519, -0.3, 3, 0, 0.546, 2.311, 25614.37623, 4.54, 75, -0.4, 0.536, 4.229, 15752.30376, -4.99, -45, 0.2, 0.493, 3.316, -8294.9344, -1.83, -29, 0.1, 0.491, 1.744, 8362.4485, 1.21, 21, -0.1, 0.478, 1.803, -10071.6219, -5.2, -69, 0.3, 0.454, 0.857, 15333.2048, 3.66, 57, -0.3, 0.445, 2.071, 8311.7707, -2.18, -19, 0.1, 0.426, 0.345, 23452.6932, -3.44, -20, 0.1, 0.42, 4.941, 33733.8646, -2.56, -2, 0, 0.413, 1.642, 17495.2343, -1.31, -1, 0, 0.404, 1.458, 23314.1314, -0.99, 9, -0.1, 0.395, 2.132, 38299.5714, -3.51, -6, 0, 0.382, 2.7, 31781.3846, -1.92, 5, 0, 0.375, 4.827, 6376.2114, 2.17, 32, -0.2, 0.361, 3.867, 16833.1753, -0.97, 3, 0, 0.358, 5.044, 15056.4277, -4.4, -38, 0.2, 0.35, 5.157, -8257.7037, -3.4, -47, 0.2, 0.344, 4.233, 157.7344, 0, 0, 0, 0.34, 2.672, 13657.8484, -0.58, 6, 0, 0.329, 5.61, 41853.0066, 3.29, 74, -0.4, 0.325, 5.895, -39.8149, 0, 0, 0, 0.309, 4.387, 21500.2132, -2.79, -13, 0.1, 0.302, 1.278, 786.0419, 0, 0, 0, 0.302, 5.341, -24567.3218, -0.27, -24, 0.1, 0.301, 1.045, 5889.8848, -1.57, -12, 0, 0.294, 4.201, -2371.2325, -3.65, -44, 0.2, 0.293, 3.704, 21642.1886, -6.55, -57, 0.2, 0.29, 4.069, 32828.4391, 2.36, 56, -0.3, 0.289, 3.472, 31713.8105, -1.35, 12, -0.1, 0.285, 5.407, -33.7814, 0.31, 4, 0, 0.283, 5.998, -16.9207, -3.71, -44, 0.2, 0.283, 2.772, 38785.898, 0.23, 37, -0.2, 0.274, 5.343, 15613.742, -2.54, -16, 0.1, 0.263, 3.997, 25823.9257, 0.22, 24, -0.1, 0.254, 0.6, 24638.3095, -1.61, 2, 0, 0.253, 1.344, 6447.1991, 0.29, 10, -0.1, 0.25, 0.887, 141.9754, -3.76, -44, 0.2, 0.247, 0.317, 5329.157, -2.1, -19, 0.1, 0.245, 0.141, 36.0484, -3.71, -44, 0.2, 0.231, 2.287, 14357.1381, -2.49, -16, 0.1, 0.227, 5.158, 2.6298, 0, 0, 0, 0.219, 5.085, 47742.8914, 1.72, 63, -0.3, 0.211, 2.145, 6638.7244, -2.18, -19, 0.1, 0.201, 4.415, 39623.7495, -4.13, -14, 0, 0.194, 2.091, 588.4927, 0, 0, 0, 0.193, 3.057, -15400.7789, -3.1, -50, 0, 0.186, 5.598, 16799.3582, -0.72, 6, 0, 0.185, 3.886, 1150.677, 0, 0, 0, 0.183, 1.619, 7178.0144, 1.52, 25, 0, 0.181, 2.635, 8328.3391, 1.52, 25, 0, 0.181, 2.077, 8329.0437, 1.52, 25, 0, 0.179, 3.215, -9652.8694, -0.9, -18, 0, 0.176, 1.716, -8815.018, -5.26, -69, 0, 0.175, 5.673, 550.7553, 0, 0, 0, 0.17, 2.06, 31295.058, -5.6, -39, 0, 0.167, 1.239, 7211.7617, -0.7, 6, 0, 0.165, 4.499, 14967.4158, -0.7, 6, 0, 0.164, 3.595, 15540.4531, 0.9, 31, 0, 0.164, 4.237, 522.3694, 0, 0, 0, 0.163, 4.633, 15545.0555, -2.2, -19, 0, 0.161, 0.478, 6428.0209, -2.2, -19, 0, 0.158, 2.03, 13171.5218, -4.3, -38, 0, 0.157, 2.28, 7216.3641, -3.7, -44, 0, 0.154, 5.65, 7935.6705, 1.5, 25, 0, 0.152, 0.46, 29828.9047, -1.3, 12, 0, 0.151, 1.19, -0.7113, 0, 0, 0, 0.15, 1.42, 23942.4334, -1, 9, 0, 0.144, 2.75, 7753.3529, 1.5, 25, 0, 0.137, 2.08, 7213.7105, -2.2, -19, 0, 0.137, 1.44, 7214.4152, -2.2, -19, 0, 0.136, 4.46, -1185.6162, -1.8, -22, 0, 0.136, 3.03, 8000.1048, -2.2, -19, 0, 0.134, 2.83, 14756.7124, -0.7, 6, 0, 0.131, 5.05, 6821.0419, -2.2, -19, 0, 0.128, 5.99, -17214.6971, -4.9, -72, 0, 0.127, 5.35, 8721.7124, 1.5, 25, 0, 0.126, 4.49, 46628.2629, -2, 19, 0, 0.125, 5.94, 7149.6285, 1.5, 25, 0, 0.124, 1.09, 49067.0695, 1.1, 55, 0, 0.121, 2.88, 15471.7666, 1.2, 28, 0, 0.111, 3.92, 41643.4571, 7.6, 125, -1, 0.11, 1.96, 8904.0299, 1.5, 25, 0, 0.106, 3.3, -18.0489, -2.2, -19, 0, 0.105, 2.3, -4.931, 1.5, 25, 0, 0.104, 2.22, -6.559, -1.9, -22, 0, 0.101, 1.44, 1884.9059, -0.1, 0, 0, 0.1, 5.92, 5471.1324, -5.9, -63, 0, 0.099, 1.12, 15149.7333, -0.7, 6, 0, 0.096, 4.73, 15508.9972, -0.4, 10, 0, 0.095, 5.18, 7230.9835, 1.5, 25, 0, 0.093, 3.37, 39900.5266, 3.9, 81, 0, 0.092, 2.01, 25057.0619, 2.7, 53, 0, 0.092, 1.21, -79.6298, 0, 0, 0, 0.092, 1.65, -26310.2523, -4, -68, 0, 0.091, 1.01, 42062.5561, -1, 23, 0, 0.09, 6.1, 29342.5781, -5, -32, 0, 0.09, 4.43, 15542.402, -0.7, 6, 0, 0.09, 3.8, 15543.1066, -0.7, 6, 0, 0.089, 4.15, 6063.3859, -2.2, -19, 0, 0.086, 4.03, 52.9691, 0, 0, 0, 0.085, 0.49, 47952.4409, -2.6, 11, 0, 0.085, 1.6, 7632.8154, 2.1, 32, 0, 0.084, 0.22, 14392.0773, -0.7, 6, 0, 0.083, 6.22, 6028.4466, -4, -41, 0, 0.083, 0.63, -7909.9389, 2.8, 26, 0, 0.083, 5.2, -77.5523, 0, 0, 0, 0.082, 2.74, 8786.1467, -2.2, -19, 0, 0.08, 2.43, 9166.5428, -2.8, -26, 0, 0.08, 3.7, -25405.1732, 4.1, 27, 0, 0.078, 5.68, 48857.52, 5.4, 106, -1, 0.077, 1.85, 8315.5735, -2.2, -19, 0, 0.075, 5.46, -18191.1103, 1.9, 8, 0, 0.075, 1.41, -16238.6304, 1.3, 1, 0, 0.074, 5.06, 40110.0761, -0.4, 30, 0, 0.072, 2.1, 64.4343, -3.7, -44, 0, 0.071, 2.17, 37671.2695, -3.5, -6, 0, 0.069, 1.71, 16693.4313, -0.7, 6, 0, 0.069, 3.33, -26100.7028, -8.3, -119, 1, 0.068, 1.09, 8329.4028, 1.5, 25, 0, 0.068, 3.62, 8327.9801, 1.5, 25, 0, 0.068, 2.41, 16833.1509, -1, 3, 0, 0.067, 3.4, 24709.2971, -3.5, -20, 0, 0.067, 1.65, 8346.7156, -0.3, 3, 0, 0.066, 2.61, 22547.2677, 1.5, 39, 0, 0.066, 3.5, 15576.5113, -1, 3, 0, 0.065, 5.76, 33037.9886, -2, 5, 0, 0.065, 4.58, 8322.1325, -0.3, 3, 0, 0.065, 6.2, 17913.9868, 3, 50, 0, 0.065, 1.5, 22685.8295, -1, 9, 0, 0.065, 2.37, 7180.3058, -1.9, -15, 0, 0.064, 1.06, 30943.5332, 2.4, 56, 0, 0.064, 1.89, 8288.8765, 1.5, 25, 0, 0.064, 4.7, 6.0335, 0.3, 4, 0, 0.063, 2.83, 8368.5063, 1.5, 25, 0, 0.063, 5.66, -2580.7819, 0.7, 7, 0, 0.062, 3.78, 7056.3285, -2.2, -19, 0, 0.061, 1.49, 8294.91, 1.8, 29, 0, 0.061, 0.12, -10281.1714, -0.9, -18, 0, 0.061, 3.06, -8362.4729, -1.2, -21, 0, 0.061, 4.43, 8170.9571, 1.5, 25, 0, 0.059, 5.78, -13.1179, -3.7, -44, 0, 0.059, 5.97, 6625.5702, -2.2, -19, 0, 0.058, 5.01, -0.508, -0.3, 0, 0, 0.058, 2.73, 7161.0938, -2.2, -19, 0, 0.057, 0.19, 7214.0629, -2.2, -19, 0, 0.057, 4, 22199.5029, -4.7, -35, 0, 0.057, 5.38, 8119.142, 5.8, 76, 0, 0.056, 1.07, 7542.6495, 1.5, 25, 0, 0.056, 0.28, 8486.4258, 1.5, 25, 0, 0.054, 4.19, 16655.0816, 4.6, 75, 0, 0.053, 0.72, 7267.032, -2.2, -19, 0, 0.053, 3.12, 12.6192, 0.6, 7, 0, 0.052, 2.99, -32896.013, -1.8, -49, 0, 0.052, 3.46, 1097.708, 0, 0, 0, 0.051, 5.37, -6443.786, -1.6, -25, 0, 0.051, 1.35, 7789.401, -2.2, -19, 0, 0.051, 5.83, 40042.502, 0.2, 38, 0, 0.051, 3.63, 9114.733, 1.5, 25, 0, 0.05, 1.51, 8504.484, -2.5, -22, 0, 0.05, 5.23, 16659.684, 1.5, 25, 0, 0.05, 1.15, 7247.82, -2.5, -23, 0, 0.047, 0.25, -1290.421, 0.3, 0, 0, 0.047, 4.67, -32686.464, -6.1, -100, 0, 0.047, 3.49, 548.678, 0, 0, 0, 0.047, 2.37, 6663.308, -2.2, -19, 0, 0.046, 0.98, 1572.084, 0, 0, 0, 0.046, 2.04, 14954.262, -0.7, 6, 0, 0.046, 3.72, 6691.693, -2.2, -19, 0, 0.045, 6.19, -235.287, 0, 0, 0, 0.044, 2.96, 32967.001, -0.1, 27, 0, 0.044, 3.82, -1671.943, -5.6, -66, 0, 0.043, 5.82, 1179.063, 0, 0, 0, 0.043, 0.07, 34152.617, 1.7, 49, 0, 0.043, 3.71, 6514.773, -0.3, 0, 0, 0.043, 5.62, 15.732, -2.5, -23, 0, 0.043, 5.8, 8351.233, -2.2, -19, 0, 0.042, 0.27, 7740.199, 1.5, 25, 0, 0.042, 6.14, 15385.02, -0.7, 6, 0, 0.042, 6.13, 7285.051, -4.1, -41, 0, 0.041, 1.27, 32757.451, 4.2, 78, 0, 0.041, 4.46, 8275.722, 1.5, 25, 0, 0.04, 0.23, 8381.661, 1.5, 25, 0, 0.04, 5.87, -766.864, 2.5, 29, 0, 0.04, 1.66, 254.431, 0, 0, 0, 0.04, 0.4, 9027.981, -0.4, 0, 0, 0.04, 2.96, 7777.936, 1.5, 25, 0, 0.039, 4.67, 33943.068, 6.1, 100, 0, 0.039, 3.52, 8326.062, 1.5, 25, 0, 0.039, 3.75, 21013.887, -6.5, -57, 0, 0.039, 5.6, 606.978, 0, 0, 0, 0.039, 1.19, 8331.321, 1.5, 25, 0, 0.039, 2.84, 7211.433, -2.2, -19, 0, 0.038, 0.67, 7216.693, -2.2, -19, 0, 0.038, 6.22, 25161.867, 0.6, 28, 0, 0.038, 4.4, 7806.322, 1.5, 25, 0, 0.038, 4.16, 9179.168, -2.2, -19, 0, 0.037, 4.73, 14991.999, -0.7, 6, 0, 0.036, 0.35, 67.514, -0.6, -7, 0, 0.036, 3.7, 25266.611, -1.6, 0, 0, 0.036, 5.39, 16328.796, -0.7, 6, 0, 0.035, 1.44, 7174.248, -2.2, -19, 0, 0.035, 5, 15684.73, -4.4, -38, 0, 0.035, 0.39, -15.419, -2.2, -19, 0, 0.035, 6.07, 15020.385, -0.7, 6, 0, 0.034, 6.01, 7371.797, -2.2, -19, 0, 0.034, 0.96, -16623.626, -3.4, -54, 0, 0.033, 6.24, 9479.368, 1.5, 25, 0, 0.033, 3.21, 23661.896, 5.2, 82, 0, 0.033, 4.06, 8311.418, -2.2, -19, 0, 0.033, 2.4, 1965.105, 0, 0, 0, 0.033, 5.17, 15489.785, -0.7, 6, 0, 0.033, 5.03, 21986.54, 0.9, 31, 0, 0.033, 4.1, 16691.14, 2.7, 46, 0, 0.033, 5.13, 47114.589, 1.7, 63, 0, 0.033, 4.45, 8917.184, 1.5, 25, 0, 0.033, 4.23, 2.078, 0, 0, 0, 0.032, 2.33, 75.251, 1.5, 25, 0, 0.032, 2.1, 7253.878, -2.2, -19, 0, 0.032, 3.11, -0.224, 1.5, 25, 0, 0.032, 4.43, 16640.462, -0.7, 6, 0, 0.032, 5.68, 8328.363, 0, 0, 0, 0.031, 5.32, 8329.02, 3, 50, 0, 0.031, 3.7, 16118.093, -0.7, 6, 0, 0.03, 3.67, 16721.817, -0.7, 6, 0, 0.03, 5.27, -1881.492, -1.2, -15, 0, 0.03, 5.72, 8157.839, -2.2, -19, 0, 0.029, 5.73, -18400.313, -6.7, -94, 0, 0.029, 2.76, 16, -2.2, -19, 0, 0.029, 1.75, 8879.447, 1.5, 25, 0, 0.029, 0.32, 8851.061, 1.5, 25, 0, 0.029, 0.9, 14704.903, 3.7, 57, 0, 0.028, 2.9, 15595.723, -0.7, 6, 0, 0.028, 5.88, 16864.631, 0.2, 24, 0, 0.028, 0.63, 16869.234, -2.8, -26, 0, 0.028, 4.04, -18609.863, -2.4, -43, 0, 0.027, 5.83, 6727.736, -5.9, -63, 0, 0.027, 6.12, 418.752, 4.3, 51, 0, 0.027, 0.14, 41157.131, 3.9, 81, 0, 0.026, 3.8, 15.542, 0, 0, 0, 0.026, 1.68, 50181.698, 4.8, 99, -1, 0.026, 0.32, 315.469, 0, 0, 0, 0.025, 5.67, 19.188, 0.3, 0, 0, 0.025, 3.16, 62.133, -2.2, -19, 0, 0.025, 3.76, 15502.939, -0.7, 6, 0, 0.025, 4.53, 45999.961, -2, 19, 0, 0.024, 3.21, 837.851, -4.4, -51, 0, 0.024, 2.82, 38157.596, 0.3, 37, 0, 0.024, 5.21, 15540.124, -0.7, 6, 0, 0.024, 0.26, 14218.576, 0, 13, 0, 0.024, 3.01, 15545.384, -0.7, 6, 0, 0.024, 1.16, -17424.247, -0.6, -21, 0, 0.023, 2.34, -67.574, 0.6, 7, 0, 0.023, 2.44, 18.024, -1.9, -22, 0, 0.023, 3.7, 469.4, 0, 0, 0, 0.023, 0.72, 7136.511, -2.2, -19, 0, 0.023, 4.5, 15582.569, -0.7, 6, 0, 0.023, 2.8, -16586.395, -4.9, -72, 0, 0.023, 1.51, 80.182, 0, 0, 0, 0.023, 1.09, 5261.583, -1.5, -12, 0, 0.023, 0.56, 54956.954, -0.5, 44, 0, 0.023, 4.01, 8550.86, -2.2, -19, 0, 0.023, 4.46, 38995.448, -4.1, -14, 0, 0.023, 3.82, 2358.126, 0, 0, 0, 0.022, 3.77, 32271.125, 0.5, 34, 0, 0.022, 0.82, 15935.775, -0.7, 6, 0, 0.022, 1.07, 24013.421, -2.9, -13, 0, 0.022, 0.4, 8940.078, -2.2, -19, 0, 0.022, 2.06, 15700.489, -0.7, 6, 0, 0.022, 4.27, 15124.002, -5, -45, 0, 0.021, 1.16, 56071.583, 3.2, 88, 0, 0.021, 5.58, 9572.189, -2.2, -19, 0, 0.02, 1.7, -17.273, -3.7, -44, 0, 0.02, 3.05, 214.617, 0, 0, 0, 0.02, 4.41, 8391.048, -2.2, -19, 0, 0.02, 5.95, 23869.145, 2.4, 56, 0, 0.02, 0.42, 40947.927, -4.7, -21, 0, 0.019, 1.39, 5818.897, 0.3, 10, 0, 0.019, 0.71, 23873.747, -0.7, 6, 0, 0.019, 2.81, 7291.615, -2.2, -19, 0, 0.019, 5.09, 8428.018, -2.2, -19, 0, 0.019, 4.14, 6518.187, -1.6, -12, 0, 0.019, 3.85, 21.33, 0, 0, 0, 0.018, 0.66, 14445.046, -0.7, 6, 0, 0.018, 1.65, 0.966, -4, -48, 0, 0.018, 5.64, -17143.709, -6.8, -94, 0, 0.018, 6.01, 7736.432, -2.2, -19, 0, 0.018, 2.74, 31153.083, -1.9, 5, 0, 0.018, 4.58, 6116.355, -2.2, -19, 0, 0.018, 2.28, 46.401, 0.3, 0, 0, 0.018, 3.8, 10213.597, 1.4, 25, 0, 0.018, 2.84, 56281.132, -1.1, 36, 0, 0.018, 3.53, 8249.062, 1.5, 25, 0, 0.017, 4.43, 20871.911, -3, -13, 0, 0.017, 4.44, 627.596, 0, 0, 0, 0.017, 1.85, 628.308, 0, 0, 0, 0.017, 1.19, 8408.321, 2, 25, 0, 0.017, 1.95, 7214.056, -2, -19, 0, 0.017, 1.57, 7214.07, -2, -19, 0, 0.017, 1.65, 13870.811, -6, -60, 0, 0.017, 0.3, 22.542, -4, -44, 0, 0.017, 2.62, -119.445, 0, 0, 0, 0.016, 4.87, 5747.909, 2, 32, 0, 0.016, 4.45, 14339.108, -1, 6, 0, 0.016, 1.83, 41366.68, 0, 30, 0, 0.016, 4.53, 16309.618, -3, -23, 0, 0.016, 2.54, 15542.754, -1, 6, 0, 0.016, 6.05, 1203.646, 0, 0, 0, 0.015, 5.2, 2751.147, 0, 0, 0, 0.015, 1.8, -10699.924, -5, -69, 0, 0.015, 0.4, 22824.391, -3, -20, 0, 0.015, 2.1, 30666.756, -6, -39, 0, 0.015, 2.1, 6010.417, -2, -19, 0, 0.015, 0.7, -23729.47, -5, -75, 0, 0.015, 1.4, 14363.691, -1, 6, 0, 0.015, 5.8, 16900.689, -2, 0, 0, 0.015, 5.2, 23800.458, 3, 53, 0, 0.015, 5.3, 6035, -2, -19, 0, 0.015, 1.2, 8251.139, 2, 25, 0, 0.015, 3.6, -8.86, 0, 0, 0, 0.015, 0.8, 882.739, 0, 0, 0, 0.015, 3, 1021.329, 0, 0, 0, 0.015, 0.6, 23296.107, 1, 31, 0, 0.014, 5.4, 7227.181, 2, 25, 0, 0.014, 0.1, 7213.352, -2, -19, 0, 0.014, 4, 15506.706, 3, 50, 0, 0.014, 3.4, 7214.774, -2, -19, 0, 0.014, 4.6, 6665.385, -2, -19, 0, 0.014, 0.1, -8.636, -2, -22, 0, 0.014, 3.1, 15465.202, -1, 6, 0, 0.014, 4.9, 508.863, 0, 0, 0, 0.014, 3.5, 8406.244, 2, 25, 0, 0.014, 1.3, 13313.497, -8, -82, 0, 0.014, 2.8, 49276.619, -3, 0, 0, 0.014, 0.1, 30528.194, -3, -10, 0, 0.013, 1.7, 25128.05, 1, 31, 0, 0.013, 2.9, 14128.405, -1, 6, 0, 0.013, 3.4, 57395.761, 3, 80, 0, 0.013, 2.7, 13029.546, -1, 6, 0, 0.013, 3.9, 7802.556, -2, -19, 0, 0.013, 1.6, 8258.802, -2, -19, 0, 0.013, 2.2, 8417.709, -2, -19, 0, 0.013, 0.7, 9965.21, -2, -19, 0, 0.013, 3.4, 50391.247, 0, 48, 0, 0.013, 3, 7134.433, -2, -19, 0, 0.013, 2.9, 30599.182, -5, -31, 0, 0.013, 3.6, -9723.857, 1, 0, 0, 0.013, 4.8, 7607.084, -2, -19, 0, 0.012, 0.8, 23837.689, 1, 35, 0, 0.012, 3.6, 4.409, -4, -44, 0, 0.012, 5, 16657.031, 3, 50, 0, 0.012, 4.4, 16657.735, 3, 50, 0, 0.012, 1.1, 15578.803, -4, -38, 0, 0.012, 6, -11.49, 0, 0, 0, 0.012, 1.9, 8164.398, 0, 0, 0, 0.012, 2.4, 31852.372, -4, -17, 0, 0.012, 2.4, 6607.085, -2, -19, 0, 0.012, 4.2, 8359.87, 0, 0, 0, 0.012, 0.5, 5799.713, -2, -19, 0, 0.012, 2.7, 7220.622, 0, 0, 0, 0.012, 4.3, -139.72, 0, 0, 0, 0.012, 2.3, 13728.836, -2, -16, 0, 0.011, 3.6, 14912.146, 1, 31, 0, 0.011, 4.7, 14916.748, -2, -19, 0],
  [1.6768, 4.66926, 628.301955, -0.0266, 0.1, -5e-3, 0.51642, 3.3721, 6585.76091, -2.158, -18.9, 0.09, 0.41383, 5.7277, 14914.452335, -0.635, 6.2, -0.04, 0.37115, 3.9695, 7700.389469, 1.55, 25, -0.12, 0.2756, 0.7416, 8956.99338, 1.496, 25.1, -0.13, 0.24599, 4.2253, -2.3012, 1.523, 25.1, -0.12, 0.07118, 0.1443, 7842.36482, -2.211, -19, 0.08, 0.06128, 2.4998, 16171.05625, -0.688, 6, 0, 0.04516, 0.443, 8399.6791, -0.36, 3, 0, 0.04048, 5.771, 14286.15038, -0.61, 6, 0, 0.03747, 4.626, 1256.60391, -0.05, 0, 0, 0.03707, 3.415, 5957.45895, -2.13, -19, 0.1, 0.03649, 1.8, 23243.14376, 0.89, 31, -0.2, 0.02438, 0.042, 16029.08089, 3.07, 50, -0.2, 0.02165, 1.017, -1742.93051, -3.68, -44, 0.2, 0.01923, 3.097, 17285.6848, 3.02, 50, -0.3, 0.01692, 1.28, 0.3286, 1.52, 25, -0.1, 0.01361, 0.298, 8326.3902, 3.05, 50, -0.2, 0.01293, 4.013, 7072.0875, 1.58, 25, -0.1, 0.01276, 4.413, 8330.9926, 0, 0, 0, 0.0127, 0.101, 8470.6668, -2.24, -19, 0.1, 0.01097, 1.203, 22128.5152, -2.82, -13, 0, 0.01088, 2.545, 15542.7543, -0.66, 6, 0, 835e-5, 0.19, 7214.0629, -2.18, -19, 0.1, 734e-5, 4.855, 24499.7477, 0.83, 31, -0.2, 686e-5, 5.13, 13799.8238, -4.34, -38, 0.2, 631e-5, 0.93, -486.3266, -3.73, -44, 0, 585e-5, 0.699, 9585.2953, 1.5, 25, 0, 566e-5, 4.073, 8328.3391, 1.5, 25, 0, 566e-5, 0.638, 8329.0437, 1.5, 25, 0, 539e-5, 2.472, -1952.48, 0.6, 7, 0, 509e-5, 2.88, -0.7113, 0, 0, 0, 469e-5, 3.56, 30457.2066, -1.3, 12, 0, 387e-5, 0.78, -0.3523, 0, 0, 0, 378e-5, 1.84, 22614.8418, 0.9, 31, 0, 362e-5, 5.53, -695.8761, 0.6, 7, 0, 317e-5, 2.8, 16728.3705, 1.2, 28, 0, 303e-5, 6.07, 157.7344, 0, 0, 0, 3e-3, 2.53, 33.757, -0.3, -4, 0, 295e-5, 4.16, 31571.8352, 2.4, 56, 0, 289e-5, 5.98, 7211.7617, -0.7, 6, 0, 285e-5, 2.06, 15540.4531, 0.9, 31, 0, 283e-5, 2.65, 2.6298, 0, 0, 0, 282e-5, 6.17, 15545.0555, -2.2, -19, 0, 278e-5, 1.23, -39.8149, 0, 0, 0, 272e-5, 3.82, 7216.3641, -3.7, -44, 0, 27e-4, 4.37, 70.9877, -1.9, -22, 0, 256e-5, 5.81, 13657.8484, -0.6, 6, 0, 244e-5, 5.64, -0.2237, 1.5, 25, 0, 24e-4, 2.96, 8311.7707, -2.2, -19, 0, 239e-5, 0.87, -33.7814, 0.3, 4, 0, 216e-5, 2.31, 15.9995, -2.2, -19, 0, 186e-5, 3.46, 5329.157, -2.1, -19, 0, 169e-5, 2.4, 24357.772, 4.6, 75, 0, 161e-5, 5.8, 8329.403, 1.5, 25, 0, 161e-5, 5.2, 8327.98, 1.5, 25, 0, 16e-4, 4.26, 23385.119, -2.9, -13, 0, 156e-5, 1.26, 550.755, 0, 0, 0, 155e-5, 1.25, 21500.213, -2.8, -13, 0, 152e-5, 0.6, -16.921, -3.7, -44, 0, 15e-4, 2.71, -79.63, 0, 0, 0, 15e-4, 5.29, 15.542, 0, 0, 0, 148e-5, 1.06, -2371.232, -3.7, -44, 0, 141e-5, 0.77, 8328.691, 1.5, 25, 0, 141e-5, 3.67, 7143.075, -0.3, 0, 0, 138e-5, 5.45, 25614.376, 4.5, 75, 0, 129e-5, 4.9, 23871.446, 0.9, 31, 0, 126e-5, 4.03, 141.975, -3.8, -44, 0, 124e-5, 6.01, 522.369, 0, 0, 0, 12e-4, 4.94, -10071.622, -5.2, -69, 0, 118e-5, 5.07, -15.419, -2.2, -19, 0, 107e-5, 3.49, 23452.693, -3.4, -20, 0, 104e-5, 4.78, 17495.234, -1.3, 0, 0, 103e-5, 1.44, -18.049, -2.2, -19, 0, 102e-5, 5.63, 15542.402, -0.7, 6, 0, 102e-5, 2.59, 15543.107, -0.7, 6, 0, 1e-3, 4.11, -6.559, -1.9, -22, 0, 97e-5, 0.08, 15400.779, 3.1, 50, 0, 96e-5, 5.84, 31781.385, -1.9, 5, 0, 94e-5, 1.08, 8328.363, 0, 0, 0, 94e-5, 2.46, 16799.358, -0.7, 6, 0, 94e-5, 1.69, 6376.211, 2.2, 32, 0, 93e-5, 3.64, 8329.02, 3, 50, 0, 93e-5, 2.65, 16655.082, 4.6, 75, 0, 9e-4, 1.9, 15056.428, -4.4, -38, 0, 89e-5, 1.59, 52.969, 0, 0, 0, 88e-5, 2.02, -8257.704, -3.4, -47, 0, 88e-5, 3.02, 7213.711, -2.2, -19, 0, 87e-5, 0.5, 7214.415, -2.2, -19, 0, 87e-5, 0.49, 16659.684, 1.5, 25, 0, 82e-5, 5.64, -4.931, 1.5, 25, 0, 79e-5, 5.17, 13171.522, -4.3, -38, 0, 76e-5, 3.6, 29828.905, -1.3, 12, 0, 76e-5, 4.08, 24567.322, 0.3, 24, 0, 76e-5, 4.58, 1884.906, -0.1, 0, 0, 73e-5, 0.33, 31713.811, -1.4, 12, 0, 73e-5, 0.93, 32828.439, 2.4, 56, 0, 71e-5, 5.91, 38785.898, 0.2, 37, 0, 69e-5, 2.2, 15613.742, -2.5, -16, 0, 66e-5, 3.87, 15.732, -2.5, -23, 0, 66e-5, 0.86, 25823.926, 0.2, 24, 0, 65e-5, 2.52, 8170.957, 1.5, 25, 0, 63e-5, 0.18, 8322.132, -0.3, 0, 0, 6e-4, 5.84, 8326.062, 1.5, 25, 0, 6e-4, 5.15, 8331.321, 1.5, 25, 0, 6e-4, 2.18, 8486.426, 1.5, 25, 0, 58e-5, 2.3, -1.731, -4, -44, 0, 58e-5, 5.43, 14357.138, -2, -16, 0, 57e-5, 3.09, 8294.91, 2, 29, 0, 57e-5, 4.67, -8362.473, -1, -21, 0, 56e-5, 4.15, 16833.151, -1, 0, 0, 54e-5, 1.93, 7056.329, -2, -19, 0, 54e-5, 5.27, 8315.574, -2, -19, 0, 52e-5, 5.6, 8311.418, -2, -19, 0, 52e-5, 2.7, -77.552, 0, 0, 0, 51e-5, 4.3, 7230.984, 2, 25, 0, 5e-4, 0.4, -0.508, 0, 0, 0, 49e-5, 5.4, 7211.433, -2, -19, 0, 49e-5, 4.4, 7216.693, -2, -19, 0, 49e-5, 4.3, 16864.631, 0, 24, 0, 49e-5, 2.2, 16869.234, -3, -26, 0, 47e-5, 6.1, 627.596, 0, 0, 0, 47e-5, 5, 12.619, 1, 7, 0, 45e-5, 4.9, -8815.018, -5, -69, 0, 44e-5, 1.6, 62.133, -2, -19, 0, 42e-5, 2.9, -13.118, -4, -44, 0, 42e-5, 4.1, -119.445, 0, 0, 0, 41e-5, 4.3, 22756.817, -3, -13, 0, 41e-5, 3.6, 8288.877, 2, 25, 0, 4e-4, 0.5, 6663.308, -2, -19, 0, 4e-4, 1.1, 8368.506, 2, 25, 0, 39e-5, 4.1, 6443.786, 2, 25, 0, 39e-5, 3.1, 16657.383, 3, 50, 0, 38e-5, 0.1, 16657.031, 3, 50, 0, 38e-5, 3, 16657.735, 3, 50, 0, 38e-5, 4.6, 23942.433, -1, 9, 0, 37e-5, 4.3, 15385.02, -1, 6, 0, 37e-5, 5, 548.678, 0, 0, 0, 36e-5, 1.8, 7213.352, -2, -19, 0, 36e-5, 1.7, 7214.774, -2, -19, 0, 35e-5, 1.1, 7777.936, 2, 25, 0, 35e-5, 1.6, -8.86, 0, 0, 0, 35e-5, 4.4, 23869.145, 2, 56, 0, 35e-5, 2, 6691.693, -2, -19, 0, 34e-5, 1.3, -1185.616, -2, -22, 0, 34e-5, 2.2, 23873.747, -1, 6, 0, 33e-5, 2, -235.287, 0, 0, 0, 33e-5, 3.1, 17913.987, 3, 50, 0, 33e-5, 1, 8351.233, -2, -19, 0],
  [487e-5, 4.6693, 628.30196, -0.027, 0, -0.01, 228e-5, 2.6746, -2.3012, 1.523, 25, -0.12, 15e-4, 3.372, 6585.76091, -2.16, -19, 0.1, 12e-4, 5.728, 14914.45233, -0.64, 6, 0, 108e-5, 3.969, 7700.38947, 1.55, 25, -0.1, 8e-4, 0.742, 8956.99338, 1.5, 25, -0.1, 254e-6, 6.002, 0.3286, 1.52, 25, -0.1, 21e-5, 0.144, 7842.3648, -2.21, -19, 0, 18e-5, 2.5, 16171.0562, -0.7, 6, 0, 13e-5, 0.44, 8399.6791, -0.4, 3, 0, 126e-6, 5.03, 8326.3902, 3, 50, 0, 12e-5, 5.77, 14286.1504, -0.6, 6, 0, 118e-6, 5.96, 8330.9926, 0, 0, 0, 11e-5, 1.8, 23243.1438, 0.9, 31, 0, 11e-5, 3.42, 5957.459, -2.1, -19, 0, 11e-5, 4.63, 1256.6039, -0.1, 0, 0, 99e-6, 4.7, -0.7113, 0, 0, 0, 7e-5, 0.04, 16029.0809, 3.1, 50, 0, 7e-5, 5.14, 8328.3391, 1.5, 25, 0, 7e-5, 5.85, 8329.0437, 1.5, 25, 0, 6e-5, 1.02, -1742.9305, -3.7, -44, 0, 6e-5, 3.1, 17285.6848, 3, 50, 0, 54e-6, 5.69, -0.352, 0, 0, 0, 43e-6, 0.52, 15.542, 0, 0, 0, 41e-6, 2.03, 2.63, 0, 0, 0, 4e-5, 0.1, 8470.667, -2.2, -19, 0, 4e-5, 4.01, 7072.088, 1.6, 25, 0, 36e-6, 2.93, -8.86, -0.3, 0, 0, 3e-5, 1.2, 22128.515, -2.8, -13, 0, 3e-5, 2.54, 15542.754, -0.7, 6, 0, 27e-6, 4.43, 7211.762, -0.7, 6, 0, 26e-6, 0.51, 15540.453, 0.9, 31, 0, 26e-6, 1.44, 15545.055, -2.2, -19, 0, 25e-6, 5.37, 7216.364, -3.7, -44, 0],
  [12e-6, 1.041, -2.3012, 1.52, 25, -0.1, 17e-7, 0.31, -0.711, 0, 0, 0]
];
ShouXingUtil.QI_KB = [
  1640650479938e-6,
  15.218425,
  1642476703182e-6,
  15.21874996,
  1683430515601e-6,
  15.218750011,
  1752157640664e-6,
  15.218749978,
  1807675003759e-6,
  15.218620279,
  1883627765182e-6,
  15.218612292,
  19073691281e-4,
  15.218449176,
  1936603140413e-6,
  15.218425,
  193914552418e-5,
  15.218466998,
  19471807983e-4,
  15.218524844,
  1964362041824e-6,
  15.218533526,
  1987372340971e-6,
  15.218513908,
  1999653819126e-6,
  15.218530782,
  2007445469786e-6,
  15.218535181,
  2021324917146e-6,
  15.218526248,
  2047257232342e-6,
  15.218519654,
  2070282898213e-6,
  15.218425,
  207320487285e-5,
  15.218515221,
  2080144500926e-6,
  15.218530782,
  2086703688963e-6,
  15.218523776,
  2110033182763e-6,
  15.218425,
  2111190300888e-6,
  15.218425,
  2113731271005e-6,
  15.218515671,
  2120670840263e-6,
  15.218425,
  2123973309063e-6,
  15.218425,
  2125068997336e-6,
  15.218477932,
  2136026312633e-6,
  15.218472436,
  2156099495538e-6,
  15.218425,
  2159021324663e-6,
  15.218425,
  2162308575254e-6,
  15.218461742,
  2178485706538e-6,
  15.218425,
  2178759662849e-6,
  15.218445786,
  21853340208e-4,
  15.218425,
  2187525481425e-6,
  15.218425,
  2188621191481e-6,
  15.218437494,
  232214776e-2
];
ShouXingUtil.QB = _ShouXingUtil.decode("FrcFs22AFsckF2tsDtFqEtF1posFdFgiFseFtmelpsEfhkF2anmelpFlF1ikrotcnEqEq2FfqmcDsrFor22FgFrcgDscFs22FgEeFtE2sfFs22sCoEsaF2tsD1FpeE2eFsssEciFsFnmelpFcFhkF2tcnEqEpFgkrotcnEqrEtFermcDsrE222FgBmcmr22DaEfnaF222sD1FpeForeF2tssEfiFpEoeFssD1iFstEqFppDgFstcnEqEpFg11FscnEqrAoAF2ClAEsDmDtCtBaDlAFbAEpAAAAAD2FgBiBqoBbnBaBoAAAAAAAEgDqAdBqAFrBaBoACdAAf1AACgAAAeBbCamDgEifAE2AABa1C1BgFdiAAACoCeE1ADiEifDaAEqAAFe1AcFbcAAAAAF1iFaAAACpACmFmAAAAAAAACrDaAAADG0");
ShouXingUtil.SHUO_KB = [1457698231017e-6, 29.53067166, 1546082512234e-6, 29.53085106, 16406407353e-4, 29.5306, 1642472151543e-6, 29.53085439, 16834305093e-4, 29.53086148, 1752148041079e-6, 29.53085097, 1807665420323e-6, 29.53059851, 18836181141e-4, 29.5306, 19073607047e-4, 29.5306, 19365962249e-4, 29.5306, 19391356753e-4, 29.5306, 1947168];
ShouXingUtil.SB = _ShouXingUtil.decode("EqoFscDcrFpmEsF2DfFideFelFpFfFfFiaipqti1ksttikptikqckstekqttgkqttgkqteksttikptikq2fjstgjqttjkqttgkqtekstfkptikq2tijstgjiFkirFsAeACoFsiDaDiADc1AFbBfgdfikijFifegF1FhaikgFag1E2btaieeibggiffdeigFfqDfaiBkF1kEaikhkigeidhhdiegcFfakF1ggkidbiaedksaFffckekidhhdhdikcikiakicjF1deedFhFccgicdekgiFbiaikcfi1kbFibefgEgFdcFkFeFkdcfkF1kfkcickEiFkDacFiEfbiaejcFfffkhkdgkaiei1ehigikhdFikfckF1dhhdikcfgjikhfjicjicgiehdikcikggcifgiejF1jkieFhegikggcikFegiegkfjebhigikggcikdgkaFkijcfkcikfkcifikiggkaeeigefkcdfcfkhkdgkegieidhijcFfakhfgeidieidiegikhfkfckfcjbdehdikggikgkfkicjicjF1dbidikFiggcifgiejkiegkigcdiegfggcikdbgfgefjF1kfegikggcikdgFkeeijcfkcikfkekcikdgkabhkFikaffcfkhkdgkegbiaekfkiakicjhfgqdq2fkiakgkfkhfkfcjiekgFebicggbedF1jikejbbbiakgbgkacgiejkijjgigfiakggfggcibFifjefjF1kfekdgjcibFeFkijcfkfhkfkeaieigekgbhkfikidfcjeaibgekgdkiffiffkiakF1jhbakgdki1dj1ikfkicjicjieeFkgdkicggkighdF1jfgkgfgbdkicggfggkidFkiekgijkeigfiskiggfaidheigF1jekijcikickiggkidhhdbgcfkFikikhkigeidieFikggikhkffaffijhidhhakgdkhkijF1kiakF1kfheakgdkifiggkigicjiejkieedikgdfcggkigieeiejfgkgkigbgikicggkiaideeijkefjeijikhkiggkiaidheigcikaikffikijgkiahi1hhdikgjfifaakekighie1hiaikggikhkffakicjhiahaikggikhkijF1kfejfeFhidikggiffiggkigicjiekgieeigikggiffiggkidheigkgfjkeigiegikifiggkidhedeijcfkFikikhkiggkidhh1ehigcikaffkhkiggkidhh1hhigikekfiFkFikcidhh1hitcikggikhkfkicjicghiediaikggikhkijbjfejfeFhaikggifikiggkigiejkikgkgieeigikggiffiggkigieeigekijcijikggifikiggkideedeijkefkfckikhkiggkidhh1ehijcikaffkhkiggkidhh1hhigikhkikFikfckcidhh1hiaikgjikhfjicjicgiehdikcikggifikigiejfejkieFhegikggifikiggfghigkfjeijkhigikggifikiggkigieeijcijcikfksikifikiggkidehdeijcfdckikhkiggkhghh1ehijikifffffkhsFngErD1pAfBoDd1BlEtFqA2AqoEpDqElAEsEeB2BmADlDkqBtC1FnEpDqnEmFsFsAFnllBbFmDsDiCtDmAB2BmtCgpEplCpAEiBiEoFqFtEqsDcCnFtADnFlEgdkEgmEtEsCtDmADqFtAFrAtEcCqAE1BoFqC1F1DrFtBmFtAC2ACnFaoCgADcADcCcFfoFtDlAFgmFqBq2bpEoAEmkqnEeCtAE1bAEqgDfFfCrgEcBrACfAAABqAAB1AAClEnFeCtCgAADqDoBmtAAACbFiAAADsEtBqAB2FsDqpFqEmFsCeDtFlCeDtoEpClEqAAFrAFoCgFmFsFqEnAEcCqFeCtFtEnAEeFtAAEkFnErAABbFkADnAAeCtFeAfBoAEpFtAABtFqAApDcCGJ");
var _LunarYear = class {
  static fromYear(lunarYear) {
    let y;
    if (!_LunarYear._CACHE_YEAR || _LunarYear._CACHE_YEAR.getYear() != lunarYear) {
      y = new _LunarYear(lunarYear);
      _LunarYear._CACHE_YEAR = y;
    } else {
      y = _LunarYear._CACHE_YEAR;
    }
    return y;
  }
  constructor(lunarYear) {
    this._year = lunarYear;
    this._months = [];
    this._jieQiJulianDays = [];
    const offset = lunarYear - 4;
    let yearGanIndex = offset % 10;
    let yearZhiIndex = offset % 12;
    if (yearGanIndex < 0) {
      yearGanIndex += 10;
    }
    if (yearZhiIndex < 0) {
      yearZhiIndex += 12;
    }
    this._ganIndex = yearGanIndex;
    this._zhiIndex = yearZhiIndex;
    this.compute();
  }
  compute() {
    const jq = [];
    const hs = [];
    const dayCounts = [];
    const months = [];
    let i, j;
    const currentYear = this._year;
    let jd = Math.floor((currentYear - 2e3) * 365.2422 + 180);
    let w = Math.floor((jd - 355 + 183) / 365.2422) * 365.2422 + 355;
    if (ShouXingUtil.calcQi(w) > jd) {
      w -= 365.2422;
    }
    for (i = 0; i < 26; i++) {
      jq.push(ShouXingUtil.calcQi(w + 15.2184 * i));
    }
    for (i = 0, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i++) {
      if (i === 0) {
        jd = ShouXingUtil.qiAccurate2(jq[0] - 15.2184);
      } else if (i <= 26) {
        jd = ShouXingUtil.qiAccurate2(jq[i - 1]);
      } else {
        jd = ShouXingUtil.qiAccurate2(jq[25] + 15.2184 * (i - 26));
      }
      this._jieQiJulianDays.push(jd + Solar.J2000);
    }
    w = ShouXingUtil.calcShuo(jq[0]);
    if (w > jq[0]) {
      w -= 29.53;
    }
    for (i = 0; i < 16; i++) {
      hs.push(ShouXingUtil.calcShuo(w + 29.5306 * i));
    }
    for (i = 0; i < 15; i++) {
      dayCounts.push(Math.floor(hs[i + 1] - hs[i]));
      months.push(i);
    }
    const prevYear = currentYear - 1;
    let leapIndex = 16;
    if (_LunarYear._LEAP_11.indexOf(currentYear) > -1) {
      leapIndex = 13;
    } else if (_LunarYear._LEAP_12.indexOf(currentYear) > -1) {
      leapIndex = 14;
    } else if (hs[13] <= jq[24]) {
      i = 1;
      while (hs[i + 1] > jq[2 * i] && i < 13) {
        i++;
      }
      leapIndex = i;
    }
    for (j = leapIndex; j < 15; j++) {
      months[j] -= 1;
    }
    const ymc = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let fm = -1;
    let index = -1;
    let y = prevYear;
    for (i = 0; i < 15; i++) {
      const dm = hs[i] + Solar.J2000;
      const v2 = months[i];
      let mc = ymc[v2 % 12];
      if (1724360 <= dm && dm < 1729794) {
        mc = ymc[(v2 + 1) % 12];
      } else if (1807724 <= dm && dm < 1808699) {
        mc = ymc[(v2 + 1) % 12];
      } else if (dm == 1729794 || dm == 1808699) {
        mc = 12;
      }
      if (fm == -1) {
        fm = mc;
        index = mc;
      }
      if (mc < fm) {
        y += 1;
        index = 1;
      }
      fm = mc;
      if (i == leapIndex) {
        mc = -mc;
      } else if (dm == 1729794 || dm == 1808699) {
        mc = -11;
      }
      this._months.push(new LunarMonth(y, mc, dayCounts[i], hs[i] + Solar.J2000, index));
      index++;
    }
  }
  getYear() {
    return this._year;
  }
  getGanIndex() {
    return this._ganIndex;
  }
  getZhiIndex() {
    return this._zhiIndex;
  }
  getGan() {
    return LunarUtil.GAN[this._ganIndex + 1];
  }
  getZhi() {
    return LunarUtil.ZHI[this._zhiIndex + 1];
  }
  getGanZhi() {
    return this.getGan() + this.getZhi();
  }
  getJieQiJulianDays() {
    return this._jieQiJulianDays;
  }
  getDayCount() {
    let n = 0;
    for (let i = 0, j = this._months.length; i < j; i++) {
      const m = this._months[i];
      if (m.getYear() == this._year) {
        n += m.getDayCount();
      }
    }
    return n;
  }
  getMonths() {
    return this._months;
  }
  getMonthsInYear() {
    const l = [];
    for (let i = 0, j = this._months.length; i < j; i++) {
      const m = this._months[i];
      if (m.getYear() == this._year) {
        l.push(m);
      }
    }
    return l;
  }
  getMonth(lunarMonth) {
    for (let i = 0, j = this._months.length; i < j; i++) {
      const m = this._months[i];
      if (m.getYear() == this._year && m.getMonth() == lunarMonth) {
        return m;
      }
    }
    return null;
  }
  getLeapMonth() {
    for (let i = 0, j = this._months.length; i < j; i++) {
      const m = this._months[i];
      if (m.getYear() == this._year && m.isLeap()) {
        return Math.abs(m.getMonth());
      }
    }
    return 0;
  }
  toString() {
    return `${this.getYear()}`;
  }
  toFullString() {
    return `${this.getYear()}年`;
  }
  _getZaoByGan(index, name) {
    const month = this.getMonth(1);
    if (null == month) {
      return "";
    }
    let offset = index - Solar.fromJulianDay(month.getFirstJulianDay()).getLunar().getDayGanIndex();
    if (offset < 0) {
      offset += 10;
    }
    return name.replace("几", LunarUtil.NUMBER[offset + 1]);
  }
  _getZaoByZhi(index, name) {
    const month = this.getMonth(1);
    if (null == month) {
      return "";
    }
    let offset = index - Solar.fromJulianDay(month.getFirstJulianDay()).getLunar().getDayZhiIndex();
    if (offset < 0) {
      offset += 12;
    }
    return name.replace("几", LunarUtil.NUMBER[offset + 1]);
  }
  getTouLiang() {
    return this._getZaoByZhi(0, "几鼠偷粮");
  }
  getCaoZi() {
    return this._getZaoByZhi(0, "草子几分");
  }
  getGengTian() {
    return this._getZaoByZhi(1, "几牛耕田");
  }
  getHuaShou() {
    return this._getZaoByZhi(3, "花收几分");
  }
  getZhiShui() {
    return this._getZaoByZhi(4, "几龙治水");
  }
  getTuoGu() {
    return this._getZaoByZhi(6, "几马驮谷");
  }
  getQiangMi() {
    return this._getZaoByZhi(9, "几鸡抢米");
  }
  getKanCan() {
    return this._getZaoByZhi(9, "几姑看蚕");
  }
  getGongZhu() {
    return this._getZaoByZhi(11, "几屠共猪");
  }
  getJiaTian() {
    return this._getZaoByGan(0, "甲田几分");
  }
  getFenBing() {
    return this._getZaoByGan(2, "几人分饼");
  }
  getDeJin() {
    return this._getZaoByGan(7, "几日得金");
  }
  getRenBing() {
    return this._getZaoByGan(2, this._getZaoByZhi(2, "几人几丙"));
  }
  getRenChu() {
    return this._getZaoByGan(3, this._getZaoByZhi(2, "几人几锄"));
  }
  getYuan() {
    return _LunarYear.YUAN[Math.floor((this._year + 2696) / 60) % 3] + "元";
  }
  getYun() {
    return _LunarYear.YUN[Math.floor((this._year + 2696) / 20) % 9] + "运";
  }
  getNineStar() {
    const index = LunarUtil.getJiaZiIndex(this.getGanZhi()) + 1;
    const yuan = Math.floor(this._year + 2696) / 60 % 3;
    let offset = (62 + yuan * 3 - index) % 9;
    if (0 == offset) {
      offset = 9;
    }
    return NineStar.fromIndex(offset - 1);
  }
  getPositionXi() {
    return LunarUtil.POSITION_XI[this._ganIndex + 1];
  }
  getPositionXiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionXi()];
  }
  getPositionYangGui() {
    return LunarUtil.POSITION_YANG_GUI[this._ganIndex + 1];
  }
  getPositionYangGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
  }
  getPositionYinGui() {
    return LunarUtil.POSITION_YIN_GUI[this._ganIndex + 1];
  }
  getPositionYinGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
  }
  getPositionFu(sect = 2) {
    return (1 == sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this._ganIndex + 1];
  }
  getPositionFuDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getPositionFu(sect)];
  }
  getPositionCai() {
    return LunarUtil.POSITION_CAI[this._ganIndex + 1];
  }
  getPositionCaiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionCai()];
  }
  getPositionTaiSui() {
    return LunarUtil.POSITION_TAI_SUI_YEAR[this._zhiIndex];
  }
  getPositionTaiSuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionTaiSui()];
  }
  next(n) {
    return _LunarYear.fromYear(this._year + n);
  }
};
var LunarYear = _LunarYear;
LunarYear.YUAN = ["下", "上", "中"];
LunarYear.YUN = ["七", "八", "九", "一", "二", "三", "四", "五", "六"];
LunarYear._LEAP_11 = [75, 94, 170, 265, 322, 398, 469, 553, 583, 610, 678, 735, 754, 773, 849, 887, 936, 1050, 1069, 1126, 1145, 1164, 1183, 1259, 1278, 1308, 1373, 1403, 1441, 1460, 1498, 1555, 1593, 1612, 1631, 1642, 2033, 2128, 2147, 2242, 2614, 2728, 2910, 3062, 3244, 3339, 3616, 3711, 3730, 3825, 4007, 4159, 4197, 4322, 4341, 4379, 4417, 4531, 4599, 4694, 4713, 4789, 4808, 4971, 5085, 5104, 5161, 5180, 5199, 5294, 5305, 5476, 5677, 5696, 5772, 5791, 5848, 5886, 6049, 6068, 6144, 6163, 6258, 6402, 6440, 6497, 6516, 6630, 6641, 6660, 6679, 6736, 6774, 6850, 6869, 6899, 6918, 6994, 7013, 7032, 7051, 7070, 7089, 7108, 7127, 7146, 7222, 7271, 7290, 7309, 7366, 7385, 7404, 7442, 7461, 7480, 7491, 7499, 7594, 7624, 7643, 7662, 7681, 7719, 7738, 7814, 7863, 7882, 7901, 7939, 7958, 7977, 7996, 8034, 8053, 8072, 8091, 8121, 8159, 8186, 8216, 8235, 8254, 8273, 8311, 8330, 8341, 8349, 8368, 8444, 8463, 8474, 8493, 8531, 8569, 8588, 8626, 8664, 8683, 8694, 8702, 8713, 8721, 8751, 8789, 8808, 8816, 8827, 8846, 8884, 8903, 8922, 8941, 8971, 9036, 9066, 9085, 9104, 9123, 9142, 9161, 9180, 9199, 9218, 9256, 9294, 9313, 9324, 9343, 9362, 9381, 9419, 9438, 9476, 9514, 9533, 9544, 9552, 9563, 9571, 9582, 9601, 9639, 9658, 9666, 9677, 9696, 9734, 9753, 9772, 9791, 9802, 9821, 9886, 9897, 9916, 9935, 9954, 9973, 9992];
LunarYear._LEAP_12 = [37, 56, 113, 132, 151, 189, 208, 227, 246, 284, 303, 341, 360, 379, 417, 436, 458, 477, 496, 515, 534, 572, 591, 629, 648, 667, 697, 716, 792, 811, 830, 868, 906, 925, 944, 963, 982, 1001, 1020, 1039, 1058, 1088, 1153, 1202, 1221, 1240, 1297, 1335, 1392, 1411, 1422, 1430, 1517, 1525, 1536, 1574, 3358, 3472, 3806, 3988, 4751, 4941, 5066, 5123, 5275, 5343, 5438, 5457, 5495, 5533, 5552, 5715, 5810, 5829, 5905, 5924, 6421, 6535, 6793, 6812, 6888, 6907, 7002, 7184, 7260, 7279, 7374, 7556, 7746, 7757, 7776, 7833, 7852, 7871, 7966, 8015, 8110, 8129, 8148, 8224, 8243, 8338, 8406, 8425, 8482, 8501, 8520, 8558, 8596, 8607, 8615, 8645, 8740, 8778, 8835, 8865, 8930, 8960, 8979, 8998, 9017, 9055, 9074, 9093, 9112, 9150, 9188, 9237, 9275, 9332, 9351, 9370, 9408, 9427, 9446, 9457, 9465, 9495, 9560, 9590, 9628, 9647, 9685, 9715, 9742, 9780, 9810, 9818, 9829, 9848, 9867, 9905, 9924, 9943, 9962, 1e4];
LunarYear._CACHE_YEAR = null;
var LunarTime = class _LunarTime {
  static fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second) {
    return new _LunarTime(lunarYear, lunarMonth, lunarDay, hour, minute, second);
  }
  constructor(lunarYear, lunarMonth, lunarDay, hour, minute, second) {
    this._lunar = Lunar.fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second);
    this._zhiIndex = LunarUtil.getTimeZhiIndex([(hour < 10 ? "0" : "") + hour, (minute < 10 ? "0" : "") + minute].join(":"));
    this._ganIndex = (this._lunar.getDayGanIndexExact() % 5 * 2 + this._zhiIndex) % 10;
  }
  getGanIndex() {
    return this._ganIndex;
  }
  getZhiIndex() {
    return this._zhiIndex;
  }
  getGan() {
    return LunarUtil.GAN[this._ganIndex + 1];
  }
  getZhi() {
    return LunarUtil.ZHI[this._zhiIndex + 1];
  }
  getGanZhi() {
    return this.getGan() + this.getZhi();
  }
  getShengXiao() {
    return LunarUtil.SHENGXIAO[this._zhiIndex + 1];
  }
  getPositionXi() {
    return LunarUtil.POSITION_XI[this._ganIndex + 1];
  }
  getPositionXiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionXi()];
  }
  getPositionYangGui() {
    return LunarUtil.POSITION_YANG_GUI[this._ganIndex + 1];
  }
  getPositionYangGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
  }
  getPositionYinGui() {
    return LunarUtil.POSITION_YIN_GUI[this._ganIndex + 1];
  }
  getPositionYinGuiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
  }
  getPositionFu(sect = 2) {
    return (1 === sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this._ganIndex + 1];
  }
  getPositionFuDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getPositionFu(sect)];
  }
  getPositionCai() {
    return LunarUtil.POSITION_CAI[this._ganIndex + 1];
  }
  getPositionCaiDesc() {
    return LunarUtil.POSITION_DESC[this.getPositionCai()];
  }
  getNaYin() {
    return LunarUtil.NAYIN[this.getGanZhi()];
  }
  getTianShen() {
    return LunarUtil.TIAN_SHEN[(this._zhiIndex + LunarUtil.ZHI_TIAN_SHEN_OFFSET[this._lunar.getDayZhiExact()]) % 12 + 1];
  }
  getTianShenType() {
    return LunarUtil.TIAN_SHEN_TYPE[this.getTianShen()];
  }
  getTianShenLuck() {
    return LunarUtil.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()];
  }
  getChong() {
    return LunarUtil.CHONG[this._zhiIndex];
  }
  getSha() {
    return LunarUtil.SHA[this.getZhi()];
  }
  getChongShengXiao() {
    const chong = this.getChong();
    for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
      if (LunarUtil.ZHI[i] === chong) {
        return LunarUtil.SHENGXIAO[i];
      }
    }
    return "";
  }
  getChongDesc() {
    return "(" + this.getChongGan() + this.getChong() + ")" + this.getChongShengXiao();
  }
  getChongGan() {
    return LunarUtil.CHONG_GAN[this._ganIndex];
  }
  getChongGanTie() {
    return LunarUtil.CHONG_GAN_TIE[this._ganIndex];
  }
  getYi() {
    return LunarUtil.getTimeYi(this._lunar.getDayInGanZhiExact(), this.getGanZhi());
  }
  getJi() {
    return LunarUtil.getTimeJi(this._lunar.getDayInGanZhiExact(), this.getGanZhi());
  }
  getNineStar() {
    const solarYmd = this._lunar.getSolar().toYmd();
    const jieQi = this._lunar.getJieQiTable();
    let asc = false;
    if (solarYmd >= jieQi[I18n.getMessage("jq.dongZhi")].toYmd() && solarYmd < jieQi[I18n.getMessage("jq.xiaZhi")].toYmd()) {
      asc = true;
    }
    const offset = asc ? [0, 3, 6] : [8, 5, 2];
    const start = offset[this._lunar.getDayZhiIndex() % 3];
    const index = asc ? start + this._zhiIndex : start + 9 - this._zhiIndex;
    return NineStar.fromIndex(index % 9);
  }
  getXun() {
    return LunarUtil.getXun(this.getGanZhi());
  }
  getXunKong() {
    return LunarUtil.getXunKong(this.getGanZhi());
  }
  getMinHm() {
    let hour = this._lunar.getHour();
    if (hour < 1) {
      return "00:00";
    } else if (hour > 22) {
      return "23:00";
    }
    if (hour % 2 === 0) {
      hour -= 1;
    }
    return (hour < 10 ? "0" : "") + hour + ":00";
  }
  getMaxHm() {
    let hour = this._lunar.getHour();
    if (hour < 1) {
      return "00:59";
    } else if (hour > 22) {
      return "23:59";
    }
    if (hour % 2 !== 0) {
      hour += 1;
    }
    return (hour < 10 ? "0" : "") + hour + ":59";
  }
  toString() {
    return this.getGanZhi();
  }
};
var _Foto = class {
  constructor(lunar) {
    this._lunar = lunar;
  }
  static fromLunar(lunar) {
    return new _Foto(lunar);
  }
  static fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second) {
    return _Foto.fromLunar(Lunar.fromYmdHms(lunarYear + _Foto.DEAD_YEAR - 1, lunarMonth, lunarDay, hour, minute, second));
  }
  static fromYmd(lunarYear, lunarMonth, lunarDay) {
    return _Foto.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
  }
  getLunar() {
    return this._lunar;
  }
  getYear() {
    const sy = this._lunar.getSolar().getYear();
    let y = sy - _Foto.DEAD_YEAR;
    if (sy === this._lunar.getYear()) {
      y++;
    }
    return y;
  }
  getMonth() {
    return this._lunar.getMonth();
  }
  getDay() {
    return this._lunar.getDay();
  }
  getYearInChinese() {
    const y = this.getYear() + "";
    let s = "";
    const zero = "0".charCodeAt(0);
    for (let i = 0, j = y.length; i < j; i++) {
      s += LunarUtil.NUMBER[y.charCodeAt(i) - zero];
    }
    return s;
  }
  getMonthInChinese() {
    return this._lunar.getMonthInChinese();
  }
  getDayInChinese() {
    return this._lunar.getDayInChinese();
  }
  getFestivals() {
    const l = FotoUtil.FESTIVAL[this.getMonth() + "-" + this.getDay()];
    return l ? l : [];
  }
  getOtherFestivals() {
    const l = [];
    const fs = FotoUtil.OTHER_FESTIVAL[this.getMonth() + "-" + this.getDay()];
    if (fs) {
      fs.forEach((f) => {
        l.push(f);
      });
    }
    return l;
  }
  isMonthZhai() {
    const m = this.getMonth();
    return 1 === m || 5 === m || 9 === m;
  }
  isDayYangGong() {
    const l = this.getFestivals();
    for (let i = 0, j = l.length; i < j; i++) {
      if ("杨公忌" === l[i].getName()) {
        return true;
      }
    }
    return false;
  }
  isDayZhaiShuoWang() {
    const d = this.getDay();
    return 1 === d || 15 === d;
  }
  isDayZhaiSix() {
    const d = this.getDay();
    if (8 === d || 14 === d || 15 === d || 23 === d || 29 === d || 30 === d) {
      return true;
    } else if (28 === d) {
      const m = LunarMonth.fromYm(this._lunar.getYear(), this.getMonth());
      if (null != m && 30 !== m.getDayCount()) {
        return true;
      }
    }
    return false;
  }
  isDayZhaiTen() {
    const d = this.getDay();
    return 1 === d || 8 === d || 14 === d || 15 === d || 18 === d || 23 === d || 24 === d || 28 === d || 29 === d || 30 === d;
  }
  isDayZhaiGuanYin() {
    const k = this.getMonth() + "-" + this.getDay();
    for (let i = 0, j = FotoUtil.DAY_ZHAI_GUAN_YIN.length; i < j; i++) {
      if (k === FotoUtil.DAY_ZHAI_GUAN_YIN[i]) {
        return true;
      }
    }
    return false;
  }
  getXiu() {
    return FotoUtil.getXiu(this.getMonth(), this.getDay());
  }
  getXiuLuck() {
    return LunarUtil.XIU_LUCK[this.getXiu()];
  }
  getXiuSong() {
    return LunarUtil.XIU_SONG[this.getXiu()];
  }
  getZheng() {
    return LunarUtil.ZHENG[this.getXiu()];
  }
  getAnimal() {
    return LunarUtil.ANIMAL[this.getXiu()];
  }
  getGong() {
    return LunarUtil.GONG[this.getXiu()];
  }
  getShou() {
    return LunarUtil.SHOU[this.getGong()];
  }
  toString() {
    return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese();
  }
  toFullString() {
    let s = this.toString();
    const festivals = this.getFestivals();
    for (let i = 0, j = festivals.length; i < j; i++) {
      s += " (" + festivals[i] + ")";
    }
    return s;
  }
};
var Foto = _Foto;
Foto.DEAD_YEAR = -543;
var _Tao = class {
  constructor(lunar) {
    this._lunar = lunar;
  }
  static fromLunar(lunar) {
    return new _Tao(lunar);
  }
  static fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second) {
    return _Tao.fromLunar(Lunar.fromYmdHms(lunarYear + _Tao.BIRTH_YEAR, lunarMonth, lunarDay, hour, minute, second));
  }
  static fromYmd(lunarYear, lunarMonth, lunarDay) {
    return _Tao.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
  }
  getLunar() {
    return this._lunar;
  }
  getYear() {
    return this._lunar.getYear() - _Tao.BIRTH_YEAR;
  }
  getMonth() {
    return this._lunar.getMonth();
  }
  getDay() {
    return this._lunar.getDay();
  }
  getYearInChinese() {
    const y = this.getYear() + "";
    let s = "";
    const zero = "0".charCodeAt(0);
    for (let i = 0, j = y.length; i < j; i++) {
      s += LunarUtil.NUMBER[y.charCodeAt(i) - zero];
    }
    return s;
  }
  getMonthInChinese() {
    return this._lunar.getMonthInChinese();
  }
  getDayInChinese() {
    return this._lunar.getDayInChinese();
  }
  getFestivals() {
    const l = [];
    const fs = TaoUtil.FESTIVAL[this.getMonth() + "-" + this.getDay()];
    if (fs) {
      fs.forEach((f2) => {
        l.push(f2);
      });
    }
    const jq = this._lunar.getJieQi();
    if (I18n.getMessage("jq.dongZhi") === jq) {
      l.push(new TaoFestival("元始天尊圣诞"));
    } else if (I18n.getMessage("jq.xiaZhi") === jq) {
      l.push(new TaoFestival("灵宝天尊圣诞"));
    }
    let f = TaoUtil.BA_JIE[jq];
    if (f) {
      l.push(new TaoFestival(f));
    }
    f = TaoUtil.BA_HUI[this._lunar.getDayInGanZhi()];
    if (f) {
      l.push(new TaoFestival(f));
    }
    return l;
  }
  _isDayIn(days) {
    const md = this.getMonth() + "-" + this.getDay();
    for (let i = 0, j = days.length; i < j; i++) {
      if (md === days[i]) {
        return true;
      }
    }
    return false;
  }
  isDaySanHui() {
    return this._isDayIn(TaoUtil.SAN_HUI);
  }
  isDaySanYuan() {
    return this._isDayIn(TaoUtil.SAN_YUAN);
  }
  isDayBaJie() {
    return !!TaoUtil.BA_JIE[this._lunar.getJieQi()];
  }
  isDayWuLa() {
    return this._isDayIn(TaoUtil.WU_LA);
  }
  isDayBaHui() {
    return !!TaoUtil.BA_HUI[this._lunar.getDayInGanZhi()];
  }
  isDayMingWu() {
    return I18n.getMessage("tg.wu") === this._lunar.getDayGan();
  }
  isDayAnWu() {
    return this._lunar.getDayZhi() === TaoUtil.AN_WU[Math.abs(this.getMonth()) - 1];
  }
  isDayWu() {
    return this.isDayMingWu() || this.isDayAnWu();
  }
  isDayTianShe() {
    let ret = false;
    const mz = this._lunar.getMonthZhi();
    const dgz = this._lunar.getDayInGanZhi();
    if ([I18n.getMessage("dz.yin"), I18n.getMessage("dz.mao"), I18n.getMessage("dz.chen")].join(",").indexOf(mz) > -1) {
      if (I18n.getMessage("jz.wuYin") === dgz) {
        ret = true;
      }
    } else if ([I18n.getMessage("dz.si"), I18n.getMessage("dz.wu"), I18n.getMessage("dz.wei")].join(",").indexOf(mz) > -1) {
      if (I18n.getMessage("jz.jiaWu") === dgz) {
        ret = true;
      }
    } else if ([I18n.getMessage("dz.shen"), I18n.getMessage("dz.you"), I18n.getMessage("dz.xu")].join(",").indexOf(mz) > -1) {
      if (I18n.getMessage("jz.wuShen") === dgz) {
        ret = true;
      }
    } else if ([I18n.getMessage("dz.hai"), I18n.getMessage("dz.zi"), I18n.getMessage("dz.chou")].join(",").indexOf(mz) > -1) {
      if (I18n.getMessage("jz.jiaZi") === dgz) {
        ret = true;
      }
    }
    return ret;
  }
  toString() {
    return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese();
  }
  toFullString() {
    return "道歷" + this.getYearInChinese() + "年，天運" + this._lunar.getYearInGanZhi() + "年，" + this._lunar.getMonthInGanZhi() + "月，" + this._lunar.getDayInGanZhi() + "日。" + this.getMonthInChinese() + "月" + this.getDayInChinese() + "日，" + this._lunar.getTimeZhi() + "時。";
  }
};
var Tao = _Tao;
Tao.BIRTH_YEAR = -2697;
var Lunar = class _Lunar {
  static fromYmd(lunarYear, lunarMonth, lunarDay) {
    return _Lunar.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
  }
  static fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second) {
    let y = LunarYear.fromYear(lunarYear);
    const m = y.getMonth(lunarMonth);
    if (null == m) {
      throw new Error(`wrong lunar year ${lunarYear} month ${lunarMonth}`);
    }
    if (lunarDay < 1) {
      throw new Error("lunar day must bigger than 0");
    }
    const days = m.getDayCount();
    if (lunarDay > days) {
      throw new Error(`only ${days} days in lunar year ${lunarYear} month ${lunarMonth}`);
    }
    const noon = Solar.fromJulianDay(m.getFirstJulianDay() + lunarDay - 1);
    const solar = Solar.fromYmdHms(noon.getYear(), noon.getMonth(), noon.getDay(), hour, minute, second);
    if (noon.getYear() !== lunarYear) {
      y = LunarYear.fromYear(noon.getYear());
    }
    return new _Lunar(lunarYear, lunarMonth, lunarDay, hour, minute, second, solar, y);
  }
  static fromSolar(solar) {
    let lunarYear = 0;
    let lunarMonth = 0;
    let lunarDay = 0;
    const ly = LunarYear.fromYear(solar.getYear());
    const lms = ly.getMonths();
    for (let i = 0, j = lms.length; i < j; i++) {
      const m = lms[i];
      const days = solar.subtract(Solar.fromJulianDay(m.getFirstJulianDay()));
      if (days < m.getDayCount()) {
        lunarYear = m.getYear();
        lunarMonth = m.getMonth();
        lunarDay = days + 1;
        break;
      }
    }
    return new _Lunar(lunarYear, lunarMonth, lunarDay, solar.getHour(), solar.getMinute(), solar.getSecond(), solar, ly);
  }
  static fromDate(date) {
    return _Lunar.fromSolar(Solar.fromDate(date));
  }
  static _computeJieQi(o, ly) {
    const julianDays = ly.getJieQiJulianDays();
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i++) {
      const key = LunarUtil.JIE_QI_IN_USE[i];
      o.jieQiList.push(key);
      o.jieQi[key] = Solar.fromJulianDay(julianDays[i]);
    }
  }
  static _computeYear(o, solar, year) {
    const offset = year - 4;
    let yearGanIndex = offset % 10;
    let yearZhiIndex = offset % 12;
    if (yearGanIndex < 0) {
      yearGanIndex += 10;
    }
    if (yearZhiIndex < 0) {
      yearZhiIndex += 12;
    }
    let g = yearGanIndex;
    let z = yearZhiIndex;
    let gExact = yearGanIndex;
    let zExact = yearZhiIndex;
    const solarYear = solar.getYear();
    const solarYmd = solar.toYmd();
    const solarYmdHms = solar.toYmdHms();
    let liChun = o.jieQi[I18n.getMessage("jq.liChun")];
    if (liChun.getYear() != solarYear) {
      liChun = o.jieQi["LI_CHUN"];
    }
    const liChunYmd = liChun.toYmd();
    const liChunYmdHms = liChun.toYmdHms();
    if (year === solarYear) {
      if (solarYmd < liChunYmd) {
        g--;
        z--;
      }
      if (solarYmdHms < liChunYmdHms) {
        gExact--;
        zExact--;
      }
    } else if (year < solarYear) {
      if (solarYmd >= liChunYmd) {
        g++;
        z++;
      }
      if (solarYmdHms >= liChunYmdHms) {
        gExact++;
        zExact++;
      }
    }
    o.yearGanIndex = yearGanIndex;
    o.yearZhiIndex = yearZhiIndex;
    o.yearGanIndexByLiChun = (g < 0 ? g + 10 : g) % 10;
    o.yearZhiIndexByLiChun = (z < 0 ? z + 12 : z) % 12;
    o.yearGanIndexExact = (gExact < 0 ? gExact + 10 : gExact) % 10;
    o.yearZhiIndexExact = (zExact < 0 ? zExact + 12 : zExact) % 12;
  }
  static _computeMonth(o, solar) {
    let start = null, i;
    let end;
    const ymd = solar.toYmd();
    const time = solar.toYmdHms();
    const size = LunarUtil.JIE_QI_IN_USE.length;
    let index = -3;
    for (i = 0; i < size; i += 2) {
      end = o.jieQi[LunarUtil.JIE_QI_IN_USE[i]];
      let symd = null == start ? ymd : start.toYmd();
      if (ymd >= symd && ymd < end.toYmd()) {
        break;
      }
      start = end;
      index++;
    }
    let offset = ((o.yearGanIndexByLiChun + (index < 0 ? 1 : 0)) % 5 + 1) * 2 % 10;
    o.monthGanIndex = ((index < 0 ? index + 10 : index) + offset) % 10;
    o.monthZhiIndex = ((index < 0 ? index + 12 : index) + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;
    start = null;
    index = -3;
    for (i = 0; i < size; i += 2) {
      end = o.jieQi[LunarUtil.JIE_QI_IN_USE[i]];
      let stime = null == start ? time : start.toYmdHms();
      if (time >= stime && time < end.toYmdHms()) {
        break;
      }
      start = end;
      index++;
    }
    offset = ((o.yearGanIndexExact + (index < 0 ? 1 : 0)) % 5 + 1) * 2 % 10;
    o.monthGanIndexExact = ((index < 0 ? index + 10 : index) + offset) % 10;
    o.monthZhiIndexExact = ((index < 0 ? index + 12 : index) + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;
  }
  static _computeDay(o, solar, hour, minute) {
    const noon = Solar.fromYmdHms(solar.getYear(), solar.getMonth(), solar.getDay(), 12, 0, 0);
    const offset = Math.floor(noon.getJulianDay()) - 11;
    const dayGanIndex = offset % 10;
    const dayZhiIndex = offset % 12;
    o.dayGanIndex = dayGanIndex;
    o.dayZhiIndex = dayZhiIndex;
    let dayGanExact = dayGanIndex;
    let dayZhiExact = dayZhiIndex;
    o.dayGanIndexExact2 = dayGanExact;
    o.dayZhiIndexExact2 = dayZhiExact;
    const hm = (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute;
    if (hm >= "23:00" && hm <= "23:59") {
      dayGanExact++;
      if (dayGanExact >= 10) {
        dayGanExact -= 10;
      }
      dayZhiExact++;
      if (dayZhiExact >= 12) {
        dayZhiExact -= 12;
      }
    }
    o.dayGanIndexExact = dayGanExact;
    o.dayZhiIndexExact = dayZhiExact;
  }
  static _computeTime(o, hour, minute) {
    const timeZhiIndex = LunarUtil.getTimeZhiIndex((hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute);
    o.timeZhiIndex = timeZhiIndex;
    o.timeGanIndex = (o.dayGanIndexExact % 5 * 2 + timeZhiIndex) % 10;
  }
  static _computeWeek(o, solar) {
    o.weekIndex = solar.getWeek();
  }
  static _compute(year, hour, minute, solar, ly) {
    const o = {
      timeGanIndex: 0,
      timeZhiIndex: 0,
      dayGanIndex: 0,
      dayZhiIndex: 0,
      dayGanIndexExact: 0,
      dayZhiIndexExact: 0,
      dayGanIndexExact2: 0,
      dayZhiIndexExact2: 0,
      monthGanIndex: 0,
      monthZhiIndex: 0,
      monthGanIndexExact: 0,
      monthZhiIndexExact: 0,
      yearGanIndex: 0,
      yearZhiIndex: 0,
      yearGanIndexByLiChun: 0,
      yearZhiIndexByLiChun: 0,
      yearGanIndexExact: 0,
      yearZhiIndexExact: 0,
      weekIndex: 0,
      jieQi: {},
      jieQiList: []
    };
    _Lunar._computeJieQi(o, ly);
    _Lunar._computeYear(o, solar, year);
    _Lunar._computeMonth(o, solar);
    _Lunar._computeDay(o, solar, hour, minute);
    _Lunar._computeTime(o, hour, minute);
    _Lunar._computeWeek(o, solar);
    return o;
  }
  constructor(year, month, day, hour, minute, second, solar, ly) {
    const info = _Lunar._compute(year, hour, minute, solar, ly);
    this._year = year;
    this._month = month;
    this._day = day;
    this._hour = hour;
    this._minute = minute;
    this._second = second;
    this._timeGanIndex = info.timeGanIndex;
    this._timeZhiIndex = info.timeZhiIndex;
    this._dayGanIndex = info.dayGanIndex;
    this._dayZhiIndex = info.dayZhiIndex;
    this._dayGanIndexExact = info.dayGanIndexExact;
    this._dayZhiIndexExact = info.dayZhiIndexExact;
    this._dayGanIndexExact2 = info.dayGanIndexExact2;
    this._dayZhiIndexExact2 = info.dayZhiIndexExact2;
    this._monthGanIndex = info.monthGanIndex;
    this._monthZhiIndex = info.monthZhiIndex;
    this._monthGanIndexExact = info.monthGanIndexExact;
    this._monthZhiIndexExact = info.monthZhiIndexExact;
    this._yearGanIndex = info.yearGanIndex;
    this._yearZhiIndex = info.yearZhiIndex;
    this._yearGanIndexByLiChun = info.yearGanIndexByLiChun;
    this._yearZhiIndexByLiChun = info.yearZhiIndexByLiChun;
    this._yearGanIndexExact = info.yearGanIndexExact;
    this._yearZhiIndexExact = info.yearZhiIndexExact;
    this._weekIndex = info.weekIndex;
    this._jieQi = info.jieQi;
    this._jieQiList = info.jieQiList;
    this._solar = solar;
    this._eightChar = new EightChar(this);
    this._lang = I18n.getLanguage();
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getDay() {
    return this._day;
  }
  getHour() {
    return this._hour;
  }
  getMinute() {
    return this._minute;
  }
  getSecond() {
    return this._second;
  }
  getTimeGanIndex() {
    return this._timeGanIndex;
  }
  getTimeZhiIndex() {
    return this._timeZhiIndex;
  }
  getDayGanIndex() {
    return this._dayGanIndex;
  }
  getDayZhiIndex() {
    return this._dayZhiIndex;
  }
  getMonthGanIndex() {
    return this._monthGanIndex;
  }
  getMonthZhiIndex() {
    return this._monthZhiIndex;
  }
  getYearGanIndex() {
    return this._yearGanIndex;
  }
  getYearZhiIndex() {
    return this._yearZhiIndex;
  }
  getYearGanIndexByLiChun() {
    return this._yearGanIndexByLiChun;
  }
  getYearZhiIndexByLiChun() {
    return this._yearZhiIndexByLiChun;
  }
  getDayGanIndexExact() {
    return this._dayGanIndexExact;
  }
  getDayZhiIndexExact() {
    return this._dayZhiIndexExact;
  }
  getDayGanIndexExact2() {
    return this._dayGanIndexExact2;
  }
  getDayZhiIndexExact2() {
    return this._dayZhiIndexExact2;
  }
  getMonthGanIndexExact() {
    return this._monthGanIndexExact;
  }
  getMonthZhiIndexExact() {
    return this._monthZhiIndexExact;
  }
  getYearGanIndexExact() {
    return this._yearGanIndexExact;
  }
  getYearZhiIndexExact() {
    return this._yearZhiIndexExact;
  }
  getGan() {
    return this.getYearGan();
  }
  getZhi() {
    return this.getYearZhi();
  }
  getYearGan() {
    return LunarUtil.GAN[this._yearGanIndex + 1];
  }
  getYearGanByLiChun() {
    return LunarUtil.GAN[this._yearGanIndexByLiChun + 1];
  }
  getYearGanExact() {
    return LunarUtil.GAN[this._yearGanIndexExact + 1];
  }
  getYearZhi() {
    return LunarUtil.ZHI[this._yearZhiIndex + 1];
  }
  getYearZhiByLiChun() {
    return LunarUtil.ZHI[this._yearZhiIndexByLiChun + 1];
  }
  getYearZhiExact() {
    return LunarUtil.ZHI[this._yearZhiIndexExact + 1];
  }
  getYearInGanZhi() {
    return this.getYearGan() + this.getYearZhi();
  }
  getYearInGanZhiByLiChun() {
    return this.getYearGanByLiChun() + this.getYearZhiByLiChun();
  }
  getYearInGanZhiExact() {
    return this.getYearGanExact() + this.getYearZhiExact();
  }
  getMonthGan() {
    return LunarUtil.GAN[this._monthGanIndex + 1];
  }
  getMonthGanExact() {
    return LunarUtil.GAN[this._monthGanIndexExact + 1];
  }
  getMonthZhi() {
    return LunarUtil.ZHI[this._monthZhiIndex + 1];
  }
  getMonthZhiExact() {
    return LunarUtil.ZHI[this._monthZhiIndexExact + 1];
  }
  getMonthInGanZhi() {
    return this.getMonthGan() + this.getMonthZhi();
  }
  getMonthInGanZhiExact() {
    return this.getMonthGanExact() + this.getMonthZhiExact();
  }
  getDayGan() {
    return LunarUtil.GAN[this._dayGanIndex + 1];
  }
  getDayGanExact() {
    return LunarUtil.GAN[this._dayGanIndexExact + 1];
  }
  getDayGanExact2() {
    return LunarUtil.GAN[this._dayGanIndexExact2 + 1];
  }
  getDayZhi() {
    return LunarUtil.ZHI[this._dayZhiIndex + 1];
  }
  getDayZhiExact() {
    return LunarUtil.ZHI[this._dayZhiIndexExact + 1];
  }
  getDayZhiExact2() {
    return LunarUtil.ZHI[this._dayZhiIndexExact2 + 1];
  }
  getDayInGanZhi() {
    return this.getDayGan() + this.getDayZhi();
  }
  getDayInGanZhiExact() {
    return this.getDayGanExact() + this.getDayZhiExact();
  }
  getDayInGanZhiExact2() {
    return this.getDayGanExact2() + this.getDayZhiExact2();
  }
  getTimeGan() {
    return LunarUtil.GAN[this._timeGanIndex + 1];
  }
  getTimeZhi() {
    return LunarUtil.ZHI[this._timeZhiIndex + 1];
  }
  getTimeInGanZhi() {
    return this.getTimeGan() + this.getTimeZhi();
  }
  getShengxiao() {
    return this.getYearShengXiao();
  }
  getYearShengXiao() {
    return LunarUtil.SHENGXIAO[this._yearZhiIndex + 1];
  }
  getYearShengXiaoByLiChun() {
    return LunarUtil.SHENGXIAO[this._yearZhiIndexByLiChun + 1];
  }
  getYearShengXiaoExact() {
    return LunarUtil.SHENGXIAO[this._yearZhiIndexExact + 1];
  }
  getMonthShengXiao() {
    return LunarUtil.SHENGXIAO[this._monthZhiIndex + 1];
  }
  getMonthShengXiaoExact() {
    return LunarUtil.SHENGXIAO[this._monthZhiIndexExact + 1];
  }
  getDayShengXiao() {
    return LunarUtil.SHENGXIAO[this._dayZhiIndex + 1];
  }
  getTimeShengXiao() {
    return LunarUtil.SHENGXIAO[this._timeZhiIndex + 1];
  }
  getYearInChinese() {
    const y = this._year + "";
    let s = "";
    const zero = "0".charCodeAt(0);
    for (let i = 0, j = y.length; i < j; i++) {
      const n = y.charCodeAt(i);
      s += LunarUtil.NUMBER[n - zero];
    }
    return s;
  }
  getMonthInChinese() {
    return (this._month < 0 ? "闰" : "") + LunarUtil.MONTH[Math.abs(this._month)];
  }
  getDayInChinese() {
    return LunarUtil.DAY[this._day];
  }
  getPengZuGan() {
    return LunarUtil.PENGZU_GAN[this._dayGanIndex + 1];
  }
  getPengZuZhi() {
    return LunarUtil.PENGZU_ZHI[this._dayZhiIndex + 1];
  }
  getPositionXi() {
    return this.getDayPositionXi();
  }
  getPositionXiDesc() {
    return this.getDayPositionXiDesc();
  }
  getPositionYangGui() {
    return this.getDayPositionYangGui();
  }
  getPositionYangGuiDesc() {
    return this.getDayPositionYangGuiDesc();
  }
  getPositionYinGui() {
    return this.getDayPositionYinGui();
  }
  getPositionYinGuiDesc() {
    return this.getDayPositionYinGuiDesc();
  }
  getPositionFu() {
    return this.getDayPositionFu();
  }
  getPositionFuDesc() {
    return this.getDayPositionFuDesc();
  }
  getPositionCai() {
    return this.getDayPositionCai();
  }
  getPositionCaiDesc() {
    return this.getDayPositionCaiDesc();
  }
  getDayPositionXi() {
    return LunarUtil.POSITION_XI[this._dayGanIndex + 1];
  }
  getDayPositionXiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getDayPositionXi()];
    return v ? v : "";
  }
  getDayPositionYangGui() {
    return LunarUtil.POSITION_YANG_GUI[this._dayGanIndex + 1];
  }
  getDayPositionYangGuiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getDayPositionYangGui()];
    return v ? v : "";
  }
  getDayPositionYinGui() {
    return LunarUtil.POSITION_YIN_GUI[this._dayGanIndex + 1];
  }
  getDayPositionYinGuiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getDayPositionYinGui()];
    return v ? v : "";
  }
  getDayPositionFu(sect = 2) {
    return (1 === sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this._dayGanIndex + 1];
  }
  getDayPositionFuDesc(sect = 2) {
    const v = LunarUtil.POSITION_DESC[this.getDayPositionFu(sect)];
    return v ? v : "";
  }
  getDayPositionCai() {
    return LunarUtil.POSITION_CAI[this._dayGanIndex + 1];
  }
  getDayPositionCaiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getDayPositionCai()];
    return v ? v : "";
  }
  getTimePositionXi() {
    return LunarUtil.POSITION_XI[this._timeGanIndex + 1];
  }
  getTimePositionXiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getTimePositionXi()];
    return v ? v : "";
  }
  getTimePositionYangGui() {
    return LunarUtil.POSITION_YANG_GUI[this._timeGanIndex + 1];
  }
  getTimePositionYangGuiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getTimePositionYangGui()];
    return v ? v : "";
  }
  getTimePositionYinGui() {
    return LunarUtil.POSITION_YIN_GUI[this._timeGanIndex + 1];
  }
  getTimePositionYinGuiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getTimePositionYinGui()];
    return v ? v : "";
  }
  getTimePositionFu(sect = 2) {
    return (1 === sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this._timeGanIndex + 1];
  }
  getTimePositionFuDesc(sect = 2) {
    const v = LunarUtil.POSITION_DESC[this.getTimePositionFu(sect)];
    return v ? v : "";
  }
  getTimePositionCai() {
    return LunarUtil.POSITION_CAI[this._timeGanIndex + 1];
  }
  getTimePositionCaiDesc() {
    const v = LunarUtil.POSITION_DESC[this.getTimePositionCai()];
    return v ? v : "";
  }
  getYearPositionTaiSui(sect = 2) {
    let yearZhiIndex;
    switch (sect) {
      case 1:
        yearZhiIndex = this._yearZhiIndex;
        break;
      case 3:
        yearZhiIndex = this._yearZhiIndexExact;
        break;
      default:
        yearZhiIndex = this._yearZhiIndexByLiChun;
    }
    return LunarUtil.POSITION_TAI_SUI_YEAR[yearZhiIndex];
  }
  getYearPositionTaiSuiDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getYearPositionTaiSui(sect)];
  }
  getMonthPositionTaiSui(sect = 2) {
    let monthZhiIndex;
    let monthGanIndex;
    switch (sect) {
      case 3:
        monthZhiIndex = this._monthZhiIndexExact;
        monthGanIndex = this._monthGanIndexExact;
        break;
      default:
        monthZhiIndex = this._monthZhiIndex;
        monthGanIndex = this._monthGanIndex;
    }
    let m = monthZhiIndex - LunarUtil.BASE_MONTH_ZHI_INDEX;
    if (m < 0) {
      m += 12;
    }
    return [I18n.getMessage("bg.gen"), LunarUtil.POSITION_GAN[monthGanIndex], I18n.getMessage("bg.kun"), I18n.getMessage("bg.xun")][m % 4];
  }
  getMonthPositionTaiSuiDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getMonthPositionTaiSui(sect)];
  }
  getDayPositionTaiSui(sect = 2) {
    let dayInGanZhi;
    let yearZhiIndex;
    switch (sect) {
      case 1:
        dayInGanZhi = this.getDayInGanZhi();
        yearZhiIndex = this._yearZhiIndex;
        break;
      case 3:
        dayInGanZhi = this.getDayInGanZhi();
        yearZhiIndex = this._yearZhiIndexExact;
        break;
      default:
        dayInGanZhi = this.getDayInGanZhiExact2();
        yearZhiIndex = this._yearZhiIndexByLiChun;
    }
    let p;
    if ([I18n.getMessage("jz.jiaZi"), I18n.getMessage("jz.yiChou"), I18n.getMessage("jz.bingYin"), I18n.getMessage("jz.dingMao"), I18n.getMessage("jz.wuChen"), I18n.getMessage("jz.jiSi")].join(",").indexOf(dayInGanZhi) > -1) {
      p = I18n.getMessage("bg.zhen");
    } else if ([I18n.getMessage("jz.bingZi"), I18n.getMessage("jz.dingChou"), I18n.getMessage("jz.wuYin"), I18n.getMessage("jz.jiMao"), I18n.getMessage("jz.gengChen"), I18n.getMessage("jz.xinSi")].join(",").indexOf(dayInGanZhi) > -1) {
      p = I18n.getMessage("bg.li");
    } else if ([I18n.getMessage("jz.wuZi"), I18n.getMessage("jz.jiChou"), I18n.getMessage("jz.gengYin"), I18n.getMessage("jz.xinMao"), I18n.getMessage("jz.renChen"), I18n.getMessage("jz.guiSi")].join(",").indexOf(dayInGanZhi) > -1) {
      p = I18n.getMessage("ps.center");
    } else if ([I18n.getMessage("jz.gengZi"), I18n.getMessage("jz.xinChou"), I18n.getMessage("jz.renYin"), I18n.getMessage("jz.guiMao"), I18n.getMessage("jz.jiaChen"), I18n.getMessage("jz.yiSi")].join(",").indexOf(dayInGanZhi) > -1) {
      p = I18n.getMessage("bg.dui");
    } else if ([I18n.getMessage("jz.renZi"), I18n.getMessage("jz.guiChou"), I18n.getMessage("jz.jiaYin"), I18n.getMessage("jz.yiMao"), I18n.getMessage("jz.bingChen"), I18n.getMessage("jz.dingSi")].join(",").indexOf(dayInGanZhi) > -1) {
      p = I18n.getMessage("bg.kan");
    } else {
      p = LunarUtil.POSITION_TAI_SUI_YEAR[yearZhiIndex];
    }
    return p;
  }
  getDayPositionTaiSuiDesc(sect = 2) {
    return LunarUtil.POSITION_DESC[this.getDayPositionTaiSui(sect)];
  }
  getChong() {
    return this.getDayChong();
  }
  getChongGan() {
    return this.getDayChongGan();
  }
  getChongGanTie() {
    return this.getDayChongGanTie();
  }
  getChongShengXiao() {
    return this.getDayChongShengXiao();
  }
  getChongDesc() {
    return this.getDayChongDesc();
  }
  getSha() {
    return this.getDaySha();
  }
  getDayChong() {
    return LunarUtil.CHONG[this._dayZhiIndex];
  }
  getDayChongGan() {
    return LunarUtil.CHONG_GAN[this._dayGanIndex];
  }
  getDayChongGanTie() {
    return LunarUtil.CHONG_GAN_TIE[this._dayGanIndex];
  }
  getDayChongShengXiao() {
    const chong = this.getChong();
    for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
      if (LunarUtil.ZHI[i] === chong) {
        return LunarUtil.SHENGXIAO[i];
      }
    }
    return "";
  }
  getDayChongDesc() {
    return "(" + this.getDayChongGan() + this.getDayChong() + ")" + this.getDayChongShengXiao();
  }
  getDaySha() {
    const v = LunarUtil.SHA[this.getDayZhi()];
    return v ? v : "";
  }
  getTimeChong() {
    return LunarUtil.CHONG[this._timeZhiIndex];
  }
  getTimeChongGan() {
    return LunarUtil.CHONG_GAN[this._timeGanIndex];
  }
  getTimeChongGanTie() {
    return LunarUtil.CHONG_GAN_TIE[this._timeGanIndex];
  }
  getTimeChongShengXiao() {
    const chong = this.getTimeChong();
    for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
      if (LunarUtil.ZHI[i] === chong) {
        return LunarUtil.SHENGXIAO[i];
      }
    }
    return "";
  }
  getTimeChongDesc() {
    return "(" + this.getTimeChongGan() + this.getTimeChong() + ")" + this.getTimeChongShengXiao();
  }
  getTimeSha() {
    const v = LunarUtil.SHA[this.getTimeZhi()];
    return v ? v : "";
  }
  getYearNaYin() {
    const v = LunarUtil.NAYIN[this.getYearInGanZhi()];
    return v ? v : "";
  }
  getMonthNaYin() {
    const v = LunarUtil.NAYIN[this.getMonthInGanZhi()];
    return v ? v : "";
  }
  getDayNaYin() {
    const v = LunarUtil.NAYIN[this.getDayInGanZhi()];
    return v ? v : "";
  }
  getTimeNaYin() {
    const v = LunarUtil.NAYIN[this.getTimeInGanZhi()];
    return v ? v : "";
  }
  getSeason() {
    return LunarUtil.SEASON[Math.abs(this._month)];
  }
  static _convertJieQi(name) {
    let jq = name;
    if ("DONG_ZHI" === jq) {
      jq = I18n.getMessage("jq.dongZhi");
    } else if ("DA_HAN" === jq) {
      jq = I18n.getMessage("jq.daHan");
    } else if ("XIAO_HAN" === jq) {
      jq = I18n.getMessage("jq.xiaoHan");
    } else if ("LI_CHUN" === jq) {
      jq = I18n.getMessage("jq.liChun");
    } else if ("DA_XUE" === jq) {
      jq = I18n.getMessage("jq.daXue");
    } else if ("YU_SHUI" === jq) {
      jq = I18n.getMessage("jq.yuShui");
    } else if ("JING_ZHE" === jq) {
      jq = I18n.getMessage("jq.jingZhe");
    }
    return jq;
  }
  checkLang() {
    const lang = I18n.getLanguage();
    if (this._lang != lang) {
      for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i++) {
        const newKey = LunarUtil.JIE_QI_IN_USE[i];
        const oldKey = this._jieQiList[i];
        const value = this._jieQi[oldKey];
        this._jieQiList[i] = newKey;
        this._jieQi[newKey] = value;
      }
      this._lang = lang;
    }
  }
  getJie() {
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i += 2) {
      const key = LunarUtil.JIE_QI_IN_USE[i];
      const d = this.getJieQiSolar(key);
      if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
        return _Lunar._convertJieQi(key);
      }
    }
    return "";
  }
  getQi() {
    for (let i = 1, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i += 2) {
      const key = LunarUtil.JIE_QI_IN_USE[i];
      const d = this.getJieQiSolar(key);
      if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
        return _Lunar._convertJieQi(key);
      }
    }
    return "";
  }
  getJieQi() {
    let name = "";
    for (let k in this._jieQi) {
      const d = this._jieQi[k];
      if (d.getYear() == this._solar.getYear() && d.getMonth() == this._solar.getMonth() && d.getDay() == this._solar.getDay()) {
        name = k;
        break;
      }
    }
    return _Lunar._convertJieQi(name);
  }
  getWeek() {
    return this._weekIndex;
  }
  getWeekInChinese() {
    return SolarUtil.WEEK[this.getWeek()];
  }
  getXiu() {
    let v = LunarUtil.XIU[this.getDayZhi() + this.getWeek()];
    return v ? v : "";
  }
  getXiuLuck() {
    let v = LunarUtil.XIU_LUCK[this.getXiu()];
    return v ? v : "";
  }
  getXiuSong() {
    let v = LunarUtil.XIU_SONG[this.getXiu()];
    return v ? v : "";
  }
  getZheng() {
    let v = LunarUtil.ZHENG[this.getXiu()];
    return v ? v : "";
  }
  getAnimal() {
    let v = LunarUtil.ANIMAL[this.getXiu()];
    return v ? v : "";
  }
  getGong() {
    let v = LunarUtil.GONG[this.getXiu()];
    return v ? v : "";
  }
  getShou() {
    let v = LunarUtil.SHOU[this.getGong()];
    return v ? v : "";
  }
  getFestivals() {
    const l = [];
    const f = LunarUtil.FESTIVAL[this._month + "-" + this._day];
    if (f) {
      l.push(f);
    }
    if (Math.abs(this._month) == 12 && this._day >= 29 && this._year != this.next(1).getYear()) {
      l.push(I18n.getMessage("jr.chuXi"));
    }
    return l;
  }
  getOtherFestivals() {
    const l = [];
    const fs = LunarUtil.OTHER_FESTIVAL[this._month + "-" + this._day];
    if (fs) {
      fs.forEach((f) => {
        l.push(f);
      });
    }
    let jq = this.getJieQiSolar(I18n.getMessage("jq.qingMing"));
    const solarYmd = this._solar.toYmd();
    if (solarYmd === jq.next(-1).toYmd()) {
      l.push("寒食节");
    }
    jq = this.getJieQiSolar(I18n.getMessage("jq.liChun"));
    let offset = 4 - jq.getLunar().getDayGanIndex();
    if (offset < 0) {
      offset += 10;
    }
    if (solarYmd === jq.next(offset + 40).toYmd()) {
      l.push("春社");
    }
    jq = this.getJieQiSolar(I18n.getMessage("jq.liQiu"));
    offset = 4 - jq.getLunar().getDayGanIndex();
    if (offset < 0) {
      offset += 10;
    }
    if (solarYmd === jq.next(offset + 40).toYmd()) {
      l.push("秋社");
    }
    return l;
  }
  getBaZi() {
    const bz = this.getEightChar();
    const l = [];
    l.push(bz.getYear());
    l.push(bz.getMonth());
    l.push(bz.getDay());
    l.push(bz.getTime());
    return l;
  }
  getBaZiWuXing() {
    const bz = this.getEightChar();
    const l = [];
    l.push(bz.getYearWuXing());
    l.push(bz.getMonthWuXing());
    l.push(bz.getDayWuXing());
    l.push(bz.getTimeWuXing());
    return l;
  }
  getBaZiNaYin() {
    const bz = this.getEightChar();
    const l = [];
    l.push(bz.getYearNaYin());
    l.push(bz.getMonthNaYin());
    l.push(bz.getDayNaYin());
    l.push(bz.getTimeNaYin());
    return l;
  }
  getBaZiShiShenGan() {
    const bz = this.getEightChar();
    const l = [];
    l.push(bz.getYearShiShenGan());
    l.push(bz.getMonthShiShenGan());
    l.push(bz.getDayShiShenGan());
    l.push(bz.getTimeShiShenGan());
    return l;
  }
  getBaZiShiShenZhi() {
    const bz = this.getEightChar();
    const l = [];
    l.push(bz.getYearShiShenZhi()[0]);
    l.push(bz.getMonthShiShenZhi()[0]);
    l.push(bz.getDayShiShenZhi()[0]);
    l.push(bz.getTimeShiShenZhi()[0]);
    return l;
  }
  getBaZiShiShenYearZhi() {
    return this.getEightChar().getYearShiShenZhi();
  }
  getBaZiShiShenMonthZhi() {
    return this.getEightChar().getMonthShiShenZhi();
  }
  getBaZiShiShenDayZhi() {
    return this.getEightChar().getDayShiShenZhi();
  }
  getBaZiShiShenTimeZhi() {
    return this.getEightChar().getTimeShiShenZhi();
  }
  getZhiXing() {
    let offset = this._dayZhiIndex - this._monthZhiIndex;
    if (offset < 0) {
      offset += 12;
    }
    return LunarUtil.ZHI_XING[offset + 1];
  }
  getDayTianShen() {
    const monthZhi = this.getMonthZhi();
    const offset = LunarUtil.ZHI_TIAN_SHEN_OFFSET[monthZhi];
    if (offset == void 0) {
      return "";
    }
    return LunarUtil.TIAN_SHEN[(this._dayZhiIndex + offset) % 12 + 1];
  }
  getTimeTianShen() {
    const dayZhi = this.getDayZhiExact();
    const offset = LunarUtil.ZHI_TIAN_SHEN_OFFSET[dayZhi];
    if (offset == void 0) {
      return "";
    }
    return LunarUtil.TIAN_SHEN[(this._timeZhiIndex + offset) % 12 + 1];
  }
  getDayTianShenType() {
    const v = LunarUtil.TIAN_SHEN_TYPE[this.getDayTianShen()];
    return v ? v : "";
  }
  getTimeTianShenType() {
    const v = LunarUtil.TIAN_SHEN_TYPE[this.getTimeTianShen()];
    return v ? v : "";
  }
  getDayTianShenLuck() {
    const v = LunarUtil.TIAN_SHEN_TYPE_LUCK[this.getDayTianShenType()];
    return v ? v : "";
  }
  getTimeTianShenLuck() {
    const v = LunarUtil.TIAN_SHEN_TYPE_LUCK[this.getTimeTianShenType()];
    return v ? v : "";
  }
  getDayPositionTai() {
    return LunarUtil.POSITION_TAI_DAY[LunarUtil.getJiaZiIndex(this.getDayInGanZhi())];
  }
  getMonthPositionTai() {
    const m = this._month;
    if (m < 0) {
      return "";
    }
    return LunarUtil.POSITION_TAI_MONTH[m - 1];
  }
  getDayYi(sect = 1) {
    return LunarUtil.getDayYi(2 == sect ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi());
  }
  getDayJi(sect = 1) {
    return LunarUtil.getDayJi(2 == sect ? this.getMonthInGanZhiExact() : this.getMonthInGanZhi(), this.getDayInGanZhi());
  }
  getDayJiShen() {
    return LunarUtil.getDayJiShen(this.getMonth(), this.getDayInGanZhi());
  }
  getDayXiongSha() {
    return LunarUtil.getDayXiongSha(this.getMonth(), this.getDayInGanZhi());
  }
  getTimeYi() {
    return LunarUtil.getTimeYi(this.getDayInGanZhiExact(), this.getTimeInGanZhi());
  }
  getTimeJi() {
    return LunarUtil.getTimeJi(this.getDayInGanZhiExact(), this.getTimeInGanZhi());
  }
  getYueXiang() {
    return LunarUtil.YUE_XIANG[this._day];
  }
  _getYearNineStar(yearInGanZhi) {
    const indexExact = LunarUtil.getJiaZiIndex(yearInGanZhi) + 1;
    const index = LunarUtil.getJiaZiIndex(this.getYearInGanZhi()) + 1;
    let yearOffset = indexExact - index;
    if (yearOffset > 1) {
      yearOffset -= 60;
    } else if (yearOffset < -1) {
      yearOffset += 60;
    }
    const yuan = Math.floor((this._year + yearOffset + 2696) / 60) % 3;
    let offset = (62 + yuan * 3 - indexExact) % 9;
    if (0 === offset) {
      offset = 9;
    }
    return NineStar.fromIndex(offset - 1);
  }
  getYearNineStar(sect = 2) {
    let yearInGanZhi;
    switch (sect) {
      case 1:
        yearInGanZhi = this.getYearInGanZhi();
        break;
      case 3:
        yearInGanZhi = this.getYearInGanZhiExact();
        break;
      default:
        yearInGanZhi = this.getYearInGanZhiByLiChun();
    }
    return this._getYearNineStar(yearInGanZhi);
  }
  getMonthNineStar(sect = 2) {
    let yearZhiIndex;
    let monthZhiIndex;
    switch (sect) {
      case 1:
        yearZhiIndex = this._yearZhiIndex;
        monthZhiIndex = this._monthZhiIndex;
        break;
      case 3:
        yearZhiIndex = this._yearZhiIndexExact;
        monthZhiIndex = this._monthZhiIndexExact;
        break;
      default:
        yearZhiIndex = this._yearZhiIndexByLiChun;
        monthZhiIndex = this._monthZhiIndex;
    }
    let n = 27 - yearZhiIndex % 3 * 3;
    if (monthZhiIndex < LunarUtil.BASE_MONTH_ZHI_INDEX) {
      n -= 3;
    }
    return NineStar.fromIndex((n - monthZhiIndex) % 9);
  }
  getJieQiSolar(name) {
    this.checkLang();
    return this._jieQi[name];
  }
  getDayNineStar() {
    const solarYmd = this._solar.toYmd();
    const dongZhi = this.getJieQiSolar(I18n.getMessage("jq.dongZhi"));
    const dongZhi2 = this.getJieQiSolar("DONG_ZHI");
    const xiaZhi = this.getJieQiSolar(I18n.getMessage("jq.xiaZhi"));
    const dongZhiIndex = LunarUtil.getJiaZiIndex(dongZhi.getLunar().getDayInGanZhi());
    const dongZhiIndex2 = LunarUtil.getJiaZiIndex(dongZhi2.getLunar().getDayInGanZhi());
    const xiaZhiIndex = LunarUtil.getJiaZiIndex(xiaZhi.getLunar().getDayInGanZhi());
    let solarShunBai;
    let solarShunBai2;
    let solarNiZi;
    if (dongZhiIndex > 29) {
      solarShunBai = dongZhi.next(60 - dongZhiIndex);
    } else {
      solarShunBai = dongZhi.next(-dongZhiIndex);
    }
    const solarShunBaiYmd = solarShunBai.toYmd();
    if (dongZhiIndex2 > 29) {
      solarShunBai2 = dongZhi2.next(60 - dongZhiIndex2);
    } else {
      solarShunBai2 = dongZhi2.next(-dongZhiIndex2);
    }
    const solarShunBaiYmd2 = solarShunBai2.toYmd();
    if (xiaZhiIndex > 29) {
      solarNiZi = xiaZhi.next(60 - xiaZhiIndex);
    } else {
      solarNiZi = xiaZhi.next(-xiaZhiIndex);
    }
    const solarNiZiYmd = solarNiZi.toYmd();
    let offset = 0;
    if (solarYmd >= solarShunBaiYmd && solarYmd < solarNiZiYmd) {
      offset = this._solar.subtract(solarShunBai) % 9;
    } else if (solarYmd >= solarNiZiYmd && solarYmd < solarShunBaiYmd2) {
      offset = 8 - this._solar.subtract(solarNiZi) % 9;
    } else if (solarYmd >= solarShunBaiYmd2) {
      offset = this._solar.subtract(solarShunBai2) % 9;
    } else if (solarYmd < solarShunBaiYmd) {
      offset = (8 + solarShunBai.subtract(this._solar)) % 9;
    }
    return NineStar.fromIndex(offset);
  }
  getTimeNineStar() {
    const solarYmd = this._solar.toYmd();
    let asc = false;
    if (solarYmd >= this.getJieQiSolar(I18n.getMessage("jq.dongZhi")).toYmd() && solarYmd < this.getJieQiSolar(I18n.getMessage("jq.xiaZhi")).toYmd()) {
      asc = true;
    } else if (solarYmd >= this.getJieQiSolar("DONG_ZHI").toYmd()) {
      asc = true;
    }
    const offset = asc ? [0, 3, 6] : [8, 5, 2];
    const start = offset[this.getDayZhiIndex() % 3];
    const index = asc ? start + this._timeZhiIndex : start + 9 - this._timeZhiIndex;
    return NineStar.fromIndex(index % 9);
  }
  getSolar() {
    return this._solar;
  }
  getJieQiTable() {
    this.checkLang();
    return this._jieQi;
  }
  getJieQiList() {
    return this._jieQiList;
  }
  getNextJie(wholeDay = false) {
    const conditions = [];
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length / 2; i < j; i++) {
      conditions.push(LunarUtil.JIE_QI_IN_USE[i * 2]);
    }
    return this.getNearJieQi(true, conditions, wholeDay);
  }
  getPrevJie(wholeDay = false) {
    const conditions = [];
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length / 2; i < j; i++) {
      conditions.push(LunarUtil.JIE_QI_IN_USE[i * 2]);
    }
    return this.getNearJieQi(false, conditions, wholeDay);
  }
  getNextQi(wholeDay = false) {
    const conditions = [];
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length / 2; i < j; i++) {
      conditions.push(LunarUtil.JIE_QI_IN_USE[i * 2 + 1]);
    }
    return this.getNearJieQi(true, conditions, wholeDay);
  }
  getPrevQi(wholeDay = false) {
    const conditions = [];
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length / 2; i < j; i++) {
      conditions.push(LunarUtil.JIE_QI_IN_USE[i * 2 + 1]);
    }
    return this.getNearJieQi(false, conditions, wholeDay);
  }
  getNextJieQi(wholeDay = false) {
    return this.getNearJieQi(true, [], wholeDay);
  }
  getPrevJieQi(wholeDay = false) {
    return this.getNearJieQi(false, [], wholeDay);
  }
  getNearJieQi(forward, conditions, wholeDay) {
    let name = "";
    let near = null;
    let filters = {};
    let filter = false;
    if (conditions) {
      for (let i = 0, j = conditions.length; i < j; i++) {
        filters[conditions[i]] = true;
        filter = true;
      }
    }
    const today = wholeDay ? this._solar.toYmd() : this._solar.toYmdHms();
    for (let key in this._jieQi) {
      const solar = this._jieQi[key];
      const jq = _Lunar._convertJieQi(key);
      if (filter) {
        if (!filters[jq]) {
          continue;
        }
      }
      const day = wholeDay ? solar.toYmd() : solar.toYmdHms();
      if (forward) {
        if (day <= today) {
          continue;
        }
        if (null == near) {
          name = jq;
          near = solar;
        } else {
          const nearDay = wholeDay ? near.toYmd() : near.toYmdHms();
          if (day < nearDay) {
            name = jq;
            near = solar;
          }
        }
      } else {
        if (day > today) {
          continue;
        }
        if (null == near) {
          name = jq;
          near = solar;
        } else {
          const nearDay = wholeDay ? near.toYmd() : near.toYmdHms();
          if (day > nearDay) {
            name = jq;
            near = solar;
          }
        }
      }
    }
    return new JieQi(name, near);
  }
  getCurrentJieQi() {
    let jq = null;
    for (let k in this._jieQi) {
      const d = this._jieQi[k];
      if (d.getYear() == this._solar.getYear() && d.getMonth() == this._solar.getMonth() && d.getDay() == this._solar.getDay()) {
        jq = new JieQi(_Lunar._convertJieQi(k), d);
        break;
      }
    }
    return jq;
  }
  getCurrentJie() {
    for (let i = 0, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i += 2) {
      const key = LunarUtil.JIE_QI_IN_USE[i];
      const d = this.getJieQiSolar(key);
      if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
        return new JieQi(_Lunar._convertJieQi(key), d);
      }
    }
    return null;
  }
  getCurrentQi() {
    for (let i = 1, j = LunarUtil.JIE_QI_IN_USE.length; i < j; i += 2) {
      const key = LunarUtil.JIE_QI_IN_USE[i];
      const d = this.getJieQiSolar(key);
      if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
        return new JieQi(_Lunar._convertJieQi(key), d);
      }
    }
    return null;
  }
  getEightChar() {
    return this._eightChar;
  }
  next(days) {
    return this._solar.next(days).getLunar();
  }
  getYearXun() {
    return LunarUtil.getXun(this.getYearInGanZhi());
  }
  getMonthXun() {
    return LunarUtil.getXun(this.getMonthInGanZhi());
  }
  getDayXun() {
    return LunarUtil.getXun(this.getDayInGanZhi());
  }
  getTimeXun() {
    return LunarUtil.getXun(this.getTimeInGanZhi());
  }
  getYearXunByLiChun() {
    return LunarUtil.getXun(this.getYearInGanZhiByLiChun());
  }
  getYearXunExact() {
    return LunarUtil.getXun(this.getYearInGanZhiExact());
  }
  getMonthXunExact() {
    return LunarUtil.getXun(this.getMonthInGanZhiExact());
  }
  getDayXunExact() {
    return LunarUtil.getXun(this.getDayInGanZhiExact());
  }
  getDayXunExact2() {
    return LunarUtil.getXun(this.getDayInGanZhiExact2());
  }
  getYearXunKong() {
    return LunarUtil.getXunKong(this.getYearInGanZhi());
  }
  getMonthXunKong() {
    return LunarUtil.getXunKong(this.getMonthInGanZhi());
  }
  getDayXunKong() {
    return LunarUtil.getXunKong(this.getDayInGanZhi());
  }
  getTimeXunKong() {
    return LunarUtil.getXunKong(this.getTimeInGanZhi());
  }
  getYearXunKongByLiChun() {
    return LunarUtil.getXunKong(this.getYearInGanZhiByLiChun());
  }
  getYearXunKongExact() {
    return LunarUtil.getXunKong(this.getYearInGanZhiExact());
  }
  getMonthXunKongExact() {
    return LunarUtil.getXunKong(this.getMonthInGanZhiExact());
  }
  getDayXunKongExact() {
    return LunarUtil.getXunKong(this.getDayInGanZhiExact());
  }
  getDayXunKongExact2() {
    return LunarUtil.getXunKong(this.getDayInGanZhiExact2());
  }
  toString() {
    return this.getYearInChinese() + "年" + this.getMonthInChinese() + "月" + this.getDayInChinese();
  }
  toFullString() {
    let s = this.toString();
    s += " " + this.getYearInGanZhi() + "(" + this.getYearShengXiao() + ")年";
    s += " " + this.getMonthInGanZhi() + "(" + this.getMonthShengXiao() + ")月";
    s += " " + this.getDayInGanZhi() + "(" + this.getDayShengXiao() + ")日";
    s += " " + this.getTimeZhi() + "(" + this.getTimeShengXiao() + ")时";
    s += " 纳音[" + this.getYearNaYin() + " " + this.getMonthNaYin() + " " + this.getDayNaYin() + " " + this.getTimeNaYin() + "]";
    s += " 星期" + this.getWeekInChinese();
    this.getFestivals().forEach((f) => {
      s += " (" + f + ")";
    });
    this.getOtherFestivals().forEach((f) => {
      s += " (" + f + ")";
    });
    const jq = this.getJieQi();
    if (jq.length > 0) {
      s += " [" + jq + "]";
    }
    s += " " + this.getGong() + "方" + this.getShou();
    s += " 星宿[" + this.getXiu() + this.getZheng() + this.getAnimal() + "](" + this.getXiuLuck() + ")";
    s += " 彭祖百忌[" + this.getPengZuGan() + " " + this.getPengZuZhi() + "]";
    s += " 喜神方位[" + this.getDayPositionXi() + "](" + this.getDayPositionXiDesc() + ")";
    s += " 阳贵神方位[" + this.getDayPositionYangGui() + "](" + this.getDayPositionYangGuiDesc() + ")";
    s += " 阴贵神方位[" + this.getDayPositionYinGui() + "](" + this.getDayPositionYinGuiDesc() + ")";
    s += " 福神方位[" + this.getDayPositionFu() + "](" + this.getDayPositionFuDesc() + ")";
    s += " 财神方位[" + this.getDayPositionCai() + "](" + this.getDayPositionCaiDesc() + ")";
    s += " 冲[" + this.getDayChongDesc() + "]";
    s += " 煞[" + this.getDaySha() + "]";
    return s;
  }
  getShuJiu() {
    const currentDay = Solar.fromYmd(this._solar.getYear(), this._solar.getMonth(), this._solar.getDay());
    let start = this.getJieQiSolar("DONG_ZHI");
    let startDay = Solar.fromYmd(start.getYear(), start.getMonth(), start.getDay());
    if (currentDay.isBefore(startDay)) {
      start = this.getJieQiSolar(I18n.getMessage("jq.dongZhi"));
      startDay = Solar.fromYmd(start.getYear(), start.getMonth(), start.getDay());
    }
    const endDay = Solar.fromYmd(start.getYear(), start.getMonth(), start.getDay()).next(81);
    if (currentDay.isBefore(startDay) || !currentDay.isBefore(endDay)) {
      return null;
    }
    const days = currentDay.subtract(startDay);
    return new ShuJiu(LunarUtil.NUMBER[Math.floor(days / 9) + 1] + "九", days % 9 + 1);
  }
  getFu() {
    const currentDay = Solar.fromYmd(this._solar.getYear(), this._solar.getMonth(), this._solar.getDay());
    const xiaZhi = this.getJieQiSolar(I18n.getMessage("jq.xiaZhi"));
    const liQiu = this.getJieQiSolar(I18n.getMessage("jq.liQiu"));
    let startDay = Solar.fromYmd(xiaZhi.getYear(), xiaZhi.getMonth(), xiaZhi.getDay());
    let add = 6 - xiaZhi.getLunar().getDayGanIndex();
    if (add < 0) {
      add += 10;
    }
    add += 20;
    startDay = startDay.next(add);
    if (currentDay.isBefore(startDay)) {
      return null;
    }
    let days = currentDay.subtract(startDay);
    if (days < 10) {
      return new Fu("初伏", days + 1);
    }
    startDay = startDay.next(10);
    days = currentDay.subtract(startDay);
    if (days < 10) {
      return new Fu("中伏", days + 1);
    }
    startDay = startDay.next(10);
    const liQiuDay = Solar.fromYmd(liQiu.getYear(), liQiu.getMonth(), liQiu.getDay());
    days = currentDay.subtract(startDay);
    if (liQiuDay.isAfter(startDay)) {
      if (days < 10) {
        return new Fu("中伏", days + 11);
      }
      startDay = startDay.next(10);
      days = currentDay.subtract(startDay);
    }
    if (days < 10) {
      return new Fu("末伏", days + 1);
    }
    return null;
  }
  getLiuYao() {
    return LunarUtil.LIU_YAO[(Math.abs(this._month) + this._day - 2) % 6];
  }
  getWuHou() {
    const jieQi = this.getPrevJieQi(true);
    const jq = LunarUtil.find(jieQi.getName(), LunarUtil.JIE_QI);
    let index = Math.floor(this._solar.subtract(jieQi.getSolar()) / 5);
    if (index > 2) {
      index = 2;
    }
    return LunarUtil.WU_HOU[(jq.index * 3 + index) % LunarUtil.WU_HOU.length];
  }
  getHou() {
    const jieQi = this.getPrevJieQi(true);
    const days = this._solar.subtract(jieQi.getSolar());
    const max = LunarUtil.HOU.length - 1;
    let offset = Math.floor(days / 5);
    if (offset > max) {
      offset = max;
    }
    return jieQi.getName() + " " + LunarUtil.HOU[offset];
  }
  getDayLu() {
    const gan = LunarUtil.LU[this.getDayGan()];
    const zhi = LunarUtil.LU[this.getDayZhi()];
    let lu = gan + "命互禄";
    if (zhi) {
      lu += " " + zhi + "命进禄";
    }
    return lu;
  }
  getTime() {
    return LunarTime.fromYmdHms(this._year, this._month, this._day, this._hour, this._minute, this._second);
  }
  getTimes() {
    const l = [];
    l.push(LunarTime.fromYmdHms(this._year, this._month, this._day, 0, 0, 0));
    for (let i = 0; i < 12; i++) {
      l.push(LunarTime.fromYmdHms(this._year, this._month, this._day, (i + 1) * 2 - 1, 0, 0));
    }
    return l;
  }
  getFoto() {
    return Foto.fromLunar(this);
  }
  getTao() {
    return Tao.fromLunar(this);
  }
};
var SolarMonth = class _SolarMonth {
  static fromYm(year, month) {
    return new _SolarMonth(year, month);
  }
  static fromDate(date) {
    return _SolarMonth.fromYm(date.getFullYear(), date.getMonth() + 1);
  }
  constructor(year, month) {
    this._year = year;
    this._month = month;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  next(months) {
    const n = months < 0 ? -1 : 1;
    let m = Math.abs(months);
    let y = this._year + Math.floor(m / 12) * n;
    m = this._month + m % 12 * n;
    if (m > 12) {
      m -= 12;
      y++;
    } else if (m < 1) {
      m += 12;
      y--;
    }
    return _SolarMonth.fromYm(y, m);
  }
  getDays() {
    const l = [];
    const d = Solar.fromYmd(this._year, this._month, 1);
    l.push(d);
    const days = SolarUtil.getDaysOfMonth(this._year, this._month);
    for (let i = 1; i < days; i++) {
      l.push(d.next(i));
    }
    return l;
  }
  getWeeks(start) {
    const l = [];
    let week = SolarWeek.fromYmd(this._year, this._month, 1, start);
    while (true) {
      l.push(week);
      week = week.next(1, false);
      const firstDay = week.getFirstDay();
      if (firstDay.getYear() > this._year || firstDay.getMonth() > this._month) {
        break;
      }
    }
    return l;
  }
  toString() {
    return `${this.getYear()}-${this.getMonth()}`;
  }
  toFullString() {
    return `${this.getYear()}年${this.getMonth()}月`;
  }
};
var _Solar = class {
  static fromYmd(year, month, day) {
    return _Solar.fromYmdHms(year, month, day, 0, 0, 0);
  }
  static fromYmdHms(year, month, day, hour, minute, second) {
    return new _Solar(year, month, day, hour, minute, second);
  }
  static fromDate(date) {
    return _Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
  }
  static fromJulianDay(julianDay) {
    let d = Math.floor(julianDay + 0.5);
    let f = julianDay + 0.5 - d;
    let c;
    if (d >= 2299161) {
      c = Math.floor((d - 186721625e-2) / 36524.25);
      d += 1 + c - Math.floor(c / 4);
    }
    d += 1524;
    let year = Math.floor((d - 122.1) / 365.25);
    d -= Math.floor(365.25 * year);
    let month = Math.floor(d / 30.601);
    d -= Math.floor(30.601 * month);
    let day = d;
    if (month > 13) {
      month -= 13;
      year -= 4715;
    } else {
      month -= 1;
      year -= 4716;
    }
    f *= 24;
    let hour = Math.floor(f);
    f -= hour;
    f *= 60;
    let minute = Math.floor(f);
    f -= minute;
    f *= 60;
    let second = Math.round(f);
    if (second > 59) {
      second -= 60;
      minute++;
    }
    if (minute > 59) {
      minute -= 60;
      hour++;
    }
    if (hour > 23) {
      hour -= 24;
      day += 1;
    }
    return _Solar.fromYmdHms(year, month, day, hour, minute, second);
  }
  static fromBaZi(yearGanZhi, monthGanZhi, dayGanZhi, timeGanZhi, sect = 2, baseYear = 1900) {
    sect = 1 == sect ? 1 : 2;
    const l = [];
    let m = LunarUtil.index(monthGanZhi.substring(1), LunarUtil.ZHI, -1) - 2;
    if (m < 0) {
      m += 12;
    }
    if (((LunarUtil.index(yearGanZhi.substring(0, 1), LunarUtil.GAN, -1) + 1) * 2 + m) % 10 !== LunarUtil.index(monthGanZhi.substring(0, 1), LunarUtil.GAN, -1)) {
      return l;
    }
    let y = LunarUtil.getJiaZiIndex(yearGanZhi) - 57;
    if (y < 0) {
      y += 60;
    }
    y++;
    m *= 2;
    let h = LunarUtil.index(timeGanZhi.substring(1), LunarUtil.ZHI, -1) * 2;
    let hours = [h];
    if (0 == h && 2 == sect) {
      hours = [0, 23];
    }
    const startYear = baseYear - 1;
    const endYear = (/* @__PURE__ */ new Date()).getFullYear();
    while (y <= endYear) {
      if (y >= startYear) {
        const jieQiLunar = Lunar.fromYmd(y, 1, 1);
        const jieQiList = jieQiLunar.getJieQiList();
        const jieQiTable = jieQiLunar.getJieQiTable();
        let solarTime = jieQiTable[jieQiList[4 + m]];
        if (solarTime.getYear() >= baseYear) {
          let d = LunarUtil.getJiaZiIndex(dayGanZhi) - LunarUtil.getJiaZiIndex(solarTime.getLunar().getDayInGanZhiExact2());
          if (d < 0) {
            d += 60;
          }
          if (d > 0) {
            solarTime = solarTime.next(d);
          }
          hours.forEach((hour) => {
            let mi = 0;
            let s = 0;
            if (d == 0 && hour === solarTime.getHour()) {
              mi = solarTime.getMinute();
              s = solarTime.getSecond();
            }
            const solar = _Solar.fromYmdHms(solarTime.getYear(), solarTime.getMonth(), solarTime.getDay(), hour, mi, s);
            let lunar = solar.getLunar();
            let dgz = 2 === sect ? lunar.getDayInGanZhiExact2() : lunar.getDayInGanZhiExact();
            if (lunar.getYearInGanZhiExact() === yearGanZhi && lunar.getMonthInGanZhiExact() === monthGanZhi && dgz === dayGanZhi && lunar.getTimeInGanZhi() === timeGanZhi) {
              l.push(solar);
            }
          });
        }
      }
      y += 60;
    }
    return l;
  }
  constructor(year, month, day, hour, minute, second) {
    if (1582 === year && 10 === month) {
      if (day > 4 && day < 15) {
        throw new Error(`wrong solar year ${year} month ${month} day ${day}`);
      }
    }
    if (month < 1 || month > 12) {
      throw new Error(`wrong month ${month}`);
    }
    if (day < 1 || day > 31) {
      throw new Error(`wrong day ${day}`);
    }
    if (hour < 0 || hour > 23) {
      throw new Error(`wrong hour ${hour}`);
    }
    if (minute < 0 || minute > 59) {
      throw new Error(`wrong minute ${minute}`);
    }
    if (second < 0 || second > 59) {
      throw new Error(`wrong second ${second}`);
    }
    this._year = year;
    this._month = month;
    this._day = day;
    this._hour = hour;
    this._minute = minute;
    this._second = second;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getDay() {
    return this._day;
  }
  getHour() {
    return this._hour;
  }
  getMinute() {
    return this._minute;
  }
  getSecond() {
    return this._second;
  }
  getWeek() {
    return (Math.floor(this.getJulianDay() + 0.5) + 7000001) % 7;
  }
  getWeekInChinese() {
    return SolarUtil.WEEK[this.getWeek()];
  }
  getSolarWeek(start) {
    return SolarWeek.fromYmd(this._year, this._month, this._day, start);
  }
  isLeapYear() {
    return SolarUtil.isLeapYear(this._year);
  }
  getFestivals() {
    const l = [];
    let f = SolarUtil.FESTIVAL[this._month + "-" + this._day];
    if (f) {
      l.push(f);
    }
    const weeks = Math.ceil(this._day / 7);
    const week = this.getWeek();
    f = SolarUtil.WEEK_FESTIVAL[this._month + "-" + weeks + "-" + week];
    if (f) {
      l.push(f);
    }
    if (this._day + 7 > SolarUtil.getDaysOfMonth(this._year, this._month)) {
      f = SolarUtil.WEEK_FESTIVAL[this._month + "-0-" + week];
      if (f) {
        l.push(f);
      }
    }
    return l;
  }
  getOtherFestivals() {
    const l = [];
    const fs = SolarUtil.OTHER_FESTIVAL[this._month + "-" + this._day];
    if (fs) {
      fs.forEach((f) => {
        l.push(f);
      });
    }
    return l;
  }
  getXingzuo() {
    return this.getXingZuo();
  }
  getXingZuo() {
    let index = 11;
    const y = this._month * 100 + this._day;
    if (y >= 321 && y <= 419) {
      index = 0;
    } else if (y >= 420 && y <= 520) {
      index = 1;
    } else if (y >= 521 && y <= 621) {
      index = 2;
    } else if (y >= 622 && y <= 722) {
      index = 3;
    } else if (y >= 723 && y <= 822) {
      index = 4;
    } else if (y >= 823 && y <= 922) {
      index = 5;
    } else if (y >= 923 && y <= 1023) {
      index = 6;
    } else if (y >= 1024 && y <= 1122) {
      index = 7;
    } else if (y >= 1123 && y <= 1221) {
      index = 8;
    } else if (y >= 1222 || y <= 119) {
      index = 9;
    } else if (y <= 218) {
      index = 10;
    }
    return SolarUtil.XINGZUO[index];
  }
  /**
   * 获取薪资比例(感谢 https://gitee.com/smr1987)
   * @returns 1 | 2 | 3 薪资比例
   */
  getSalaryRate() {
    if (this._month === 1 && this._day === 1) {
      return 3;
    }
    if (this._month === 5 && this._day === 1) {
      return 3;
    }
    if (this._month === 10 && this._day >= 1 && this._day <= 3) {
      return 3;
    }
    const lunar = this.getLunar();
    if (lunar.getMonth() === 1 && lunar.getDay() >= 1 && lunar.getDay() <= 3) {
      return 3;
    }
    if (lunar.getMonth() === 5 && lunar.getDay() === 5) {
      return 3;
    }
    if (lunar.getMonth() === 8 && lunar.getDay() === 15) {
      return 3;
    }
    if ("清明" === lunar.getJieQi()) {
      return 3;
    }
    const holiday = HolidayUtil.getHoliday(this._year, this._month, this._day);
    if (holiday) {
      if (!holiday.isWork()) {
        return 2;
      }
    } else {
      const week = this.getWeek();
      if (week === 6 || week === 0) {
        return 2;
      }
    }
    return 1;
  }
  toYmd() {
    let y = this._year + "";
    while (y.length < 4) {
      y = "0" + y;
    }
    return [y, (this._month < 10 ? "0" : "") + this._month, (this._day < 10 ? "0" : "") + this._day].join("-");
  }
  toYmdHms() {
    return this.toYmd() + " " + [(this._hour < 10 ? "0" : "") + this._hour, (this._minute < 10 ? "0" : "") + this._minute, (this._second < 10 ? "0" : "") + this._second].join(":");
  }
  toString() {
    return this.toYmd();
  }
  toFullString() {
    let s = this.toYmdHms();
    if (this.isLeapYear()) {
      s += " 闰年";
    }
    s += " 星期" + this.getWeekInChinese();
    const festivals = this.getFestivals();
    festivals.forEach((f) => {
      s += " (" + f + ")";
    });
    s += " " + this.getXingZuo() + "座";
    return s;
  }
  nextYear(years) {
    const y = this._year + years;
    let m = this._month;
    let d = this._day;
    if (1582 === y && 10 === m) {
      if (d > 4 && d < 15) {
        d += 10;
      }
    } else if (2 === m) {
      if (d > 28) {
        if (!SolarUtil.isLeapYear(y)) {
          d = 28;
        }
      }
    }
    return _Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
  }
  nextMonth(months) {
    const month = SolarMonth.fromYm(this._year, this._month).next(months);
    const y = month.getYear();
    const m = month.getMonth();
    let d = this._day;
    if (1582 === y && 10 === m) {
      if (d > 4 && d < 15) {
        d += 10;
      }
    } else {
      const maxDay = SolarUtil.getDaysOfMonth(y, m);
      if (d > maxDay) {
        d = maxDay;
      }
    }
    return _Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
  }
  nextDay(days) {
    let y = this._year;
    let m = this._month;
    let d = this._day;
    if (1582 === y && 10 === m) {
      if (d > 4) {
        d -= 10;
      }
    }
    if (days > 0) {
      d += days;
      let daysInMonth = SolarUtil.getDaysOfMonth(y, m);
      while (d > daysInMonth) {
        d -= daysInMonth;
        m++;
        if (m > 12) {
          m = 1;
          y++;
        }
        daysInMonth = SolarUtil.getDaysOfMonth(y, m);
      }
    } else if (days < 0) {
      while (d + days <= 0) {
        m--;
        if (m < 1) {
          m = 12;
          y--;
        }
        d += SolarUtil.getDaysOfMonth(y, m);
      }
      d += days;
    }
    if (1582 === y && 10 === m) {
      if (d > 4) {
        d += 10;
      }
    }
    return _Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
  }
  next(days, onlyWorkday = false) {
    if (onlyWorkday) {
      let solar = _Solar.fromYmdHms(this._year, this._month, this._day, this._hour, this._minute, this._second);
      if (days !== 0) {
        let rest = Math.abs(days);
        const add = days < 1 ? -1 : 1;
        while (rest > 0) {
          solar = solar.next(add);
          let work = true;
          const holiday = HolidayUtil.getHoliday(solar.getYear(), solar.getMonth(), solar.getDay());
          if (!holiday) {
            const week = solar.getWeek();
            if (0 === week || 6 === week) {
              work = false;
            }
          } else {
            work = holiday.isWork();
          }
          if (work) {
            rest -= 1;
          }
        }
      }
      return solar;
    } else {
      return this.nextDay(days);
    }
  }
  nextHour(hours) {
    const h = this._hour + hours;
    const n = h < 0 ? -1 : 1;
    let hour = Math.abs(h);
    let days = Math.floor(hour / 24) * n;
    hour = hour % 24 * n;
    if (hour < 0) {
      hour += 24;
      days--;
    }
    const solar = this.next(days);
    return _Solar.fromYmdHms(solar.getYear(), solar.getMonth(), solar.getDay(), hour, solar.getMinute(), solar.getSecond());
  }
  getLunar() {
    return Lunar.fromSolar(this);
  }
  getJulianDay() {
    let y = this._year;
    let m = this._month;
    let d = this._day + ((this._second / 60 + this._minute) / 60 + this._hour) / 24;
    let n = 0;
    let g = false;
    if (y * 372 + m * 31 + Math.floor(d) >= 588829) {
      g = true;
    }
    if (m <= 2) {
      m += 12;
      y--;
    }
    if (g) {
      n = Math.floor(y / 100);
      n = 2 - n + Math.floor(n / 4);
    }
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + n - 1524.5;
  }
  isBefore(solar) {
    if (this._year > solar.getYear()) {
      return false;
    }
    if (this._year < solar.getYear()) {
      return true;
    }
    if (this._month > solar.getMonth()) {
      return false;
    }
    if (this._month < solar.getMonth()) {
      return true;
    }
    if (this._day > solar.getDay()) {
      return false;
    }
    if (this._day < solar.getDay()) {
      return true;
    }
    if (this._hour > solar.getHour()) {
      return false;
    }
    if (this._hour < solar.getHour()) {
      return true;
    }
    if (this._minute > solar.getMinute()) {
      return false;
    }
    if (this._minute < solar.getMinute()) {
      return true;
    }
    return this._second < solar.getSecond();
  }
  isAfter(solar) {
    if (this._year > solar.getYear()) {
      return true;
    }
    if (this._year < solar.getYear()) {
      return false;
    }
    if (this._month > solar.getMonth()) {
      return true;
    }
    if (this._month < solar.getMonth()) {
      return false;
    }
    if (this._day > solar.getDay()) {
      return true;
    }
    if (this._day < solar.getDay()) {
      return false;
    }
    if (this._hour > solar.getHour()) {
      return true;
    }
    if (this._hour < solar.getHour()) {
      return false;
    }
    if (this._minute > solar.getMinute()) {
      return true;
    }
    if (this._minute < solar.getMinute()) {
      return false;
    }
    return this._second > solar.getSecond();
  }
  subtract(solar) {
    return SolarUtil.getDaysBetween(solar.getYear(), solar.getMonth(), solar.getDay(), this._year, this._month, this._day);
  }
  subtractMinute(solar) {
    let days = this.subtract(solar);
    const cm = this._hour * 60 + this._minute;
    const sm = solar.getHour() * 60 + solar.getMinute();
    let m = cm - sm;
    if (m < 0) {
      m += 1440;
      days--;
    }
    m += days * 1440;
    return m;
  }
};
var Solar = _Solar;
Solar.J2000 = 2451545;
var SolarSeason = class _SolarSeason {
  static fromYm(year, month) {
    return new _SolarSeason(year, month);
  }
  static fromDate(date) {
    return _SolarSeason.fromYm(date.getFullYear(), date.getMonth() + 1);
  }
  constructor(year, month) {
    this._year = year;
    this._month = month;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getIndex() {
    return Math.ceil(this._month / 3);
  }
  next(seasons) {
    const month = SolarMonth.fromYm(this._year, this._month).next(3 * seasons);
    return _SolarSeason.fromYm(month.getYear(), month.getMonth());
  }
  getMonths() {
    const l = [];
    const index = this.getIndex() - 1;
    for (let i = 0; i < 3; i++) {
      l.push(SolarMonth.fromYm(this._year, 3 * index + i + 1));
    }
    return l;
  }
  toString() {
    return `${this.getYear()}.${this.getIndex()}`;
  }
  toFullString() {
    return `${this.getYear()}年${this.getIndex()}季度`;
  }
};
var SolarHalfYear = class _SolarHalfYear {
  static fromYm(year, month) {
    return new _SolarHalfYear(year, month);
  }
  static fromDate(date) {
    return _SolarHalfYear.fromYm(date.getFullYear(), date.getMonth() + 1);
  }
  constructor(year, month) {
    this._year = year;
    this._month = month;
  }
  getYear() {
    return this._year;
  }
  getMonth() {
    return this._month;
  }
  getIndex() {
    return Math.ceil(this._month / 6);
  }
  next(halfYears) {
    const month = SolarMonth.fromYm(this._year, this._month).next(6 * halfYears);
    return _SolarHalfYear.fromYm(month.getYear(), month.getMonth());
  }
  getMonths() {
    const l = [];
    const index = this.getIndex() - 1;
    for (let i = 0; i < 6; i++) {
      l.push(SolarMonth.fromYm(this._year, 6 * index + i + 1));
    }
    return l;
  }
  toString() {
    return `${this.getYear()}.${this.getIndex()}`;
  }
  toFullString() {
    const name = ["上", "下"][this.getIndex() - 1];
    return `${this.getYear()}年${name}半年`;
  }
};
var SolarYear = class _SolarYear {
  static fromYear(year) {
    return new _SolarYear(year);
  }
  static fromDate(date) {
    return _SolarYear.fromYear(date.getFullYear());
  }
  constructor(year) {
    this._year = year;
  }
  getYear() {
    return this._year;
  }
  next(years) {
    return _SolarYear.fromYear(this._year + years);
  }
  getMonths() {
    const l = [];
    const m = SolarMonth.fromYm(this._year, 1);
    l.push(m);
    for (let i = 1; i < 12; i++) {
      l.push(m.next(i));
    }
    return l;
  }
  toString() {
    return `${this.getYear()}`;
  }
  toFullString() {
    return `${this.getYear()}年`;
  }
};
I18n.init();
export {
  DaYun,
  EightChar,
  Foto,
  FotoUtil,
  Fu,
  Holiday,
  HolidayUtil,
  I18n,
  JieQi,
  LiuNian,
  LiuYue,
  Lunar,
  LunarMonth,
  LunarTime,
  LunarUtil,
  LunarYear,
  NineStar,
  NineStarUtil,
  ShouXingUtil,
  ShuJiu,
  Solar,
  SolarHalfYear,
  SolarMonth,
  SolarSeason,
  SolarUtil,
  SolarWeek,
  SolarYear,
  Tao,
  TaoUtil,
  XiaoYun,
  Yun
};
//# sourceMappingURL=lunar-typescript.js.map
