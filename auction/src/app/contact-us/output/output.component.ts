import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  stockCode:string='Lenovo';

  price:number;

  @Output()
  lastPrice:EventEmitter<PriceQuote>=new EventEmitter();// 发射这个值

  @Output()
  buy:EventEmitter<PriceQuote>=new EventEmitter();

  constructor() {
    setInterval(()=> {
      const priceQuote:PriceQuote=new PriceQuote(this.stockCode,100*Math.random());
      this.price=priceQuote.lastPrice;
      this.lastPrice.emit(priceQuote);// 发射到组件外部的类型
    },1000);
  }

  ngOnInit() {
  }

  buyStock(event:PriceQuote) {
    this.buy.emit(new PriceQuote(this.stockCode,this.price));
  }
}

export class PriceQuote {
  constructor( public stockCode:string,public lastPrice:number) {

  }
}
