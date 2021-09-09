<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-900 text-white">
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-lg">
                Product List
              </h3>
            </div>
          </div>
        </div>
    <div class="block w-full overflow-x-auto">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr class=" bg-emerald-800 text-emerald-300 border-emerald-700">
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Product
            </th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Stock
            </th>
            <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Price
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Action
            </th>
          </tr>
        </thead>
        <list-product v-for="product in products"
        :key="product.id"
        :product="product"/>
        </table>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import ListProduct from '../../components/Cards/CardListProduct.vue'

export default {
  name: 'TablesListProduct',
  components: {
    ListProduct
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
