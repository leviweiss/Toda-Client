import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';
import App from './App.vue';

import AppHome from './components/AppHome.vue';
import AppCoupons from './components/AppCoupons.vue';
import AppBusinesses from './components/AppBusinesses.vue';
import AppAboutUs from './components/AppAboutUs.vue';

const bus = new Vue();
export default bus;

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: '/home', alias: '/', component: AppHome },
  { path: '/coupons', component: AppCoupons },
  { path: '/businesses', component: AppBusinesses },
  { path: '/about-us', component: AppAboutUs },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render(createElement) {
    return createElement(App);
  },
  router,
  store: Store,
}).$mount('#app');
