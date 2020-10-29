<template>
  <div>
    <h4>Home.vue</h4>
  </div>
</template>

<script>
  import axios from 'axios';

  /*

  //实现多个axios实例

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
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>