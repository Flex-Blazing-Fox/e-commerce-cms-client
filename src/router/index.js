import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '../views/AdminHome.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import AdminLogin from '../views/AdminLogin.vue'

const routes = [
  {
    path: '/',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/edit-product',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'AdminLogin' && !localStorage.access_token) next({ name: 'AdminLogin' })
  else next()
})

export default router
