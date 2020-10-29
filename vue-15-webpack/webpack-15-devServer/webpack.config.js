const path = require('path');//动态路径需要用到node的核心包,需要进行初始化等
const VueLoaderPlugin = require('vue-loader/lib/plugin');//vue-loader 15需要用到这个插件
const webpack = require('webpack');//因为添加版权的Plugin在webpack里面,所以要导入这个包。该插件名字叫BannerPlugin,属于webpack自带的插件。
const HtmlWebpackPlugin = require('html-webpack-plugin');//从node_modules中导入html-webpack-plugin名
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口

  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径。这个动态目录是根据配置webpack配置文件的相对路径得来的！
    filename: 'bundle.js',//导出地文件名
    // publicPath: './dist/',//表示打包过的url(静态资源文件,图片等)文件都放在'./dist/'目录下面,有些版本需要'../dist/'.
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

      //  vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

    ]
  },

  plugins: [
    // 请确保引入这个插件！这是引入vue-loader 15的一个插件,一定要正确写上这一句插件
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('code by liwenli in 2020'),//BannerPlugin的插件,括号里面就是bundle.js最前面的话。
    // new HtmlWebpackPlugin(),//假如我们导入html-webpack-plugin的时候没有定义'HtmlWebpackPlugin'这个变量名,只是单纯的require('html-webpack-plugin');我们可以直接使用 new html-webpack-plugin()吗？
    new HtmlWebpackPlugin({
      template: 'index.html',//./dist/index.html的模板和./src/index.html保持一致

    }),//假如我们导入html-webpack-plugin的时候没有定义'HtmlWebpackPlugin'这个变量名,只是单纯的require('html-webpack-plugin');我们可以直接使用 new html-webpack-plugin()吗？
  ],

  resolve: {//和上面的module并列
      alias:{//一定要有这个别名的对象,少了就会报错.resolve has an unknown property 'vue$'.

        'vue$':'vue/dist/vue.esm.js'//会选择runtime-compiler这个编译环境
      },
  },

  devServer: {
    contentBase: './dist',//为哪一个文件夹提供本地服务,默认是根文件夹,我们这里要填写./dist
    inline: true,//页面实时刷新
    // port: 8080,//可以不用指定端口,默认是8080
    // historyApiFallback:,
  },
}