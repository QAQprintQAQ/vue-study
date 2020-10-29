//配置路由相关信息
import VueRouter from 'vue-router';//因为我们要使用vue-router,所以要导入vue-router相关的包
import Vue from 'vue';
//为什么要导入vue呢？因为vue-router是vue的一个插件,安装插件需要用到Vue.use(),因此我们需要导入vue
//导入后直接使用组件
// import Hello from "../components/Hello";//导入component下相应的组件
// import About from "../components/About";//测试懒加载方式的时候记得给这个普通的导入组件方式注释掉，要不然变量会崇明，重名在build项目的时候就会报错！！！
// import Home from "../components/Home";
// import User from "../components/User";

//懒加载方式导入(动态加载)
const Home = () => import('../components/Home');
const Hello = () => import('../components/Hello');
const About = () => import('../components/About');
const User  = () => import('../components/User');
// component: () => import('../components/Hello'),//也可以直接导入进来而不设置变量来实现懒加载,但是我们通常不建议这样写(官方是这样写的),这样写可读性还是不高！

// 1.通过Vue.use()安装vue-router插件
Vue.use(VueRouter);

//2.创建VueRouter对象

const routes = [//名字一定不能变噢,就是routes,写成routers是错误的,别想了！！！
    // 这里面存放用来配置url和组件的映射关系的对象,一个映射关系对应一个对象
    {
        path: '/',
        redirect: '/home',//重定向,如果url是在'/',则重定向到'/home'页面。
    },


    {
        //一个映射关系对象。path(url),component(vue组件)
        path: '/hello',//地址栏的url,因为不是完整的url,所以只是path路径
        component: Hello,//对应于Hello.vue组件。需要导入相应的component目录下的相应组件到这个index.js文件中
        // component: () => import('../components/Hello'),//也可以直接导入进来而不设置变量来实现懒加载,但是我们通常不建议这样写(官方是这样写的),这样写可读性还是不高！
    },


    {
        path: '/about',
        component: About,
    },


    {
        path: '/home',
        component: Home,
    },

    {
        // path: '/user',//这是没用动态路由时候path
        path: '/user/:userid',//这是使用动态路由时候的path
        component: User,

    },

];// 对应于router对象里面的routes数组
const router = new VueRouter({

  //配置路由(也就是url,或者说是path)和组件之间的关系
  /*
  routes: [
       // 我们习惯把这个数组对象抽离出去,在这个里面只保留routes这个数组名,这样看着舒服些
         这里面存放用来配置url和组件的映射关系的对象
  ],

   */

    routes,//是routes:routes 的简写。routes定义在外面看着简洁(这里的名字是不能改的,就是routes!!!!!!!!!!!!)
    mode: 'history',//因为构建项目的时候没有选择history模式,现在只能在router配置中将html的形式改为history,history是没有'#'的,url555666555更加美观！

});

//3.将router对象传入到vue实例中(是vue实例,不是vue组件),因为每个js文件都是封闭的,所以我们应该先将router导出

export default router;//导出router

