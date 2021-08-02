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
  components: { ProductCard },
  computed: {
    products() {
      return this.$store.state.products
    },
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>
