import axios from 'axios'
import { apiURI } from './globalConstants'

const instance = axios.create({
    baseURL: apiURI,
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
