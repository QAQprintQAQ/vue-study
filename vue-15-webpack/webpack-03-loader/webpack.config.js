const path = require('path');//动态路径需要用到node的核心包,需要进行初始化等
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口
  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径
    filename: 'bundle.js',//导出地文件名
  },

  module:{
    rules: [//配置loader规则
      {
        test: /\.css$/,//配置css-loader规则
        use: [ 'style-loader', 'css-loader' ],//css-loader只负责将css文件进行加载,不负责将css样式进行解析,更不会将css样式在浏览器中生效。style-loader负责将样式添加到DOM中
       // use: ['css-loader' ]//现在只有一个css-loader
      }
    ]
  }

}