import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import './assets/css/fontello.css'
import VeeValidate from 'vee-validate';
import axios from 'axios';
import env from './env';
axios.defaults.baseURL = env.API_URL
window.axios = axios

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token', null);
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// end axios and axios interceptors
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");