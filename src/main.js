import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import VueRouter from 'vue-router'

export const bus = new Vue()

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/coupons', alias: '/', component: Coupons },
  { path: '/businneses', component: Businneses }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

new Vue({
  render (createElement) {
    return createElement(App)
  },
  router,
  store: Store
}).$mount('#app')
