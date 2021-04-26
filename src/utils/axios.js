import axios from 'axios'
// const baseUrl = 'http://localhost:3000'
const baseUrl = ''

//创建一个axios实例
const instance = axios.create({
    baseUrl,
    timeout:7000,
    header:{}
})

//请求拦截器
instance.interceptors.request.use(function(config){
    //在发送请求前添加token
    config.headers.Authorization = localStorage.getItem('token')
    return config
},function(err){
    return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(function(res){
    //这里对后端返回的数据进行处理
    return res.data
},function(err){
    return Promise.reject(err)
})

export default instance