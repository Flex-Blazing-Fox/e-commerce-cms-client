<template>
  <div class="col-md-3">
    <div class="card">
    <img src="https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-16.jpg" alt="" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <span class="card-text">Rp. {{product.price}}</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>

<style>
img{
  width:100%;
  height:180px;
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
