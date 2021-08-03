import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '../views/AdminHome.vue'

const routes = [
  {
    path: '/',
    name: 'AdminHome',
    component: AdminHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
