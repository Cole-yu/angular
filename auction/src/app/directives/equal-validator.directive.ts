import { Directive } from '@angular/core';
import {equalValidator} from '../validtor/validator';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appEqual]',
  providers:[{provide:NG_VALIDATORS,useValue:equalValidator,multi:true}]
})
export class EqualValidatorDirective {

  constructor() { }

}
