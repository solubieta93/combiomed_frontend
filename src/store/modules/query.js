import queryNames from '../names/query'

const state = {
    [queryNames.state.QUERY]: {
      search: '',
    },
}

const mutations = {
    [queryNames.mutations.SET_QUERY] (state, payload) {
        state[queryNames.state.QUERY] = payload
    },
    // SET_FILE_UPLOAD_ERROR: (state, payload) => {
    //     state.fileUploadError = payload
    // },
}

const actions = {
    [queryNames.actions.SET_QUERY]: ({ commit }, query) => {
      commit(queryNames.mutations.SET_QUERY, {
        search: query.search ? query.search : '',
        ...query,
      })
    },
}

const getters = {
    [queryNames.getters.GET_QUERY] (state) {
        return state[queryNames.state.QUERY]
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
