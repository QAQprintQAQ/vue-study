const path = require('path');//动态路径需要用到node的核心包,需要进行初始化等
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口
  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径
    filename: 'bundle.js',//导出地文件名
    publicPath: './dist/',//表示打包过的url(静态资源文件,图片等)文件都放在'./dist/'目录下面,有些版本需要'../dist/'
  },

  module: {
    rules: [//配置loader规则
      {
        test: /\.css$/,//匹配.css结尾的文件
        use: ['style-loader', 'css-loader'],//css-loader只负责将css文件进行加载,不负责将css样式进行解析,更不会将css样式在浏览器中生效。style-loader负责将样式添加到DOM中
      },

      {//less规则
        test: /\.less$/,//正则表达式,匹配.less结尾的文件
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },

      {
        test: /\.(png|jpg|gif)$/,//处理图片的规则

        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,

              name: 'img/[name].[hash:8].[ext]',

            },

          }
        ]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']//将es6转换为es5
          }
        }
      },

    ]
  },

  resolve: {//和上面的module并列
      alias:{//一定要有这个别名的对象,少了就会报错.resolve has an unknown property 'vue$'.

        'vue$':'vue/dist/vue.esm.js'//会选择runtime-compiler这个编译环境
      },
  },

}