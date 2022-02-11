import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL_API || 'http://localhost:9999'
})

export default instance;
