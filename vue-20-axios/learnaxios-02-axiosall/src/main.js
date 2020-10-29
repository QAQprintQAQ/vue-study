import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
axios({
  url: 'http://123.207.32.32:8000/home/multidata',//这个接口是why老师的服务器
  // method: 'post',//405 (METHOD NOT ALLOWED)

}).then((res) => {
  console.log(res);//res为从服务器返回的数据！
});


axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',//这个接口是why老师的服务器
  //
  // //如果显得觉得上面的url过长也可以使用下面的方法！
  // url: 'http://123.207.32.32:8000/home/data',//这个接口是why老师的服务器
  // params: {
  //   type: 'sell',
  //   page: '3',
  // },


}).then((res) => {
  console.log(res);//res为从服务器返回的数据！
});

axios({
  url: 'http://123.207.32.32:8000/home/data',//这个接口是why老师的服务器
  // method: 'post',//405 (METHOD NOT ALLOWED)
  params: {
    type: 'sell',
    page: '3',
  },
}).then((res) => {
  console.log(res);//res为从服务器返回的数据！
});
*/

//axios.all
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',//如果觉得url过长，则可以使用params对象

}), axios({

  url: 'http://123.207.32.32:8000/home/data',//这个接口是why老师的服务器
  params: {
    type: 'sell',
    page: '3',
  },

})]).then((results) => {
  console.log('=====axios.all======');
  console.log(results);//两个网络请求都完成的时候再打印数组
});

//results[0],results[1]
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',//如果觉得url过长，则可以使用params对象

}), axios({

  url: 'http://123.207.32.32:8000/home/data',//这个接口是why老师的服务器
  params: {
    type: 'sell',
    page: '3',
  },

})]).then((results) => {
  console.log('=====results index======');
  console.log(results);//两个网络请求都完成的时候再打印数组
  console.log(results[0]);
  console.log(results[1]);
});


//axios.spread
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/data?type=sell&page=3',//如果觉得url过长，则可以使用params对象

}), axios({

  url: 'http://123.207.32.32:8000/home/data',//这个接口是why老师的服务器
  params: {
    type: 'sell',
    page: '3',
  },

})]).then(axios.spread((result1, result2) => {
  console.log('=====axios.spread=====');
  console.log(result1);
  console.log(result2);
}));

