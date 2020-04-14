const commonCongif = require('./webpack.common')
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCss = require('optimize-css-assets-webpack-plugin');

const prodCongif = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            // modules: true //按模块化引入
          }
        }, 'sass-loader', 'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new optimizeCss({}) //进行css代码代码
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
}

module.exports = merge(commonCongif,prodCongif)