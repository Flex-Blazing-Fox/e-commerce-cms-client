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
        <select name="productCategory" class="form-control" v-model="product.category">
          <option value="">--Choose One--</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
        </select>
      </div>
      <div class="form-group">
          <button @click.prevent="addProduct" type="submit" class="btn btn-success">Simpan</button>
          <router-link to="/product"  class="btn btn-warning">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        category: ''
      }
    }
  },
  computed: {
    categories () {
      return this.$store.state.productCategories
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('storeProduct', this.product)
    }
  },
  created () {
    this.$store.dispatch('fetchProductCategories')
  }
}
</script>
