import Vue from 'vue'
import Vuex from 'vuex'//导入Vuex

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({//一定要记得new
  state: {
    counter: 100,//共享状态放这里
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
//3.导出store对象
export default store;