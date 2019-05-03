import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {

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
  public hide(){
    this.flag=false;
  }

  public units=[
    {id:0,imgURL:"../../assets/images/unit/ios.jpg",title:"兼容性",records:5,following:3,news:"IE8以下不支持getElementsByClassName，通过遍历子元素的类名，构造出一个数组来实现查询。"},
    {id:1,imgURL:"../../assets/images/unit/frame.jpg",title:"框架",records:5,following:3,news:"koa.js,Express.js"},
    {id:2,imgURL:"../../assets/images/unit/es6.png",title:"ECMAScript 6",records:5,following:3,news:"promise,Iterator,Generator,async,Module"},
    {id:3,imgURL:"../../assets/images/unit/node.jpg",title:"后端",records:5,following:3,news:"Node.js,C#,Python"},
    {id:4,imgURL:"../../assets/images/unit/internet.jpg",title:"计算机网络",records:5,following:3,news:"HTTP,WebSocket,TCP,UDP"},
    {id:5,imgURL:"../../assets/images/unit/data-structure.png",title:"数据结构",records:5,following:3,news:"Assic,Unicode,双向链表,堆,栈"},
    {id:6,imgURL:"../../assets/images/unit/calculate.jpg",title:"算法",records:5,following:3,news:"快速排序,冒泡排序,选择排序,加密,解密,SHA-1,MD5,RSA"},
    {id:7,imgURL:"../../assets/images/unit/weixin.jpg",title:"微信开发",records:5,following:3,news:"apk下载链接无法在内置浏览器中打开;企业号开发;"},
    {id:8,imgURL:"../../assets/images/unit/sublime.png",title:"Sublime Text3",records:5,following:3,news:"Emmet,ChineseLocalizations,AutopreFixer,HTML-CSS-JS Prettify,TypeScript,CSSFormat"},
    {id:9,imgURL:"../../assets/images/unit/MongoDB.jpg",title:"数据库",records:5,following:3,news:"对象数据库:MongoDB，NoSQL;关系型数据库:mySQL，SQL SERVER"},
    {id:10,imgURL:"../../assets/images/unit/SVN.jpg",title:"版本控制工具",records:5,following:3,news:"SVN,Github"},
    {id:11,imgURL:"https://webpack.js.org/assets/icon-square-big.svg",title:"前端项目构建工具",records:5,following:3,news:"grunt,glup"},
  ];
  public menus=[
    {id:0,name:"最新内容",class:"fa fa-bars fa-3x",status:true},
    {id:1,name:"知识库",class:"fa fa-th-large fa-3x",status:true},
    {id:2,name:"设置",class:"fa fa-cog fa-3x",status:true},
  ]

}
