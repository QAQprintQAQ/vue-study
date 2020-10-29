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
import {cpnapp} from "./vue/cpnapp.js";//从vue目录下导入子组件cpnapp,这已经算是一个比较好的封装了
// import cpnapp2 from "./vue/cpnapp2";//export default的导入方式
//定义一个vue组件,用于抽离vue实例中的template:``,代码
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
//创建一个vue实例
let vue = new Vue({
  el: '#app',

  /*
      以下的这些代码都交给cpnapp这个组件去完成。
      我们只需要调用<cpnapp></cpnapp>这个标签就行了,调用<cpnapp></cpnapp>.
      我们可以去index.html中的vue实例<div id="app"><cpnapp></cpnapp></div>中调用,也可以在这个vue实例template:'<cpnapp></cpnapp>',中调用

   */
  //当vue实例中el,template都存在的时候,vue实例中的template:``,中的html标签代码会替换掉index.html中的<div id="app"></div>。
  //即index.html中的vue实例<div id="app"><cpnapp></cpnapp></div>中调用,也可以在这个vue实例template:'<cpnapp></cpnapp>',是等价的！
  template: '<cpnapp></cpnapp>',//这里用的已经不是main.js中的组件cpnapp了,而是./src/vue/cpnapp.js中的子组件cpnapp
  //   `
  //   <div>
  //     <h4>{{message}}</h4>
  //     <h4>{{name}}</h4>
  //     <h4>{{height}}</h4>
  //     <button v-on:click="btnclick()">转换</button>
  //   </div>
  // `,

  // data: {
  //   message: 'hello webpack',
  //   name: 'liwenli',
  //   height: 178,
  // },
  //
  // methods: {
  //   btnclick() {
  //     this.message = 'hello vue';
  //     this.name = 'wangshuwei';
  //     this.height = 165;
  //   },
  // },

  components: {
    cpnapp: cpnapp,//或者直接写cpnapp(使用的是es6对象增强写法)这里用的已经不是main.js中的组件cpnapp了,而是./src/vue/cpnapp.js中的子组件cpnapp
  }

});