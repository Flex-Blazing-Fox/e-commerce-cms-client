<template>
  <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
      <div class="col-md-12">
          <router-link to="/add-product" class="btn btn-success">Add New</router-link>
          <table class="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Product Images</th>
                      <th>Category</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="product in products" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.image_url }}</td>
                      <td>{{ product.Category.categoryName }}</td>
                      <td>
                          <button @click="toEdit(product.id)" class="btn btn-primary btn-sm">Edit</button>
                          <button @click="$store.dispatch('deleteProduct', product.id)" class="btn btn-danger btn-sm">Delete</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    toEdit (id) {
      this.$router.push('/edit-product/' + id)
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<style>
.btn{
    margin:2px;
}
</style>
