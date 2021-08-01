<template>
  <div class="h-screen bg-homebackground">
    <div v-for="product in products" :key="product.id" class="flex">
      <ProductCard :product="product"></ProductCard>
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
