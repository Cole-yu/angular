import { Component, OnInit, Input, EventEmitter, Output, OnChanges ,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {

  @Input()
  public  rating:number =0;

  @Output()
  private ratingChange:EventEmitter<Number>=new EventEmitter(); //  rating与ratingChange必须这样写，在父组件中才能使用[(ngModal)]双向绑定

  public stars:boolean[];

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
