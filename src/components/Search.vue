<template>
  <div class="relative mt-6 m">
    <input v-model="searchInput" type="text" class="py-2 pl-4 pr-10 rounded-sm text-lg" placeholder="Cari produk..." />
    <i class='bx bx-search absolute text-xl top-2 right-3'></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    }
  }
}
</script>