import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input()
  title: string;

  public alert: any;

  constructor() {
    this.alert = {
      show: false,
      msg: '这是一段提醒文字'
    };
  }

  ngOnInit() {
  }

  public fnAlert(msg: string): void {
    if (!msg) {
      throw new Error('msg can not be empty!');
    }
    this.alert.msg = msg;
    this.alert.show = true;

    setTimeout(() => {
      this.alert.show = false;
      this.alert.msg = '';
    }, 2000);
  }


}
