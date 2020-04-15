/* eslint-disable camelcase */
import axios from '../../utils/axios-auth'
import {apiURI} from "../../utils/globalConstants";

const state = {
    blog: [],
    post: null,
    twoposts: [],
    comments: [],
    count_post: 0,
    count_comments: 0,
    showNewPost: false,
}

const mutations = {
    SET_BLOG (state, payload) {
        state.blog = payload
    },
    SET_POST (state, payload) {
        state.post = payload
    },
    SET_TWOPOSTS (state, payload) {
        state.twoposts = payload
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
        state.blog[post_i] = payload
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
    getTwoPosts: async ({ commit }, params) => {
        commit('SET_TWOPOSTS', [])
        await axios.get(`/blog/blog`,{params})
        .then(res => {
            if (res.data.success) {
                const posts = res.data.data.posts.map(x => ({ ...x, image: x.image ? apiURI + x.image : null }))
                commit('SET_TWOPOSTS', posts)
                return posts
            } else {
                commit('SET_PRODUCT_ERROR', res.data.message)
                return []
            }
        }).catch(e => {
            return []
        })
    },
    getPaginateBlog: async ({ commit }, params) => {
        try {
            await commit('SET_BLOG', [])
            const res = await axios.get(`/blog`, { params })
            if (res.status === 200) {
                await commit('SET_COUNT_POST', res.data.count)
                await commit('SET_BLOG', res.data.results.map(post => ({ ...post, image: post.image ? apiURI + post.image : post.image })))
                return {
                    posts: res.data.results.map(post => ({ ...post, image: post.image ? apiURI + post.image : post.image })),
                    count: res.data.count,
                }
            } else {
                await commit('SET_PRODUCT_ERROR', res.data.message)
                return {
                    posts: [],
                    count: 0,
                }
            }
        } catch (e) {
            return {
                posts: [],
                count: 0,
            }
        }
    },
    getPaginateBlogDistinct: async ({ commit }, params) => {
        try {
            await commit('SET_BLOG', [])
            const res = await axios.get(`/blog/blog`, {params})
            if (res.status === 200) {
                await commit('SET_COUNT_POST', res.data.data.count)
                await commit('SET_BLOG', res.data.data.results.map(post => ({ ...post, image: post.image ? apiURI + post.image : post.image })))
                return {
                    posts: res.data.data.results.map(post => ({ ...post, image: post.image ? apiURI + post.image : post.image })),
                    count: res.data.data.count,
                }
            }else {
                await commit('SET_PRODUCT_ERROR', res.data.message)
                return {
                    posts: [],
                    count: 0,
                }
            }
        }
        catch (e) {
            return {
                posts: [],
                count: 0,
            }
        }
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
    getPost: async ({commit}, id) => {
        try {
            commit('SET_POST', [])
            const res = await axios.get(`/blog/${id}`)
            if(res.status === 200) {
                await commit('SET_POST', {
                    ...res.data,
                    image: res.data.image ? apiURI + res.data.image : null,
                })
                return true
            }
            await commit('SET_PRODUCT_ERROR', res.data.detail)
            return false
        } catch (e) {
            await commit('SET_PRODUCT_ERROR', e.message)
            return false
        }
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
            const res= await axios.patch('blog/' + payload.id, {
                title: payload.title,
                abstract: payload.abstract,
                context: payload.context,
                news: payload.news,
            },
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            commit('PATCH_POST', res.data)
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
    putPost: async ({ commit }, payload) => {
        try {
            const res = await axios.put('/blog/' + payload.id, {
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
            commit('PATCH_POST', res.data)
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
    delPost: async ({ commit }, id) => {
        try {
            const res = await axios.delete(`/blog/${id}`,
            {
                headers: { 'Authorization': 'Token ' + localStorage.getItem('token') },
            })
            if(res.status === 200) {
                await commit('DEL_POST', id)
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
    post (state) {
        return state.post
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
