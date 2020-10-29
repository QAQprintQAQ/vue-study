const path = require('path');//动态路径需要用到node的核心包,需要进行初始化等
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口
  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径
    filename: 'bundle.js',//导出地文件名
    publicPath: './dist/',//表示打包过的url(静态资源文件,图片等)文件都放在'./dist/'目录下面,有些版本需要'../dist/'
  },

  module:{
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
              /*
                如果加载的图片超过这个限制就会报错,需要安装file-loader。
                当加载的图片小于limit时，会将图片编译成base64字符串形式图片
                当加载的图片大于limit时候,要使file-loader模块进行加载 npm install --save-dev file-loader@3.0.1
               */
              name: 'img/[name].[hash:8].[ext]',
              /*
                注意这个一定要写在options里面,写在options外面会被认为是无效的
                [name],表示图片的名字的变量,这个名字就是webpack没有打包时候的./src/img/下面的照片的名字.一定要写中括号,这样写才是变量的表示,要不然就是img/name这个照片
                [hash]为了防止同一个目录下面出现重复的名字而设置的hash值,hash值默认是32位,但是我们一般用不到那么多位,我们就选取了8位。也要写上中括号,写上中括号才是变量的表示,否则就是普通的名字
                [ext]表示后缀名的变量名(.[ext],可以是jpg,png等)也要写上中括号,要不然就不是后缀名了,.ext 没有这种文件

               */

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
  }

}