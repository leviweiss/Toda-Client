import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';
import App from './App.vue';

import AppCoupons from './components/AppCoupons.vue';
import AppBusinesses from './components/AppBusinesses.vue';

const bus = new Vue();
export default bus;

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: '/coupons', alias: '/', component: AppCoupons },
  { path: '/businesses', component: AppBusinesses },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render(createElement) {
    return createElement(App);
  },
  router,
  store: Store,
}).$mount('#app');
