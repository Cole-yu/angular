import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  // dataSource:Observable<any>;
  // products:Array<any>=[];

  products:Observable<any>;

  constructor(private http:HttpClient) {

    let myHeaders:HttpHeaders=new HttpHeaders();
    // myHeaders.append('Authorization','Basic 123456');
    myHeaders.append('key','123456');
    this.products=this.http.get('/api/products',{headers:myHeaders});
      // .map((res)=>res.json());

    // this.dataSource=this.http.get('/api/products');// 定义一个Http请求
     // .map((res)=>res.json()); // 把res转化为json格式
  }

  ngOnInit() {
    // this.dataSource.subscribe( // 真正的发送http请求
    //   (data)=>this.products=data
    // );
  }

}
