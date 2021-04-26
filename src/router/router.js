import Vue from 'vue'
import VueRouter from 'vue-router'
import arr from './data'
Vue.use(VueRouter)
let routes =arr
export default new VueRouter({
    routes
})