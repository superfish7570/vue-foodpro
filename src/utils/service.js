import axios from "axios"

// 封装axios
const service = axios.create({
    baseURL: '/api',
    timeout: 1000
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    config.params.appkey = 'c671a4c29ec3381b'
    return config;
}, function (error) {
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use((response) => {
    return response.data;
}, function (error) {
    return Promise.reject(error)
})

export default service