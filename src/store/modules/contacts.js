import axios from '../../utils/axios-auth'

const state = {
    contacts: [],
    error: '',
}

const mutations = {
    SET_CONTACTS (state, payload) {
        state.contacts = payload
    },
    SET_CONTACTS_ERROR: (state, payload) => {
        state.authError = payload
    },
    SET_ADD_CONTACT: (state, payload) => {
        state.contacts.push(payload)
    },
    PATCH_CONTACT: (state, payload) => {
        const contacti = state.contacts.findIndex(x => x.id === payload.id)
        state.contacts[contacti] = payload
    },
    DEL_CONTACT: (state, payload) => {
        state.contacts = state.contacts.filter(x => x.id !== payload)
    },
}

const actions = {
    getContacts: async ({ commit }, params) => {
        commit('SET_CONTACTS', [])
        const res = await axios.get('/contacts/')
        // .then(res => {
        console.log(res, 'ReS CONTACT')
        if (res.status === 200) {
            const contacts = res.data.results // .map(x => ({ ...x, image: x.image ? apiURI + x.image : null }))
            // commit('SET_CONTACTS', contacts)
            // console.log(contacts, 'contacts action')
            return contacts
        } else {
            commit('SET_CONTACTS_ERROR', res.data.message)
            return []
        }
        // }).catch(e => {
        //     return []
        // })
    },
    postContact: async ({ commit }, payload) => {
        try {
            const res = await axios.post('/contacts/', {
                ...payload
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            commit('SET_ADD_CONTACT', res)
            return {
                success: true,
                message: 'ok',
            }
        } catch (error) {
            if (error.response) {
                const e = Object.keys(error.response.data).map(key => error.response.data[key].join(' ')).join(' ')
                return {
                    success: false,
                    message: `Error: ${e}`,
                }
            } else if (error.request) {
                console.log('error request', error.request)
            } else {
                console.log(error.message)
            }
        }
    },
    patchContact: async ({ commit }, payload) => {
        try {
            console.log(payload.changes, 'changes')
            const res = await axios.patch('/contacts/' + payload.id + '/', { ...payload.changes },
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            console.log(res, 'result patch')
            commit('PATCH_CONTACT', res.data)
            return {
                success: true,
                message: 'ok',
                id: res.data.id,
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: `Error: ${error}`,
            }
        }
    },
    delContact: async ({ commit }, id) => {
        try {
            const res = await axios.delete(`/contacts/${id}/`,
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            if (res.status === 200) {
                await commit('DEL_CONTACT', id)
                return {
                    success: true,
                    message: 'ok',
                }
            }
        } catch (error) {
            if (error.response) {
                const e = Object.keys(error.response.data).map(key => error.response.data[key].join(' ')).join(' ')
                return {
                    success: false,
                    message: `Error: ${e}`,
                }
            } else if (error.request) {
                console.log('error request', error.request)
            } else {
                console.log(error.message)
            }
        }
    },
    getNewContact: () => {
        return Object({
            name: '',
            mail: '',
            role: '',
            priority: -1,
            image: null,
        })
    },
}

const getters = {
    contacts (state) {
        return state.contacts
    },

}

export default {
    state,
    mutations,
    actions,
    getters,
}
