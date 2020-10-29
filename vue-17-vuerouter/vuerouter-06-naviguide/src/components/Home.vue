<template>
  <div>
    <h4>This is a home page</h4>

    <div>
      <router-link to="/home/homenews">新闻</router-link>|
      <router-link to="/home/homemessage">消息</router-link>
      <router-view></router-view><!--表示嵌套路由在这里显示？-->

    </div>
  </div>

</template>

<script>
  export default {
    name: "Home",
    created() {
    //  当Home.vue组件创建的时候，会对create()进行一次回调！既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      console.log('Home.vue create()');
      //既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      // document.title = '首页';//也可以放在mounted()函数里面
    },

    mounted() {
    //当我们将template挂载到dom上的时候会调用一次mounted()!
      console.log('Home.vue mounted()');
      // document.title = '首页';

    },

    updated() {
    //  当界面发生一次刷新(改变)的时候会来调用一次updated()！
      console.log('updated()');
    },
    destroyed() {
      console.log('Home.vue destroyed()');//Home.vue被销毁
    }

  }
</script>

<style scoped>

</style>