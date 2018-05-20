import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {promise} from 'selenium-webdriver';
import controlFlow = promise.controlFlow;
import {ProductService} from '../share/product.service';
// import 'rxjs/Rx'; 在黑白单中，不能这样导入，应该导入需要使用的 子模块，例如debounceTime子模块
// 在tslint.json中，导入黑名单 import-blacklist；rxjs和rxjs/Rx被列入黑名单

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput:FormControl=new FormControl();// 表单事件对象

  formModal:FormGroup;

  categories:string[];

  constructor(private  productService:ProductService) {
    // [formControl]="searchInput"
    // this.searchInput.valueChanges
    //   .debounceTime(500)// 延迟500毫秒发射事件
    //   .subscribe(stockCode=>this.getStock(stockCode));

    let fb=new FormBuilder();
    this.formModal=fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      category:['-1']
    });
  }

  ngOnInit() {
    this.categories=this.productService.getAllCategories();
  }

  Onsearch() {
      if(this.formModal.valid) {
        console.log(this.formModal.value);
      }
  }

  positiveNumberValidator(control:FormControl):any {
    if(!control.value) {
      return null;
    }
    let price= parseInt (control.value,10);// 第二个参数指定为10进制，radix:基数
    if (price>0) {
      return null;
    }else {
      return {positiveNumber:true};
    }

  }

  getStock(value:string) {
    console.log(value);
  }

}
