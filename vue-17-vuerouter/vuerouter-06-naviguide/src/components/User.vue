<template>
  <div>
    <h4>This is a user page</h4>
    <h4>{{useridshow}}</h4>
  </div>
</template>

<script>
  export default {
    name: "User",
    created() {
      //  当Home.vue组件创建的时候，会对create()进行一次回调！既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      console.log('Home.vue create()');
      //既然每次都会对create函数进行回调，那么我们可不可以加点自己的"私货",将网页的title改为自己想要的title呢？当然可以！！
      // document.title = '用户';//也可以放在mounted()函数里面
    },

    mounted() {
      //当我们将template挂载到dom上的时候会调用一次mounted()!
      console.log('Home.vue mounted()');
      // document.title = '用户';

    },


    computed: {

      useridshow() {//用来显示当前活动的路由(user)的信息的计算属性

        return this.$route.params.userid;//$route和$router参数是不同的,$route表示路由数组(映射表)中的一个路由(因为当前是在User.vue组件下面,那么就会去找User.vue组件对应的路由),$router表示路由对象

      }
    },
  }
</script>

<style scoped>

</style>