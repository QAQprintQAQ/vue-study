
//这里使用的是commonjs模块化规范
const {add, mul} = require('./js/mathUtils');//common.js语法和es6还不同
console.log(add(30, 50));
console.log(mul(30, 50));

//这里使用的是es6模块化规范
import {name, age, sex, height} from "./js/info";

console.log(name + ' ' + age + ' ' + sex + ' ' + height);

require('./css/normal.css');//不需要设置接收的变量,因为我们不需要css文件里面的内容,只需要添加一下依赖就行了
require('./css/special.less');//不需要设置接收的变量,因为我们不需要less文件里面的内容,只需要添加一下依赖就行了

document.writeln('hello vue');//这几个字主要是用来检验less文件中定义的文字样式的