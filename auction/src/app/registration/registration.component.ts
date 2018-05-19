import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  mobileValid:boolean=true;
  mobileUntouched:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any,valid:boolean) {
    console.log(valid);
    console.log(value);
  }

  OnMobileInput(form:NgForm) {
    if(form) {
      this.mobileValid=form.form.get('username').valid;
      this.mobileUntouched=form.form.get('username').untouched;
    }
  }
}
