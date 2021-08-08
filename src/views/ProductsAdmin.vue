<template>
  <div class="flex-col mt-10">
    <div v-for="product in products" :key="product.id" class="w-full flex place-content-center">
      <ProductData :product="product" class="w-1/2"></ProductData>
    </div>
  </div>
</template>

<script>
import ProductData from "../components/ProductData.vue";

export default {
  name: "ProductsAdmin",
  components: { ProductData },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>