<template>
  <div class="absolute bottom-10 right-10 z-50">
    <div class="relative cursor-pointer">
      <div @click="toCart" class="flex flex-row items-center rounded-full px-4 py-3 gap-3 text-white bg-green-300 hover:bg-green-500">
        <i class='bx bx-basket bx-sm'></i>
        <span>Keranjang</span>
      </div>
      <div class="absolute -top-3 -left-3 rounded-full w-8 h-8 bg-red-400 text-white font-bold">
        <span class="flex items-center justify-center h-full">{{ cart.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    toCart() {
      this.$router.push({ name: 'Cart' })
    }
  }
}
</script>

<style>

</style>