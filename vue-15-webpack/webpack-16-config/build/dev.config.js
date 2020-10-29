const webpackMerge = require('webpack-merge');//依赖webpack-merge
const baseConfig = require('./base.config');//导入生产环境和开发环境的共同配置

module.exports = webpackMerge(baseConfig, {
  //利用webpack-merge将baseConfig和dev.config.js进行拼接
  devServer: {
    contentBase: './dist',
    inline: true,

  },
});
