// 表单检验器
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';


// 表单校验方法的代码模板
// xxxxx(control:AbstractControl):{[key:string]:any} {
//   return null;
// }

// 手机号验证
export function mobileValidator(control:FormControl):any {
  const myreg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;// 正则表达式
  const isValid=myreg.test(control.value);
  console.log('mobile的校验结果是:'+isValid);
  return isValid?null:{mobile:true};
}

// 密码与确认密码相等校验器
export function equalValidator(group:FormGroup):any {
  const password:FormControl=group.get('password') as FormControl;
  const repeatPassword:FormControl=group.get('repeatPassword') as FormControl;
  const isValid:boolean=(password.value === repeatPassword.value);
  console.log('密码相等校验结果是:'+isValid);
  return isValid?null:{equal:{desc:'两次输入的密码不一致！'}};
}

// 手机号异步校验器
export function mobileAsyncValidator(control:FormControl):any {
  const myreg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;// 正则表达式
  const isValid=myreg.test(control.value);
  console.log('mobile的校验结果是:'+isValid);
  return Observable.of(isValid?null:{mobile:true}).delay(3000);// 异步校验，结果以流的形式返回
}
