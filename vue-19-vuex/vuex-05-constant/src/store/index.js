import Vue from 'vue'
import Vuex from 'vuex'//导入Vuex
import {INCREMENT} from "./mutations-types";//从mutation-types.js中导入INCREMENT常量！
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({//一定要记得new
  state: {
    counter: 100,//共享状态放这里
    students: [
      {id:110,name:'liwenli',age:20, sex: 'male'},
      {id:111,name:'liwenli1',age:21, sex: 'male'},
      {id:112,name:'liwenli2',age:22, sex: 'male'},
      {id:113,name:'liwenli3',age:23, sex: 'male'},
      {id:114,name:'liwenli4',age:24, sex: 'male'},
      {id:115,name:'liwenli5',age:25, sex: 'male'},

    ],

    info: {
      name: 'liwenli',
      sex: 'male',
      age: 20,
    },
  },
  mutations: {
    /*
    increment(state) {//这个参数state默认就存在，可以不用显式的写出来
      state.counter++;
    },

     */
    [INCREMENT](state) {//这个参数state默认就存在，可以不用显式的写出来
      state.counter++;
    },

    decrement(state) {//默认存在一个state参数
      state.counter--;
    },

    incrementcount(state, count) {//count是参数
      state.counter = state.counter + count;

    },

    addstudent(state,stu) {//这个stu参数自己可以随意起！
      state.students.push(stu);//将stu学生push进入state.students里面
    },

    updateproperty(state) {
      state.info.name = 'wangshuwei';

    },

    addproperty(state) {
      state.info['address'] = 'chenzhou hunan';
    },

    addproperty2(state) {

      Vue.set(state.info, 'address', 'chenzhou hunan');//Vue.set()中V是大写！！！犯错了一次了！
    },

  },

  getters: {

    getstu(state) {
      return state.students;
    },
  },
  actions: {
  },
  modules: {
  }
})
//3.导出store对象
export default store;