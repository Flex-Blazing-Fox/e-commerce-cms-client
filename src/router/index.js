import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '../views/AdminHome.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AddType from '../views/AddType.vue'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'
import CustomerLogin from '../views/CustomerLogin.vue'
import CustomerRegister from '../views/CustomerRegister.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customer/login',
    name: 'CustomerLogin',
    component: CustomerLogin
  },
  {
    path: '/customer/register',
    name: 'CustomerRegister',
    component: CustomerRegister
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHome
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/add-type',
    name: 'AddType',
    component: AddType
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (
    (to.name === 'AdminHome' || 
      to.name === 'EditProduct' || 
      to.name === 'AddProduct' || 
      to.name === 'AddType') && 
    !localStorage.access_token) {
      next({ name: 'AdminLogin' })
    } else {
      next()
    }
})

export default router
