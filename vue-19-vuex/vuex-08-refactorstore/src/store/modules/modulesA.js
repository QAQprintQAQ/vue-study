export default {
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