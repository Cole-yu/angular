export interface CalendarType {     // 构造一个数据结构接口？？为啥不是构造类
  value: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isCurrentDay: boolean;
  events?: Array<CalendarEvent>;  // 某一天的事件描述数组
}

export interface CalendarEvent {  // 单独的一个事件描述
  date: Date[] | string[];
  event: string;
}
