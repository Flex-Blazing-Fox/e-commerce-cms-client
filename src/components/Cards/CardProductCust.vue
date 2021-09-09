<template>
    <div class="card w-1/5 shadow-md h-400 flex flex-col mt-20 mr-10px">
        <div class="card-image w-max h-200">
          <img
            :src="product.image_url"
            class="h-24 w-24 bg-white border content-center"
            alt=".."
          />
        </div>
        <div class="flex flex-col h-max items-center">
          <h3>{{product.name}}</h3>
          <p>{{product.description}}</p>
        </div>
        <button
        class="bg-red-500 text-white text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg "
        @click.prevent="addToCart"
        >
            Add To Cart
        </button>
    </div>
</template>

<script>
export default {
  name: 'ProductCust',
  props: ['product'],
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product)
    }
  }
}
</script>

<style>

</style>
