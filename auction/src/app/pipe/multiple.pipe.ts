import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // 管道装饰器
  name: 'multiple'  // 管道器名称
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, args?: number): any {   // value是原始值，args是可选参数，return 经过管道操作后的结果
    if(!args) {// 如果参数不存在，则为1
      args=1;
    }
    return value*args;
  }
}
