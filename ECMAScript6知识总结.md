# 	ECMA2015(ES6)语法
	参考链接:http://es6.ruanyifeng.com

###	Babel转码器,将ES6代码转为ES5代码
	Babel的配置文件是.babelrc,存放在项目的根目录下,该文件用来设置转码规则和插件，基本格式如下。
	{
		"presets": [						//presets字段设定转码规则
		  "es2015"							//ES6语法的代码
		  "latest",
		  "react",
		  "stage-2"
		],
		"plugins": []
	}
*  	babel-cli工具,用于命令行转码
	```
	可以将babel-cli安装在项目之中。
	npm install --save-dev babel-cli       //安装依赖包
	```
*	babel-node命令
	```
	babel-cli工具自带一个babel-node命令,可以在控制台中进入支持ES6语法的REPL环境,可以直接运行ES6代码
	```
* 	babel-core
	如果某些代码需要调用Babel的API进行转码,就要使用babel-core模块
	npm install babel-core --save
	.transform('babelify', {
        presets: ['es2015'],   //生成ES2015语法规则的代码
        extensions: ['.ts']
    })


### ESLint:用于静态检查代码的语法和风格

### Mocha:是一个测试框架,用于单元测试
	如果需要执行使用ES6语法的测试脚本,可以修改package.json的scripts.test。
	"scripts": {
	  "test": "mocha --ui qunit --compilers js:babel-core/register"   //--compilers参数指定脚本的转码器,规定后缀名为js的文件,都需要使用babel-core/register先转码
	}

###	\_proto_属性	
	一个实例对象的属性,指向创建这个实例的构造函数的原型;
	obj.constructor.prototype === obj._proto_ ;	

### 原始数据类型Symbol(第七种数据类型)
	ES6 引入了一种新的原始数据类型Symbol,表示独一无二的值;
	原有的六种数据类型基础：undefined、null、布尔值(Boolean)、字符串(String)、数值(Number)、对象(Object);
*	注意事项：
1.	注意，Symbol函数前不能使用new命令,否则会报错
2.	Symbol函数的参数只是表示对当前Symbol值的描述,因此相同参数的Symbol函数的返回值是不相等的。
	```
	// 没有参数的情况
	let s1 = Symbol();
	let s2 = Symbol();
	s1 === s2 												// false
	// 有参数的情况
	let s1 = Symbol('foo');
	let s2 = Symbol('foo');
	s1 === s2 												// false
	```

###	Object.defineProperty(obj, property, descriptor)
*	作用:该方法会直接在一个对象上定义一个新属性,或者修改一个对象的现有属性,并返回这个对象。
*	该方法接受三个参数,而且都是必填的:
	```	
	第一个参数:目标对象;
	第二个参数:需要定义的属性或方法的名字;
	第三个参数:目标属性所拥有的特性(descriptor:configurable,enumerable,value,writable)
	```
*   使用示例:
	```  
	var a= {};
    Object.defineProperty(a,"b",{
      value:123
    });
    console.log(a.b); 				//123
	```

### 属性描述符:
	学习链接:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

|| configurable | enumerable | value | writable | get | set |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|数据描述符|Yes|Yes|Yes|Yes|No|No|
|存取描述符|Yes|Yes|No|No|Yes|Yes|

*	如果一个描述符不具有value,writable,get和set任意一个关键字,那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字,将会产生一个异常。

### 数据描述符
	configurable,enumerable,value,writable

### 存取描述符
	configurable,enumerable,get,set	

###  新增let和const,块级作用域

###  结构赋值

###  ...展开剩余运算符
*	将数组展开，分别获取数组的每个元素
	```
	var a=[1,2];
	var b=[3,4];
	var c=[5,6];
	var d=[...a,...b,...c];
	console.log(d);   //[1,2,3,4,5,6]
	```
*	将字符串展开
	```
	var d=[...'hello'];
	console.log(d);    //['h','e','l','l','o']
	```

### find方法:找出第一个符合条件的数组成员
	arr.find(function(value,index,arr){			//vlaue为每个元素,idnex为当前索引,arr为整个数组
		//doSomething();						//找出第一个返回值为true的成员,如果没有符合条件的成员,则返回undefined
	});
	方法示例:
	[1,2,-5,10].find(function(value){
			return value<0; 					//-5
	});

### filter方法:过滤
	[1,2,3,4].filter(e=>e%2==0);	//2,4

### entries(),keys(),values()
	entries()	//返回键值对
	keys()		//返回主键名
	values()	//返回值

### includes()  返回一个布尔值,表示某个数组是否包含给定的值
	[1,2,3].includes(2)    //true

### Set数据结构
	set类似于数组,但是成员的值都是唯一的,不能重复	
	add方法可以向Set结构添加成员,且不会添加重复的值
	const s = new Set();   //实例化一个Set对象
	[2,3,5,4,5,2,2].forEach(x => s.add(x));
	for (let i of s) {
		console.log(i);		//2,3,5,4  		
	}

	const set = new Set([1,2,3,4,4]);
	[...set]   //1,2,3,4
	set.size;  //4

*	set对象的方法:
	```
	add(value) 		//添加某个值,返回Set结构本身
	delete(value) 	//删除某个值,返回一个布尔值,表示删除是否成功
	has(value)      //返回一个布尔值,表示该值是否为Set的成员
	clear()         //清除所有成员,没有返回值
	```
*	遍历成员
	```	
	set对象可以通过keys(),values(),entries(),forEach()方法遍历每个成员
	由于Set结构没有键名,只有键值(或者说键名和键值是同一个值),所以keys方法和values方法返回的结果完全一样。	
	let set = new Set(['red','green','blue']);
	for (let item of set.entries()) {
  		console.log(item);
	}
	// ["red", "red"]
	// ["green", "green"]
	// ["blue", "blue"]
	```
*	使用set可以很容易实现并集(Union),交集(Intersect)和差集(Difference)
	```
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);
	// 并集
	let union = new Set([...a, ...b]);  //因为set成员不能重复
	// Set {1, 2, 3, 4}
	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	// set {2, 3}
	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	// Set {1}
	```

###	WeakSet与Set类似,但是成员必须是对象
	WeakSet对象同样具有add(),delete(),has()方法
	试图获取WeakSet对象的size属性和forEach方法会报错

### Map数据结构,与JSON类似的键值对出现的数据结构,可以通过set,get修改或读取数据
	JavaScript的对象(Object),本质上是键值对的集合(Hash结构),传统上只能用字符串当作键,为了解决这个问题,ES6提供了Map数据结构。
	它类似于对象,也是键值对的集合,但是"键"的范围不限于字符串,各种类型的值(包括对象)都可以当作键。
	也就是说,Object结构提供了"字符串—值"的对应,Map结构提供了"值—值"的对应,是一种更完善的Hash结构实现。如果你需要"键值对"的数据结构,Map比Object更合适。	
*	Map可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组;
	```
	同样具有get(key),set(key,value),has(key),delete(key),clear()
	const map = new Map([
	  ['name', '张三'],
	  ['title', 'Author']
	]);
	map.size 			// 2
	map.has('name') 	// true
	map.get('name') 	// "张三"
	map.has('title') 	// true
	map.get('title') 	// "Author"
	```
*	size属性:返回Map结构的成员总数
	```	
	set方法设置键名key对应的键值为value,然后返回整个Map结构。如果key已经有值,则键值会被更新,否则生成新键
	```
*	Map结构转为数组结构,比较快速的方法是使用扩展运算符(...)
	```
	const map = new Map([
	  [1, 'one'],
	  [2, 'two'],
	  [3, 'three'],
	]);
	[...map.keys()] 							// [1, 2, 3]
	[...map.values()] 							// ['one', 'two', 'three']
	[...map.entries()] 							// [[1,'one'], [2, 'two'], [3, 'three']]
	[...map] 									// [[1,'one'], [2, 'two'], [3, 'three']]
	```

* 	Map与数组,对象,JSON之间的相互转化	
1.  Map转数组
	```
	const myMap = new Map([[name,'yfx'],['age':25]]);
	[...myMap];
	```
2.  数组转Map
	```
	new Map([[name,'yfx'],['age':25]]);
	```
3.  Map转对象
	```
	通过遍历Map对象成员的键值对,obj[key] = value实现
	```
4.  对象转Map
	```
	通过遍历对象的key,map.set(key,obj[k])实现
	```
5.  Map转JSON	
	```
	strMapToObj(Map对象);  //把Map对象转化为JSON对象
	JSON.stringify()       //再把JSON对象转化为JSON字符串
	```
6.  jSON转Map
	```	
	new Map(JSON对象);  通过JSON.parse将json字符串转化为JSON对象后在作为Map参数传入	
	```

### Proxy可以理解为在目标对象之前架设一层"拦截",外界对该对象的访问,都必须先通过这层拦截,因此提供了一种机制,可以对外界的访问进行过滤和改写	
	new Proxy(targer,handler)  				//target参数表示所要拦截的目标对象,handler参数也是一个对象，用来定制拦截行为。

*	代码示例:
	```
	var proxy = new Proxy({}, {				//被代理的目标对象{},第二个参数为配置对象,提供一个对应的处理函数,该函数将拦截对应的操作
	  get: function(target, property) {     //配置对象有一个get方法,用来拦截对目标对象属性的访问请求
	    return 35;
	  }
	});
	proxy.name     //35
	proxy.foo      //35
	```

####	常见的拦截行为
*	get(target, propKey, receiver)          	//拦截对象属性的读取,当被代理对象的属性被读取时,执行get后面的函数(以下同理)
*	set(target, propKey, value, receiver)		//拦截对象属性的设置
*	has(target, propKey)                    	//拦截propKey in proxy的遍历操作,返回一个布尔值
*   deleteProperty(target, propKey)         	//拦截delete proxy[propKey]的操作,返回一个布尔值
*	apply(target, object, args)             	//拦截Proxy实例作为函数调用的操作
*	defineProperty(target, propKey, propDesc)	//拦截属性描述符定义


### WeakMap与Map类似,但是键名必须为对象

### forEach,for...in与for...of遍历可迭代对象
	forEach(function(value,index,arr){   //arr:当前元素所属的数组对象
		//doSomething()
	})
	for...of... //遍历成员==获取键值
	for...in... //遍历索引==获取键名

### Iterator(遍历器)
	next()方法返回包含value和done两个属性的对象{value:'foo'，done:boolean}    	//false表示没有结束,true表示结束
*	Symbol.iterator属性:
	```
	返回遍历器对象iterator,调用该对象的next方法,在返回一个值的同时,自动将内部指针移到下一个实例
	let arr = ['a', 'b', 'c'];
	let iter = arr[Symbol.iterator]();
	iter.next() // { value: 'a', done: false }
	iter.next() // { value: 'b', done: false }
	iter.next() // { value: 'c', done: false }
	iter.next() // { value: undefined, done: true }
	```

### Generator
	Generator 函数是一个普通函数,但是有两个特征:
	一是:function关键字与函数名之间有一个星号;
	二是:函数体内部使用yield表达式,定义不同的内部状态;
	function* helloWorldGenerator() {
	  yield 'hello';
	  yield 'world';
	  return 'ending';
	}
	var hw = helloWorldGenerator();
	输出结果：
	hw.next() 	// { value: 'hello', done: false }
	hw.next() 	// { value: 'world', done: false }
	hw.next() 	// { value: 'ending', done: true }
	hw.next() 	// { value: undefined, done: true }	
*	yield表达式
	```
	Generator函数返回的遍历器对象,只有调用next方法才会遍历下一个内部状态,所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
	遍历器对象的next方法的运行逻辑如下:
	（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
	（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
	（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
	（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
	```

### Promise对象
	相当于一个容器,里面保存着某个未来才会结束的事件(通常是一个异步操作)的结果
	pending(进行中),fulfilled(已成功),rejected(已失败);
	有了Promise对象,就可以将异步操作以同步操作的流程表达出来,避免了层层嵌套的回调函数。
	let promise=new Pormise;
	promise.then(function(value) { 				//cb
	    // success
	})
	.catch(function(err) {
	    // error
	})
	.finally(function(){
		//finally
	});
*	Promise实例生成以后,可以用then方法分别指定resolved状态和rejected状态的回调函数
	```
	promise.then(function(value) {
	  // success
	}, function(error) {
	  // failure
	});
	then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用,第二个回调函数是Promise对象的状态变为rejected时调用。其中,第二个函数是可选的,不一定要提供。这两个函数都接受Promise对象传出的值作为参数。
	```

### Promise对象的方法:	
*	Promise.all()方法
	```
	Promise.all方法用于将多个Promise实例,包装成一个新的Promise实例
	Promise.all方法接受一个数组作为参数,p1、p2、p3都是Promise实例,如果不是,就会先调用下面讲到的Promise.resolve方法,将参数转为Promise实例,再进一步处理。
	const p = Promise.all([p1, p2, p3]);
	p的状态由p1、p2、p3决定,分成两种情况:
	（1）只有p1、p2、p3的状态都变成fulfilled,p的状态才会变成fulfilled,此时p1、p2、p3的返回值组成一个数组,传递给p的回调函数
	（2）只要p1、p2、p3之中有一个被rejected,p的状态就变成rejected,此时第一个被reject的实例的返回值,会传递给p的回调函数
	```
*	Promise.race()方法
	```
	Promise.race方法同样是将多个Promise实例,包装成一个新的Promise实例
	const p = Promise.race([p1, p2, p3]);
	上面代码中,只要p1、p2、p3之中有一个实例率先改变状态,p的状态就跟着改变	
	const promise = Promise.race([
	  fetch('/resource'),										//向服务器获取资源,只有5秒时间,否则后面函数结果会被race方法捕获
	  new Promise(function (resolve, reject) {					
	    setTimeout(() => reject(new Error('请求超时!')), 5000)   //5秒钟后状态改为reject
	  })
	]);
	promise.then(vlaue=>console.log(value))
		   .catch(err=>console.error(err));
	上面代码中,如果5秒之内fetch方法无法返回结果,promise对象的状态就会变为rejected,从而触发catch方法指定的回调函数。
	```
*   Promise.resolve()方法
	```
	将现有对象转为Promise对象
	Promise.resolve('foo')
	// 等价于
	new Promise(resolve => resolve('foo'))
	```
*	Promise.reject()方法
	```
	let promise = Promise.reject('出错了');
	// 等同于
	let promise = new Promise((resolve, reject) => reject('出错了'));
	promise.then(function(){
		//doSomething();
	})
	.catch(err=>console.log(err));											//出错了
	```	
* 	Promise.try()方法
	```
	作用：让同步函数同步执行,异步函数异步执行,并且让它们具有统一的API
	第一种方法:在立即执行函数中添加async函数
	const f = () => console.log('now');
	(async () => f())();  
	console.log('next');
	// now
	// next
	第二种方法:
	const f = () => console.log('now');
	Promise.try(f);
	console.log('next');
	// now
	// next
	```

### fetch API:获取资源的接口
	// 通过fetch获取百度的错误提示页面
	fetch('https://www.baidu.com/search/error.html', {
	    method: 'POST',
	    headers: new Headers({
	      'Content-Type': 'application/x-www-form-urlencoded', 				//指定提交方式为表单提交
		  'Accept': 'application/json'										// 通过头指定,获取的数据类型是JSON
	    }),
	    body: new URLSearchParams([["foo", 1],["bar", 2]]).toString()
	})
	.then((res)=>{
	    return res.text()       //获取的是JSON数据时:可以使用res.json()返回一个Promise对象,将对象解析成JSON对象
	})
	.then((res)=>{
	    console.log(res)
	})	

### async函数:用于解决Promise产生的回调地狱问题
	async函数就是Generator函数的语法糖,对Generator函数做了如下四点改进:
*	内置执行器
* 	更直白的语义
	```
	async替换星号(*),await替换yield
	async表示函数里有异步操作,await表示紧跟在后面的表达式需要等待结果
	```
*   适用性更广
	```
	yield只能是Thunk函数或Promise对象,而async函数后面可以是Promise对象和原始类型的值(数值、字符串和布尔值,但这时等同于同步操作)
	```
*   返回值是Promise对象
	```
	async函数的返回结果已经被new Promise.resolve()处理成为Promise对象可以用then方法指定下一步的操作;
	sync函数完全可以看作多个异步操作,包装成的一个Promise对象,而await命令就是内部then命令的语法糖。
	```

### async函数的实现原理,就是将Generator函数和自动执行器,包装在一个函数里

	异步遍历器的最大的语法特点,就是调用遍历器的next方法,返回的是一个Promise对象。	

### await
*	await命令后面是一个Promise对象。如果不是,会被转成一个立即resolve的Promise对象。
*	只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
	```
	async function f() {
		await Promise.reject('出错了');
		await Promise.resolve('hello world'); 				//不会执行		   		
	}
	```
*	如果await后面的异步操作出错,那么等同于async函数返回的Promise对象被reject
*	注意事项
	```
	第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
	async function myFunction() {
	  try {
	    await somethingThatReturnsAPromise();
	  } catch (err) {							//处理await失败时候的情况
	    console.log(err);
	  }
	}
	// 另一种写法
	async function myFunction() {
	  await somethingThatReturnsAPromise()      
	  .catch(function (err) {					//使用then,catch捕获错误
	    console.log(err);
	  });
	}
	第二点，多个await命令后面的异步操作,如果不存在继发关系,最好让它们同时触发。
	let foo = await getFoo();
	let bar = await getBar();
	改写成：
	let [foo, bar] = await Promise.all([getFoo(), getBar()]);
	第三点(很重要),await命令只能用在async函数之中,如果用在普通函数,就会报错。
	```	

### Decorator(装饰器)
	修饰器是一个对类进行处理的函数,用来修改类的行为	
	@bar(true)    					//用bar装饰器装饰foo类,并传入一个参数
	class foo {
	  //doSomething();
	}
	function bar(bool) {    		//定义一个装饰器bar,foo类会被作为target的值传入进函数中
	   return function(){
	   	target.readOnly = bool;
	   }
	}
	console.log(foo.readOnly);               // true

*	修饰器不仅可以修饰类,还可以修饰类的属性和方法
	```
	class Person {
	  @readonly
	  name() { return `${this.first} ${this.last}` }
	}
	function readonly(target, name, descriptor){
	  // descriptor对象原来的值如下:       数据属性描述符：value,enumerable,configurable,writable
	  // {
	  //   value: specifiedFunction,
	  //   enumerable: false,
	  //   configurable: true,
	  //   writable: true
	  // };
	  descriptor.writable = false;
	  return descriptor;
	}
	readonly(Person.prototype, 'name', descriptor);//意思是修改Person类的原型的name属性的属性描述符
	```

### Class
	static		//只能被类所使用,不能被实例所继承
	public      //公开所有属性和方法	
	protected	//只能被类和子类使用
*	特别注意：javascript中不存在privarte私有属性修饰符,但是typescript中有
	```
	private 	//只能被当前类所使用,子类和对象均不可使用
	```
*	Class静态方法：
	```
	如果在一个方法前,加上static关键字,就表示该方法不会被实例继承,而是直接通过类来调用。
	```
*	constructor方法是类的默认方法,通过new命令生成对象实例时,自动调用该方法。一个类必须有constructor方法,如果没有显式定义,一个空的constructor方法会被默认添加。
* 	类中不存在变量提升
*	Class内部调用new.target,返回当前Class。需要注意的是,子类继承父类时,new.target会返回子类。
	```
	利用这个特点,可以写出不能独立使用、必须继承后才能使用的类。
	class Shape {
	  constructor() {
	    if (new.target === Shape) {
	      throw new Error('本类不能实例化');
	    }
	  }
	}
	```

### ECMAScript Modules

### defer
	下载完成后,文件要在所有元素解析完成之后执行js代码

### async
	下载完成后,立即异步执行js代码


	



