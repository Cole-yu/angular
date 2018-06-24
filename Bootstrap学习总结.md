# Bootstrap 3学习总结

### bootstrap3与bootstrap4的区别
	bootstrap4采用了flex布局,而bootstrap3采用浮动布局

### bootstrap的核心概念(网格系统)
	xs,sm,md,lg,offset(偏移列)

### bootstrap中可以通过zoom调整大小：style="zoom:180%;"
	<label class="col-md-offset-2 col-md-3 checkbox-inline" style="zoom:140%;">
		<input type="checkbox" >记住密码
	</label> ​​​​

### form表单
	form,form-group,form-label,form-control组合使用
	<form role="form">
		<div class="form-group has-error">
	      <div class="col-md-2">
	        <label for="email" class="control-label">邮箱</label>
	      </div>
	      <div class="col-md-10">
	        <input type="text" id="email" class="form-control">
	      </div>
	    </div>
	</form>

### 插入符
	<span class="caret"></span>				//bootstrap中的样式类
	<span class="fa fa-caret-down"></span>  //字体图标
	<span class="fa fa-caret-right"></span>

### jumbotron(超大屏幕)
	<div class="jumbotron"></div>
	为了获得占用全部宽度且不带圆角的超大屏幕,应该在所有的.container样式类外面使用.jumbotron样式类

### thumbnai(缩略图)
	<div class="col-md-12">
		<div class="thumbnail">
            <img src="/wp-content/uploads/2014/06/kittens.jpg" 
            alt="通用的占位符缩略图">
            <div class="caption">
                <h3>缩略图标签</h3>
                <p>一些示例文本。一些示例文本。</p>
                <p>
                    <a href="#" class="btn btn-primary" role="button">
                        按钮
                    </a> 
                    <a href="#" class="btn btn-default" role="button">
                        按钮
                    </a>
                </p>
            </div>
        </div>
	</div>

### 特殊符号(字符实体)
|显示结果|描述|实体名称|
|:---:|:---:|:---:|	
|X|乘号|&times;|
| |空格|&nbsp;|
|<|小于号|&lt;|
|>|大于号|&rt;|
|<<|双|&laquo;|
|>>|双|&raquo;|
|<—|左箭头|&larr;|
|—>|右箭头|&rarr;|
|"|引号|&quot;|
|©|版权|&copy;|
|®|注册商标|&reg;|
|™|商标|&trade;|

*	屏幕阅读器
	```
	aria-hidden="true",只具有一个图标的元素,不包含任何文本内容,这样就能让使用辅助设备的用户知道其作用了	,意思由图标来表现来
	<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>  //向右滑动图标
	sr-only,只在屏幕阅读器上有效,帮助视觉有障碍的人士理解
	<span class="sr-only">Next</span>
	```
	
### 导航栏(navigation)
* 	菜单栏样式
	```
	navbar-fixed-top    菜单栏永远固定在显示器顶部,positon:fixed
	navbar-inverse	    反色的菜单栏(黑底白字)
	navbar-header	    菜单栏标题
	navbar-brand        菜单栏的牌子,一般放置logo
	navbar-text			导航栏中的文本
	navbar-toggle和collapse、navbar-collapse   //经常组合出现,用于子菜的展开/收起
	navbar-form    		导航栏中的表单
	navbar-left/navbar-right	组件对齐方式
	```

###	响应式导航栏:在移动端收起成一个菜单按钮
*	原理解析：
	```
	为了给导航栏添加响应式特性,折叠的内容必须包裹在带有.collapse、.navbar-collapse的<div>中。
	折叠起来的导航栏实际上是一个带有.navbar-toggle及两个data- 元素的按钮。
	第一个是data-toggle,用于告诉JavaScript需要对按钮做什么,第二个是data-target,指示要切换到哪一个元素。
	三个带有.icon-bar的<span>创建所谓的汉堡按钮。这些会切换为.nav-collapse<div>中的元素。
	```
*	折叠起来的导航栏一般带navbar-toggle类和data-toggle(操作方式),date-target(被操作元素)
	```
	<div class="navbar-toggle" data-toggle="collapse" data-target="#header">展开/收起按钮</div>
	<div id="header" class="collapse navbar-collapse">被折叠内容</div>	 	//菜单栏中被折叠的内容,在被点击时展开/收起
	```
* 	html代码示例:	
	```
	<nav class="nav nav-default navbar-inverse" role="navigation">      //navbar-inverse:反色的菜单栏(黑底白字)
		<div class="container-fluid">   								//流动布局
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#hearer">   //toggle(收起/展开);  target(作用目标)
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<div class="navbar-brand">
					<span class="glyphicon glyphicon-home">网站logo</span>
				</div>
			</div>
			<div id="header" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">HTML</a></li>
					<li><a href="#">CSS</a></li>
					<li><a href="#">JAVASCRIPT</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							框架<b class="caret"></b>
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">Angular</a></li>
							<li><a href="#">AngularJS</a></li>
							<li class="divider"></li>
							<li><a href="#">React</a></li>
							<li><a href="#">Vue</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>		
	</nav>
	```

### carousel(轮播图、旋转木马、幻灯片)
	通过data属性:使用data属性可以很容易控制轮播(Carousel)的位置。
	属性data-slide接受关键字prev或next,用来改变幻灯片相对于当前位置的位置。
	使用data-slide-to来向轮播传递一个原始滑动索引,data-slide-to="2"将把滑块移动到一个特定的索引,索引从0开始计数。
	data-ride="carousel"属性用于标记轮播在页面加载时就开始动画播放。

*	html模板代码：
	```	
	<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
	<script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>	
	<div class="carousel slide" id="myCarousel">
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1" ></li>
			<li data-target="#myCarousel" data-slide-to="2" ></li>
		</ol>
		<div class="carousel-inner">
			<div class="item active">
				<img src="http://placehold.it/900x300" alt="first slide">
				<div class="carousel-caption">标题1</div>
			</div>
			<div class="item">
				<img src="http://placehold.it/900x300" alt="second slide">
				<div class="carousel-caption">标题2</div>
			</div>
			<div class="item">
				<img src="http://placehold.it/900x300" alt="third slide">
				<div class="carousel-caption">标题3</div>
			</div>
		</div>
		<a href="#myCarousel" class="carousel-control left" date-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
		</a>
		<a href="#myCarousel" class="carousel-control right" date-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
		</a>
	</div>
	```

### pagination(分页)
	<ul class="pagination pagination-lg">
	    <li><a href="#">&laquo;</a></li>
	    <li class="active"><a href="#">1</a></li>
	    <li class="disabled"><a href="#">2</a></li>
	    <li><a href="#">3</a></li>
	    <li><a href="#">4</a></li>
	    <li><a href="#">5</a></li>
	    <li><a href="#">&raquo;</a></li>
	</ul>
