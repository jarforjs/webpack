/**
 * Created by JetBrains WebStorm.
 * User: wb-ghb226150@alibaba-inc.com
 * Date: 2017-09-29 16:53
 * Describe:
 */
// # {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
// # {destination for bundled file}处填写打包文件的存放路径
// # 填写路径的时候不用添加{}
// webpack {entry file} {destination for bundled file}
// webpack app/main.js public/bundle.js
// 可以看出webpack同时编译了main.js 和Greeter,js


// 如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build
// const greeter = require('./Greeter');
// document.querySelector('#root').appendChild(greeter());

//转化成jsx
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

//我们这里例子中用到的webpack只有单一的入口，其它的模块需要通过 import, require, url等与入口文件建立其关联，为了让webpack能找到”main.css“文件，我们把它导入”main.js “中
import './main.css';
//通常情况下，css会和js打包到同一个文件中，并不会打包为一个单独的css文件，不过通过合适的配置webpack也可以把css打包为单独的文件的。


render(<Greeter/>,document.getElementById('root'));