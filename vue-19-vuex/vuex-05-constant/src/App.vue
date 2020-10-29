<template>
  <div id="app">
    <div id="nav">
<!--      <h4>{{message}}</h4>-->
<!--      <h4>{{counter}}</h4>-->
<!--      <button v-on:click="counter++">+</button>&lt;!&ndash;this.counter++是错误的！&ndash;&gt;-->
<!--      <button v-on:click="counter&#45;&#45;">-</button>-->
<!--      <hello-world v-bind:counter="counter"></hello-world>-->

<!--      <h4>{{message}}</h4>-->
<!--      <h4>{{$store.state.counter}}</h4>-->
<!--      <button v-on:click="$store.state.counter++">+</button>-->
<!--      <button v-on:click="$store.state.counter&#45;&#45;">-</button>-->
<!--      <hello-world></hello-world>-->

      <h4>{{message}}</h4>
      <h4>{{$store.state.counter}}</h4>
      <h4>{{$store.getters.getstu}}</h4>

      <button v-on:click="addition()">+</button>
      <button v-on:click="subtration()">-</button>
      <button v-on:click="additioncount(6)">+6</button>
      <button v-on:click="addstu()">添加学生</button>
      <hello-world></hello-world>
      <h4>{{$store.state.info}}</h4>
      <button v-on:click="updateprops()">修改属性</button>
      <button v-on:click="addprops()">增加属性</button>
      <button v-on:click="addprops2()">增加属性2</button>

    </div>
  </div>
</template>
<script>
  import HelloWorld from "./components/HelloWorld";
  import {INCREMENT} from "./store/mutations-types";//从mutation-types.js中导入INCREMENT常量！

  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',
        // counter: 0,
      };
    },

    methods: {
      /*
      addition() {
        this.$store.commit('increment');//这里使用到了increment这个函数名，我们把他用INCREMENT这个常量代替

      },

       */
      addition() {

        // this.$store.commit('increment');//这里使用到了increment这个函数名，我们把他用INCREMENT这个常量代替
        this.$store.commit(INCREMENT);//这里使用到了increment这个函数名，我们把他用INCREMENT这个常量代替

      },

      subtration() {
        this.$store.commit('decrement');

      },

      additioncount(count) {//实现一次加count，n为输入的值，而不是只能加固定的值
        this.$store.commit('incrementcount', count);

      },

      addstu() {//添加学生
        const astu = {id: 116, name: 'liwenli6', age: 27, sex: 'male'};//astu是一个学生对象
        this.$store.commit('addstudent', astu);//将astu学生对象提交到store下面的index.js中的mutations下面的addstudent函数里面。

      },

      updateprops() {
        this.$store.commit('updateproperty');
      },

      addprops() {
        this.$store.commit('addproperty');
      },

      addprops2() {
        this.$store.commit('addproperty2');
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
