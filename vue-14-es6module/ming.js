export let sex = 'male';//export导出的第一种方法,一定义变量就导出(暴露出去)
let height = 178;
let name = 'xiaoming';
let age = 20;
let flag = true;

export function sum(num1, num2) {//一定义就导出变量
  return num1 + num2;

}

if (flag) {
  console.log('============ming==============');
  console.log(sum(20, 30));

}

//导出变量的第二种通过export{}导出多个变量
export {
  //es6 对象的增强写法
    flag,
    sum,
    name,
    age ,
    height,
    sex,

};

//第三种方式。一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名 。这个时候就可以使用export default.export default在同一个模块中，不允许同时存在多个。
// export default function () {
//   console.log('export default');
// };
//怎么导入export default 的这个函数呢？我们来到main.js中，这样使用就可以了这里的myFunc是我自己命名的，你可以根据需要命名它对应的名字
//import myFunc from  './ming.js';



