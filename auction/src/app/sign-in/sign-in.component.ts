import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() {
    Observable.from([1,2,3,4])
      .filter(e=>e%2==0)
      .map(e=>e*e)
      .subscribe(
        e=>console.log(e),
        err=>console.log(err),
        ()=>console.log('结束了')
      );
  }

  ngOnInit() {
  }

  getKey(e) {
    console.log(e.target.value);
  }

  getKeydown(value:string) {
    console.log(value);
  }

}
