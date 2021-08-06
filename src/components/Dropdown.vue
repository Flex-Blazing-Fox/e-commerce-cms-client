<template>
  <div class="bg-white my-4">
    <select class="w-full h-full py-3 px-2 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-green-400 border-none">
      <option selected>Tipe Produk</option>
      <option v-for="type in types" :key="type.id">{{ type.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    types() {
      return this.$store.state.types
    }
  },
  created() {
    this.$store.dispatch('fetchTypes')
  }
}
</script>
