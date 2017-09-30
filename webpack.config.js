/**
 * Created by JetBrains WebStorm.
 * User: wb-ghb226150@alibaba-inc.com
 * Date: 2017-09-29 17:05
 * Describe:
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//__dirname是node.js中的一个全局变量,他指向当前执行脚本所在的目录
module.exports = {
    //调试:对于小型中型的项目中,eval-source-map是个很好的选择,但是只能在开发阶段使用它
    //cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
    devtool: "eval-source-map",
    //app下的main.js是唯一入口文件
    entry: __dirname + "/app/main.js",
    output: {
        //打包后文件存放地方
        path: __dirname + "/public",
        //打包后输出文件的文件名
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader",
                    //我们就提取出相关部分，分两个配置文件进行配置（webpack会自动调用.babelrc里的babel配置选项）
                    // options:{
                    //     presets:[
                    //         "es2015","react"
                    //     ]
                    // }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                //请注意这里对同一个文件引入多个loader的方法。
                use:[
                    //webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options: {
                            //最近有一个叫做 CSS modules 的技术就意在把JS的模块化思想带入CSS中来，通过CSS模块，所有的类名，动画名默认都只作用于当前模块。Webpack从一开始就对CSS模块化提供了支持，在CSS loader中进行配置后，你所需要做的一切就是把”modules“传递到所需要的地方，然后就可以直接把CSS的类名传递到组件的代码中，且这样做只对当前组件有效，不必担心在不同的模块中使用相同的类名造成冲突。
                            modules:true
                        }
                    },{
                        //常用的CSS 处理loaders:
                        // Less Loader
                        // Sass Loader
                        // Stylus Loader
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    devServer: {
        //本地服务器所加载的页面所在目录
        contentBase:"./public",
        //不跳转
        //historyApiFallBack:true,
        //实时刷新
        inline:true,
        //端口
        // port:"8088",
        //热更新组件中的代码
        hot:true
    },
    plugins: [
        new webpack.BannerPlugin('版权所有,翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"
        }),
        //热加载插件
        new webpack.HotModuleReplacementPlugin()
    ]
};