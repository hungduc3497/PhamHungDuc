import Vue from 'vue'
import Vuex from 'vuex'
import Articles from './modules/Articles'
import Products from './modules/Products'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    Articles: Articles,
    Products: Products
  },
  state: {},
  getters: {},
  mutations: {}
})
