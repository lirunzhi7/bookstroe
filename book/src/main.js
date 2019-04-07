import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/store.js'




Vue.config.productionTip = false

//前置守卫(该函数在路由跳转之后，组件渲染（加载）之前，执行)
router.beforeEach((to,from,next)=>{
  document.title = to.meta.til || '书城'
  next()//next可以传参，参数决定下一步跳转到哪个路径
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')//#app自动会找public中的index.html
