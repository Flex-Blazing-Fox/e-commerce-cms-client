import { createWebHistory, createRouter } from 'vue-router'
// layouts
import Admin from '../layouts/Admin.vue'
// views for Admin layout
import Dashboard from '../views/admin/Dashboard.vue'
import AddProduct from '../views/admin/AddProduct.vue'
import ListProduct from '../views/admin/TablesListProduct.vue'
import UpdateProduct from '../views/admin/UpdateProduct.vue'
// views for Auth layout
import Login from '../views/Login.vue'
// views without layouts
import Index from '../views/Index.vue'
// cust
import Customer from '../layouts/Customer.vue'
import LoginCust from '../views/cust/LoginCust.vue'
import Cart from '../views/cust/Cart.vue'

// const token = localStorage.token

const routes = [
  // admin
  {
    path: '/admin',
    component: Admin,
    redirect: '/admin/dashboard',
    meta: {
      auth: true
    },
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'add-product',
        component: AddProduct
      },
      {
        path: 'product-list',
        component: ListProduct
      },
      {
        path: 'update-product/:id',
        component: UpdateProduct
      }
    ]
  },
  // cutomer
  {
    path: '/customer',
    component: Customer,
    redirect: '/',
    children: [
      {
        path: 'login',
        component: LoginCust
      },
      {
        path: 'cart',
        component: Cart,
        meta: {
          custAuth: true
        }
      }
    ]
  },
  // guest
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'product-detail'
      }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.path.substr(0, 6) === '/admin' && to.meta.auth && !localStorage.token) {
    return {
      path: '/login'
    }
  } else if (to.path === '/login' && !to.meta.auth && localStorage.token) {
    return {
      path: '/admin'
    }
  } else if (to.path.substr(0, 9) === '/customer' && to.meta.custAuth && !localStorage.custToken) {
    return {
      path: '/customer/login'
    }
  } else if (to.path === '/customer/login' && !to.meta.custAuth && localStorage.custToken) {
    return {
      path: '/'
    }
  }
})
export default router
