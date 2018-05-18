import { Component, OnInit } from '@angular/core';
import {PriceQuote} from './output/output.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

  size:number=7;

  priceQuote1:PriceQuote=new PriceQuote('',0);

  priceQuote:PriceQuote=new PriceQuote('',0);

  constructor() { }

  ngOnInit() {
  }

  priceQuoteHandler1(event:PriceQuote) {// 传给父组件的股票信息
    this.priceQuote1=event;
  }

  priceQuoteHandler(event:PriceQuote) {// 传给下单组件的股票信息
    this.priceQuote=event;
  }

}
