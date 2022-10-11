import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from '@/store/store.js'
import '@/plugins/firebase.js'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { getDatabase, ref, child, push, update } from "firebase/database";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)

new Vue({
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
}).$mount('#app')
