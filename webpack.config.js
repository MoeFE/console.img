const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'console.img.min.js',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin([
      'Project: console.img',
      'Descript: 在 Webkit 内核浏览器开发人员工具控制台面板输出图片',
      'Author: @u3u <485463145@qq.com>',
      'Github: https://github.com/u3u/console.img',
      'License: MIT'
    ].join('\n'))
  ]
}
