const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main: './src/index.js', //入口文件 默认：src/index.js
  },
  output: { //出口文件 默认: dist/main.js
    filename: '[name].js', //输出的文件名 
    path: path.resolve(__dirname, '../dist'), //输出的路径，只能是绝对路径
    chunkFilename: '[name].chunk.js' //chunk文件生成的名字
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
      template: './public/index.html',
      publicPath: path.resolve(__dirname, '../dist')
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all', //代码切割的类型： async: 只切割异步代码  initial:只切割同步代码 all：两种都切割
      minSize: 30000, //切割的文件最小要求，单位kb
      maxSize: 0,//切割的文件最大要求，单位kb，超过部分会继续切分
      minChunks: 1, //最小需要切割的次数需求：至少需要切割一次
      maxAsyncRequests: 6,//按需加载时并行请求的最大数量。
      maxInitialRequests: 4,//入口点的最大并行请求数。
      automaticNameDelimiter: '~',//默认情况下，webpack将使用块的来源和名称生成名称（例如vendors~main.js）。此选项使您可以指定用于生成名称的定界符。
      cacheGroups: {//缓存组，同步切割时候会走该模块区分切割组
        defaultVendors: { 
          test: /[\\/]node_modules[\\/]/, //配置的模块：node_modules文件夹下的模块切割
          priority: -10 //切割优先级
        },
        default: { //如果没有达到上方的，就走到该默认组切割
          minChunks: 2,
          priority: -20, //切割优先级
          reuseExistingChunk: true //如果已存在切割模块，忽略这个组的切割
        }
      }
    }
  }
}