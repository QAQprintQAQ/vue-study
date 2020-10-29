
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

import Vue from 'vue';

let vue = new Vue({

  el: '#app',
  /*
    把index.html中的展示页面写到tempalte:``,  将html语法写在这里确实感觉到很不舒服,但是实现了当vue中的data:{}改变的时,不修改index.html,而修改template:``,
    当vue实例中el,template都存在的时候,vue实例中的template:``,中的html标签代码会替换掉index.html中的<div id="app"></div>。这是vue的工作了
   */
  template:`
    <div><!--这个div标签是必须的,因为需要一个root标签对代码进行包裹,假如没有div标签就会无法显示vue的页面-->
      <h4>{{message}}</h4>
      <h4>{{name}}</h4>
      <h4>{{height}}</h4>
      <button v-on:click="btnclick()">转换</button>
    </div>
  `,

  data: {
    message: 'hello webpack',
    name: 'liwenli',
    height: 178,
  },

  methods: {
    btnclick() {
      this.message = 'hello vue';
      this.name = 'wangshuwei';
      this.height = 165;
    },

  },


});