//配置路由相关信息
import VueRouter from 'vue-router';//因为我们要使用vue-router,所以要导入vue-router相关的包
import Vue from 'vue';

//懒加载方式导入(动态加载)
const Hello = () => import('../components/Hello');
const About = () => import('../components/About');
const User  = () => import('../components/User');
const Home = () => import('../components/Home');
//导入嵌套路由依赖的vue组件
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
// 1.通过Vue.use()安装vue-router插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes = [

    {
        path: '/',
        redirect: '/home',//重定向,如果url是在'/',则重定向到'/home'页面。
    },
    {

        path: '/hello',
        component: Hello,
    },
    {
        path: '/about',
        component: About,
    },

    {
        path: '/home',
        component: Home,
        //home路由下面的嵌套路由
        children: [
            {
                path: '/',
                redirect: 'homenews',
            },

            {
                path: 'homenews',//'homenews',而不是'/homenews',不要加'/'
                component: HomeNews,

            },

            {
                path: 'homemessage',//'homemessage',而不是'/homemessage',不要加'/'
                component: HomeMessage,

            },
        ],
    },

    {

        path: '/user/:userid',
        component: User,

    },

];
const router = new VueRouter({

    routes,
    mode: 'history',

});

//3.将router对象传入到vue实例中(是vue实例,不是vue组件),因为每个js文件都是封闭的,所以我们应该先将router导出

export default router;//导出router

