import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesA = {
  state: {
    info:{name:'wangshuwei',age:20,sex:'female'},
  },
  mutations: {
    updateproperty(state) {
      state.info.name = 'baby';
    },
  },
  getters: {
    getstring(state) {
      return state.info.name + ' love ';
    },

    getstring2(state, getters, rootState) {
      return getters.getstring + rootState.info.name;
    },

  },
  actions: {
    actionupdateproperty(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateproperty');
          resolve('异步修改属性，成功！');//给App.vue传递一个参数！
        }, 2000);
      });
    }
  },
  modules: {},

};

const modulesB = {
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {},

};

const modulesC = {
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {},

};


const store = new Vuex.Store({
  state: {
    info: {
      name: 'liwenli',
      sex: 'male',
      age: 20,
    },
  },
  mutations: {
  },

  getters: {
  },

  actions: {

  },

  modules: {
    modulesA:modulesA,//我们也可以直接在modules里面定义modules,modulesB,modulesC。但是为了显得代码清晰，modules里面代码不臃肿我们会在router对象外面定义modules,modulesB,modulesC
    modulesB:modulesB,
    modulesC:modulesC,
  },
})

export default store;