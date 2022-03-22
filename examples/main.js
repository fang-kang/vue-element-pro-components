import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'babel-polyfill'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueElementProCompontents from 'packages'

Vue.use(ElementUI)
Vue.use(VueElementProCompontents)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
