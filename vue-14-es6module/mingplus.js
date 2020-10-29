//这是xiaoming的附加的.js文件,在这个文件中,xiaoming会用到ming.js中的flag这个变量,
// 但是我们已经在index.html中通过type=moudle将所有的.js文件都模块化了,
// 那么小明的附加文件mingplus.js文件怎么才能获取ming.js这个文件中的flag这个变量呢？这里就会用到es6语法中的导入和导出

//导入变量的两种方式:
import {flag} from "./ming.js";//这里的.js后缀名是必须要写的！要不然会报错.第一种导入的方式,导入某个变量值,但是假如我们需要导入多个变量呢？
import {flag, sum, age, sex, height} from "./ming.js";//这样导入多个值也太难了,我们通常都是一起导入的,而且还可以避免有重名的
import * as varming from "./ming.js";//将ming.js中export的变量名全部导入到一个名为varming对象。然后通过varming.flag,varming.age等获取变量
import myFunc from  './ming.js';//导入export default的变量

if (flag) {
  console.log('===========mingplus===========');
  console.log('import flag from ming.js');//当没有导入ming.js文件的时候,这里会在控制台中报错,flag没有定义!
}

console.log('---varming-----');
console.log(varming.name);

console.log('----------call export default-------- ');

myFunc();//调用。export default
