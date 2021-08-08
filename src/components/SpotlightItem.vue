<template>
  <div>
    <div class="mt-10 ml-20 font-bold text-3xl text-yellow-600">
      Lagi Hot Sekarang
    </div>
    <div class="h-screen flex mt-10 justify-evenly">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "SpotlightItem",
  components: { ProductCard },
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