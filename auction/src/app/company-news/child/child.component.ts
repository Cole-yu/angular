import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  @Input()
  greeting:string;

  @Input()
  user:{
    name:'Tom'
  }

  olderName:string='';

  message:string='初始化消息';

  changeDetected:boolean=false;

  noChangeCounter:number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges( changes:SimpleChanges):void  {
    console.log(JSON.stringify(changes,null,2));
  }

  ngDoCheck():void {
      if(this.user.name != this.olderName) {
        this.changeDetected=true;
        console.log('DoCheck:user.name从'+this.olderName+'变为了'+this.user.name);
        this.olderName=this.user.name;
      }
      if(this.changeDetected) {
        this.noChangeCounter=0;
      }else {
        this.noChangeCounter++;
        console.log('user.name没发生变化，DoCheck已经执行了'+this.noChangeCounter+'次');
      }
      this.changeDetected=false;
  }

  ngAfterViewInit(): void { // 视图
    console.log('子组件的视图初始化完毕');
  }

  ngAfterViewChecked(): void { // 视图
    console.log('子组件的视图变更检测完毕');
  }

  ngAfterContentInit(): void {// 投影点组装完成后
    console.log('子组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void { // 投影点检测完毕后
    console.log('子组件投影内容变更检测完毕');
  }


  say(name:string) {
    console.log('Hello '+name);
  }


}
