import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import assortmentPage from '../pages/assortment.vue'
import services from '../pages/services.vue'
import productsPage from '../pages/products.vue'

import assortmentGlobalOverview from '../components/core/blocks/Assortment/assortmentGlobalOverview.vue' 
import assortmentFirstSubOverview from '../components/core/blocks/Assortment/assortmentFirstSubOverview.vue'
import assortmentSecondSubOverview from '../components/core/blocks/Assortment/assortmentSecondSubOverview.vue'
import productsOverview from '../components/core/blocks/Products/productsOverview.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'home',
    components: {
      default: home
    } 
  },
   {
     path: '/webshop', 
     name: 'Webshop',
     component: assortmentPage,
     children: [
      { path: '/', component: assortmentGlobalOverview }
      ]
  },
  {
     path: '/services', 
     name: 'Services',
     components: {
      default: services
    } 
  },
  {
    path: '/assortment', 
    name: 'assortment',
    component: assortmentPage,
    children: [
          { path: '/assortment', component: assortmentGlobalOverview },
          { path: '/assortment/:id', component: assortmentFirstSubOverview},
          { path: '/assortment/:id/:id2', component: assortmentSecondSubOverview}
          ]
   },
  {
    path: '/products/:category', 
    name: 'products',
    component: productsPage,
    children: [
          { path: '/', component: productsOverview}
          ]
   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
