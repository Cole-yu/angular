import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Comment, Product, ProductService} from '../share/product.service';   // 路由功能

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  public product:Product;
  public comments:Comment[];

  constructor(private routerInfo: ActivatedRoute,private router: Router,private productService:ProductService) {

  }

  private unitId:number;
  ngOnInit() {
    this.unitId=this.routerInfo.snapshot.params['id'];
    this.product=this.productService.getProduct(this.unitId);
    this.comments=this.productService.getCommentForProduct(this.unitId);

   // this.route.params.subscribe((params:Params)=>this.unitId=params['id']);   // 参数订阅
  }

}
