import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.css']
})
export class CompanyNEWSComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {

  title:string='Tom';

  greeting:string='Hello';

  user:{name:string}={name:'Tom'};

  message:string='write less,do more';

  divContent:string='<div>使用innerHTML属性绑定，只能在浏览器中使用，ng-content则与平台无关，可以投影多个投影点</div>'

  @ViewChild('child')
  child:ChildComponent;

  constructor() { }

  ngOnInit() {

    setInterval(()=>
      this.child.say('Kitty'),5000);

  }

  ngDoCheck():void {

  }

  ngAfterViewInit(): void {// 组件初始化完成后执行下列代码，组装完毕后再修改视图会报错
    console.log('父组件的视图初始化完毕');
    setTimeout(()=> {// 必须放在setTimeOut中进行修改已经组装完毕后的视图信息
      this.message='组装完毕后要修改视图，必须放在下一个运行周期中进行修改';
    },0);
  }

  ngAfterViewChecked(): void {// 组件检测完毕成后执行下列代码，完毕后后再修改视图会报错
    console.log('父组件的视图变更检测完毕');  // 必须放在setTimeOut中进行修改已经检测完毕后的视图信息，同AfterViewInit
  }

  ngAfterContentInit(): void {// 投影点组装完成后
    console.log('父组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void { // 投影点检测完毕后
    console.log('父组件投影内容变更检测完毕');
  }
}
