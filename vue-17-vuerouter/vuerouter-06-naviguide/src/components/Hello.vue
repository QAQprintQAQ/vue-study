<template>
  <div>
    <h4>This is a hello page</h4>
  </div>
</template>

<script>
  export default {
    name: "Hello",
    created() {
      //  当Home.vue组件创建的时候，会对create()进行一次回调！既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      console.log('Home.vue create()');
      //既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      // document.title = '你好';//也可以放在mounted()函数里面
    },

    mounted() {
      //当我们将template挂载到dom上的时候会调用一次mounted()!
      console.log('Home.vue mounted()');
      // document.title = '你好';

    },

  }
</script>

<style scoped>

</style>