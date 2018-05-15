import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../share/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private  imgUrl='http://placehold.it/360x150';
  private products:Product[];
  constructor( private productService:ProductService) { }

  ngOnInit() { // 实例化生命周期钩子
    this.products=this.productService.getProducts();
  }
}

