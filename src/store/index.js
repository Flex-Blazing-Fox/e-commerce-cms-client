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
    recommended_items: [],
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
    DELETE_ORDER(state, payload) {
      state.orders = state.orders.filter((order) => +order.id !== payload);
    },
    SET_ORDERS(state, payload) {
      const found = state.orders.some((order) => +order.id === +payload.id);
      if (!found) {
        state.orders.push(payload);
      } else {
        let index = state.orders.findIndex(
          (order) => +order.id === +payload.id
        );
        state.orders[index].count = +state.orders[index].count + +payload.count;
      }
    },
    RESET_ORDERS(state) {
      state.orders = [];
    },
    SET_RECOMMENDED_ITEMS(state, payload) {
      state.recommended_items = [payload];
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
    removeOrder(context, payload) {
      context.commit("DELETE_ORDER", payload);
    },
    sendOrder(context) {
      return axios({
        method: "POST",
        url: "/order",
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
        data: context.state.orders,
      });
    },
    getRecommendations(context) {
      let ids = context.state.orders.map((order) => order.id);
      axios({
        method: "POST",
        url: "/order/recommendations",
        headers: {
          "Content-Type": "application/json",
          access_token: context.state.access_token,
        },
        data: { ids: ids },
      })
        .then(({ data }) => {
          return context.dispatch("getProduct", data.recommended_item_id);
        })
        .then(({ data }) => {
          context.commit("SET_RECOMMENDED_ITEMS", data);
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
      router.push({ path: "/" });
    },
  },
});
