import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Comment, Product, ProductService} from '../share/product.service';
import {WebSocketService} from '../share/web-socket.service';
import {Subscription} from 'rxjs';   // 路由功能

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

  isWatched:boolean=false;
  currentBid:number;// 当前的最新出价

  subscription:Subscription;

  constructor(private routerInfo: ActivatedRoute,private router: Router,
              private productService:ProductService,private wsService:WebSocketService) {

  }

  private unitId:number;
  ngOnInit() {
    this.unitId=this.routerInfo.snapshot.params['id'];
    // this.product=this.productService.getProduct(this.unitId);
    // this.comments=this.productService.getCommentForProduct(this.unitId);

    this.productService.getProduct(this.unitId).subscribe(
      unit=> {
        this.product=unit;
        this.currentBid=this.product.price;
      }
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

  // 关注与取消关注的切换操作
  watchProduct() {
    // this.isWatched=!this.isWatched;
    if(this.subscription) {// 如果流已经存在，关闭流
      this.subscription.unsubscribe();
      this.isWatched=false;
      this.subscription=null;
    }else {// 流不存在时，则创建WebSocket流
      this.isWatched=true;
      this.subscription=this.wsService.createObservableSocket('ws://localhost:8085',this.product.id)
        .subscribe(
          data=> {
             console.log('组件中打印出来的数据:'+data);
             this.currentBid=520;
          }

          // data是个Json格式，[{'ProductId':1,'bid':277.23}]// todo 服务中打印出来时存在数据，但是组件中结果为undefined
          // products=> {
          //   console.log(products);// todo undefined,从WebSocketService中订阅返回的数据为空
          //
          //   let product=products.find(p=>p.productId==this.product.id);
          //   this.currentBid=product.bid;
          // }
        );
    }
  }


}
