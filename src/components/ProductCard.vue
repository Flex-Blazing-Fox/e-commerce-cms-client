<template>
  <div class="flex flex-col shadow-lg bg-white justify-center items-center py-4 px-2">
    <div class="w-44 mb-5">
      <img :src="productFormatted.image_url" :alt="productFormatted.name" />
    </div>
    <div>
      <h2 class="text-xl">{{ productFormatted.name }}</h2>
    </div>
    <div class="flex flex-row items-center justify-between w-full px-7 mt-5">
      <div>
        <h2 class="font-bold">Price</h2>
        <span>{{ productFormatted.price }}</span>
      </div>
      <div>
        <h2 class="font-bold">Stock</h2>
        <span>{{ productFormatted.stock }}</span>
      </div>
    </div>
    <div class="mt-5">
      <button @click="addToCart(product)" class="bg-green-400 px-5 py-2 rounded-full text-white hover:bg-green-600">Tambahkan Ke Keranjang</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  computed: {
    productFormatted() {
      return {
        ...this.product,
        price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.product.price)
      }
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>

<style>

</style>