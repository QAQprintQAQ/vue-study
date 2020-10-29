
//导入变量的两种方式:
import {sex} from "./ming.js";//这里的.js后缀名是必须要写的！要不然会报错.第一种导入的方式,导入某个变量值,但是假如我们需要导入多个变量呢？
import {height} from "./ming.js";//这里的.js后缀名是必须要写的！要不然会报错.第一种导入的方式,导入某个变量值,但是假如我们需要导入多个变量呢？
import {flag, sum, age, sex, height} from "./ming.js";//这样导入多个值也太难了,我们通常都是一起导入的,而且还可以避免有重名的
import * as varming from "./ming.js";//将ming.js中export的变量名全部导入到一个名为varming对象。然后通过varming.flag,varming.age等获取变量

console.log('======hongplus=======');
console.log('sex of xiaoming is  ' + sex + 'height is  ' + height);
