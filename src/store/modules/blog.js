/* eslint-disable camelcase */
import axios from '../../axios-auth'

const state = {
    blog: [],
    comments: [],
    count_post: 0,
    count_comments: 0,
    showNewPost: false,
}

const mutations = {
    SET_BLOG (state, payload) {
        state.blog = payload
    },
    SET_COMMENT (state, payload) {
        state.comments = payload
    },
    DEL_POST: (state, payload) => {
        state.blog = state.blog.filter(x => x.id !== payload)
    },
    PATCH_POST: (state, payload) => {
        // eslint-disable-next-line camelcase
        const post_i = state.blog.findIndex(x => x.id === payload.id)
        if (payload.description) {
            state.blog[post_i].description = payload.description
        } else if (payload.name) {
            state.blog[post_i].name = payload.name
        } else if (payload.countLike) {
            state.blog[post_i].countLike = payload.count
        }
    },
    SET_COUNT_POST: (state, payload) => {
        if (payload) {
            state.count_post = payload
        }
    },
    SET_COUNT_COMMENTS: (state, payload) => {
        if (payload) {
            state.count_comments = payload
        }
    },
    SET_ADD_BLOG: (state, payload) => {
        state.blog.push(payload)
    },
}

const actions = {
    getPaginateBlog: async ({ commit }, payload) => {
        commit('SET_BLOG', [])
        await axios.get(`/blog/blog?offset=${payload.offset}`)
        .then(res => {
            if (res.data.success) {
                commit('SET_COUNT_POST', res.data.data.count)
                commit('SET_BLOG', res.data.data.posts)
            } else {
                commit('SET_PRODUCT_ERROR', res.data.message)
            }
        }).catch(e => {
            console.log(e)
        })
    },
    getPaginateNews: async ({ commit }, payload) => {
        commit('SET_BLOG', [])

        await axios.get(`/blog/news?offset=${payload.offset}`)
        .then(res => {
            if (res.data.success) {
                commit('SET_COUNT_POST', res.data.data.count)
                commit('SET_BLOG', res.data.data.news)
            } else {
                commit('SET_PRODUCT_ERROR', res.data.message)
            }
        })
    },
    getPaginateComment: async ({ commit }, payload) => {
        commit('SET_COMMENT', [])
        await axios.get(`/comment?offset=${payload.offset}`)
        .then(res => {
            commit('SET_COUNT_COMMENTS', res.data.count)
            const results = res.data.results
            commit('SET_COMMENT', results)
        }).catch(error => {
            commit('SET_PRODUCT_ERROR', error.message)
        })
    },
    postPost: async ({ commit }, payload) => {
        try {
            const res = await axios.post('/blog', {
                title: payload.title,
                abstract: payload.abstract,
                context: payload.context,
                news: payload.news,
                image: payload.image,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            commit('SET_ADD_BLOG', res.data)
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
    put_img: async ({ commit }, payload) => {
        try {
            const res = await axios.post('/blog/put_img', {
                image: payload.image,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            console.log(res)
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
    patchPost: async ({ commit }, payload) => {
        try {
            await axios.patch('blog/' + payload.id, {
                description: payload.description,
                name: payload.name,
            },
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('PATCH_POST', payload)
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
    delPost: async ({ commit }, payload) => {
        try {
            await axios.delete('/blog/' + payload.id,
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('DEL_POST', payload.id)
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
    submitLike: async ({ commit }, payload) => {
        try {
            await axios.patch('blog/' + payload.id, {
                countLike: payload.count,
            },
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            commit('PATCH_POST', payload)
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
    getNewPost: () => {
        return Object({
            title: '',
            context: '',
            abstract: '',
            news: false,
            image: null,
        })
    },
    getNewNews: () => {
        return Object({
            title: '',
            context: '',
            abstract: '',
            news: true,
        })
    },
}

const getters = {
    blog (state) {
        return state.blog
    },
    comments (state) {
        return state.comments
    },
    count_post (state) {
        return state.count_post
    },
    count_comments (state) {
        return state.count_comments
    },
    showNewPost (state) {
        return state.showNewPost
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
