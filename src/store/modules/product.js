import axios from '../../utils/axios-auth'

const state = {
    product: [],
    productError: null,
    count_products: 0,
    showNewProduct: false,
}

const mutations = {
    SET_PRODUCT (state, payload) {
        state.product = payload
    },
    SET_PRODUCT_ERROR: (state, payload) => {
        state.productError = payload
    },
    DEL_PRODUCT: (state, payload) => {
        state.product = state.product.filter(x => x.id !== payload)
    },
    PATCH_PRODUCT: (state, payload) => {
        // eslint-disable-next-line camelcase
        const product_i = state.product.findIndex(x => x.id === payload.id)
        if (payload.description) {
            state.product[product_i].description = payload.description
        } else {
            state.product[product_i].name = payload.name
        }
    },
    SET_COUNT: (state, payload) => {
        if (payload) {
            state.count_products = payload
        }
    },
    SET_SHOW_NEW_PRODUCT: (state, payload) => {
        if (payload) {
            state.showNewProduct = payload
        }
    },
    SET_ADD_PRODUCT: (state, payload) => {
        state.product.push(payload)
    },
}

const actions = {
    getCurrentProduct: async ({ commit }, payload) => {
        console.log('getcurrenProduct')
        commit('SET_PRODUCT', [])
        commit('SET_PRODUCT_ERROR', null)

        axios.get('/api/products', {
            id: payload.id,
        },
        {
            headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
        })
        .then(res => {
            commit('SET_PRODUCT', res.data.results)
        })
        .catch(error => {
            commit('SET_PRODUCT_ERROR', error.message)
            console.log(error.message)
        })
    },
    getProducts: async ({ commit }) => {
        // clear token to prevent errors (if malformed)
        commit('SET_PRODUCT', [])
        commit('SET_PRODUCT_ERROR', null)

        console.log('stoy en get product')

        axios.get('/api/products/')
        .then(res => {
            console.log('stoy en then')
            console.log(res.data)
            commit('SET_PRODUCT', res.data.results)
        }).catch(error => {
            commit('SET_PRODUCT_ERROR', error.message)
            console.log(error.message)
        })
    },
    getPaginateProducts: async ({ commit }, payload) => {
        commit('SET_PRODUCT', [])
        commit('SET_PRODUCT_ERROR', null)

        await axios.get(`/api/products/?offset=${payload.offset}`)
        .then(res => {
            commit('SET_COUNT', res.data.count)
            commit('SET_PRODUCT', res.data.results)
        }).catch(error => {
            commit('SET_PRODUCT_ERROR', error.message)
        })
    },
    postProduct: async ({ commit }, payload) => {
        try {
            const res = await axios.post('/api/products/', {
                name: payload.name,
                description: payload.description,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            commit('SET_ADD_PRODUCT', res.data)
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
    patchProduct: async ({ commit }, payload) => {
        try {
            await axios.patch('/api/products/' + payload.id + '/', {
                description: payload.description,
                name: payload.name,
            },
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('PATCH_PRODUCT', payload)
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
    delProduct: async ({ commit }, payload) => {
        try {
            await axios.delete('/api/products/' + payload.id + '/',
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('DEL_PRODUCT', payload.id)
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
    setProductError: ({ commit }, payload) => {
        commit('SET_PRODUCT_ERROR', payload)
    },
    setProduct: ({ commit }, payload) => {
        commit('SET_PRODUCT', payload)
    },
    setShowNewProduct: ({ commit }, payload) => {
        commit('SET_SHOW_NEW_PRODUCT', payload)
    },
    getNewProduct: () => {
        return Object({
            name: '',
            description: '',
        })
    },
}

const getters = {
    product (state) {
        return state.product
    },
    productError () {
        return state.productError
    },
    count_products (state) {
        return state.count_products
    },
    showNewProduct (state) {
        return state.showNewProduct
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
