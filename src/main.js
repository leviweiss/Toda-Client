import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from './store';
import App from './App.vue';

import AppHome from './components/AppHome.vue';
import AppAboutUs from './components/AppAboutUs.vue';
import AppBusiness from './components/AppBusiness.vue';

const bus = new Vue();
export default bus;

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: '/', component: AppHome },
  { path: '/about-us', component: AppAboutUs },
  { path: '/business/:id', component: AppBusiness },
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
