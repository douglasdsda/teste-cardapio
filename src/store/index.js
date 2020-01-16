import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaSalva: []
  },
  mutations: {
     salvar(state, value) {
      state.listaSalva = value
     }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getListaSalva: (state) => state.listaSalva
  }
})
