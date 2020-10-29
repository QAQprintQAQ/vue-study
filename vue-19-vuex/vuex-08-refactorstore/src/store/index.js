import Vue from 'vue'
import Vuex from 'vuex'
//导入分解后的文件！！
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import modulesA from "./modules/modulesA";
import modulesB from "./modules/modulesB";
import modulesC from "./modules/modulesC";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  mutations:mutations,

  getters: getters,

  actions: actions,

  modules: {
    modulesA:modulesA,//我们也可以直接在modules里面定义modules,modulesB,modulesC。但是为了显得代码清晰，modules里面代码不臃肿我们会在router对象外面定义modules,modulesB,modulesC
    modulesB:modulesB,
    modulesC:modulesC,
  },
})

export default store;