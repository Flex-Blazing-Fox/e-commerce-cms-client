<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href=""
          >
            TOK.D
          </a>
        </router-link>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
          </li>
          <li class="flex items-center" v-if="custLogin">
            <router-link to="/customer/cart">
              <a
                class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
                href=""
              >
                <i class="text-blueGray-400 fas fa-shopping-cart text-lg leading-lg" />
              </a>
            </router-link>
          </li>
          <li class="flex items-center" v-if="!custLogin">
            <router-link
            to="/customer/login">
              <button
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              >
                Login
              </button>
            </router-link>
          </li>
          <li class="flex items-center" v-if="custLogin">
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      custLogin: false
    }
  },
  props: [''],
  methods: {
    logout () {
      this.$state.dispatch('logoutCust')
    }
  },
  mounted: function () {
    this.custLogin = this.$store.state.custLogin
  }
}
</script>
