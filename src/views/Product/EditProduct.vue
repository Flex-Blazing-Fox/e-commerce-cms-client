<template>
  <div>
    <form action="">
      <div class="form-group">
        <label for="ProductName">Product Name</label>
        <input v-model="product.name" type="text" class="form-control" placeholder="Product Name">
      </div>
      <div class="form-group">
        <label for="ProductName">Product Image</label>
        <input v-model="product.image_url" type="text" class="form-control" placeholder="Image URL">
      </div>
      <div class="form-group">
        <label for="ProductPrice">Price</label>
        <input v-model="product.price" type="number" class="form-control">
      </div>
      <div class="form-group">
        <label for="ProductStock">Stock</label>
        <input v-model="product.stock" type="number" class="form-control">
      </div>
      <div class="form-group">
        <label for="ProductCategory">Product Category</label>
        <select name="productCategory" class="form-control" v-model="product.categoryId">
          <option value="">--Choose One--</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
        </select>
      </div>
      <div class="form-group">
          <button @click.prevent="updateProduct" type="submit" class="btn btn-success">Simpan</button>
          <router-link to="/product"  class="btn btn-warning">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        categoryId: ''
      }
    }
  },
  computed: {
    categories () {
      return this.$store.state.productCategories
    }
  },
  methods: {
    updateProduct () {
      return this.$store.dispatch('updateProduct', {
        product: this.product,
        id: this.$route.params.id
      })
    }
  },
  created () {
    this.$store.dispatch('fetchProductCategories')
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

<style>

</style>
