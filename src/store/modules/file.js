import axios from '../../utils/axios-auth'
// apiKeyFileStack
import { apiURI } from '../../utils/globalConstants'
// import { Client } from 'filestack-js'
//

const state = {
    fileUploaded: null,
    fileUploadError: null,
}

const mutations = {
    SET_FILE_UPLOADED (state, payload) {
        state.fileUploaded = payload
    },
    SET_FILE_UPLOAD_ERROR: (state, payload) => {
        state.fileUploadError = payload
    },
}

const actions = {
    uploadFile: async ({ commit }, file) => {
        try {
            // commit('SET_FILE_UPLOADED', null)
            // commit('SET_FILE_UPLOAD_ERROR', null)
            console.log('uploadfile')
            const fd = new FormData()
            fd.append('file', file, file.name)
            console.log(fd, 'fd')
            const res = await axios.post('/api/files/', fd,
            {
                headers: {
                    'Authorization': 'Token ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
            console.log(res, 'result')
            if (res.status === 201) {
                commit('SET_FILE_UPLOADED', res.data['file'])
                return {
                    success: true,
                    message: 'ok',
                    src: res.data['file'],
                }
            } else {
                commit('SET_FILE_UPLOAD_ERROR', 'Upload Error')
                return {
                    success: false,
                    message: 'Upload Error',
                    src: null,
                }
            }
        } catch (error) {
            // commit('SET_FILE_UPLOAD_ERROR', error.message)
            return {
                success: false,
                message: error.message,
                src: null,
            }
        }
    },
    getImageSrc: (src) => {
        return src ? apiURI + src : null
    },
}

const getters = {
    getFileUploaded (state) {
        return state.fileUploaded
    },

}

export default {
    state,
    mutations,
    actions,
    getters,
}
