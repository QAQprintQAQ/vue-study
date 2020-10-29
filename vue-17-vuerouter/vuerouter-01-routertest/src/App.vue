<template>
  <div id="app">
    <div id="nav">

      <router-link to="/hello">你好</router-link>|
      <router-link to="/home">首页</router-link>|
      <router-link to="/about">关于</router-link>
             <router-view></router-view>


<!--      tag="button"-->
<!--      <router-link tag="button" to="/hello">你好</router-link>|-->
<!--      <router-link tag="button" to="/home">首页</router-link>|-->
<!--      <router-link tag="button" to="/about">关于</router-link>-->
<!--                   <router-view></router-view>-->


      <!--      replace-->
<!--      <router-link to="/hello" replace>你好</router-link>|-->
<!--      <router-link to="/home" replace>首页</router-link>|-->
<!--      <router-link to="/about" replace>关于</router-link>-->

<!--      通过代码的方式修改vue-router跳转,不用vue提供的router-link-->
<!--       <button v-on:click="homeclick()">你好</button>|-->
<!--       <button v-on:click="helloclick()">首页</button>|-->
<!--       <button v-on:click="aboutclick()">关于</button>-->

<!--     手写代码模拟tag="div"-->
<!--       <div v-on:click="homeclick()">你好</div>|-->
<!--       <div v-on:click="helloclick()">首页</div>|-->
<!--       <div v-on:click="aboutclick">关于</div>-->
<!--       <router-view></router-view>-->

    </div>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {

      //不要直接用history来修改,需要通过router代理分发。
      //vue在每一个组件里面都加了一个$router这个属性(这个属性没有显式地在data(),但是确实存在vue源码中),我们可以通过$router修改vue-router跳转
      homeclick() {
        console.log('homeclick');
        // this.$router.push('/home');//$router是vue为每一个vue实例提供地属性,可以直接用
        this.$router.replace('/home');//$router是vue为每一个vue实例提供地属性,可以直接用
      },

      helloclick() {
        console.log('helloclick');
        // this.$router.push('/hello');//$router是vue为每一个vue实例提供地属性,可以直接用
        this.$router.replace('/hello');//$router是vue为每一个vue实例提供地属性,可以直接用

      },

      aboutclick() {
        console.log('aboutclick');
        // this.$router.push('/about');//$router是vue为每一个vue实例提供地属性,可以直接用
        this.$router.replace('/about');//$router是vue为每一个vue实例提供地属性,不能返回上一页。

      },
    },
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
