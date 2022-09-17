import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import recSystem from '../views/RSystem.vue'
import what from '../views/Whatisbtcbd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    redirect : '/404'
  },
  {
    path:'/404',
    component:NotFound
  },
  {
    path:'/whatisbtcbd',
    component:what
  },
  {
    path:'/aboutrecsystem',
    component:recSystem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
