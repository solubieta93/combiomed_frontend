import axios from '../../utils/axios-auth'
// import router from '../../router'

const state = {
    token: localStorage.token ? localStorage.getItem('token') : '',
    // token: '',
    user: null,
    authError: null,
    isAdmin: '',
}

const mutations = {
    SET_USER (state, payload) {
        state.user = payload
    },
    SET_TOKEN (state, payload) {
        localStorage.setItem('token', payload)
    },
    SET_AUTH_ERROR: (state, payload) => {
        state.authError = payload
    },
    SET_IS_ADMIN (state, payload) {
        state.isAdmin = payload
    },
}

const actions = {
    verifyToken: async ({ commit }) => {
        commit('SET_USER', null)
        try {
            const { data } = await axios.get('/auth/getuser',
            {
                headers: { 'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('SET_USER', data.user)
            return {
                success: true,
                message: 'ok',
            }
        } catch (error) {
            if (error.response) {
                const e = Object.keys(error.response.data)
                // .map(key => error.response.data[key].join(' ')).join(' ')
                return {
                    success: false,
                    message: `Error: ${e}`,
                }
            } else if (error.request) {
                console.log('error request', error.request)
                return {
                    success: false,
                    message: `Error: ${error}`,
                }
            } else {
                return {
                    success: false,
                    message: `Error: ${error}`,
                }
            }
        }
    },
    signinUser: async ({ commit }, payload) => {
        // clear token to prevent errors (if malformed)
        commit('SET_TOKEN', '')
        commit('SET_AUTH_ERROR', null)

        axios.post('/auth/login', {
            username: payload.username,
            password: payload.password,
        },
        {
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
        })
        .then(res => {
            if (res.status < 500) {
                commit('SET_TOKEN', { token: res.data.token })
                localStorage.setItem('token', res.data.token)
                commit('SET_USER', res.data.user)
            }
        }).catch(e => {
            commit('SET_AUTH_ERROR', 'Invalid credentials')
        })
    },
    signOut: async ({ commit }) => {
        commit('SET_USER', null)
            // remove token in localStorage
            // localStorage.setItem('token', '')
        commit('SET_TOKEN', '')
    },
    setAuthError: ({ commit }, payload) => {
        commit('SET_AUTH_ERROR', payload)
    },
    setToken: ({ commit }, payload) => {
        commit('SET_TOKEN', payload)
    },
    setUser: ({ commit }, payload) => {
        commit('SET_USER', payload)
    },
}

const getters = {
    user (state) {
        return state.user
    },
    token (state) {
        return state.token
    },
    authError () {
        return state.authError
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
