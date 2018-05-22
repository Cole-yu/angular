import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {

  searchEvent:EventEmitter<ProductSearchParams>=new EventEmitter();// 数据类型是ProductSearchParams,事件名称是searchEvent,定义一个流，中间人

  // 方法一:参数写死在服务上，测试是否能发送数据
  // private data:any={
  //   'title':'第二个',
  //   'price':3,
  //   'category':'-1'
  // };
  // private params=new HttpParams({fromObject:this.data});

  // private products:Product[]=[
  //   new Product(1,'第一个商品',1.99,3.5,'这是第一个商品，慕课网实例angular',['电子产品','硬件设备']),
  //   new Product(2,'第二个商品',2.99,2.5,'这是第二个商品，慕课网实例angular',['图书']),
  //   new Product(3,'第三个商品',3.99,4.5,'这是第三个商品，慕课网实例angular',['电子产品','硬件设备']),
  //   new Product(4,'第四个商品',4.99,1.5,'这是第四个商品，慕课网实例angular',['电子产品']),
  //   new Product(5,'第五个商品',5.99,3.5,'这是第五个商品，慕课网实例angular',['电子产品']),
  //   new Product(6,'第六个商品',6.99,2.5,'这是第六个商品，慕课网实例angular',['图书']),
  // ];


  // private comments:Comment[]=[
  //   new Comment(1,1,'2018-05-15 20:54:38','张三',3,'东西不错'),
  //   new Comment(2,1,'2018-05-15 20:54:38','李四',4,'东西很不错'),
  //   new Comment(3,1,'2018-05-15 20:54:38','王五',2,'东西还行'),
  //   new Comment(4,2,'2018-05-15 20:54:38','赵六',2.5,'东西也不错'),
  //   new Comment(5,3,'2018-05-15 20:54:38','周七',5,'东西真的不错'),
  //   new Comment(6,2,'2018-05-15 20:54:38','喻八',3,'东西还可以'),
  // ];

  constructor(private http:HttpClient) {
  }

  // 获取商品数组
  // getProducts():Product[] {
  //   this.products.push(new Product(7,'第七个商品',7.99,2.5,'这是第七个商品，慕课网实例angular',['图书']));
  //   return this.products;
  // }
  getProducts():Observable<any> {
    // this.products.push(new Product(7,'第七个商品',7.99,2.5,'这是第七个商品，慕课网实例angular',['图书']));
    return this.http.get('/api/products');
  }

  // 获取单个商品
  getProduct(id:number):Observable<any> {
    // return this.products.find(product=>product.id == id);// TSLinty要求==改为===，但改为===后，在unit组件中无法获取获取到数据，因为数据类型原型不一致，string!==number
    return this.http.get('/api/product/'+id);
  }

  // 获取商品评论
  getCommentForProduct(id:number):Observable<any> {
    // return this.comments.filter((comment:Comment)=>comment.productId == id);
    return this.http.get('/api/product/'+id+'/comments');
  }

  getAllCategories(): string[] {
      return ['电子产品','硬件设备','图书'];
  }


  // 教学视频中使用的是http模块，此模块已被废弃，要使用HttpClient模块，因此URLSearchParams也要改成HttpParams,
  search(params:ProductSearchParams):Observable<any> {
    // 方法一:参数发送测试使用
    // return this.http.get('/api/products',{params:this.params});

    return this.http.get('/api/products',{params:this.encodeParams(params)});
  }

  private encodeParams(params:any) {

    // 方法二:使用Http对象,而不是HttpClient对象,创建URLSearchParams对象，可以使用reduce一个个添加参数
    // let result:URLSearchParams;
    // result=Object.keys(params)
    //   .filter(key=>params[key])
    //   .reduce((sum:URLSearchParams,key:string)=> {
    //     sum.append(key,params[key]);
    //     return sum;
    //   },new URLSearchParams());
    // return result;

    // 方法三：换种方式把参数写死在服务上，测试HttpParams对象是否只能进行链式调用
    // 成功添加参数字段
    // return new HttpParams()
    //         .append('name','yfx')
    //         .append('age','37');


     // 无法使用reduce方法，因为HttpParams必须链式调用
     /*return Object.keys(params)     // this.formModal.value
      .filter(key=>params[key])// 筛选出有值的参数
      .reduce((sum:HttpParams,key:string)=> {
        // sum.append(key,params[key])
           sum.set(key,params[key]);
        return sum;
      },new HttpParams());*/


     // 方法四:params为查询按钮点击时传入的this.formModal.value,包含title,price,category,参考ProductSearchParams类
     // HttpParams无法使用循环遍历，因为必须直接在创建对象后调用.set方法进行链式操作。new HttpParams.set().set().set(),
     if(params['title']&&params['price']) {// title与price的值均存在
        return  new HttpParams()
                    .set('title',params['title'])
                    .set('price',params['price'])
                    .set('category',params['category']);
     }
    if(params['title']&&!params['price']) {// title存在，price不存在
      return new HttpParams()
                .set('title',params['title'])
                .set('category',params['category']);

    }
    if(!params['title']&&params['price']) {// title不存在，price存在
       return new HttpParams()
                .set('price',params['price'])
                .set('category',params['category']);

    }
    if(!params['title']&&!params['price']) {
      return new HttpParams()
                .set('category',params['category']);
    }
  }
}


export class Product {
  constructor(
    public id:number,
    public title:string,
    public  price:number,
    public  rating:number,
    public desc:string,
    public categories:Array<string>
  ) {
  }
}

export class Comment {
  constructor(public  id:number,
              public productId:number,
              public timestamp:string,
              public user:string,
              public rating:number,
              public content:string ) {
  }
}

export class  ProductSearchParams {
  constructor(public title:string,
               public price:number,
               public category:string) {
  }

}

