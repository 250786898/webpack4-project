const commonCongif = require('./webpack.common')
const merge = require("webpack-merge");
const prodCongif = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
}

module.exports = merge(commonCongif,prodCongif)