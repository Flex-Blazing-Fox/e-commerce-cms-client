<template>
  <div class="bg-white my-4">
    <select class="w-full h-full py-3 px-2 bg-white">
      <option selected>Tipe Produk</option>
      <option :value="type in types">Sling bag</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    types() {
      return this.$store.state.types
    }
  }
}
</script>
