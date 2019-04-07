import Vue from 'vue'
import Router from 'vue-router'

import add from '@/components/add/add.vue'
import list from '@/components/list/list.vue'
import home from '@/components/home/home.vue'
import collect from '@/components/collect/collect.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'current',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      component:()=>import('./components/index.vue'),
      children:[
        {
          path: '/home',
          component: home,
          meta:{
            til:'首页',//内部属性自定义
          }
        },
        {
          path: '/list',
          component: list,
          meta:{
            til:'列表页',
          }
        },
        {
          path: '/collect',
          component: collect
        },
        {
          path: '/add',
          component: add
        },
      ]
    },
    {
      path: '/login',
      //路由的懒加载
      //只有走到login路径 才会去加载 对应的组件
      component: () => import('@/components/login/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
