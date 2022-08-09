import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find')
  }
]

const router = new VueRouter({
  routes
})

export default router
