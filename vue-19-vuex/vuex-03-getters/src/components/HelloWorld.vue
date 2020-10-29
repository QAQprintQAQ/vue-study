<template>
  <div>
<!--    <h4>{{counter}}</h4>-->
    <h4>{{$store.state.counter}}</h4>
<!--    <h4>{{$store.state.counter*$store.state.counter}}</h4>-->
    <h4>{{$store.getters.powerCounter}}</h4>
    <h4>{{$store.getters.agegt21}}</h4>
    <h4>{{$store.getters.agegt21counts}}</h4>
    <h4>{{$store.getters.agegt21counts2}}</h4>
    <h4>{{$store.getters.agestu(23)}}</h4>
    <h4>{{$store.getters.agestu2(23)}}</h4>
    <h4>{{$store.getters.agestu3(23)}}</h4>

  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    /*
    props: {
      counter: {
        type: Number,
      },
    },

     */

  }
</script>

<style scoped>

</style>