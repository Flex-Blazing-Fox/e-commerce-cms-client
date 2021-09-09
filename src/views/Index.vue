<template>
  <div>
    <home-navbar />
    <section
      class="header relative items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">
              TOK.D
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Tingkatkan omset penjualan melalui TOK.D
            </p>
            <div class="mt-12">
              <router-link
                to="/login"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                MULAI JUALAN
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="absolute top-12 b-auto right-0 sm:w-6/12 -mt-0 sm:mt-0 w-10/12 max-h-860-px"
        src="https://www.integrity-indonesia.com/wp-content/uploads/sites/2/2018/08/ecommerce.jpg"
        alt="..."
      />
    </section>
    <div class="home-container w-100 flex justify-center flex-wrap p-4">
      <product-cust
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
    </div>
  </div>
</template>
<script>
import HomeNavbar from '../components/Navbars/HomeNavbar.vue'
import ProductCust from '../components/Cards/CardProductCust.vue'
export default {
  data () {
    return {
    }
  },
  components: { HomeNavbar, ProductCust },
  computed: {
    products () {
      return this.$store.state.productsCust
    }
  },
  created () {
    this.$store.dispatch('getAllProductsCust')
  },
  mounted () {
  }
}
</script>
