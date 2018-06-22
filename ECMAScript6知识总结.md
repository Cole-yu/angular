# 	ECMA2015(ES6)语法
	参考链接:http://es6.ruanyifeng.com

###  新增let和const,块级作用域

###  结构赋值

###  ...展开剩余运算符
	将数组展开，分别获取数组的每个元素
	var a=[1,2];
	var b=[3,4];
	var c=[5,6];
	var d=[...a,...b,...c];
	console.log(d);   //[1,2,3,4,5,6]
	将字符串展开
	var d=[...'hello'];
	console.log(d);    //['h','e','l','l','o']


### find方法:找出第一个符合条件的数组成员
	arr.find(function(value,index,arr){   		//vlaue为每个元素,idnex为当前索引,arr为整个数组
		//doSomething()   						//找出第一个返回值为true的成员,如果没有符合条件的成员,则返回undefined
	});
	方法示例:
	[1,2,-5,10].find(function(value){
			return value<0; //-5
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
	[...map.keys()]
	// [1, 2, 3]
	[...map.values()]
	// ['one', 'two', 'three']
	[...map.entries()]
	// [[1,'one'], [2, 'two'], [3, 'three']]
	[...map]
	// [[1,'one'], [2, 'two'], [3, 'three']]
	```

* 	Map与数组,对象,JSON之间的相互转化
	```
1.  Map转数组
	const myMap = new Map([[name,'yfx'],['age':25]]);
	[...myMap];
2.  数组转Map
	new Map([[name,'yfx'],['age':25]]);
3.  Map转对象
	通过遍历Map对象成员的键值对,obj[key] = value实现
4.  对象转Map
	通过遍历对象的key,map.set(key,obj[k])实现
5.  Map转JSON	
	strMapToObj(Map对象);  //把Map对象转化为JSON对象
	JSON.stringify()       //再把JSON对象转化为JSON字符串
6.  jSON转Map	
	new Map(JSON对象);  通过JSON.parse将json字符串转化为JSON对象后在作为Map参数传入
	```

### WeakMap与Map类似,但是键名必须为对象

### forEach,for...in与for...of遍历可迭代对象
	forEach(function(value,index,arr){   //arr:当前元素所属的数组对象
		//doSomething()
	})
	for...of... //遍历成员==获取键值
	for...in... //遍历索引==获取键名

### Iterator(遍历器)
	next()方法返回包含value和done两个属性的对象{value:'foo'，done:boolean}//false表示没有结束,true表示结束
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
	let promise=new Pormise;
	promise.then(function(data) { //cb
	    // success
	})
	.catch(function(err) {
	    // error
	})
	.finally(function(){
		//finally
	});
* 	Promise对象的方法:
	```
	all()方法,race()方法,Promise.resolve(),Promise.reject()
	const promise = Promise.reject('出错了');
	// 等同于
	let promise = new Promise((resolve, reject) => reject('出错了'));
	promise.then(function(){
		//doSomething();
	})
	.catch(err=>console.log(err));			//出错了
	```

### async
	
### await

### Decorator(装饰器)

### Class
	static		//只能被类所使用,不能被实例所继承
	private 	//只能被当前类所使用,子类和对象均不可使用
	protected	//只能被类和子类使用

### ECMAScript Modules

### defer
	下载完成后,文件要在所有元素解析完成之后执行js代码

### async
	下载完成后,立即异步执行js代码


	



