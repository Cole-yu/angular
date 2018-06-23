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
