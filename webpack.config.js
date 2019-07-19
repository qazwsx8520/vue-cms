const path = require('path');
const webpack = require('webpack');
// 导入在内存中生成 html 页面的插件
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的 bundle.js 注入到页面底部 若要配置插件 就一定要放在 plugins 中
const htmlWebpackPlugin = require("html-webpack-plugin")

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 因为导入 vue 是阉割模式 所以需要加 vueLoaderPlugin
const vueLoaderPlugin = require("vue-loader/lib/plugin");

// 当以命令行形式运行 webpack 和 webpack-dev-server的时候 工具会发现，我们并没有提供 要打包的 入口和出口文件。此时，他会检查根目录中的配置文件，并读取这个文件，就拿到了这个配置对象，并进行打包构建
// 向外暴露配置对象
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js', 
    },
    devServer: {
        open: true,//自动打开浏览器
        port: 3001,//指定端口
        // contentBase: "src",//指定以 src 根目录进行托管
        hot: true,//实现文件的热更新(无刷新重载)
    },
    plugins: [//配置webpack插件的配置节点
        // new 一个热更新的模块对象
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            // 创建一个在内存中生成一个 html 页面的插件
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的内存页面名称
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        }),
        new vueLoaderPlugin(),
    ],
    module: {//配置所有第三方 loader 模块的
        rules: [//第三方 loader 模块的匹配规则
            // 处理 css 文件的 loader
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
            // 处理 less 文件的 loader
            { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']},
            // 处理 sass 文件的 loader
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'sass-loader']},
            // 处理 图片路径的 loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=3197&name=[hash:8]-[name].[ext]'},
            // 处理 字体文件的后缀名的 loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            // 这是配置 babel 来转换js高级语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            {test:/\.vue$/,use:"vue-loader"}
            /* { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(woff2?|woff|eot|ttf|otf|svg)(\?.*)?$/, use: 'file-loader' },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:8].[ext]'
                }
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } */
        ]
    },   
    // 设置 vue被导入时候的包的路径
    resolve: {
        alias: {
            'vue$': "vue/dist/vue.js"
        }
    } 
}