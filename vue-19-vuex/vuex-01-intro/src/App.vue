<template>
  <div id="app">
    <div id="nav">
<!--      <h4>{{message}}</h4>-->
<!--      <h4>{{counter}}</h4>-->
<!--      <button v-on:click="counter++">+</button>&lt;!&ndash;this.counter++是错误的！&ndash;&gt;-->
<!--      <button v-on:click="counter&#45;&#45;">-</button>-->
<!--      <hello-world v-bind:counter="counter"></hello-world>-->

      <h4>{{message}}</h4>
      <h4>{{$store.state.counter}}</h4>
      <button v-on:click="$store.state.counter++">+</button>
      <button v-on:click="$store.state.counter--">-</button>
      <hello-world></hello-world>

    </div>
  </div>
</template>
<script>
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',
        // counter: 0,
      };
    },

    components: {

      HelloWorld:HelloWorld
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
