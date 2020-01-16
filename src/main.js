import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';
import './config/axios'
import './config/msgs'
import "font-awesome/css/font-awesome.css";

Vue.config.productionTip = false

new Vue({
  Toasted,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
