import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import product from './modules/product'
import blog from './modules/blog'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'simple-layout',
    drawerRanking: false,
    loading: false,
    error: null,
    authError: null,
  },
  mutations: {
    SET_LAYOUT (state, payload) {
      state.layout = payload
    },
    drawerRankingClick: state => {
      state.drawerRanking = !state.drawerRanking
    },
  },
  actions: {
    drawerRankingClick: ({ commit }) => {
      commit('drawerRankingClick')
    },
  },
  getters: {
    layout (state) {
      return state.layout
    },
    drawerRanking (state) {
      return state.drawerRanking
    },
  },
  modules: {
    auth,
    product,
    blog,
  },
})
