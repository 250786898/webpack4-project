const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {

  entry: {
    main: './src/index.js', //入口文件 默认：src/index.js
  },
  output: { //出口文件 默认: dist/main.js
    filename: '[name].js', //输出的文件名 
    path: path.resolve(__dirname, 'dist') //输出的路径，只能是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", //只用建于和webpack通讯，并未来解决转换问题
      },
      {
        test: /\.jpg$/,
        use: [
          // {
          //   loader: 'file-loader', //使用相对应的loader
          //   options: {
          //     name:'[name].[ext]', //定义打包生成的文件名字
          //     outputPath: 'images' //定义输出的文件目录：dist/images 下
          //   },
          // },
          {
            loader: 'url-loader', //使用相对应的loader
            options: {
              limit: 10240 //单位：字节 超过10kb 的文件生成图片,否则生成base64编码
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ['style-loader', {
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}