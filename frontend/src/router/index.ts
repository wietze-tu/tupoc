import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import assortment from '../pages/assortment.vue'
import services from '../pages/services.vue'
import products from '../pages/products.vue'

//import assortmentoverview from '../components/core/blocks/Assortment/assortmentOverview.vue' 
import productsoverview from '../components/core/blocks/Products/productsOverview.vue' 

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
     component: assortment,
  },
  {
     path: '/services', 
     name: 'Services',
     components: {
      default: services
    } 
  },
  {
    path: '/products/:id', 
    name: 'products',
    component: products,
    children: [
          {
          path: '/',
          component: productsoverview
          }
        
      ]
   } 

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
