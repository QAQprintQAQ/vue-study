<template>
  <div id="app">
      <h1>服务器响应的数据appres如下</h1>
      <p>{{appres}}</p>
  </div>
</template>
<script>
  import {request} from "./network/axiosencapsulation";
  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',
        appres: '',
      };
    },
    created() {//创建生命周期函数
      //直接返回axios的实例
      request({
        url: '/home/data',
        params: {
          type: 'sell',
          page: '3',
        },
      }).then((res) => {
        // console.log(res);
        this.appres = res;//将向服务器发送请求得到的响应数据保存到App.vue本地的data()里面。
      }).catch((err) => {
        console.log(err);
      });
    }
  };

</script>
<style>

</style>
