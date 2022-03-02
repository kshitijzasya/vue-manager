import axios from 'axios';

let token = '';

const AXIOS = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}/api` || 'http://localhost:3000/api',
    headers: {
        Authorization: `Bearer ${token}`
    }
}) 

export default {
    get: (url, params) => {
        return AXIOS.get(url, {params})
    },
    post: (url, data) => {
        return AXIOS.post(url, data)
    },
    put: (url, data) => {
        return AXIOS.put(url, data)
    },
    delete: (url) => {
        return AXIOS.delete(url)
    }
};