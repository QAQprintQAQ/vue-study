<template>
  <div id="app">
    <div id="nav">
      <h4>{{message}}</h4>
      <h4>{{$store.state.counter}}</h4>
      <button v-on:click="addition()">+</button>
      <button v-on:click="subtration()">-</button>
<!--      <h4>{{$store.state.counter*$store.state.counter}}</h4>-->
      <h4>{{$store.getters.powerCounter}}</h4>
      <h4>{{$store.getters.agegt21}}</h4>
      <h4>{{$store.getters.agegt21counts}}</h4>
      <h4>{{$store.getters.agegt21counts2}}</h4>
      <h4>{{$store.getters.agestu(23)}}</h4>
      <h4>{{$store.getters.agestu2(23)}}</h4>
      <h4>{{$store.getters.agestu3(23)}}</h4>
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

    methods: {
      addition() {
        this.$store.commit('increment');
      },

      subtration() {
        this.$store.commit('decrement');

      },

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
