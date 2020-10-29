
//这里使用的是commonjs模块化规范
const {add, mul} = require('./mathUtils');//common.js语法和es6还不同
console.log(add(30, 50));
console.log(mul(30, 50));

//这里使用的是es6模块化规范
import {name, age, sex, height} from "./info";

console.log(name + ' ' + age + ' ' + sex + ' ' + height);

