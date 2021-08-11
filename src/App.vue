<template>
  <div class="w-screen bg-primarycolor">
    <div class="flex justify-between">
      <div
        class="
          text-white
          mt-8
          mb-4
          ml-20
          text-3xl
          font-display font-bold
          transform
          transition-all
          -translate-y-36
          duration-1500
          opacity-0
        "
        data-replace='{"-translate-y-36": "translate-y-0", "opacity-0":"opacity-1"}'
      >
        Yukahom
      </div>
      <div class="mr-40 mt-8 font-display font-medium text-lg">
        <router-link to="/" class="mr-8 text-white">Home</router-link>
        <router-link to="/" class="mr-8 text-white">About</router-link>
        <router-link :to="productTo" class="mr-8 text-white"
          >Products</router-link
        >
        <router-link to="/cart" class="mr-8 text-white">Cart</router-link>
        <router-link to="/login" class="mr-8 text-white" v-if="!isLogin"
          >Login</router-link
        >
        <router-link
          to="/add"
          v-if="isAdmin"
          class="mr-8 bg-primarycolor text-white"
          >Add</router-link
        >
        <a
          class="cursor-pointer text-white"
          @click.prevent="logout"
          v-if="isLogin"
          >Logout</a
        >
      </div>
    </div>
  </div>
  <router-view :isAdmin="isAdmin" />
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    onHeroButtonClassChange(classAttrValue) {
      const classList = classAttrValue.split(" ");
      if (classList.includes("opacity-1")) {
        classList.remove("delay-2000");
        classList.remove("duration-1500");
        classList.add("hover:translate-y-2");
        classList.add("duration-500");
      }
    },
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin;
    },
    isLogin() {
      return this.$store.state.access_token;
    },
    productTo() {
      return this.$store.state.isAdmin
        ? "/products-admin"
        : "/products-customer";
    },
  },
  watch: {
    $route: function (value) {
      if (value.name === "Home") {
        setTimeout(function () {
          var replacers = document.querySelectorAll("[data-replace]");
          for (var i = 0; i < replacers.length; i++) {
            let replaceClasses = JSON.parse(
              replacers[i].dataset.replace.replace(/'/g, '"')
            );
            Object.keys(replaceClasses).forEach(function (key) {
              replacers[i].classList.remove(key);
              replacers[i].classList.add(replaceClasses[key]);
            });
          }
        }, 1);
      }
    },
  },
};
</script>

<style>
</style>
