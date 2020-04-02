const webpack = require('webpack')
const merge = require("webpack-merge");
const commonCongif = require('./webpack.common')
const devConfig = {
  mode: 'develoment',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000, //服务端口号
    open: true, //首次打包编译自动打开浏览器
    hot: true,
    hotOnly: true
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(commonCongif,devConfig)