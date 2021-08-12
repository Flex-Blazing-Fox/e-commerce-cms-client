<template>
  <BodyWrapper>
    <Navbar>
      <LogoutButton v-if="isLoggedin" routeName="CustomerLogin" />
      <SigninButton v-if="!isLoggedin" />
      <RegisterButton v-if="!isLoggedin" />
    </Navbar>

    <ProductWrapper>
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </ProductWrapper>
    <Cart v-if="isLoggedin" />
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'
import Navbar from '../components/Navbar.vue'
import Cart from '../components/Cart.vue'
import ProductWrapper from '../components/ProductWrapper.vue'
import ProductCard from '../components/ProductCard.vue'
import LogoutButton from '../components/LogoutButton.vue'
import SigninButton from '../components/SigninButton.vue'
import RegisterButton from '../components/RegisterButton.vue'

export default {
  components: {
    Navbar,
    LogoutButton,
    BodyWrapper,
    Cart,
    ProductWrapper,
    ProductCard,
    SigninButton,
    RegisterButton
  },
  created() {
    this.$store.dispatch('fetchProducts')
  },

  computed: {
    products() {
      return this.$store.state.products
    },
    isLoggedin() {
      return localStorage.access_token
    }
  }
}
</script>

<style>

</style>