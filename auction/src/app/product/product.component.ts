import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../share/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private  imgUrl='http://placehold.it/360x150';
  private products:Product[];

  private keyword:string;
  private titleFilter:FormControl=new FormControl();

  constructor( private productService:ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword=value);// 把product组件中输入框的值保存进keyword,在模板中通过自己写的filter管道筛选产品title中包含keyword的产品数组，在*ngFor显示出来
  }

  ngOnInit() { // 实例化生命周期钩子
    this.products=this.productService.getProducts();
  }
}

