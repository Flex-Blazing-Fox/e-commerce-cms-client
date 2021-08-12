<template>
  <BodyWrapper>
    <Navbar>
      <LogoutButton v-if="isLoggedin" routeName="CustomerLogin" />
      <SigninButton v-if="!isLoggedin" />
      <RegisterButton v-if="!isLoggedin" />
    </Navbar>

    <div class="px-36 gap-8 py-10" style="display: grid; grid-template-columns: 70% 1fr;">
      <div class="bg-white rounded-lg">
        <div v-for="product in cart" :key="product.product.id" class="flex flex-row justify-between items-center px-10 py-5">
          <span>
            {{ product.product.name }}
          </span>
          <div class="flex flex-row items-center gap-3">
            <!-- <i @click="minus(product.product.id)" class='bx bx-minus-circle bx-sm text-green-400 hover:text-green-600 cursor-pointer'></i> -->
            <span>
              {{ product.count }}
            </span>
            <!-- <i @click="plus(product.product)" class='bx bx-plus-circle bx-sm text-green-400 hover:text-green-600 cursor-pointer'></i> -->
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg flex flex-col justify-center items-center">
        <span class="py-4">{{ total }}</span>
        <button @click="buy" class="bg-green-300 px-10 py-2 rounded-full mb-4 text-white hover:bg-green-500">Beli</button>
      </div>
    </div>
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'
import Navbar from '../components/Navbar.vue'
import LogoutButton from '../components/LogoutButton.vue'
import SigninButton from '../components/SigninButton.vue'
import RegisterButton from '../components/RegisterButton.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  components: {
    BodyWrapper,
    Navbar,
    SigninButton,
    RegisterButton,
    LogoutButton
  },
  computed: {
    cart() {
      let cart = this.$store.state.cart
      let countProductById = {}
      
      cart.forEach(product => {
        if (countProductById[product.id] == null) {
          countProductById[product.id] = {
            count: 1,
            product: product
          }
        } else {
          countProductById[product.id].count++
        }
      })

      return countProductById
    },
    total() {
      let total = 0
      this.$store.state.cart.forEach(product => {
        total += product.price
      })
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)
    },
    isLoggedin() {
      return localStorage.access_token
    }
  },
  methods: {
    buy() {
      
    }
  }
}
</script>