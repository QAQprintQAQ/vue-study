<template>
<!--  自己创建的子组件cpnapp中的template:``,(也就是html代码)放在这里-->
  <div>
    <h1 class="title">标题</h1>
    <h4>{{message}}</h4>
    <h4>{{name}}</h4>
    <h4>{{height}}</h4>
    <button v-on:click="btnclick()">转换</button>
    <Cpn></Cpn><!--使用Cpn.vue这个子组件！-->
  </div>
</template>

<script>
//自己创建的子组件cpnapp中的javascript代码放在这里
  import Cpn from "./Cpn.vue";//这里'.vue'这个后缀不能省略。在这里导入Cpn.vue文件(当作cpnapp.vue的子组件)
  export default {
    name: "cpnapp",
    components: {//用于注册子组件
      Cpn: Cpn,//在cpnapp.vue里面注册一个子组件Cpn.vue
    },
    data() {
      return {
        message: 'hello webpack',
        name: 'liwenli',
        height: 178,
      };
    },

    methods: {
      btnclick() {
        this.message = 'hello vue';
        this.name = 'wangshuwei';
        this.height = 165;
      },
    },

  }
</script>

<style scoped>
  /*
  自己创建的子组件cpnapp中的css代码放在这里,因为自己没有写css代码,所以自己写一些css样式。
   */

  .title {
    /* 这里定义了一个title  css类,在<template></template>里面也要使用才会生效的 */
    color: green;

  }

</style>