import { createStore } from "vuex";
import axios from "axios";
import router from "../router";

export default createStore({
  state: {
    products: [],
    isLogin: false,
    isAdmin: false,
    access_token: "",
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_IS_ADMIN(state) {
      if (!state.isAdmin) {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload;
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
    submitLogin({ commit }, payload) {
      axios({
        method: "POST",
        url: "/user/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      })
        .then(({ data }) => {
          commit("SET_ACCESS_TOKEN", data.access_token);
          if (data.role === "admin") commit("SET_IS_ADMIN");
          router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logout({ commit }) {
      commit("SET_ACCESS_TOKEN", "");
      commit("SET_IS_ADMIN");
      router.push({ path: "/" });
    },
  },
});
