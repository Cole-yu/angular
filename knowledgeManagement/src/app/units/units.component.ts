import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';   //路由功能
import { switchMap } from 'rxjs/operators';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';
import {Observable} from 'rxjs/Observable';       //可观察对象Observable
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  dataSource:Observable<any>;
  units:Array<any>;
  // units:Observable<any>;

  public  unitId:number;

  constructor(private route: ActivatedRoute,private router: Router,private http:Http) {
    this.dataSource=this.http.get('http://localhost:3000').map((res)=>res.json());
    // this.units=this.http.get('http://localhost:3000/').map((res)=>res.json());
  }

  //路由传递参数的三种方式（组件间通信）：
  //更改路由path属性，使路由后面可以加参数,{path:"unit/:id",component:UnitsComponent},
  //第一种：在home 的 <a [routeLink]="['/unit']" [queryParams]="{id:1}"></a>
  //          在详细页面 this,route.snapshot.queryParams['id'']
  //第二种：在home 的 <a [routeLink]="['/unit',1]"
  //          在详细页面 this,route.snapshot.Params['id'']

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>this.unitId=params['id']);   //参数订阅
    // this.unitId = this.route.snapshot.params['id'];      //参数快照

    this.dataSource.subscribe(
      (data)=>this.units=data
    );
  }

  public flag=false;
  public show(){
    if(this.flag==false){
      this.flag=true;
    }
    else {
      this.flag=false;
    }
  }

  public unit={id:0,title:"兼容性",news:"IE8以下不支持getElementsByClassName，通过遍历子元素的类名，构造出一个数组来实现查询。"};
  public  navbar=[
    {id:0,name:"移动端"},
    {id:1,name:"PC端"},
    {id:2,name:"响应式网站设计"},
    {id:3,name:"自适应网站"},
    {id:4,name:"JS-API"},
    {id:5,name:"CSS"},
  ];
}
