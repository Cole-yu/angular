import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // filterField为筛选字段，如可以检索产品的title字段，keyword为筛选关键字，list则为数据源
  transform(list: any[], filterField: string, keyword:string): any {
    if(!filterField||!keyword) {
      return list;
    }
    return list.filter(
      item=> {// item为对象数组中的单个对象，在产品数组中则为一条产品数据记录
        const filterValue=item[filterField];
        return filterValue.indexOf(keyword)>=0;
      });
  }
}
