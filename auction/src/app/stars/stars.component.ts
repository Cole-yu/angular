import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
// import {letProto} from "rxjs/operator/let";
// import {letProto} from "rxjs";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  @Input()
  private  rating:number =0;

  @Output()
  private ratingChange:EventEmitter<Number>=new EventEmitter();// rating与ratingChange必须这样写，在父组件中才能使用[(ngModal)]双向绑定

  private  stars:boolean[];

  @Input()
  private readonly:boolean=true;



  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars=[];
    for (let i=1;i<=5;i++) {
      this.stars.push(i>this.rating);
    }
    console.log(this.stars);
  }

  clickStar(index:number) {// 点击那颗星，改变选中的星数
    if(!this.readonly) {
      this.rating=index+1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }

  }

}
