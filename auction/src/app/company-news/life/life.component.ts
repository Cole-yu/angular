import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let logIndex:number=1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()
  name:string;

  logIt(msg:string) {
    console.log(`#${logIndex++} ${msg}`);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

  ngOnChanges(changes:SimpleChanges):void {
    let name=changes['name'].currentValue;
    this.logIt('name属性在ngOnChanges里的值是：'+name);
  }

  ngDoCheck() {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit() {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('ngOnDestroy');// 用于清除定时器，取消订阅，解除引用资源等操作
  }

  constructor() {
    this.logIt('name属性在constructor里的值是：'+name);
  }

}
