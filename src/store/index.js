import { createStore } from 'vuex'
import axios from 'axios'
import moment from 'moment'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'

export default createStore({
  state: {
    types: [],
    products: [],
    adminEmail: '',
    adminPassword: '',
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload.map(product => {
        return {
          ...product,
          type: product.Product_Types[0].Type.name,
          createdAt: moment(product.createdAt).format('DD-MMM-YYYY')
        }
      })
    },
    SET_TYPES(state, payload) {
      state.types = payload
    },
    SET_JWT(state, jwt) {
      localStorage.access_token = jwt
    },
    SET_ADMIN_EMAIL(state, email) {
      state.adminEmail = email
    },
    SET_ADMIN_PASSWORD(state, password) {
      state.adminPassword = password
    },
    REMOVE_ADMIN_CREDENTIALS(state) {
      state.adminEmail = ''
      state.adminPassword = ''
    },
    SET_TYPE_NAME(state, type) {
      state.typeName = type
    }
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('/products')
        .then(({ data }) => {
          commit('SET_PRODUCTS', data.products)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchProduct(context, productId) {
      return axios.get('/products/' + productId)
    },
    fetchTypes({ commit }) {
      axios.get('/types')
        .then(({ data }) => {
          commit('SET_TYPES', data.types)
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    },
    adminLogin({ commit, state }) {
      axios({
        url: '/admin/login',
        method: 'POST',
        data: {
          email: state.adminEmail,
          password: state.adminPassword
        }
      })
        .then(({ data }) => {
          commit('SET_JWT', data.jwt)
          commit('REMOVE_ADMIN_CREDENTIALS')
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    },
    deleteProduct({ dispatch }, productId) {
      axios({
        url: '/products/' + productId,
        method: 'DELETE',
        headers: { access_token: localStorage.access_token }
      })
        .then(message => {
          console.log(message)
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    }
  }
})
