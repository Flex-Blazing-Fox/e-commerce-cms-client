<template>
  <BodyWrapper>
    <div class="bg-white w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <h1 class="text-4xl text-center pt-10 font-bold">JFK CMS</h1>
      <form @submit.prevent="login" class="p-10 flex flex-col justify-center ">
        <div class="flex font-bold justify-center">
          <img class="h-20 w-20"
              src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg">
        </div>
        <h2 class="text-3xl text-center text-gray-700 mb-4">Admin</h2>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-user'></i>
          </div>
          <input v-model="adminEmail" type="text" placeholder="Email" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <div class="relative border-b-2">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-lock-alt'></i>
          </div>
          <input v-model="adminPassword" type="password" placeholder="Password" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <button @click="login" class="w-1/2 mx-auto bg-green-200 mt-10 py-2 rounded-full hover:bg-green-400 active:ring-2 active:ring-green-400" type="button">Login</button>
      </form>
    </div>
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'

export default {
  components: {
    BodyWrapper
  },
  computed: {
    adminEmail: {
      get () {
        return this.$store.state.adminEmail
      },
      set (value) {
        this.$store.commit('SET_ADMIN_EMAIL', value)
      }
    },
    adminPassword: {
      get () {
        return this.$store.state.adminPassword
      },
      set (value) {
        this.$store.commit('SET_ADMIN_PASSWORD', value)
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('adminLogin')
    }
  }
}
</script>