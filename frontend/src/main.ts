import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueResource from 'vue-resource' 
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/bootstrap-vue'

import { BootstrapVue, BootstrapVueIcons, BIconArrowUp } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSession)
Vue.component('BIconArrowUp', BIconArrowUp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

