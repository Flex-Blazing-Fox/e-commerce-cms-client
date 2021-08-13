<template>
    <div>
        <home-navbar />
        <div class="flex flex-wrap mt-4">
            <div class="w-full mb-12 px-4">
                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-900 text-white">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 class="font-semibold text-lg">
                                    Cart
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
                                Qty
                                </th>
                                <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Price
                                </th>
                                <th
                                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                                Remove
                                </th>
                            </tr>
                            </thead>
                            <list-carts v-for="cart in getCarts"
                            :key="cart.id"
                            :cart="cart"/>
                        </table>
                        <button
                          class="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          type="button"
                          @click="checkout"
                        >
                          Checkout
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HomeNavbar from '../../components/Navbars/HomeNavbar.vue'
import ListCarts from '../../components/Cards/CardCartList.vue'

export default {
  name: 'Cart',
  components: {
    HomeNavbar,
    ListCarts
  },
  data () {
    return {
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  computed: {
    getCarts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>

<style>

</style>
