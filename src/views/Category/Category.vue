<template>
  <div class="row">
    <div class="col-md-12">
      <router-view/>
    </div>
    <div class="col-md-12">
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#add">Add New</button>
        <table class="table">
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="category in productCategories" :key="category.id">
                <td>{{ category.id}}</td>
                <td>{{ category.categoryName}}</td>
                <td>
                  <button @click="showEditModal(category.id)" data-bs-toggle="modal" data-bs-target="#edit" class="btn btn-primary btn-sm">Edit</button>
                  <button @click="$store.dispatch('deleteCategory', category.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal Add Category-->
    <div class="modal fade" id="add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form action="">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Category</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="CategoryName">Category Name</label>
              <input v-model="category.categoryName" type="text" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="addCategory" type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
        </form>
      </div>
    </div>

     <!-- Modal Edit Category-->
    <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form action="">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Category</h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="CategoryName">Category Name</label>
              <input v-model="category.categoryName" type="text" class="form-control">
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button @click="updateCategory" type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      category: {
        id: '',
        categoryName: ''
      }
    }
  },
  computed: {
    productCategories () {
      return this.$store.state.productCategories
    },
    filterCategory () {
      return this.$store.state.filterCateory
    }
  },
  methods: {
    addCategory () {
      this.$store.dispatch('storeCategory', this.category)
    },
    showEditModal (id) {
      this.$store.dispatch('filterCategory', id)
      this.category.id = this.filterCategory[0].id
      this.category.categoryName = this.filterCategory[0].categoryName
    },
    updateCategory () {
      this.$store.dispatch('updateCategory', this.category)
    }
  },
  created () {
    this.$store.dispatch('fetchProductCategories')
  }
}
</script>

<style>

</style>
