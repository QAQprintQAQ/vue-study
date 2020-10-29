<template>
<!-- vue Cpn 的html在这-->
  <div><!--这个div root标签是必需要的!-->

    <h4 class="title">我是Cpn vue component 的标题</h4>
    <p>{{message}}</p>
    <h4 class="title">我是Cpn vue component 的内容</h4>
    <p >{{info}}</p>
    <h4 class="title">我是Cpn vue component 的结尾</h4>
    <p>{{movies}}</p>
  </div>
</template>

<script>

  export default {//会默认自动全部导出
    //vue Cpn的javascript在这
    name: "Cpn",//这里本来是没有 ','结尾的,我们需要手动的加上
    data() {//和自定义的组件一样,这里的data也是函数,不是对象
      return {//return的是一个对象(里面包含了很多数据)
        message: 'hello vue Cpn',
        info:{
          name: 'vue Cpnf',
          age: 2,
          sex: 'other',
          height: 23,
        },
        movies: ['百变小樱魔术卡', '犬夜叉', '复仇者联盟'],

      };
    },
  };
</script>

<style scoped>
/*
  vue Cpn的css(样式)在这
 */
  .title{
    color: darkgoldenrod;
    font-size: 100px;
  }
</style>