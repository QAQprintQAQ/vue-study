import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',//这里是可以修改的
  base: process.env.BASE_URL,
  routes
})

export default router
