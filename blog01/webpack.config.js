/*
 * @Description: webpack配置文件
 * @Author: Do not edit
 * @Date: 2020-11-19 11:29:16
 * @LastEditTime: 2020-12-09 13:31:40
 * @LastEditors: HongXuan.Lu
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '/', dir)
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js' ,
    publicPath: './dist/'          // 前面加了个点不知道有什么用，图片url可以使用
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          extractCSS:true
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use:[
        {loader : 'style-loader'},
        {loader : 'css-loader'}
        ]
       },
      {
        test: /\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader'  //内置file-loader 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use:[{
          loader: 'file-loader',
          options:{
            name:'[name].[ext]',  // 图片名称不变
            // outputPath: '/images/'  //图片输出路径（将图片统一输出到一个文件夹中）
        }
        }]
      },
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css",
      chunkFilename: "[id].[contenthash:4].css"
    }),
    new ExtractTextPlugin('/css/index.css'), 
  ],
  resolve:{
    // extensions: ['.js', '.vue',], //列表里面多组文件出现后，以第一种为准
    alias :{
      // 起别名，import 时候可以直接使用别名
      // 不带$,只能import vue ,import vue/xxx.js error错误    带$,import vue/xxx.js会去node_modules/vue/xxx.js去找
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  devServer: {
    // 当调接口返回404时，可以用index.html代替404错误信息提示页面。也可以配置选择哪个页面代替
    historyApiFallback: true,
    overlay: false,  // 浏览器会默认全屏显示 编译的error和警告，此选项只显示 error
    open: true,  // server启动后，自动打开默认浏览器显示项目
    // hot: true, // 热更新： https://webpack.js.org/concepts/hot-module-replacement/
    // disableHostCheck: false, // true 绕过主机检查(即检查访问的主机),这样易遭受DNS攻击
    // https: false, // shi否启用https，附赠自签名证书，也可以用自己的
  }
}
