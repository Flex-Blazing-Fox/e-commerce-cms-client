import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '../views/AdminHome.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'AdminHome',
    component: AdminHome
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

export default router
