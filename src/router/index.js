import { createWebHistory, createRouter } from 'vue-router'
// layouts
import Admin from '../layouts/Admin.vue'
// views for Admin layout
import Dashboard from '../views/admin/Dashboard.vue'
import AddProduct from '../views/admin/AddProduct.vue'
import ListProduct from '../views/admin/TablesListProduct.vue'
import UpdateProduct from '../views/admin/UpdateProduct.vue'
import Maps from '../views/admin/Maps.vue'
// views for Auth layout
import Login from '../views/Login.vue'
// views without layouts
import Index from '../views/Index.vue'
import store from '../store'

// const token = localStorage.token

const routes = [
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
        component: Dashboard,
        meta: {
          auth: true
        }
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
      },
      {
        path: 'maps',
        component: Maps
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Index
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta.auth && !store.state.isLogin) {
    return {
      path: '/login'
    }
  } else if (!to.meta.auth && store.state.isLogin) {
    return {
      path: '/admin'
    }
  }
})

export default router
