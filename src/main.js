import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store'

Vue.use(VueRouter);

window.axios = Axios;
window.axios.defaults.baseURL = 'https://vuejs-http-3a7ed.firebaseio.com';

Vue.filter('currency', (value) => {
  return '€' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
