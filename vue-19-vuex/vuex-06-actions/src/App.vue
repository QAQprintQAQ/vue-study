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
  /*
      updateprops() {
        this.$store.commit('updateproperty');
      },

   */

      //这是未涉及promise的代码(单纯的修改info的属性)
      /*
      updateprops() {
        this.$store.dispatch('actionupdateproperty');
      },

       */

      //这是涉及payload的代码
      /*
       updateprops() {
        this.$store.dispatch('actionupdateproperty', {
        ` //这个对象是payload
          message: '我是携带的信息',
          info: {name:'xxxx',age:20, sex: 'male'},
          success: () => {//函数名为success
            console.log('里面已经完成了');
          }
        }  );
      },

       */

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
