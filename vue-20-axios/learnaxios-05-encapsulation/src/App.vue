<template>
  <div id="app">
    <div id="nav">

      <h4>{{$store.state.info}}</h4>
      <button v-on:click="updateprops()">修改属性</button>
      <Hello></Hello>

    </div>
  </div>
</template>
<script>

  import Hello from "./components/Hello";
  import About from "./components/About";
  import Home from "./components/Home";

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

    components: {

      Hello: Hello,
      About: About,
      Home:Home,

      // HelloWorld:HelloWorld,我们一定要将这句话删除！
      // HelloWorld.vue已经被我删除了，但是我却还在components中让HelloWorld.vue成为自己的子组件！导致页面显示出来！！！！！
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
