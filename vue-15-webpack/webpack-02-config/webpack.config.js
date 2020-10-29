//commonjs语法,这个webpack官网介绍
const path = require('path');//动态路径需要用到node的核心包,需要进行初始化等
/*
require('path')中的'path'是node.js的核心包,需要我们对node进行初始化,
1.打开terminal,切换到当前目录下面C:\Users\imliw\IdeaProjects\vue-study\vue-15-webpack\webpack-02-config>
2.输入npm init
3.填写package name等


C:\Users\imliw\IdeaProjects\vue-study\vue-15-webpack\webpack-02-config>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webpack-02-config) hellowebpack
version: (1.0.0)
description:
entry point: (webpack.config.js) index.js
test command:
git repository:
keywords:
author:
license: (ISC)


About to write to C:\Users\imliw\IdeaProjects\vue-study\vue-15-webpack\webpack-02-config\package.json:
{
  "name": "hellowebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

4.你会发现目录下面会自动生成一个package.json文件,这个文件主要是告诉我们当前项目的一些信息
5.我们这个项目中package.json没有什么依赖,假如package.json有其他依赖,我们需要在terminal中输入命令npm install 来添加其他依赖。
C:\Users\imliw\IdeaProjects\vue-study\vue-15-webpack\webpack-02-config>npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN hellowebpack@1.0.0 No description
npm WARN hellowebpack@1.0.0 No repository field.
6.执行了npm install命令后,我们的项目又增加了一个package-lock.json文件
7.
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口
  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径
    filename: 'bundle.js',//导出地文件名
  }

}
 */
module.exports={//注意不是 module.exports{},而是module.exports={},不要少了'='

  entry: './src/main.js',//入口
  output:{//出口

    path: path.resolve(__dirname,'dist'),//动态获取导出地路径,__dirname表示当前路径,'dist'表示当前路径下面的dist目录,这样就生成了一个动态的绝对路径
    filename: 'bundle.js',//导出地文件名
  }

}