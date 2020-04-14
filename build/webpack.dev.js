const commonCongif = require('./webpack.common')
const merge = require("webpack-merge");
const webpack = require('webpack')
const devCongif = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 8080, //服务端口号
    open: true, //首次打包编译自动打开浏览器
    hot: true,
    hotOnly: true,
  },
  optimization: {
    
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonCongif,devCongif)