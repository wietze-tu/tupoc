import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import assortiment from '../pages/webshop.vue'
import services from '../pages/services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'home',
    component: home 
  },
   {
     path: '/webshop', 
     name: 'Webshop',
     component: assortiment 
  },
  {
     path: '/services', 
     name: 'Services',
     component: services 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
