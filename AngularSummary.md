# Angular使用总结


### webstorm中可以使用alt+enter组合键快速引入需要声明的模块

### AngularJS与Angular的差异比较
*	性能:双向绑定，脏值检测与单向绑定
*	路由：
*	作用域:scope
*	表单验证:有模板式表单.响应式表单
*	Javascript与Typescript
* 	MVC架构:
	```
	1.   用户在视图层点击操作,将信息传递到控制器;
	2.   控制器根据用户操作,实现业务逻辑,查询底层数据模型或者修改数据;
	3.   数据模型更新后,通过数据绑定机制更新视图;
	```

### Angular特性
*	angular命令行工具Angular/cli
* 	服务端渲染SSR,SEO优化
*   bootstarap
* 	MVVM模式:
	```
	M:控制调用哪些组件与服务
	V：视图层，用户的操作页面
	VM：组件树上激活的多个组件形成的一个视图模型
	```

### Angular与其他框架的对比
*  与React对比：
	```
	虚拟Dom
	FLUX架构
	服务端渲染SSR,SEO优化
	缺点：
	单纯的View层，需要与其他框架组合使用
	```
*  	与Vue对比
	```
	轻便
	虚拟Dom
	简单
	缺点：
	个人主导，社区与生态环境差
	不是服务端渲染，需要第三方库或服务来实现
	```

### Angular基本概念
*	组件component
*	服务service
*	指令directive
*	模块(一个塑料袋装了一堆组件、服务及指令，实现了某个特定功能的组织单元结构)
*	路由
*	管道（格式化数据）
*	验证器
*	装饰器(提供器）
*	输入输出属性

### 模块
```
@NgModule({
	declarations:[  //只能用来声明组件、指令、管道，不能包含服务
		AppComponent
	],
	imports:[				//引入依赖模块
		BrowserModule, 		//浏览器模块
		FormsModule,		//处理表单模块
		HttpModule//HTTP模块
	],
	providers:[				//声明模块中提供的服务
	],
	bootstrap:[AppComponent] 	//主组件启动
})
```

### 在项目中引入第三方依赖
1.  npm install jquery --save
	npm install bootstrap --save
2.  修改angular.json文件内容在projects字段下的
	```
	"styles":[
		"node_modules/bootstrap/dist/css/bootstrap.css"
	],
	"scripts":[
		"node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
	]
	```
3.  安装类型描述文件，让Typescript代码能识别Javascript文件   jquery.d.ts,bootstrap.d.ts
	npm install @types/jquery --save-dev
	npm install @types/bootstrap --save-dev


### 修改angualr项目的端口号
修改配置文件node_modules/angular-cli/lib/config/schema.json 
default值就是默认的端口:4200
```
	"serve": {  
	    "description": "Properties to be passed to the serve command",  
	    "type": "object",  
	    "properties": {  
	      "port": {  
	        "description": "The port the application will be served on",  
	        "type": "number",  
	        "default": 4200  
	      },  
	      "host": {  
	        "description": "The host the application will be served on",  
	        "type": "string",  
	        "default": "localhost"  
	      }  
	    }  
	  }  
	}  
```	

###  angular6中使用scss来作为样式，
*	创建项目时
	`ng new new_project_name --style=scss`
*	在已有项目要让组件使用scss
1.  在angular.json文件中的“projects”字段下改为
	```
	"schematics": {
        "@schematics/angular:component": {
          "styleext": "scss"
        }
    }
	```
2.  npm install node-scss --save-dev

### tsLint.json配置 
*	no-trailing-whitespace：false //允许代码后面有空格，包括换行
*	triple-equals：true //设成false可关闭必须"==="（三等号）的写法
*	在jslint.json中找到whitespace,把true改为false，取消tslint的空白检查
 	```
 	"whitespace": [
	      false,
	      "check-branch",
	      "check-decl",
	      "check-operator",
	      "check-separator",
	      "check-type"
	]
	```
*	在"no-inferrable-types"中添加"ignore-properties"，允许为类属性指定不可推出的类型注释，取消jslint检查时的数据类型推断
	```
	"no-inferrable-types": [
	      true,
	      "ignore-params",
	      "ignore-properties"
	]
	```
*	TSLint：should be quotemark
	统一使用单引号或双引号
*	TSLint：comment must start with a space
	注释时双反斜杠后面必须空一格再写文本   \\ comment


### ngx-bootstrap的UI组件介绍
1. npm install ngx-bootstrap –save
2. npm install bootstarap –save-dev
3. 在angular.json文件中添加bootstrap为全局样式
```
"styles": [
  "styles.css",
  "../node_modules/bootstrap/dist/css/bootstrap.css"
]
```
4. 根据官方文档中你需要使用什么样式就要在app.module.ts注入
```
import { AccordionModule,AlertModule,ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot()
  ]
```
[bootstrap]: https://valor-software.com/ngx-bootstrap/#/getting-started "官网链接"
官网链接：[bootstrap]

### 声明一个具有泛型的数组---*数据类型*
```
	public stars:boolean[]  			//stars是一个布尔类型的数组
	public products:product[]   		//products是一个product类型的数组
	private products:Array<product>     //等价于private products:product[]
	public foo:Array<any>				//任意类型的数组，public foo:any[]
	let bar:Array<AnyObject> = []
```

### 路由
* 	基本概念

| 名称  | 简介 |
|:----:|:----:|
|Routes|路由配置表,保存所有URL对应的展示组件单元，及在哪个RouterOutlet中展示|
|RouterOutlet|HTML模板中内容的占位符标记<router-outlet></router-outlet>|
|Router|运行时执行的路由对象(在控制器中使用)，调用router.navigate(['./product'])，router.navigateByUrl()指定导航到某个路由|
|RouterLink|HTML模板中使用的路由导航指令|
|ActivatedRoute|激活的路由对象，保存着当前路由的信息，路由地址、路由参数等;在控制器中实例化一个路由对象，从路由对象中获取指定信息|

```
	const route:Routes=[
		{path:"",component:productComponent}
	]
```
```
	routerLink的值是一个数组，可用来传递参数
	<a [routerLink]="['/']"></a> 		 /表示匹配此路由下的根路由路径
	<a [routerLink]="['/product']" [queryParams]="{id:1}"></a>  /表示匹配此路由的根路由"product"
	<a [routerLink]="['./product',1]"></a> /表示当前路由下的子路由"product"
```
*	重定向路由	
	`{path:'',redirectTo:'/home',pathMatch:'full'}`

*	子路由     
	```
	{path:'',component:'',children:[
		{path:'',component:}
	]
	```

*	辅助路由
	```
	<router-outlet></router-outlet>
	<router-outlet name='aux'></router-outlet>	
	```
***
	```
	{path:'home',component:'HomeComponent'} 				//显示在主路由中
	{path:'chat',component:'ChatComponent',outlets:'aux'}   // chat路径显示在aux的辅助插座中
	```
***
	```	
	<a [routerLink]="['/home',{outlets:{aux:'xxx'}}]"></a>  				//主插座显示home路径的组件，辅助插座下显示xxx路径的组件
	<a [routerLink]="[{outlets:{primary:'home',aux:'chat'}}]">开始聊天</a>   //该辅助路由被激活显示时，主路由必须导航到home路径
	<a [routerLink]="[{outlets:{aux:'chat'}}]">开始聊天</a>				    //辅助路由显示chat路径{path:'chat',component:'ChatComponent'}
	<a [routerLink]="[{outlets:{aux:null}}]">结束聊天</a>				    //辅助路由为空，不显示任何组件
	```
* 	路由守卫
	CanActivate,CanDeactivate,Resolve本质上均为接口,需要定义类来实现这些接口(某个类实现接口，必须编写该接口拥有的所有方法,然后再在模块中创建对象来使用，接口->类->实例)
1.  CanActivate[处理导航到某路由的情况]

2.  CanDeactivate[处理离开当前路由的情况]
	```
	CanDeactivate有一个泛型,指定需要保护的组件类型
	示例中：ProductComponent为CanDeactivate需要保护的组件名称,UnsaveGuard保护ProductComponent组件
	export class UnsaveGuard implements CanDeactivate<ProductComponent>{
		canDeactivate(component:ProductComponent){
			return window.confirm("您没有保存数据，是否确定离开？");	//return true;离开,return false;留在当前路由
		}
	}
	```
3.  Resolve[在路由激活之前获取到全部所需的数据,携带完整数据进入路由中]
	```
	在路由导航时，必须加载好Product组件所需要的全部数据后，才能进入到保护的组件中去
	使用目的：路由导航显示某组件时会向服务器端获取数据，需要一定的时间。防止在没加载完数据之前就进入组件中，出现组件没数据问题。保证组件信息完整
	export class ProductResolve implements Resolve<Product>{
		resolve(route:ActivateRouterSnapshot,state:RouterStateSnapshot){
			let productId:number = route.params['id'] 	//ActivatedRouteSnapshot.params['id']=this.ActivateRouter.snapshot.params['id']
			return ProductId;
		}		
	}
	{path:'product/:id',component:ProductComponent,children:[		
		],
		resolve:{
			product:ProductResolve
		}
	}
	```


#### 在路由时传递数据的方式

1.	在查询参数中传递数据

	```
    /product?id=1&name=yfx   =>  ActivatedRoute.queryParams[id]，从查询参数中获取数据
	```

2.  在路由路径中传递数据
	```
    {path:/product/:id}   => /product/1     =>  ActivatedRoute.Params[id],从url中获取数据
	```

3.  在路由配置中传递数据
	```
	{path:/product,component:ProductComponent,data:[{isProd:true}]}    => ActivatedRoute.data[0][isProd]
	```

####  参数快照与参数订阅(观察者模式)
	参数快照：this.productId=this.routeInfo.snapshot.params["id"];	//创建一次，保证不会自身组件路由到自身组件
	参数订阅：this.routeInfo.params.subscribe((params:Params)=>this.productId=params["id"]);  //订阅,监听事件


### 依赖注入
	控制反转，IOC容器（Inverse of Control）	
*	提供器(providers)：		//{provider:token,useClass:className}
	```
	providers:[ProductService]
	providers:[{provide:ProductService,useClass:ProductService}]  
	```
*	注入器(@Injectable)	//只有装备了@Injectable()的服务,才能将其他服务注入到自身;@Component,@Pipe装饰器中已经包含@Injectable
	```
	constructor(private productService:ProductService){
		...	
	}
	```

	等价于
	
	```
	constructor(private injector:Injector){
		this.productService=injector.get(ProdcudtService);
	}
	```

### 提供器的声明作用域
1.	声明在组件装饰器中，其作用域只限于当前组件中:
	```
	@component({
		selector: 'app-unit',
		templateUrl: './unit.component.html',
		styleUrls: ['./unit.component.css'],
		providers:[{provider:ProductService,useClass:ProductService}]
	})
	```
2.  声明在模块中，其作用范围为整个模块(推荐)
	```
	@NgModule({
		declarations:[],
		imports:[],
		providers:[ProductService]
	})
	export class AppModule{	
	}
	```

### 工厂函数提供器和值声明提供器
	在工厂函数提供器中依赖了值声明提供器
1.  函数方式实现工厂函数提供器
	```
	providers:[{
		provider:ProductService,
		useFactory:()=>{
			let logger=new LoggerService;			
			if(true){
				return new ProductService(logger);
			}
			else{
				return new AnotherProductService(logger);
			}
		}
	},LoggerService]
	```
2.  依赖注入方式实现工厂函数提供器，该提供器依赖其他服务和一个值声明提供器
	```
	providers:[{
		provider:ProductService,
		useFactory:(logger:LoggerService,IS_DEV)=>{	//工厂函数提供器,该工厂函数需要传入的形式参数,依赖LoggerService
			if(IS_DEV){
				return new ProductService(logger);
			}
			else{
				return new AnotherProductService(logger);
			}
		},
		deps:[LoggerService,"IS_DEV_ENV"]    	//工厂函数传入的实参，即依赖服务
	},LoggerService,{						 	//值声明提供器:可以传入一个值,也可以传入一个对象
		provider:"IS_DEV_ENV",useValue:false 	//provicer:"APP_CONFIG",useValue:{isDev:false}
	}]
	```

### 事件绑定
	<input type="text" (input)="onInputEvent($event)" >

### 属性绑定[]===插值表达式
*	Dom属性（js，python操作的API接口）angular通过dom的数据绑定机制来更新页面内容
---
* 	Html属性(标记语言)
1.  html属性绑定,前面添加*attr*    angular修改html的属性=>浏览器同步机制同步html元素与dom对象=>dom更新页面内容
	```
	<td [attr.colspan]="tablecolspan"></td>
	```
2.  css类绑定
	```
	<div [class]="someclass"></div>
	<div [class.special]="boolean"></div>
	<div [ngClass]="{aaa:true,bbb:false}"></div>		//<div [ngClass]='object'></div>   obeject={className:expression,className:expression}
	```
3.  样式绑定
	```
	<div [style.color]="isspecial?'red':'blue'"></div>
	<div [style.font-size.em]="isDev?3:1"></div>
	<div [ngStyle]="{'font-style':isspecial?'italic':'normal'}"></div>
	```
*	双向数据绑定	[(ngModal)]="",既可以输入修改又可以显示的元素

###  响应式编程(Rxjs)
*	观察者模式
1.  可观察对象Observable
	```
	var btn=document.querySelector('.button');
	Observable.fromEvent(btn,'click');//创建一个事件流,可以发射事件,抛出异常,通知结束
	```
2.  观察者Observer:
	```
	var subscription=Observable.from([1,2,3,4])
	.filter((e)=>e%2==0)
	.map(e=>e*e)
	.subscribe(
		>e=>console.log(e),			//观察者知道如何处理Observable发送的值
		>err=>console.log(err),
		>()=>console.log("流结束了")
	);
	```
3.  订阅Subscription	,表示一个可观察对象Id，用于取消注册,订阅
4.  操作符Operators:filter,map,from,debounceTime...


### 管道pipe
*	自定义管道命令:ng g pipe multiple
	
	```
	带有@Pipe({name:'multiple'})装饰器的Typescript类,这个类实现PipeTransform接口,该接口只有一个transform方法
	```

	```
	transform(value:number,arg?:number){
		if(!arg){
			arg=1;
		}
		return value\*arg;
	}
	```
*	async,异步流管道

### 向组件内传递参数
*	路由中传递参数
*	输入属性方式(具有父子关系,父组件传递参数给子组件,子组件中定义一个输入属性)
	

### 向组件外传递数据(输出属性)
*  	输出属性方式(具有父子关系,在子组件内定义发射事件，在父组件内监听事件)
	```
	@Output()    //@Output("priceChange"),这样可以将事件名称从lastPrice修改为priceChange
	lastPrice:EventEmit<PriceQuote>=new EventEmit();   PriceQuote向外发射事件的数据类型，lastPrice为事件名称,即输出属性
	this.lastPrice.emit(priceQutoe);			//发射自定义事件到外部
	<div  (lastPrice)="getPriceHandle($event)"></div>  //监听自定义的事件，执行相应的函数
	当符合输入属性rating，输出属性是ratingChange这个规则时,可以使用自定义的双向数据绑定语法[(rating)]=newRatingValue;否则使用事件监听的语法,(eventName)="doChange($event)"
	```

### 组件间通讯
*	中间人模式
*	路由中传递参数
*   输入属性(子组件有一个输入属性的变量，父组件在用组件时，传入输入属性)
*	输出属性(共享属性)

### 父组件调用子组件的方法:使用*模板引用变量*
*	在父组件的模板中使用
	```
	<app-alert #child></app-alert>
	<div class="btn btn-default" (click)="child.fnAlert(txt)"></div>
	```
*	在父组件的控制器中使用,需要依赖ViewChild装饰器
	```
	@ViewChild('child1')
	child1:ChildComponent;
	```


### 生命周期钩子
1.	constructor
2.	ngOnChanges(知识点:可变对象与不可变对象)
*	调用情况:
	```
	不可变属性发生改变且为输入属性 //str:string="foo";str="bar";字符串为不可变对象
	```
*	不会调用：
	```
	只有在输入属性发生改变时,才会被调用;可变属性发生改变时不会调用ngOnchanges,// user={name:"foo"};user.name="bar";//对象为可变对象
	```
3.  ngOnInit
4.  ngDoCheck(变更检测机制,用zeno.js实现,每次都是从根组件开始检测;实现时必须谨慎,代码必须高效、轻量级,否则很耗性能)
	两种策略(defalut策略和onPush策略)
*	defalut策略：更新检测整个组件树
*	onPush策略：只有输入属性发生变化时才会检测组件及其子组件
***
5.  ngAfterContentInit(投影内容渲染完成后)
*	投影机制
	```
	在父组件模板中(在投影内容中可以使用插值表达式传父组件属性):
	<app-child>
		<div class="header">父组件中要向子组件投影的"页头"部分内容{{user.name}}</div>
		<div class="footer">父组件中要向子组件投影的"页脚"部分内容{{user.age}}</div>
	</app-child>	
	在子组件模板中:
	<div>
		<ng-content select=".header"></ng-content>//在子组件中,显示父组件中的"页头"内容
		<ng-content select=".footer"></ng-content>//在子组件中,显示父组件中的"页脚"内容	
	</div>
	```
*	先进行父组件内容检测，再进行子组件的内容检测
*	顺序:父组件的投影内容初始化完毕->父组件的投影内容变更检测完毕->子组件的投影内容初始化完毕->子组件的投影内容变更检测完毕->父组件的视图内容初始化完毕(ngAfterViewInit)
6.  ngAfterContentChecked
***
7.  ngAfterViewInit(视图组装完毕后)
*	只会被调用一次
*	在视图初始化组装完毕后才执行ngAfterViewInit，此时视图已经组装完成
*	在该ngAfterViewInit函数下，变更绑定的视图属性会报错(因为视图已经组装完成);解决方法:需要使用setTimeout函数,在下一个运行周期中执行
*	先组装子视图，再组装父视图
*	顺序：子组件的视图初始化完毕->子组件的视图变更检测完毕->父组件的视图初始化完毕->父组件的视图变更检测完毕
8.  ngAfterViewChecked
	组件的视图变更检测
9.  ngOnDestroy(在路由导航离开时)
	用来清除资源：如取消订阅，关闭计时器
***	
>	数组的reduce方法,接收一个匿名回调函数,[一个初始值]
>	array.reduce((sum,comment)=>sum+comment.rating,0);


### 表单处理及校验
*	普通html表单
	```
	<form action="/regist" method="post">		
	</form>
	```
*	模板式表单(FormsModule模块)
三个html模板指令:NgForm,NgModel,NgModelGroup
1.	ngForm
	```
	angulr会接管任何带有NgForm标记的html元素，若不需要angualr接管form,可以在表单中加ngNoForm	
	<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">		
	</form>	
	ngForm会拦截标准的html表单提交事件,<button type="submit"></button>	
	```
2.	ngModel
	```
	添加了ngModel标记的元素,同时必须指定name属性    //<div>用户名:<input type="text" ngModel name="username"></div>
	```
3.	ngModelGroup
	```
	<div ngMoelGroup="passwordsGroup">
		<div>密码:<input type="password" ngModel name="password"></div>
		<div>确认密码:<input type="password" ngModel name="pconfirm"></div>
	</div>
	```
*	响应式表单(ReactiveFormsModule模块)
三个类名,在控制器中使用，用于实例化一个对象
1.	FormControl类

		```
		username:FormControl=new FormControl("yfx");
		```

2.	FormGroup类

		```
		formModel:FormGroup=new FormGroup({
			form:new FormControl,
			to:new FormControl
		});
		```

3.	FormArray类

		```
		emails:FormArray=new FormArray([
			new FormControl("a@a.com"),
			new FormControl("b@b.com"),
		]);
		```

***

| 类名 | 指令 |   |
|:---:|:---:|:---:|
|FormGroup|formGroup|formGroupName|
|FormControl|formControl|formControlName|
|FormArrar|             |formArrayName|

	```
	formGroup,formGroupName,formControl,formControlName,formArrayName是在html模板中使用
	formGroup,formControl则使用的是属性绑定语法
	<form [formGroup]="formModel">
		<input type="text" formControlName="username">
	</form>
	在formGroup范围内，才能使用formControlName,formGroupName,formArrayName,不能使用formControl属性绑定语法
	其中formGroupName,formControlName,formArrayName用于连接html模板与控制器中的表单实例对象,值为字符串;不需要使用属性绑定语法
	<div formGroupName="dateRange>
		<input type="date" formControlName="from">
		<input type="date" formControlName="to">
	</div>
	<ul formArrayName="emails">
		<li *ngFor="let email of this.formModel.get('emails').controls">
			<input type="text">
		</li>
	</ul>
	```
	

*	表单验证



### 与服务器通讯
*	http
*	WebSocket

### 构建与部属
	多环境支撑（开发,测试,生产）



