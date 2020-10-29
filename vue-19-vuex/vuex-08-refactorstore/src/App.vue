<template>
  <div id="app">
    <div id="nav">

      <h4>modulesA</h4>
      <h4>====state====</h4>
<!--      <h4>{{$store.state.modulesA.state.info.name}}</h4>这种写法是错误的！modulesA只是store的一个对象。modulesA中的state其实就是store中的state，只是抽离了而已，所以不需要modulesA后面的state了！！-->
      <h4>{{$store.state.modulesA.info.name}}</h4>
      <h4>====mutations=====</h4>
      <button v-on:click="updateprops()">修改属性</button>
      <h4>====getters====</h4>
      <h4>getstring</h4>
      <h4>{{$store.getters.getstring}}</h4>
      <h4>getstring2</h4>
      <h4>{{$store.getters.getstring2}}</h4>
      <h4>异步修改属性</h4>
      <button v-on:click="asyncupdateprops()">修改属性</button>
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
      updateprops() {
        this.$store.commit('updateproperty');

        /*先去store下面的mutations找updateproperty函数，
        如果没有找到就会去modules下面的moduleA,moduleB,moduleC寻找updateproperty函数
        (因此我们store里面的mutations下面的方法不要和modulesA下面的mutations函数名相同！！！！)
         */
      },

      asyncupdateprops() {
        this.$store.dispatch('actionupdateproperty').then((result) => {
          console.log(result);//result 参数的值就是actions中的resolve('异步修改属性，成功！');
          console.log('报告上级，resolve(\'异步修改属性，成功！\'); 传递的参数接收到了！！！内容是 异步修改属性，成功！');
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
