import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from './utils/api'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = http
console.log(Vue.prototype.$http)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
