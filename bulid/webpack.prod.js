const merge = require("webpack-merge");
const commonCongif = require('./webpack.common')
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map'
}

module.exports = merge(commonCongif,prodConfig)