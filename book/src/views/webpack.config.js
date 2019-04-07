const path = require('path');
//在根目录下建立一个虚拟的html页面
const htmlWebpackPlugin = require('html-webpack-plugin');
//解决
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    mode:'development',
    plugins:[ //配置插件，在根目录下生产一个看不见的html文件，和index.html一样，但是webpack会自动将最新的bundle.js放在这个虚拟的html文件中 
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{ //配置第三方loader模块
        rules:[ //第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //处理图片地址的模块，可以进行传参，改变图片的格式，默认base64，优化性能
            //每次处理的图片名字都不一样，这样放置图片重名
            {test:/\.(jpg|png|gif|bmp|jpeg|webp)$/,use:'url-loader?limit=18236&name=[hash:8]-[name].[ext]'},
            //处理字体文件的loader,和上面的不要混淆
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //配置babel转化高级JS的语法
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //配置识别.vue后缀名的组件
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}