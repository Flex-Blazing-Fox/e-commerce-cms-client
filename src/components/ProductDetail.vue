<template>
  <div class="row">
    <div class="col-md-5 detail">
      <img :src="product.image_url" alt="">
    </div>
    <div class="col-md-7">
      <div class="row">
        <div class="col-md-12 name">
           <h3>{{product.name}}</h3><hr>
        </div>
        <div class="col-md-12 category">
          <span>Category: {{product.Category.categoryName}}</span>
        </div>
        <div class="col-md-6"><h4>Rp.{{ product.price }}</h4></div>
        <div class="col-md-6"><button @click.prevent="$store.dispatch('addToCart', $route.params.id)"  class="btn btn-success">Add to Cart</button></div>
        <div class="col-md-12 descriptions">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" aria-current="page" href="#descriptions">Descriptions</a>
            </li>
          </ul>
          <p>{{product.descriptions}}</p>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h3>Related Products</h3>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      product: [],
      activeItem: 'home'
    }
  },
  created () {
    this.$store.dispatch('getProductById', this.$route.params.id)
      .then(({ data }) => {
        this.product = data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
p{
  margin-top:10px;
}
button{
  width:100%;
}
img{
  width:100%;
  height:400px;
  object-fit: cover;
  overflow:hidden;
}
.row{
  padding:25px;
}
.category{
  margin-bottom:10px;
}
.detail{
  margin-bottom:20px;
}
.descriptions{
  margin-top:15px;
}
</style>
