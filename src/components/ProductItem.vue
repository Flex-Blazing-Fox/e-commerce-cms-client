<template>
  <div class="col-md-3">
    <router-link :to="`/product/${product.id}`" :productDetail="product">
    <div class="card">
    <img :src="product.image_url" alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <span class="card-text">Rp. {{product.price}}</span>
    </div>
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>

<style scoped>
a{
  text-decoration: none;
  color:black;
}

a:hover{
  color:black;
}
img{
  width:100%;
  height:200px;
  object-fit: cover;
  overflow:hidden;
}
.card {
  cursor:pointer;
  transition: all 0.3s ease-out;
  margin-bottom:25px;
}
.card:hover{
  transform: scale(1.02);
}
</style>
