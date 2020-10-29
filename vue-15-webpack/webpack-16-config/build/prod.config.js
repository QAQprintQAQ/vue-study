const webpackMerge = require('webpack-merge');//依赖webpack-merge
const baseConfig = require('./base.config.js')//导入开发环境,生产环境的共同webpack配置
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports=webpackMerge(baseConfig,{
  //将prod.config.js拼接到base.config.js文件中
  plugins: [

    new HtmlWebpackPlugin({
      template: 'index.html',

    }),
  ],

})
