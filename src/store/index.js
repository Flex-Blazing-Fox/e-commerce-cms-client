import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
export default createStore({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    getAllProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/admin/product',
        headers: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE2Mjc2OTE1OTh9.I7hyJskt_AmGkfMEn7-fDpdqFQ134iZg1DDx3dSE4sU' // localStorage.access_token
      })
        .then(data => {
          console.log(data)
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
