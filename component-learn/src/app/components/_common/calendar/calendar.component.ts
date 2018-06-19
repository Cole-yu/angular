import { Component, OnInit } from '@angular/core';
import {CalendarType,CalendarEvent} from './calendar.type';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  /**
   * 记录日期
   */
  public date: Date;  // 日历
  /**
   * 当前月第一天
   */
  private _firstDay: Date;
  /**
   * 页面显示数据载体
   */
  public calendar: Array<Array<CalendarType>>;      // 整个当前月的日历,[星期日,...星期六]6行数组,每个月的日子的数组[1,2,3...28,29?,30?,31?]
  /**
   * 当前选中日期日程
   */
  public currentEvents: Array<CalendarEvent>=[ // 数据结构
    {
      date:[new Date('2018-6-1'),new Date('2018-6-2')],
      event:'12333333333333333333'
    }
  ];

  public constructor() {
  }

  public ngOnInit(): void {
    this.date = new Date();
    this.calendar = [];
    this.setDate();
  }

  /**
   * 初始化日期
   */
  private setDate(): void {
    const _year: number = this.date.getFullYear();

    // 月份区间0-11
    const _month: number = this.date.getMonth() + 1;                // 口头中的月份1-12月，因为加1了

    // 当前月第一天
    this._firstDay = new Date(_year, _month - 1, 1);  // 当前月份6月，数组中为5，day为1（非数组）

    // 一月最多30天，一星期7天，共6行格子，当前循环所在的行           // 初始化_line
    let _line: CalendarType[] = [];          // _line是一个CalendarType类型的数组

    this.calendar = [];

    for (let i = 0; i < 42; i++) {  // 日历的每个页面为6行7列,重复循环42次，一个月的信息
      // 上个月i+1-月初第一天之前剩余的天数，Date(2018,5,1),Date(2018,5,1-5)=Date(2018,4,27),i=0是第一个日期
      const _thisDate: Date = new Date(_year, _month - 1, i + 1 - this._firstDay.getDay());
      const _thisDay: number = _thisDate.getDate();   // i=0时，是日历中显示的每个月所在第一个日期

      const _temp: CalendarType = { // 创建42个CalendarType的实例
        value: _thisDate, day: _thisDay, isCurrentMonth: _thisDate.getMonth() === this._firstDay.getMonth(),
        // 判断是否为这个月的日期，若否则会在模板中添加other-month类样式
        isToday: _thisDay === new Date().getDate(), isCurrentDay: _thisDay === new Date().getDate()
      };
      // 为每个能被8整除的日程添加一个议程事件
      if (_thisDay % 8 === 0) {
        const _event: CalendarEvent = {date: [_thisDate, new Date(_thisDate.getTime() + 9999999)], event: 'sadkjfhkjsadhfkjahsdflkasdf'};
        Object.assign(_temp, {events: [_event]});
      }
      if (_thisDay === new Date().getDate()) { // 在初始化日历时为今天这个日期添加选中的标记 // todo:没判断月份和年份是否一致，导致每个月都会被选中
        this.selectEvent(_temp);  // _temp是一个CalendarType类对象
      }
      _line.push(_temp);        // 把新创建的CalendarType对象推送进_line数组

      if (i > 0 && (i + 1) % 7 === 0) {
        this.calendar.push(_line);
        _line = [];
      }
    }

    console.log(this.calendar);
  }

  /**
   * 月份跳转
   * @param {number} month
   */
  private jumpMonth(month: number): void {
    this.date = new Date(this.date.getFullYear(), month, 1);
    this.setDate();
  }

  /**
   * 下一月
   */
  public nextMonth(): void {
    this.jumpMonth(this.date.getMonth() + 1);    // 之前定义的date的月份的month+1，将导致setDate函数的_month加1，从而使日历信息变为下一个月的信息
  }

  /**
   * 上一月
   */
  public prevMonth(): void {
    this.jumpMonth(this.date.getMonth() - 1);
  }

  /**
   * 日历点击事件
   * @param {CalendarEvent} calendar  对应对象
   */
  public selectEvent(calendar: CalendarType): void {  // 传入一个CalendarType类型的对象
    if (calendar.isCurrentDay) {  // 如果是今天，直接返回，不操作
      return;
    }
    this.calendar.forEach((row: Array<CalendarType>) => {// 循环遍历calendar的每行，在匿名函数中每行遍历每列
      row.forEach((col: CalendarType) => {
        col.isCurrentDay = calendar.value === col.value;// 判断传入的CalendarType对象的value是否和列的日期一致，然后设置列的isCurrentDay的布尔值
        // 通过设置isCurrentDay的布尔值，会在模板中通过类绑定机制，改变样式[ngClass]="{'current': col.isCurrentDay}"，current类background-color:#3792d8
      });
    });
    this.currentEvents = calendar.events;
  }

  /**
   * 日程添加
   */
  public fnGetReleaseResult(): void {
  }

}
