import {sum} from "./ming.js";
let name = 'xiaohong';
let age = 20;
let flag = false;//这里我们要注意,ming.js已经定义了flag这个变量,同时定义会出现命名冲突,怎么处理呢？当然是在index.html导入.js文件的时候加上type=moudle属性,这样就不会发生冲突了

console.log('===========hong===========');
console.log(sum(30, 50));

