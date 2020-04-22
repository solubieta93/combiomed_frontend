import axios from '@/utils/axios-auth'
import { apiURI } from '@/utils/globalConstants'

const unzipProduct = x => ({
    ...x,
    // image: x.image ? apiURI + x.image : null,
    files: x.files
      ? x.files.map(y => ({
          ...y,
          src: apiURI + y.src,
      }))
      : [],
    details: x.details && x.details.details
      ? x.details.details
      : [],
})

const state = {
    product: [],
    productError: null,
    count_products: 0,
    showNewProduct: false,
    productsTypes: [],
}

const mutations = {
    SET_PRODUCT (state, payload) {
        state.product = payload
    },
    SET_PRODUCTS_TYPES (state, payload) {
        state.productsTypes = payload
    },
    SET_PRODUCT_ERROR: (state, payload) => {
        state.productError = payload
    },
    DEL_PRODUCT: (state, payload) => {
        state.product = state.product.filter(x => x.id !== payload)
    },
    DEL_PRODUCT_TYPES: (state, payload) => {
        state.productsTypes = state.productsTypes.filter(x => x.id !== payload)
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
    SET_ADD_PRODUCT_TYPE: (state, payload) => {
        state.productsTypes.push(payload)
    },
}

const actions = {
    getProduct: async ({ commit }, id) => {
        try {
            const res = await axios.get(`/api/products/${id}/`)
            if (res.status === 200) {
                return {
                    success: true,
                    message: 'ok',
                    product: unzipProduct(res.data),
                    notFound: false,
                }
            }
            return {
                success: false,
                message: res.data[Object.keys(res.data)[0]],
                product: null,
                notFound: res.status === 404,
            }
        } catch (error) {
            const split = error.message.toString().split('status code ')
            const notFound = split.length > 1 && split[1].substr(0, 3) === '404'
            return {
                success: false,
                message: error,
                product: null,
                notFound,
            }
        }
    },
    getProducts: async ({ commit }, params) => {
      try {
        const result = await axios.get('/api/products/', { params })
        if (result.status === 200) {
          return {
              success: true,
              message: 'ok',
              products: result.data.results.map(unzipProduct),
              count: result.data.count,
          }
        } else {
          return {
            success: false,
            message: result.data.detail,
            products: [],
            count: 0,
          }
        }
      } catch (e) {
        return {
          success: false,
          message: e.message,
          products: [],
          count: 0,
        }
      }
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
                ...payload,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            // commit('SET_ADD_PRODUCT', res.data)
            return {
                success: true,
                message: 'ok',
                id: res.data.id,
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
                return {
                    success: false,
                    message: `Error: ${error.request}`,
                }
            } else {
                console.log(error.message)
                return {
                    success: false,
                    message: `Error: ${error.error.message}`,
                }
            }
        }
    },
    postTypeProduct: async ({ commit }, payload) => {
        try {
            const res = await axios.post('/api/types/products/', {
                ...payload,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            commit('SET_ADD_PRODUCT_TYPE', res.data)
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
            const res = await axios.patch('/api/products/' + payload.id + '/', { ...payload.changes },
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            console.log(res, 'result patch')
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
            details: [],
            files: [],
            image: null,
            typeId: null,
        })
    },
    getNewLineProduct: () => {
        return Object({
            title: '',
            description: '',
            priority: -1,
        })
    },
    getProductsTypes: async ({ commit }, params) => {
      try {
        commit('SET_PRODUCTS_TYPES', [])
        const result = await axios.get('/api/types/products/', { params })
        if (result.status === 200) {
          commit('SET_PRODUCTS_TYPES', result.data.results)
          return {
              success: true,
              message: 'ok',
              types: result.data.results, // .map(x => ({ ...x, image: x.image ? apiURI + x.image : null })),
              count: result.data.count,
          }
        } else {
          return {
            success: false,
            message: result.data.detail,
            types: [],
            count: 0,
          }
        }
      } catch (e) {
        return {
          success: false,
          message: e.message,
          types: [],
          count: 0,
        }
      }
    },
    delProductTypes: async ({ commit }, payload) => {
        try {
            await axios.delete('/api/types/products/' + payload + '/',
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('DEL_PRODUCT_TYPES', payload.id)
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
    productsTypes (state) {
      return state.productsTypes
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
