<template>
  <div class="flex justify-between font-display">
    <div class="mt-10 ml-20 text-blue-900 text-2xl font-bold">
      Pilih Barang Kesukaanmu
    </div>
    <div class="mt-10 mr-24">
      <div class="flex">
        <div class="mr-5 border-2 p-1">
          <select name="category" id="category" class="outline-none">
            <option value="" selected>--Pilih Kategori--</option>
            <option value="baju">Baju</option>
            <option value="celana">Celana</option>
            <option value="sepatu">Sepatu</option>
            <option value="elektronik">Elektronik</option>
          </select>
        </div>
        <div class="border-2 p-1">
          <select name="sort" id="sort" class="outline-none">
            <option value="" selected>--Urutkan Dari--</option>
            <option value="popularity">Popularitas</option>
            <option value="price">Harga</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen flex mt-10 justify-evenly">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductsCustomer",
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