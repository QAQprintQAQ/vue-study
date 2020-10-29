<template>
  <div>
    <h4>This is profile page</h4>
<!--    注意这里是{{$route.query.name}}，而不是{{$route.params.name}}，因为这里是query传递参数而不是params传递参数！！-->
    <h4>{{$route.query}}</h4>
    <h4>{{$route.query.name}}</h4>
    <h4>{{$route.query.age}}</h4>
    <h4>{{$route.query.sex}}</h4>
    <h4>{{$route.query.height}}</h4>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      //  当Home.vue组件创建的时候，会对create()进行一次回调！既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      console.log('Home.vue create()');
      //既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      // document.title = '档案';//也可以放在mounted()函数里面
    },

    mounted() {
      //当我们将template挂载到dom上的时候会调用一次mounted()!
      console.log('Home.vue mounted()');
      // document.title = '档案';

    },

  }
</script>

<style scoped>

</style>