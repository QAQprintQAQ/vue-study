<template>
  <div id="app">
    <div id="nav">

      <h4>{{$store.state.info}}</h4>
      <button v-on:click="updateprops()">修改属性</button>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',

      };
    },

    methods: {

      //这是涉及promise的代码
      updateprops() {
        this.$store.dispatch('actionupdateproperty').then((result) => {
          //result 这个参数就是actions中的 resolve('actions finish commit!!');中的"'actions finish commit!!'"
          console.log(result);
          console.log('取得了actions传来的result参数 actions finish commit!!');
        });
      },

    },

  };
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
