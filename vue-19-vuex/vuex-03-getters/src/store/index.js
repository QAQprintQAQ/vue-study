import Vue from 'vue'
import Vuex from 'vuex'//导入Vuex

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({//一定要记得new
  state: {
    //相当于vue组件的data()
    counter: 100,//共享状态放这里
    students: [
        {id:110,name:'liwenli',age:20, sex: 'male'},
        {id:111,name:'liwenli1',age:21, sex: 'male'},
        {id:112,name:'liwenli2',age:22, sex: 'male'},
        {id:113,name:'liwenli3',age:23, sex: 'male'},
        {id:114,name:'liwenli4',age:24, sex: 'male'},
        {id:115,name:'liwenli5',age:25, sex: 'male'},

    ],
  },
  mutations: {
    //相当于vue组件的methods:{},可以修改state
    increment(state) {//这个参数state默认就存在，可以不用显式的写出来
      state.counter++;
    },

    decrement(state) {//默认存在一个state参数
      state.counter--;//
    },

  },
  getters: {
    //返回counter的平方
    //相当于vue组件的computed:{},一般不修改state,只是使用state
    powerCounter(state) {//默认会有一个state参数
      return state.counter * state.counter;//注意这里有return
    },

    //返回年龄大于21岁的学生
    agegt21(state) {
      return state.students.filter(stu=> {
        return stu.age > 21;
      });
    },

    //返回年龄大于21岁的学生个数
    //方法1
    agegt21counts(state) {
      return state.students.filter(stu => {
        return stu.age > 21;
      }).length;
    },

 //方法2
    agegt21counts2(state,getters) {//这里的getters就是我们getters属性高！
      return getters.agegt21.length;
    },

  //获取年龄大于age岁的学生(age是我们输入的年龄!不是固定的)
  //  使用普通函数
    agestu(state) {
      return function (age) {//getters要想传递一个参数，则必须要返回一个函数
        return state.students.filter((stu) => {
         return  stu.age > age;//一定不要少了return,不要然没有返回值,将不会有任何显示
        });

      };
    },
    //使用箭头函数
    agestu2(state) {
      return (age) => {
        return state.students.filter((stu) => {
         return  stu.age > age;//一定不要少了return,不要然没有返回值,将不会有任何显示
        });
      };
    },

  agestu3(state) {
      return age=> {
        return state.students.filter(stu => stu.age > age);//这里可以少return，箭头函数的特殊形式！
      };
    },

  },
  actions: {
  },
  modules: {
  }
})
//3.导出store对象
export default store;