<template>
  <tr class="bg-white border-b-8 border-green-50">
    <td>{{ data.id }}</td>
    <td>{{ data.name }}</td>
    <td>{{ data.price }}</td>
    <td>{{ data.stock }}</td>
    <td>{{ data.type }}</td>
    <td>{{ data.createdAt }}</td>
    <td>
      <div class="flex flex-row gap-2">
        <i @click.prevent="toEditPage(data.id)" class='bx bx-edit text-green-400 hover:text-green-600 text-2xl cursor-pointer'></i>
        <i @click.prevent="deleteProduct(data.id)" class='bx bx-trash-alt text-red-400 hover:text-red-600 text-2xl cursor-pointer'></i>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    deleteProduct (productId) {
      this.$store.dispatch('deleteProduct', productId)
    },
    toEditPage (productId) {
      this.$router.push('/edit-product/' + productId)
    }
  }
}
</script>

<style>
td {
  padding: 8px 2em;
}
</style>