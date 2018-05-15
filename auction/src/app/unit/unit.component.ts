import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';   // 路由功能

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  public  unitTitle: string;
  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>this.unitTitle=params['title']);   // 参数订阅
  }

}
