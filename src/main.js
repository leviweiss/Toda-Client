import Vue from 'vue'
import App from './App.vue'
import Store from './store'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export const bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render (createElement) {
    return createElement(App)
  },
  store: Store
}).$mount('#app')
