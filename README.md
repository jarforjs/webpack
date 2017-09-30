//全局安装
cnpm install -g webpack
//安装到你的项目目录
cnpm install --save-dev webpack

npm init

cnpm install --save-dev webpack-dev-server

// npm一次性安装多个依赖模块，模块之间用空格隔开
cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react


cnpm install --save react react-dom


webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
cnpm install --save-dev style-loader css-loader

cnpm install --save-dev postcss-loader autoprefixer


这个插件自动完成了我们之前手动做的一些事情，在正式使用之前需要对一直以来的项目结构做一些更改：

移除public文件夹，利用此插件，index.html文件会自动生成，此外CSS已经通过前面的操作打包到JS中了。
在app目录下，创建一个index.tmpl.html文件模板，这个模板包含title等必须元素，在编译过程中，插件会依据此模板生成最终的html页面，会自动添加所依赖的 css, js，favicon等文件，index.tmpl.html中的模板源代码如下：
cnpm install --save-dev html-webpack-plugin

cnpm install --save-dev babel-plugin-react-transform react-transform-hmr

cnpm install --save-dev extract-text-webpack-plugin

//报错NODE_ENV不是命令
//这里在命中加加了set和&&
//事实上，以上两条脚本都合并两条命令（这种操作在powershell中不被支持，在cmd中也不被支持，这是Mac中bash或Linux的shell中的独特操作），拆分两条脚本如下：
set NODE_ENV=development && 
"build": "set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress"