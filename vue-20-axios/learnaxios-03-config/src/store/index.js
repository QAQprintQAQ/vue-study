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
  mutations: {//修改共享数据

    //这是一个同步操作函数，放在mutations是正确的！
    updateproperty(state) {
      state.info.name = 'wangshuwei';
    },

    /*
      //这是一个异步操作函数，不建议放在mutations里面！
      updateproperty(state) {
        setTimeout(() => {
          state.info.name = 'wangshuwei';
        },1000);//一秒后修改！
      },


    },
       */
  },


  getters: {//使用共享数据

  },

  //这是没有涉及promise的修改info属性代码
  actions: {//处理异步操作

    /*
    actionupdateproperty(context) {//actions中的默认属性是context，注意不是state了！！
      setTimeout(() => {
        // context.state.info.name = 'wangshuwei';//这是错误的，我们不能够直接通过actions修改state，需要通过 mutations修改！！
        context.commit('updateproperty');//actions下面的异步方法actionupdateproperty需要context.commit  mutations下面的updateproperty方法来修改state
      }, 1000);//一秒后修改！

     */

      //这是涉及payload的代码
    /*
      actionupdateproperty(context, payload)
      {
        setTimeout(() => {
          context.commit('updateproperty');
          console.log(payload.message);
          console.log(payload.info);
          payload.success();
        }, 1000);
      },

     */

    //这是涉及promise的修改info属性并添加成功消息的代码！
    actionupdateproperty(context, payload)
    {
      return new Promise((resolve, reject) => {

        setTimeout(() => {
        context.commit('updateproperty');
        resolve('actions finish commit!!');//resolve给App.vue传递参数'actions finish commit!!'

        }, 1000);
      });//我们不在这里写then，then写在actions返回的new Promise后面，也就是dispatch的后面
    },


  },


  modules: {
  },
})

//3.导出store对象
export default store;