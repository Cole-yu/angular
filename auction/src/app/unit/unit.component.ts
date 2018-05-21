import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  newRating:number=5;

  newComment:string='';

  isCommentHide:boolean=true;

  constructor(private routerInfo: ActivatedRoute,private router: Router,private productService:ProductService) {

  }

  private unitId:number;
  ngOnInit() {
    this.unitId=this.routerInfo.snapshot.params['id'];
    // this.product=this.productService.getProduct(this.unitId);
    // this.comments=this.productService.getCommentForProduct(this.unitId);

    this.productService.getProduct(this.unitId).subscribe(
      unit=>this.product=unit
    );

    this.productService.getCommentForProduct(this.unitId).subscribe(
      comments=>this.comments=comments
    );


   // this.route.params.subscribe((params:Params)=>this.unitId=params['id']);   // 参数订阅
  }

  addComment() {
      let comment=new Comment(0,this.product.id,new Date().toISOString(),'someone',this.newRating,this.newComment);
      this.comments.unshift(comment);
      let sum:number=this.comments.reduce((sum,comment)=>sum+comment.rating,0 );// 修改tslint.json，把no-shadowed-variable的值从true改成false
      this.product.rating=sum/this.comments.length;

      // 发表评论后初始化评论
      this.newComment=null;
      this.newRating=5;
      this.isCommentHide=true;

  }


}
