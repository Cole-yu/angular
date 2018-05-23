import { Component, OnInit } from '@angular/core';
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {mobileAsyncValidator, mobileValidator} from '../validtor/validator';
import {equalValidator} from '../validtor/validator';

@Component({
  selector: 'app-web-map',
  templateUrl: './web-map.component.html',
  styleUrls: ['./web-map.component.css']
})
export class WebMapComponent implements OnInit {

  test:FormControl=new FormControl();

  formModal:FormGroup;

  constructor(fb:FormBuilder) {

    // 使用FormBuilder创建响应式表单对象
    this.formModal=fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      dateRange:fb.group({
        from:[''],
        to:['']
      }),
      // phone:fb.group({
      //   mobilePhone:['18817934440',mobileValidator,mobileAsyncValidator]
      // }),
      // formGroupName="phone"
      mobilePhone:['',mobileValidator,mobileAsyncValidator],
      emails:fb.array([
        'a@a.com','b@b.com'
      ]),
      passwordGroup:fb.group({
        password:['',[Validators.required,Validators.minLength(6)]],
        repeatPassword:['']
        },{
        validator:equalValidator
      }),
    });

    // 基本方法创建响应式表单对象
    // this.formModal=new FormGroup({
    //   test:new FormControl('aaa'),
    //   dateRange:new FormGroup({
    //     from:new FormControl(),
    //     to:new FormControl()
    //   }),
    //   emails:new FormArray([
    //     new FormControl('a@a.com'),
    //     new FormControl('b@b.com')
    //   ])
    // });

  }

  ngOnInit() {

  }

  get DynamicFormControls() {
    return <FormArray>this.formModal.get('emails');
    // this.formModal.get('emails').controls
  }

  onSubmit() {
    const isValid:boolean=this.formModal.get('username').valid;
    console.log('username的表单校验结果:'+isValid);

    if(!isValid) {// 打印username的错误信息
      const errors:any=this.formModal.get('username').errors;
      console.log('username的表单校验错误的原因是'+JSON.stringify(errors));
    }

    if(this.formModal.valid) {
      console.log(this.formModal.value);
    }


  }

  addEmail() {
    const emails=this.formModal.get('emails') as FormArray;
    emails.push(new FormControl());
  }

}
