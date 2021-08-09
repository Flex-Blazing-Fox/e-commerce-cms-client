import { createStore } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import router from "../router";

export default createStore({
  state: {
    products: [],
    orders: [],
    isAdmin: false,
    access_token: "",
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_IS_ADMIN(state, payload) {
      state.isAdmin = payload;
    },
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
    },
    SET_ORDERS(state, payload) {
      state.orders.push(payload);
    },
  },
  actions: {
    getProducts({ commit }) {
      axios({
        method: "GET",
        url: "/product",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(({ data }) => {
          commit("SET_PRODUCTS", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct(context, payload) {
      return axios({
        method: "GET",
        url: `/product/${payload}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    addProduct({ state }, payload) {
      return axios({
        method: "POST",
        url: "/product",
        headers: {
          "Content-Type": "application/json",
          access_token: state.access_token,
        },
        data: payload,
      });
    },
    deleteProduct({ state }, payload) {
      return axios({
        method: "DELETE",
        url: `/product/${payload}`,
        headers: {
          "Content-Type": "application/json",
          access_token: state.access_token,
        },
      });
    },
    editProduct({ state }, payload) {
      return axios({
        method: "PUT",
        url: `/product/${payload.id}`,
        headers: {
          "Content-Type": "application/json",
          access_token: state.access_token,
        },
        data: payload.product,
      });
    },
    submitLogin(context, payload) {
      return axios({
        method: "POST",
        url: "/user/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });
    },
    logout({ commit }) {
      commit("SET_ACCESS_TOKEN", "");
      commit("SET_IS_ADMIN", false);
      commit("SET_ORDER", []);
      router.push({ path: "/" });
    },
  },
});
