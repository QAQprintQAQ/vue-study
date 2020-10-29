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
    name: "Home"
  }
</script>

<style scoped>

</style>