<template>
  <div class="h-screen bg-homebackground flex mt-3">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product"></ProductCard>
      <a class="mr-2" v-if="isAdmin">Edit</a>
      <a v-if="isAdmin">Delete</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "Home",
  props: ["isAdmin"],
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      axios({
        method: "GET",
        url: "/product",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          this.products = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
