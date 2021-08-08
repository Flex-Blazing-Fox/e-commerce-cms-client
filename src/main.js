import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

// styles

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/styles/tailwind.css'

// mouting point for the whole app

import App from '@/App.vue'

// layouts

import Admin from '@/layouts/Admin.vue'

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue'
import AddProduct from '@/views/admin/AddProduct.vue'
import ListProduct from '@/views/admin/TablesListProduct.vue'
import Maps from '@/views/admin/Maps.vue'

// views for Auth layout

import Login from '../src/views/Login.vue'

// views without layouts

import Index from '@/views/Index.vue'

// routes

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Admin,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard
      },
      {
        path: '/admin/add-product',
        component: AddProduct
      },
      {
        path: '/admin/product-list',
        component: ListProduct
      },
      {
        path: '/admin/maps',
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

createApp(App).use(router).mount('#app')
