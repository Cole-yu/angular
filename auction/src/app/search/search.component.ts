import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

// import 'rxjs/Rx'; 在黑白单中，不能这样导入，应该导入需要使用的 子模块，例如debounceTime子模块
// 在tslint.json中，导入黑名单 import-blacklist；rxjs和rxjs/Rx被列入黑名单

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput:FormControl=new FormControl();// 表单事件对象

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)// 延迟500毫秒发射事件
      .subscribe(stockCode=>this.getStock(stockCode));
  }

  ngOnInit() {
  }

  getStock(value:string) {
    console.log(value);
  }

}
