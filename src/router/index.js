import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/add",
    name: "AddProduct",
    component: () => import("../views/AddProduct.vue"),
  },
  {
    path: "/edit/:id",
    name: "EditProduct",
    component: () => import("../views/EditProduct.vue"),
  },
  {
    path: "/products-customer",
    name: "ProductsCustomer",
    component: () => import("../views/ProductsCustomer.vue"),
  },
  {
    path: "/products-admin",
    name: "ProductsAdmin",
    component: () => import("../views/ProductsAdmin.vue"),
  },
  {
    path: "/order/:id",
    name: "Order",
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!["Home","Login","ProductsCustomer","About","Order"].includes(to.name) && !store.state.access_token) next({ name: "Home" });
  else next();
});

export default router;
