var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

var ExtractTextPlugin = require("extract-text-webpack-plugin"); //打包css的插件

module.exports = {
  mode: 'production',
  // 入口文件
  entry: ['./src/js/index.js'],

  output: {
    filename: 'bundle.js', //打包后index.js的名字，
    path: __dirname + '/dist', //__dirname 当前webpack.config.js的路径
  },

  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: './imgs/', //输入文件目录
            // limit: 2048 //当图片大小超过2048个字节的时候，将打包的图片存在/static/images/文件夹中，否则直接改为base64格式放在mian.js中，可以减少http请求
          }
        }
      }
    ]
  },

  //插件
  plugins: [
    new HtmlWebpackPlugin({
      // js/about
      // chunks: ['dist/js/index'],
      filename: 'index.html',
      template: './src/index.html'
    }),

    new ExtractTextPlugin("./css/index.css"),
  ],
}