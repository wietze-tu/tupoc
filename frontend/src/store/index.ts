import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/client';
import products from './modules/products';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    clients,
    products
  }
})
