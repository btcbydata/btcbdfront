import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import '@/plugins/firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
