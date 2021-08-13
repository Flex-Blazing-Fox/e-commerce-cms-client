import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'
export default createStore({
  state: {
    products: [],
    custLogin: localStorage.custToken,
    productsCust: [],
    carts: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    // cust
    SET_PRODUCTS_CUST (state, payload) {
      state.productsCust = payload
    },
    ADD_CUST_CART (state, payload) {
      state.carts.push(payload)
    },
    SET_CUST_CART (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    // login admin
    login (context, payload) {
      axios({
        method: 'post',
        url: '/admin/login',
        data: payload
      })
        .then(({ data }) => {
          if (data.token) {
            localStorage.setItem('token', data.token)
            router.push({ path: '/admin' })
          } else {
            throw new Error({ name: 'LOGIN_FAILED' })
          }
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
    },
    // customer page
    loginCust (context, payload) {
      axios({
        method: 'post',
        url: '/customer/login',
        data: payload
      })
        .then(({ data }) => {
          if (data.custToken) {
            localStorage.setItem('custToken', data.custToken)
            router.push({ path: '/' })
          } else {
            throw new Error({ name: 'LOGIN_FAILED' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllProductsCust (context, payload) {
      axios({
        method: 'get',
        url: '/customer/product'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS_CUST', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios({
        method: 'post',
        url: '/customer/cart',
        headers: {
          access_token: localStorage.custToken
        },
        data: {
          productId: payload.id,
          qty: 1
        }
      })
        .then(({ data }) => {
          context.commit('ADD_CUST_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart (context, payload) {
      axios({
        method: 'get',
        url: '/customer/cart',
        headers: {
          access_token: localStorage.custToken
        }
      })
        .then(({ data }) => {
          context.commit('SET_CUST_CART', data.cart)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios({
        method: 'post',
        url: '/customer/checkout',
        headers: {
          access_token: localStorage.custToken
        }
      })
        .then(({ data }) => {
          router.push({ path: '/customer/cart' })
          console.log(data)
          // window.snap.pay(data.transactionToken)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
