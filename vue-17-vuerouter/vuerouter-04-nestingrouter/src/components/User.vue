<template>
  <div>
    <h4>This is a user page</h4>
    <h4>{{useridshow}}</h4>
  </div>
</template>

<script>
  export default {
    name: "User",

    computed: {

      useridshow() {//用来显示当前活动的路由(user)的信息的计算属性

        return this.$route.params.userid;//$route和$router参数是不同的,$route表示路由数组(映射表)中的一个路由(因为当前是在User.vue组件下面,那么就会去找User.vue组件对应的路由),$router表示路由对象

      }
    },
  }
</script>

<style scoped>

</style>