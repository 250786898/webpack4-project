const commonCongif = require('./webpack.common')
const merge = require("webpack-merge");
const webpack = require('webpack')
const devCongif = {
  mode: 'development',
  output: {
    filename: '[name].js', //输出的文件名 
    chunkFilename: '[name].chunk.js' //chunk文件生成的名字
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080, //服务端口号
    open: true, //首次打包编译自动打开浏览器
    hot: true,
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonCongif,devCongif)