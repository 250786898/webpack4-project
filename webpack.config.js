const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/index.js', //入口文件 默认：src/index.js
  output: { //出口文件 默认: dist/main.js
    filename: 'bundle.js', //输出的文件名 
    path: path.resolve(__dirname, 'dist') //输出的路径，只能是绝对路径
  },
  module: {
    rules: [
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
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            modules: true //按模块化引入
          }
        }, 'sass-loader', 'postcss-loader'
        ]
      }
    ]
  }
}