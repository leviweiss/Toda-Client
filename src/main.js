import Vue from 'vue'
import App from './App.vue'
import Store from './store'

export const bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render (createElement) {
    return createElement(App)
  },
  store: Store
}).$mount('#app')
