import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product/Product.vue')
  },
  {
    path: '/product/:id',
    name: 'Product Detail',
    component: () => import('../components/ProductDetail.vue')
  },
  {
    path: '/add-product',
    name: 'Add Product',
    component: () => import('../views/Product/AddProduct.vue')
  },
  {
    path: '/edit-product/:id',
    name: 'Edit Product',
    component: () => import('../views/Product/EditProduct.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/video',
    name: 'Videos',
    component: () => import('../views/Videos/Videos.vue')
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '*',
    name: 'NotFound',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.access_token) next({ name: 'Login' })
  else next()
})

export default router
