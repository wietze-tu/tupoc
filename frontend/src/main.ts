import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './registerServiceWorker'
import './plugins/bootstrap-vue'

import { BootstrapVue, BootstrapVueIcons, BIconArrowUp } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSession)
Vue.use(VueAxios, axios)
Vue.component('BIconArrowUp', BIconArrowUp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

