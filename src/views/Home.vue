<template>
  <Header></Header>
  <div class="mt-10 ml-20 font-bold text-3xl text-yellow-600">Lagi Hot Sekarang</div>
  <div class="h-screen flex mt-10 justify-evenly">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product"></ProductCard>
      <a
        class="mr-2 cursor-pointer"
        v-if="isAdmin"
        @click.prevent="toEditProduct(product.id)"
        >Edit</a
      >
      <a
        class="cursor-pointer"
        v-if="isAdmin"
        @click.prevent="deleteProduct(product.id)"
        >Delete</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "../components/ProductCard.vue";
import Header from "../components/Header.vue"

export default {
  name: "Home",
  components: { ProductCard, Header },
  methods: {
    deleteProduct(id) {
      this.$store
        .dispatch("deleteProduct", id)
        .then(() => {
          this.$store.dispatch("getProducts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toEditProduct(id) {
      this.$router.push({path:`/edit/${id}`})
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    isAdmin() {
      return this.$store.state.isAdmin;
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>
