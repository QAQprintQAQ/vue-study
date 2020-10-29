import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request} from "./network/axiosencapsulation";//导入网络请求的封装，也就是request！！！！
Vue.config.productionTip = false
new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')

//axios encapsulation
//直接返回axios的实例
request({
  url: '/home/data',
  params: {
    type: 'sell',
    page: '3',
  },

}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

