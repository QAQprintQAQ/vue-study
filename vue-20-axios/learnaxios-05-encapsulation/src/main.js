import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {request,request2,request3,request4} from "./network/axiosencapsulation";//导入网络请求的封装，也就是request！！！！
Vue.config.productionTip = false
new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
//axios encapsulation
//1通过回调函数获取返回的网络请求结果
request({//request为axios实例封装！！
  url: '/home/data?type=sell&page=3',//config对象不限于url,还可以传入其他的配置(config)
}, function success(res) {//如果request函数运行到success(res)，request函数会回调自身函数里面的success函数,并将网络请求的成功的返回结果(数据)res作为success的参数，之后success函数将res数据打印
  console.log(res);
}
, function failure(err){//如果request函数到failure(err)，request函数会回调自身函数里面的failure函数,并将网络请求失败的错误信息err作为failure的参数，之后failure函数将err信息打印
  console.log(err);
});//三个参数分别是config,success(),failure().

//2通过回调函数获取返回的网络请求结果
request2({//传入的config对象里面又包含baseConfig对象，success函数，failure函数！
  baseConfig: {
    url: '/home/data',
    params: {
      type: 'sell',
      page: '3',
    },
  },
  success:function (res) {//这是对象下面的函数写法，当然这是es5的写法，我们也可以用es6写法！   success(res){},
    console.log(res);
  },
  failure: function (err) {//这是对象下面的函数写法，当然这是es5的写法，我们也可以用es6写法！  failure(err){},
    console.log(err);
  }
}) ;

//通过Promise实现网络请求结果的返回
request3({//传入的config对象里面又包含baseConfig对象，success函数，failure函数！
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


//直接返回axios的实例
request4({//传入的config对象里面又包含baseConfig对象，success函数，failure函数！
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



//生成多个axios的实例，实现不同的配置
/*
//没有实现多个axios实例之前，只有一个默认axios实例和一个默认全局配置！
axios.defaults.baseURL = 'http://123.207.32.32:8000';
axios.defaults.timeout = 5000;//这里是毫秒，axios.defaults.timeout = 5;则会超时！！

axios({
  url: '/home/data?type=sell&page=3',//这个接口是why老师的服务器
}).then((res) => {
  console.log(res);//res为从服务器返回的数据！
});


axios({
  url: '/home/data',
 // 假设我们请求的是http://124.208.33.33:8000/home/data中的数据，
 //  但是我们现在只有一个默认axios实例，因此这里还是会去请求http://123.207.32.32:8000/home/data中的数据。
 //  为了实现请求http://124.208.33.33:8000/home/data数据，我们应该让我们这个url去拼接另外一个baseURL:'http://124.208.33.33:8000'
 //  因此我们要再实现一个axios实例,里面有baseURL:'http://124.208.33.33:8000'等
 //
  params: {
    type: 'sell',
    page: '3',
  },
}).then((res) => {
  console.log(res);//res为从服务器返回的数据！
});

 */

//实现多个axios实例

/*
//axiosinstance1
const axiosinstance1 = axios.create({//axios.create({})里面{}表示一个对象，创建一个axios实例，名字叫做axiosinstance1
  baseURL : 'http://123.207.32.32:8000',//每个axios实例下面baseURL都是可以不同的，根据自己的实际情况创建一个axios实例！！
  timeout : 10000,//每个axios实例的timeout等都是可以不一样的，互不影响！！
});

axiosinstance1({//axios实例axiosinstance1，axiosinstance1({})对比axios({}),axios({})就是axios默认的实例
  url: '/home/data?type=sell&page=3',//这个接口是why老师的服务器
}).then((res) => {
  console.log('======axiosinstance1======');
  console.log(res);//res为从服务器返回的数据！
});

//axiosinstance2
const axiosinstance2 = axios.create({
  baseURL : 'http://123.207.32.32:8000',
  timeout : 5000,//这里是毫秒，axios.defaults.timeout = 5;则会超时！！
});

axiosinstance2({//axios实例axiosinstance1，axiosinstance1({})对比axios({}),axios({})就是axios默认的实例
  url: '/home/data?type=sell&page=3',//这个接口是why老师的服务器
}).then((res) => {
  console.log('======axiosinstance2======');
  console.log(res);//res为从服务器返回的数据！
});


//axiosinstance3
const axiosinstance3 = axios.create({
  baseURL : 'http://123.207.32.32:8000',
  timeout : 8000,
});

axiosinstance3({//axios实例axiosinstance1，axiosinstance1({})对比axios({}),axios({})就是axios默认的实例
  url: '/home/data?type=sell&page=3',//这个接口是why老师的服务器
}).then((res) => {
  console.log('======axiosinstance3======');
  console.log(res);//res为从服务器返回的数据！
});

 */

