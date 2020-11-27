/*
 * @Description: webpack配置文件
 * @Author: Do not edit
 * @Date: 2020-11-19 11:29:16
 * @LastEditTime: 2020-11-20 16:50:23
 * @LastEditors: HongXuan.Lu
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log('执行webpack');
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js' ,
    publicPath: '/dist/'          // 公共资源文件夹
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
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
        // 从下至上依次转换编译
        use:[
          {loader : 'vue-style-loader'},
          {loader : 'css-loader'},
          {loader : 'sass-loader'}
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader',
      },
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  resolve:{
    alias :{
      // 起别名，import 时候可以直接使用别名
      // 不带$,只能import vue ,import vue/xxx.js error错误    带$,import vue/xxx.js会去node_modules/vue/xxx.js去找
      'vue$': 'vue/dist/vue.esm.js',
      '~': 'src'
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
