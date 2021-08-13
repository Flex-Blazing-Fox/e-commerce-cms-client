import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productCategories: [],
    filterCateory: [],
    shoppingCart: [],
    province: []
  },
  mutations: {
    SET_PRODUCT (state, payload) {
      state.products = payload
    },
    SET_PRODUCT_CATEGORY (state, payload) {
      state.productCategories = payload
    },
    SET_FILTER_CATEGORY (state, payload) {
      const category = state.productCategories.filter(cat => cat.id === payload)
      state.filterCateory = category
    },
    SET_SHOPPING_CART (state, payload) {
      state.shoppingCart = payload
    },
    SET_PROVINCE (state, payload) {
      state.province = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
    },

    /*
      Start Product Actions
    */

    fetchProduct ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          commit('SET_PRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    storeProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push('/product')
        })
        .catch(err => {
          console.log(err.response.data[0].message)
        })
    },
    deleteProduct ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          console.log('berhasil')
          dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct ({ dispatch }, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.product.name,
          image_url: payload.product.image_url,
          price: payload.product.price,
          stock: payload.product.stock,
          descriptions: payload.product.descriptions,
          category: payload.product.categoryId
        }
      })
        .then(() => {
          console.log('data updated')
          dispatch('fetchProduct')
          router.push('/product')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProductById ({ commit }, payload) {
      return axios({
        method: 'GET',
        url: `/products/${payload}`
      })
    },

    // End Of Product Actions

    /*
      Start Category Actions
    */

    fetchProductCategories ({ commit }) {
      axios({
        method: 'GET',
        url: '/category'
      })
        .then(({ data }) => {
          commit('SET_PRODUCT_CATEGORY', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    storeCategory (context, payload) {
      axios({
        method: 'POST',
        url: '/category',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(() => {
          router.push('/category')
        })
        .catch(err => {
          console.log(err.response.data[0].message)
        })
    },
    updateCategory (context, payload) {
      axios({
        method: 'PUT',
        url: `/category/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: { categoryName: payload.categoryName }
      })
        .then(() => {
          router.push('/category')
        })
        .catch(err => {
          console.log(err.response.data[0].message)
        })
    },
    deleteCategory ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `/category/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          dispatch('fetchProductCategories')
        })
        .catch(err => {
          console.log(err.response.data[0].message)
        })
    },
    filterCategory ({ commit }, payload) {
      commit('SET_FILTER_CATEGORY', payload)
    },

    // End Of Category Actions

    uploadVideo (context, payload) {
      const file = payload.files[0]
      const newData = new FormData()
      newData.append('file', file)

      axios({
        method: 'POST',
        url: '/videos',
        data: newData
      })
        .then(() => {
          console.log('berhasil')
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchShoppingCart ({ commit }) {
      axios({
        method: 'GET',
        url: '/cart'
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_SHOPPING_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart ({ dispatch }, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: `/cart/${payload}`
      })
        .then(() => {
          dispatch('fetchShoppingCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    add ({ dispatch }, payload) {
      axios({
        method: 'PATCH',
        url: `/cart/add/${payload}`
      })
        .then(() => {
          dispatch('fetchShoppingCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    sub ({ dispatch }, payload) {
      axios({
        method: 'PATCH',
        url: `/cart/sub/${payload}`
      })
        .then(() => {
          dispatch('fetchShoppingCart')
        })
        .catch(err => {
          console.log(err)
        })
    },

    getProvince ({ commit }) {
      axios({
        method: 'GET',
        url: 'shipping/province'
      })
        .then(({ data }) => {
          console.log(data.rajaongkir.results)
          commit('SET_PROVINCE', data.rajaongkir.results)
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
