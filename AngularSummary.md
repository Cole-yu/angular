# Angular使用总结

### 父组件调用子组件的方法:
	<app-alert #child></app-alert>
	<div class="btn btn-default" (click)="child.fnAlert(txt)"></div>

### angular6中使用scss来作为样式，再创建项目时
ng new new_project_name --style=scss ​​​​
已有项目要让组件使用scss,
1.  在angular.json文件中的“projects”字段下改为：
	"schematics": {
        "@schematics/angular:component": {
          "styleext": "scss"
        }
    }
2. npm install node-scss --save-dev

### tsLint.json配置 
*	no-trailing-whitespace：false //允许代码后面有空格，包括换行
*	triple-equals：true //设成false可关闭必须"==="（三等号）的写法
*	在jslint.json中找到whitespace,把true改为false，取消tslint的空白检查
 	"whitespace": [
	      false,
	      "check-branch",
	      "check-decl",
	      "check-operator",
	      "check-separator",
	      "check-type"
	]

*	在"no-inferrable-types"中添加"ignore-properties"，允许为类属性指定不可推出的类型注释，取消jslint检查时的数据类型推断
	"no-inferrable-types": [
	      true,
	      "ignore-params",
	      "ignore-properties"
	]

*	TSLint：should be quotemark
	统一使用单引号或双引号

*	TSLint：comment must start with a space
	注释时双反斜杠后面必须空一格再写文本   //_comment		
