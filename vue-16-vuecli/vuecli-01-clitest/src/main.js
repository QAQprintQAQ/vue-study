import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',//el:'#app'和.$mount('#app') 是等价的！
  render: h => h(App),
  /*

  render: (h) => {
    return h(App)
  },//render: h => h(App),为简化的形式！
   */
}).$mount('#app')// el:'#app'和.$mount('#app') 是等价的！
