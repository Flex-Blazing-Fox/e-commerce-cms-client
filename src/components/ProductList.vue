<template>
  <div class="col-md-12">
    <h3>Latest Products</h3><hr>
    <div class="row d-flex flex-row">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
  name: 'Product List',
  components: { ProductItem },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style scoped>
img{
  width:100%;
  height:180px;
  object-fit: cover;
  overflow:hidden;
}
.card {
  transition: all 0.3s ease-out;
}
.card:hover{
  transform: scale(1.02);
}
</style>
