import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../share/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private  imgUrl='http://placehold.it/360x150';
  // private products:Product[];
  public products:Observable<Product[]>;

  // private keyword:string;
  // private titleFilter:FormControl=new FormControl();

  constructor( private productService:ProductService) {
    // this.titleFilter.valueChanges
    //   .debounceTime(500)
    //   .subscribe(value => this.keyword=value);// 把product组件中输入框的值保存进keyword,在模板中通过自己写的filter管道筛选产品title中包含keyword的产品数组，在*ngFor显示出来
  }

  ngOnInit() { // 实例化生命周期钩子
    this.products=this.productService.getProducts();// 获取到服务器端返回的所有数据
    this.productService.searchEvent.subscribe(// 订阅服务器端的数据流。再以products为数据源，查找符合的数据
      params=>this.products=this.productService.search(params)
    );
  }
}

