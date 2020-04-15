import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import product from './modules/product'
import blog from './modules/blog'
import file from './modules/file'
import query from './modules/query'
import contacts from './modules/contacts'

import queryNames from './names/query'

Vue.use(Vuex)

export const buildPrefix = (x, prefix) => {
  switch (x) {
    case 0: return `${prefix}state/`
    case 1: return `${prefix}actions/`
    case 2: return `${prefix}getters/`
    case 3: return `${prefix}mutations/`
    default: return `${prefix}`
  }
}

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
    file,
    query,
    contacts,
  },
})

export const QueryNamesStore = queryNames
