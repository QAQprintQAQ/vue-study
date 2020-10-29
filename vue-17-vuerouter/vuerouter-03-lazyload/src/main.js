import Vue from 'vue'
import App from './App.vue'
//4.导入router
import router from './router';//和 import router from './router/index.jsp';等价。当我们导入的是目录的时候,会自动地去找index.js文件。所以可以简写为import router from './router';


Vue.config.productionTip = false

new Vue({
  router,  //等价于 router: router,//将router挂载在vue实例下面,表示使用new出来的router对象了！
  render: h => h(App),//render会替换 '#app',而render里面是App.vue组件,即App.vue会替换'#app'
}).$mount('#app')
