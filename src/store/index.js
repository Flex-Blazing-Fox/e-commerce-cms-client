import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'
export default createStore({
  state: {
    products: [],
    isLogin: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_isLOGIN (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    // login
    login (context, payload) {
      axios({
        method: 'post',
        url: '/admin/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.access_token)
          context.commit('SET_isLOGIN', true)
          router.push({ path: '/admin' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    // admin page
    getAllProducts (context, payload) {
      axios({
        method: 'get',
        url: '/admin/product',
        headers: {
          access_token: localStorage.token // localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProduct (context, payload) {
      return axios({
        method: 'get',
        url: '/admin/product/' + payload,
        headers: {
          access_token: localStorage.token // localStorage.access_token
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/admin/product',
        headers: {
          access_token: localStorage.token // localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push({ path: '/admin/add-product' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'put',
        url: '/admin/product/' + payload.id,
        headers: {
          access_token: localStorage.token // localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push({ path: '/admin/product-list' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'delete',
        url: '/admin/product/' + payload,
        headers: {
          access_token: localStorage.token // localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('getAllProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
