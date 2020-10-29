<template>
  <div id="app">
    <div id="nav">
      <router-link to="/hello">你好</router-link>|
      <router-link to="/home">首页</router-link>|
      <router-link to="/about">关于</router-link>|
      <router-link v-bind:to="'/user/'+userid">用户</router-link>|<!--v-bind:表示动态的绑定属性to,单引号表示一个真实的字符串，userid是一个变量-->
<!--      <router-link to="/profile">档案</router-link>-->
<!--      通过router-link实现query的参数传递-->
<!--      <router-link v-bind:to="{path:'/profile',query:{name:'liwenli',age:20,sex:'male',height:178}}">档案</router-link>-->
<!--      通过javascript实现query的传递参数-->
      <button v-on:click="profileclick()" v-bind:to="{path:'/profile',query:{name:'liwenli',age:20,sex:'male',height:178}}">档案</button>
       <router-view></router-view>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'App',

    data() {
      return {
        userid: 'liwenli',//这个是在App.vue中使用，所以是在App.vue的data()中，而不是在User.vue中！
      };
    },

    methods: {
      profileclick() {
        console.log('profileclick');
        this.$router.push({

          path: '/profile',
          query: {
            name: 'liwenli',
            age: 20,
            sex:'male',
            height: 178,
          },
        });
      },
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
