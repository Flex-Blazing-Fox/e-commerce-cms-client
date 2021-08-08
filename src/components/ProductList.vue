<template>
  <div>
    <h3>Latest Products</h3><hr>
    <div class="row d-flex flex-row">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
      <div class="col-md-3">
        <div class="card">
        <img src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-16.jpg" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Cabbage</h5>
          <span class="card-text">Rp. 15000</span>
        </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
        <img src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-29-768x634.jpg" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Avocado</h5>
          <span class="card-text">Rp. 15000</span>
        </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
        <img src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-19-768x512.jpg" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Shiitake Mushroom</h5>
          <span class="card-text">Rp. 15000</span>
        </div>
        </div>
      </div>
       <div class="col-md-3">
        <div class="card">
        <img src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-8-768x576.jpg" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Garlic</h5>
          <span class="card-text">Rp. 15000</span>
        </div>
        </div>
      </div>
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
