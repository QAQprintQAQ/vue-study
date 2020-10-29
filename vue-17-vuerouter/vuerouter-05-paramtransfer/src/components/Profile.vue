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
    name: "Profile"
  }
</script>

<style scoped>

</style>