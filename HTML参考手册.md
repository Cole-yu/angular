# 	HTML参考手册

### input标签的type值
	button
	checkbox
	date
	datetime
	datetime-local
	email
	file
	hidden
	image
	month
	number
	password
	radio
	range
	reset
	submit
	text
	time
	url
	week

### THML链接
	<a href="http://www.w3school.com/cn/html/"></a>		//正确写法
	<a href="http://www.w3school.com/cn/html"></a>		//错误示范
	注释：始终将正斜杠添加到子文件夹。假如这样书写链接：href="http://www.w3school.com.cn/html"，就会向服务器产生两次 HTTP 请求。
	这是因为服务器会添加正斜杠到这个地址，然后创建一个新的请求，就像这样：href="http://www.w3school.com.cn/html/"。
	命名锚：
		<div name="tips">提示内容</div>
		<a href="#tips">跳转到锚的链接</a>
*	通过target属性来定义被链接的文档在何处显示。
	```
	在新窗口中打开文档:
	<a href="http://www.w3school.com.cn/" target="_blank">Visit W3school!</a>
	_blank   //在新窗口中打开
	_parent  //在父级窗口内打开
	_self    //在当前窗口打开
	_top     //在顶层根窗口打开
	```
*	创建电子邮件
	<a href="mailto:someone@microsoft.com?subject=Hello%20again">发送邮件</a>
	<p>应该使用%20来替换单词之间的空格，这样浏览器就可以正确地显示文本了</p>

### src与href的属性区别
*	src的内容是页面必不可少的一部分，是引入。src指向的内容会嵌入到文档中当前标签所在的位置。
	```
	<script type="text/javascript" src="script.js"></script>
	当浏览器解析到该元素时，会暂停浏览器的渲染，直到该资源加载完毕.这也是将js脚本放在底部而不是头部的原因。
	```
*	href是Hypertext Reference的缩写,表示超文本引用,用来建立当前元素和文档之间的链接
	```
	<link rel="stylesheet" type="text/css" href="reset.css">
	浏览器会识别该文档为css文档，并行下载该文档，并且不会停止对当前文档的处理(阻塞渲染);
	这也是建议使用link,而不采用@import加载css的原因
	```

### img替换文本属性
	alt属性用来为图像定义一串预备的可替换的文本
	<img src="boat.gif" alt="Big Boat">
	在浏览器无法载入图像时，替换文本属性告诉读者他们失去的信息，浏览器将显示这个替代性的文本而不是图像。
	在纯文本浏览器中也能更好的展示页面，用文本替代图片区域

### 创建图像映射
*	usemap属性
	```
	usemap属性提供了一种"客户端"的图像映射机制，有效地消除了服务器端对鼠标坐标的处理，以及由此带来的网络延迟问题。
	通过特殊的 <map> 和 <area> 标签，HTML 创作者可以提供一个描述 usemap 图像中超链接敏感区域坐标的映射，这个映射同时包含相应的超链接 URL。
	usemap 属性的值是一个 URL, 它指向特殊的 <map> 区域。用户计算机上的浏览器将把鼠标在图像上单击时的坐标转换成特定的行为，包括加载和显示另外一个文档。
	<body>
		<!-- img元素中的"usemap"属性引用map元素中的"id"或"name"属性(根据浏览器) -->
		<img src="/i/eg_planets.jpg" border="0" usemap="#planetmap" alt="Planets" />    
		<map name="planetmap" id="planetmap">
			<area shape="circle" coords="180,139,14"   href ="/example/html/venus.html"  target ="_blank"   alt="Venus" />
			<area shape="circle" coords="129,161,10"   href ="/example/html/mercur.html" target ="_blank"	alt="Mercury" />
			<area shape="rect"   coords="0,0,110,260"  href ="/example/html/sun.html"    target ="_blank"	alt="Sun" />
		</map>
	</body>
	```
*	ismap属性
	```
	ismap属性将图像定义为服务器端图像映射
	所有浏览器都支持ismap属性
	当用户在ismap图像上单击了某处时,浏览器会自动把鼠标的x,y位置以URL查询字符串的形式发送到服务器端,特殊的服务器端软件可以根据这些坐标来做出响应。
	```
*	差异:usemap客户端处理图像映射,它不要求有服务器或特殊的服务器软件,可以用在非web(无网络)环境中,例如在本地的文件或者CD-ROM中使用。

### map标签:定义一个客户端图像映射,指带有可点击区域的一幅图像
	<img>中的usemap属性可引用<map>中的id或name属性(取决于浏览器)，所以我们应同时向<map>添加id和name属性

### area标签：定义图像映射中的区域
	area元素总是嵌套在<map>标签中
	具有的属性为：
1.	coords:坐标值,定义可点击区域（对鼠标敏感的区域的坐标,shape="circle" coords="180,139,14"
2. 	href:此区域的目标URL
3.  nohref:从图像映射排除某个区域
4.  shape:定义区域的形状,default,rect,circle,poly
5.  target:在何处打开href属性指定的目标URL

### table标签
	caption标签,表格的标题
	table标签的html属性
	colspan 列跨度(水平方向的跨度)
	rowspan 行跨度(垂直方向的跨度)
	cellpadding="10" 内容与边框之间的空白区域
	cellspacing="10" 单元格与单元格之间的间距

### 定义列表	
	<dl>     				//定义定义列表
		<dt>静态语言</dt>	//定义定义列表的项目
		<dd>Java</dd>		//定义定义的描述
		<dd>C</dd>
		<dd>C++</dd>
		<dt>动态语言</dt>
		<dd>JavaScript</dd>
		<dd>python</dd>		
	</dl>
	浏览器显示结果如下:
		静态语言
			Java
			C
			C++
		动态语言
			JavaScript
			python

### section标签:定义文档中的节(具有关联的一块内容)

### HTML框架
*   frameset框架结构标签(框架集),定义如何将窗口分割为框架
* 	frame标签:独立的一个框架
*	含有noresize="noresize"属性的框架结构是不可调整尺寸的,在框架间的边框上拖到鼠标，你会发现边框是无法移动的
*	不能将body标签与frameset标签同时使用;
*	如果在<noframes>标签内,需要添加一段文本信息,那就必须将这段文字嵌套在body标签内。
	```
	<html>
	<frameset cols="50%,*,25%">
	   <frame src="/example/html/frame_a.html" noresize="noresize" />
	   <frame src="frame_a.htm">
	   <frame src="frame_b.htm">
	</frameset>
	<!-- 当浏览器不支持框架时显示文本内容 -->
	<noframes>
		<body>您的浏览器无法处理框架！</body>
	</noframes>
	</html>
	```

### iframe内联标签:用于在网页内显示网页
	frameborder="0"		//删除边框
*	可以使用iframe作为链接的目标
	```
	iframe可用作链接的目标(target),链接的target属性必须引用iframe的name属性
	<iframe src="demo_iframe.html" name="iframe_a"></iframe>                     //name为iframe_a的内联框架
	<a href="http://www.w3school.com.cn/" target="iframe_a">w3school.com.cn</a>  //iframe初始时显示demo页面;点击链接后,在框架内显示href的url页面内容
	```

### HTML脚本
	noscript为不支持客户端脚本的浏览器定义替代内容	

### HTML头部
	在头部中添加的标签<title>、<base>、<link>、<meta>、<script>及<style>
*	<base>标签为页面上的所有链接规定默认地址或默认目标(target)
	```
	<head>
		<base href="http://www.w3school.com.cn/">
		<base target="_blank">
	</head>
	```

###	<meta>元素:定义关于HTML文档的元数据
*  	针对搜索引擎的关键词
	```
	定义页面的描述：
	<meta name="description" content="Free Web tutorials on HTML, CSS, XML" />
	定义页面的关键词：
	<meta name="keywords" content="HTML,CSS,XML" />
	```

### HTML字符实体
	html中不能使用小于号(<)和大于号(>),因为浏览器会误认为是标签
	如果想正确地显示预留字符，必须在HMTL源代码中使用字符实体(character entities)
	字符实体参考手册：http://www.w3school.com.cn/tags/html_ref_entities.html

### URL(Uniform Resource Locator)统一资源定位符(网址)
	格式:scheme://host.domain:port/path/filename
	* scheme - 定义因特网服务的类型,常见的有http,https,ftp,file
	* host - 定义域主机(http的默认主机是www)
	* domain - 定义因特网域名，比如w3school.com.cn
	* :port - 定义主机上的端口号。http的默认端口号是80
	* path - 定义在服务器上的路径
	* filename - 定义文档/资源的名称
	示例:http://www.baidu.com:8080/asset/images/foo.jpg

### 因特网服务提供商(ISP)
	Internet Service Provider

### HTML颜色
	十六进制

# 	HTML5简介	

### 文档类型
	<!DOCTYPE html>   //html5文档类型

### WebSocket对象
	var socket=new WebSocket(url,[protocol])
	var ws = new WebSocket("ws://localhost:8080/echo");
	ws.onopen()=function(){    			// WebSocket已连接上,使用send()方法发送数据
		ws.send('发送给服务器的数据');
	};
	ws.onmessage=function(data){        // WebSocket接收到数据时
		console.log(data);
	};
	ws.onclose=function(){              // 当关闭连接时
		console.log('连接已关闭');
	};

