# 	CSS参考手册

### css隐藏元素的方式
1.  display:none;					//显示方式	
2.  visibility:hidden/visible;   	//visibility:visible;可见度:显示
3.  opacity:0;    					//透明度:0-完全透明,1-完全不透明
4.  index:-1;(同一块显示区域存在多层元素时)
5.  position:absolute;top:-999rem;  //在视口以外

### 水平垂直居中
*	脱离文档流元素的居中
1.  margin:auto法
	#parent{
		width:100%;
		height:100%;
		position:relative;
	}
	#child{
		position:absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		margin:auto;
		width:400px;
		height:300px;
	}
2. 	使用负margin法
	#parent{
		position:relative;	
	}
	#child{
		position:absolute;
		left:50%;
		top:50%;
		margin-left:-50%;
		margin-top:-50%;
		width:400px;
		height:300px;
	}
3. 	使用display:flex布局
	#parent{
		display:flex;
		justify-content:center;
		align-items:center;
	}
	#child{
		width:400px;
		height:300px;
	}

### 元素的层级关系从低到高(元素,before,after)
	如果before和after样式互换,会导致before内容被after内容覆盖,因为after在before的上面。
	.foo{
		width:200px;
		height:200px;			
		position: absolute;
		border-radius: 50%;
		border-width: 20px;
		border-style: solid;			
		border-color: red transparent transparent transparent;
	}
	.foo::before{
		content:'';
		position:absolute;
		left:15px;
		right:15px;
		top:15px;
		bottom:15px;			
		border-radius: 50%;
		border-width: 20px;
		border-style: solid;			
		border-color: green transparent transparent transparent;
	}	
	.foo::after{
		content:'';
		position:absolute;
		left:50px;
		right:50px;
		top:50px;
		bottom:50px;			
		border-radius: 50%;
		border-width: 20px;
		border-style: solid;			
		border-color: blue transparent transparent transparent;
	}

### 让body刚好占满整一个屏幕
	hmtl,body{
		margin:0;
		padding:0;
		width:100%;
		height:100%;
		overflow:hidden;
	}

### 如何实现一个三角形
	当box-sizing:conent-box; 	//边框不计算在宽度中,必须设置内容区域长宽为0
	.bar{		
		width: 0px;
		height: 0px;
		background-color: red;
		border-style: solid;		
		border-width: 100px;
		border-color: green pink blue black;
		border-color: green transparent transparent;		
	}
	当box-sizing:border-box;		//边框会计算在宽度内,因此当宽度小于2倍的border时(即宽度不够时,内容区域自然不会显示出来)
	.foo{
		width: 200px;
		height: 200px;
		background-color: red;
		border-style: solid;
		border-width: 100px;
		border-color: green transparent transparent;
		box-sizing: border-box;
	}

### data属性	
*	data-\*属性来嵌入自定义数据,在css、js中使用,属性名不应该包含任何大写字母,并且在前缀"data-"之后必须至少有一个字符
	```
	<span id='bird' data-animal='鸟类'>喜鹊</span>
	```	
*	在css中使用
	```
	#bird::before{
		content:attr(data-animal);
		color:red;
		font-size:16px;		
	}
	```
* 	在js中使用
	```
		获取所需元素的data-*自定义属性的值
		docunment.getElementById('bird').getAttribute("data-animal");   //获取属性data-animal的值
		添加data-*属性
		docunment.getElementById('bird').dataset.color='red';			//为该元素添加了一个data-color自定义属性,且值为red
	```

	

