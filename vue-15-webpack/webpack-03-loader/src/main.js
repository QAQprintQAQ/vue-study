
//这里使用的是commonjs模块化规范
const {add, mul} = require('./js/mathUtils');//common.js语法和es6还不同
console.log(add(30, 50));
console.log(mul(30, 50));

//这里使用的是es6模块化规范
import {name, age, sex, height} from "./js/info";

console.log(name + ' ' + age + ' ' + sex + ' ' + height);

/*假如我们现在这个项目里面有css样式表,难道我们需要将样式表一个一个地从./src/css文件夹中一个一个地导入到html页面吗,答案是否定的。
 我们还是可以通过webpack将css文件进行打包。可能又会有疑问了,css不像是js文件,我们可以在webpack的入口main.js文件中通过导入相关依赖的js文件,
 这样的话,webpack就会在打包的时候根据main.js会依赖哪些js文件而做出相应的处理。但是css文件不同,我们的webpack入口main.js不需要依赖css文件
 这时候我们怎么在webpack入口main.js添加一些css依赖呢？
 1.可以通过require(''),来添加css依赖,注意我们这里不需要定义变量 let varname = require('') 来接收css文件,js文件中用到const {add, mul}
 是因为我们确实需要用到其他js中的变量,但是我们这里不要用到css文件中的内容,则只需要添加一个依赖关系就好了。
 2.这个时候我们也许就会直接打开终端terminal 输入调用运行本项目中的局部webpack对css文件也进行打包,但是会发生错误,因为webpack本身是没有这么强大
 的能力来处理css文件的,我们需要导入css文件相关的loader来帮助webpack进行打包css文件
 */


//依赖css文件,以让webpack对css文件进行依赖处理
require('./css/normal.css');//不需要设置接收的变量,因为我们不需要css里面的内容,只需要添加一下依赖就行了