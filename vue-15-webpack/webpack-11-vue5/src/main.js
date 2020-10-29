//这里是common.js模块化规范
const {add, mul} = require('./js/mathUtils');
console.log(add(30, 50));
console.log(mul(30, 50));

//这里使用的是es6模块化规范
import {name, age, sex, height} from "./js/info";
console.log(name + ' ' + age + ' ' + sex + ' ' + height);

require('./css/normal.css');
require('./css/special.less');

document.writeln('hello vue');

//依赖vue
import Vue from 'vue';
import cpnapp from "./vue/cpnapp.vue";//注意导入vue的时候一定要加后缀名'.vue'。导入./src/vue/cpnapp.vue 这个文件(依赖./src/vue/cpnapp.vue)。

//定义一个vue组件,用于抽离vue实例中的template:``,代码。这个子组件已经被vue component文件 cpnapp.vue 代替。
/*
let cpnapp = {

  template:`
    <div>
      <h4>{{message}}</h4>
      <h4>{{name}}</h4>
      <h4>{{height}}</h4>
      <button v-on:click="btnclick()">转换</button>
    </div>
  `,

  data() {
    return {
      message: 'hello webpack',
      name: 'liwenli',
      height: 178,
    };
  },

  methods: {
    btnclick() {
      this.message = 'hello vue';
      this.name = 'wangshuwei';
      this.height = 165;
    },
  },

};


 */
//创建一个vue实例。


let vue = new Vue({
  el: '#app',

 template: '<cpnapp></cpnapp>',//这个不能注释掉,这里其实调用的是cpnapp.vue这个vue组件,已经不是自己创建的子组件cpnapp了


  components: {
  cpnapp: cpnapp,//或者直接写cpnapp(使用的是es6对象增强写法)//这个不能注释,这里用的其实是导入的cpnapp.vue文件的组件了
}

});
