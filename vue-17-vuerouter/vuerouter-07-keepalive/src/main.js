import Vue from 'vue'
import App from './App.vue'
//4.导入router
import router from './router';//和 import router from './router/index.jsp';等价。当我们导入的是目录的时候,会自动地去找index.js文件。所以可以简写为import router from './router';


Vue.config.productionTip = false

new Vue({
  router,  //等价于 router: router,//将router挂载在vue实例下面,表示使用new出来的router对象了！
  render: h => h(App),//render会替换 '#app',而render里面是App.vue组件,即App.vue会替换'#app'
}).$mount('#app')

/*
router.beforeEach(function (to,from,next) {//也可以写成箭头函数！！！
  // 从 form 跳转到 to
  // document.title = to.meta.title;//因为首页里面有嵌套路由，这种方式无法取到有嵌套路由的title！
  document.title = to.matched[0].meta.title;//这种方式可以取到有嵌套路由的title！
  next();//这个函数是必须要调用的，只有调用了vue才会知道需要进行下一步，要不然就不能实现跳转

})

 */

router.beforeEach((to, from, next) => {//箭头函数的写法
  // 从 form 跳转到 to
  // document.title = to.meta.title;//因为首页里面有嵌套路由，这种方式无法取到有嵌套路由的title！
  document.title = to.matched[0].meta.title;//这种方式可以取到有嵌套路由的title！
  next();//这个函数是必须要调用的，只有调用了vue才会知道需要进行下一步，要不然就不能实现跳转

});