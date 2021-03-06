import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import assortmentPage from '../pages/assortment.vue'
import services from '../pages/services.vue'
import productsPage from '../pages/products.vue'

import assortmentGlobalOverview from '../components/core/blocks/Assortment/assortmentGlobalOverview.vue' 
import assortmentOverview from '../components/core/blocks/Assortment/assortmentOverview.vue'
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
      { path: '/webshop', component: assortmentGlobalOverview },
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
          { path: '/assortment/:id', component: assortmentOverview},
          { path: '/assortment/:id/:id2', component: assortmentOverview},
          { path: '/assortment/:id/:id2/:id3', component: assortmentOverview}
        ]
   },
  {
    path: '/products', 
    name: 'products',
    component: productsPage,
    children: [
          { path: '/products', component: assortmentGlobalOverview },
          { path: '/products/:category', component: productsOverview}
          ]
   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
