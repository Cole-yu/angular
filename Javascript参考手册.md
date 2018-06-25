### Javascript基本数据类型
	```
	五种基本数据类型
	null,undefined,number,string,boolean
	一种复杂数据类型
	Object
	ECMAScript2015新增的数据类型
	Symbol
	```
*	值类型和引用类型
	```
	题目1： var a = 100;
	　　　　var b = a;		//值引用,创建了a变量的一个副本
	　　　  a = 200;
	　　　　console.log (b);	//100
	题目2： var a = {age : 20};
	　　　　var b = a;		//引用类型,复制了地址,指向相同的内存区域
	　　　　b.age = 21;
	　　　　console.log (a.age);  //21
	```

* 	indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
	```
	object可以为字符串,也可以为数组	
	indexOf()方法对大小写敏感！
	如果要检索的字符串值没有出现,则该方法返回-1。
	var arr=[1,2,3,4,5];
	arr.indexOf(3);				// 2	
	```
*   typeOf() 方法返回一个为字符串的结果,对象或原始值
	```
	undefined,boolean,number,string,function,object
	typeOf(undefined)  //undefined
	typeOf(Null)       //object
	typeOf(1)          //number
	typeOf("abc")      //string
	typeOf(Symbol)     //symbol   ECMAScript2015新增
	typeOf(任何函数对象)//function
	typeOf(任何对象)    //object
	```
*   split() 方法用于把一个字符串分割成字符串数组。
	```	
	var str="How are you doing today?"
	str.split("")	// H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?		
	```
*	splice() 方法向/从数组中添加/删除项目,然后返回被删除的项目,会该变原数组的内容
	```
	<script type="text/javascript">
		var arr = new Array(6);
		arr[0] = "George";
		arr[1] = "John";
		arr[2] = "Thomas";
		arr[3] = "James";
		arr[4] = "Adrew";
		arr[5] = "Martin";
		document.write(arr + "<br />");  //George,John,Thomas,James,Adrew,Martin
		arr.splice(2,1,"William");
		document.write(arr);			 //George,John,William,James,Adrew,Martin	
	</script>
	```
*   slice()
	```
	方法可从已有的数组中返回选定的元素;该方法并不会修改数组,而是返回一个子数组;如果想删除数组中的一段元素,应该使用方法Array.splice()。
	语法：array.slice(start,end)
	<script type="text/javascript">
		var arr = new Array(6);
		arr[0] = "George";
		arr[1] = "John";
		arr[2] = "Thomas";
		arr[3] = "James";
		arr[4] = "Adrew";
		arr[5] = "Martin";
		document.write(arr + "<br />"); 			//George,John,Thomas,James,Adrew,Martin
		document.write(arr.slice(2,4) + "<br />");	//Thomas,James		
	</script>
	```

###	Javascript中内置的对象
1. 	Array
	```
	属性有length,prototype,constructor
	方法：concat,join,pop,push,reverse,shift,slice,sort,splice,toString,unshift
	```
2.  Boolean
3.  Date
	```
	var date=new Date();            //获取当前日期时间
	var date=new Date('2018-6-21'); //指定设置一个日期时间
	```
	```
	var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
	var date=new Date(2018,5,21,18,0,0,200);
	```
*	Date对象方法
	```
		getDay()   //0-6星期
		getFullYear()  //年份2018
		getMonth()     //月份0-11
		getDate()  	   //1-31几号
		getHours()     //小时0-23
		getMinutes()   //分钟0-59
		getSeconds()   //秒0-59
		getMillseconds()//毫秒0-999
		getTime()       //返回1970年1月1日至今的毫秒数
	以上方法把get替换成set,均可用来设置Data对象相应的值,如var date=new Date; date.setFullYear(2020);
	```
4.  Math
	```
	该对象方法有abs,sqrt,pow
	min,max
	random
	ceil,round
	三角函数类sin,cos,tan
	```
5.  Number
	```
	toString,
	obj.toFixed(num)//保留指定位数的小数
	Number(12.3745).toFixed(2)  //12.37
	```
6.  string
	```
	concat()   //连接字符串
	indexOf()  //检索字符串,返回某个指定的字符串值在字符串中首次出现的位置
	slice()    //提取字符串的片断,并在新的字符串中返回被提取的部分。
	split()    //把字符串分割为字符串数组。
	fontsize() //使用指定的尺寸来显示字符串。
	fontcolor()//使用指定的颜色来显示字符串。
	sub()      //把字符串显示为下标。(sub:下标)
	```
*	substr()
	```
	stringObject.substr(start,length)//开始索引(从0开始计数)后面的指定长度,长度计算时包括开始和结果的字符
	<script type="text/javascript">
		var str="Hello world!";
		document.write(str.substr(3,7));//lo worl
	</script>
	```
*	substring()
	```
	stringObject.substring(start,stop)//开始索引(从0开始计数)到结束索引之前的片段(不包括stop索引的这个元素)
	<script type="text/javascript">
		var str="Hello world!"
		document.write(str.substring(3,7))
	</script>	
	```
*	match()  找到一个或多个正则表达式的匹配
	```
	var str="The rain in SPAIN stays mainly in the plain"; 
	var n=str.match(/ain/g);			//不带g只执行一次匹配;带g表示全局搜索,返回一个数组,无任何匹配则返回null
	console.log(n); 					//["rain","mainly","plain"]
	```
*	replace()  替换与正则表达式匹配的子串
	```
	var str=" a bc 123 ";
	var n=str.replace(/ /g,'');		//去除字符串中出现的空格
	```
7.  RegExp
*	该对象的方法有:
1.	compile()  //用于在脚本执行过程中编译正则表达式,也可用于改变和重新编译正则表达式。
	```
	RegExpObject.compile(regexp,modifier)
	var reg=new RegExp()
	patt=/^(188|139|135)+(\d){8}/g;
	reg.compile(patt);
	strObject.replace(reg,replaceContent);//根据匹配规则,替换为replaceContent	
	```
2.	test       //返回true或者false
	* RegExpObject.test(strObject);	
	
###	Dom对象
1.	Document
2.  Element
3.  Attributes
4.  Events

###	Browser对象
1.  Window对象(首字母大写)
*	Window对象是全局对象,要引用当前窗口根本不需要特殊的语法,可以把那个窗口的属性作为全局变量来使用
	```
	可以只写document,而不必写Window.document。
	可以只写alert()，而不必写Window.alert()。
	```
	```
	window.devicePixelRatio
	此属性返回当前显示设备的物理像素分辨率与CSS像素分辨率的比值。该值也可以被解释为像素大小的比例：即一个CSS像素的大小相对于一个物理像素的大小的比值。
	```	

*	Window对象的window属性和self属性引用的都是它自己;当你想明确地引用当前窗口,而不仅仅是隐式地引用它时,可以使用这两个属性
	```
	self.parent	//self显式引用当前窗口,意思为当前窗口的父窗口
	self.frame[i]	//当前窗口的指定索引号i的框架
	```
*	top属性:	返回当前窗口的根窗口
	```
	要在任何一个子框架(frame)中调用顶层窗口,可以使用如下语法：
	self.top	//当前框架的顶层窗口(根窗口)
	f.top		//框架f的顶层窗口
	```

*	Window对象的方法
	```
	显示信息给用户
	Window.confirm()
	Window.alert()
	Window.print()
	*
	open()方法:新打开一个浏览器标签
	*
	setInterval():按照指定的周期（以毫秒计）来调用函数或计算表达式。 //var id=setInterval(fn,time);
	clearInterval()取消由setInterval()设置的timeout。			    //clearInterval(id);
	*
	setTimeout():在指定的毫秒数后调用函数或计算表达式。  			//var id=setTimeout(fn,time);
	clearTimeout()取消由setTimeout()方法设置的timeout。			//clearTimeout(id);
	*
	scrollBy()	按照指定的像素值来滚动内容。
	scrollTo()	把内容滚动到指定的坐标。
	*
	resizeBy()	按照指定的像素调整窗口的大小。
	resizeTo()	把窗口的大小调整到指定的宽度和高度。
	```	

2.  Navigator
*	userAgent:返回由客户机发送服务器的user-agent头部的值
*	platform:返回运行浏览器的操作系统平台。
*	browserLanguage:返回当前浏览器的语言。
*	cookieEnabled:返回指明浏览器中是否启用cookie的布尔值。
*	onLine:返回指明系统是否处于脱机模式的布尔值。

3.  Screen
	```
	该对象包含有关客户端显示屏幕的信息。
	属性height,width
	```
4.  History
	```
	该对象包含用户(在浏览器窗口中)访问过的URL。
	通过属性length,返回历史记录的网址数
	Location的方法：back(),forward(),go()
	```
5.  Location
	```
	对象包含有关当前URL的信息
	Location的属性(hash,host,hostname,href,pathname,port,protocol,search)
	Location的方法:assign(),reload(),replace()
	```

### sessionStorage(会话存储)
	window.sessionStorage用于临时保存同一窗口(或标签页)的数据,在关闭窗口或标签页之后将会删除这些数据。	
	保存数据语法:	sessionStorage.setItem("key", "value");
	读取数据语法:	var lastname = sessionStorage.getItem("key");
	删除指定键的数据语法:sessionStorage.removeItem("key");
	删除所有sessionStorage数据:sessionStorage.clear();

### LocalStorage(本地存储)
	localStorage用于长久保存整个网站的数据,在浏览器窗口关闭后还保留数据;
	保存的数据没有过期时间，直到手动去删除。
	方法和sessionStorage相同(setItem,getItem,removeItem,clear)

### setInterval(fn,time)

### setTimeout(fn,time)

### pageX,clientX,screenX,offsetX
	```
	pageX:鼠标位置相对于整个文档的水平偏移量
	clientX:鼠标位置相对于浏览器客户端水平偏移量
	screenX:鼠标位置相对于显示设备屏幕水平偏移量
	offsetX:鼠标位置相对于当前元素内部的水平偏移量
	```

###	getBoundClientRect()
	返回一个Object ClientRect对象,包含6个属性(top,right,bottom,left,width,height)	
	left   dom左边界距离视窗左边距离
	top    dom上边界距离视窗上部距离
	right  dom右边界距离视窗左边距离
	bottom dom下边界距离视窗上部的距离
	height dom的高度
	width  dom的宽度
	判断滚动条是否已经滚动到底部
	if(document.body.scrollTop>=dom.getBoundClientRect().top+dom.getBoundClientRect().height){
		//doSomething
	}

###	XSS(跨站脚本攻击)与CSRF(跨站请求伪造)
	XSS：向网站中注入脚本,使浏览器执行用户输入的恶意脚本代码
	CSRF:用户访问恶意网站,恶意网站获取并劫持了缓存的cookie,冒充用户向其他网站发起请求

### 继承
* 	工厂模式
	```
	function createPerson(name,age){
		var obj=new  Object();
		obj.name=name;
		obj.age=age;
		obj.sayName=function(){
			console.log('My name is '+this.name);
		};
		return obj;
	}
	```
*	原型模式
	```
	所有实例对象都具有相同的属性,都可以使用原型中的方法
	function Person(){}
	Person.prototype.name='yfx';
	Person.prototype.age=25;
	Person.prototype.sayName=function(){
		console.log('My name is '+this.name);
	};
	var p1=new Person();		//name='yfx',age=25
	var p2=new Person();		//name='yfx',age=25
	var p3=new Person();		//name='yfx',age=25
	```
* 	构造函数模式
	```
	function Person(name,age){			//在构造函数中进行属性的私有
		this.name=name;
		this.age=age;
		this.sayName=function(){
			console.log('My name is '+this.name);
		}
	}
	```
*	混合模式(构造函数+原型)
	```
	在构造函数中进行属性的私有,在原型中实现方法的共享(取各个继承方式的优点,推荐)
	function Person(name,age){			//在构造函数中进行属性的私有
		this.name=name;
		this.age=age;
	}
	Person.prototype={					//在原型中实现方法的共享
		sayName:function(){
			console.log('My name is '+this.name);
		},
		sayAge:function(){		
			console.log('My age is '+this.age);
		}
	}		
	var p1=new Person('yfx',25);		//每个实例对象都有自己的属性name、age,但都可以使用原型中的方法
	p1.sayName();		//My name is yfx
	p1.sayAge();		//My name is 25
	var p2=new Person('yyy',24);
	p2.sayName();		//My name is yyy
	p2.sayAge();		//My name is 24
	```

### 去除数组中重复的元素
*   使用indexOf方式
	```
	var arr=[1,2,3,4,1,2,3,3,4];
	var result=[];							//定义一个新数组去接收未重复的项
	arr.forEach(val=>{
		if(result.indexOf(val)==-1){		//如果在新数组中没有匹配到重复项
			result.push(val);				//把重复项添加进新数组中
		}
	});
	```
*	使用数组遍历循环的方式forEach进行相等比较
*	将数组排序后,在结果中判断相邻的元素是否相等
*	在es6中,使用set数据结构,set类似于数组,但是成员的值都是唯一的,没有重复的值

### 去除字符串中的空格
	var str=" a bc 123 ";
	var value=str.replace(/ /gi,'');
	console.log(value);
