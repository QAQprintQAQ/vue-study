import Vue from 'vue'
import Vuex from 'vuex'//导入Vuex

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({//一定要记得new
  state: {//存放共享数据(状态)

    info: {
      name: 'liwenli',
      sex: 'male',
      age: 20,
    },
  },
  mutations: {
  },


  getters: {//使用共享数据

  },

  actions: {
  },


  modules: {
  },
})

//3.导出store对象
export default store;