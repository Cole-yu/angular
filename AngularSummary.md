# Angular使用总结

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
	imports:[		//引入依赖模块
		BrowserModule, 		//浏览器模块
		FormsModule,		//处理表单模块
		HttpModule			//HTTP模块
	],
	providers:[				//声明模块中提供的服务
	],
	bootstrap:[AppComponent] 	//主组件启动
})
```

### 在项目中引入第三方依赖
1.  npm install jquery --save
	npm install bootstrap --save
2.  修改angular.json文件内容
	在projects字段下的
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

### 属性绑定


### 声明一个数组的数据类型
	public stars:boolean[]  			//stars是一个布尔类型的数组
	public products:product[]   		//products是一个product类型的数组
	private products:Array<product>     //等价于private products:product[]
	public foo:Array<any>				//任意类型的数组，public foo:any[]
	let bar:Array<AnyObject> = []



### 父组件调用子组件的方法:
	<app-alert #child></app-alert>
	<div class="btn btn-default" (click)="child.fnAlert(txt)"></div>

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
],
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

### 路由


### 依赖注入


### 组件间通讯
*	中间人模式
*	路由中传递参数
*   输入属性(子组件有一个输入属性的变量，父组件在用组件时，传入输入属性)
*	输出属性(共享属性)

### 父组件传递参数给子组件(输入属性,路由中传递参数)
### 子组件传递参数到父组件(输出属性)


### 父子组件通讯
*	父组件使用子组件的方法
*	子组件使用父组件的方法（输入输出属性）

### 生命周期钩子


### 表单处理及校验
*	模板式表单
*	响应式表单

### 与服务器通讯
*	http
*	WebSocket

### 构建与部属
	多环境支撑（开发,测试,生产）



