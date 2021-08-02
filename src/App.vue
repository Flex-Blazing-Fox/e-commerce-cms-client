<template>
  <router-link to="/" class="mr-2">Home</router-link>
  <router-link to="/login" class="mr-2">Login</router-link>
  <router-link to="/add" v-if="isAdmin" class="mr-2">Add</router-link>
  <a class="cursor-pointer" @click.prevent="logout">Logout</a>
  <div>
    <router-view :isAdmin="isAdmin"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isAdmin: localStorage.isAdmin === "true" ? true : false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("isAdmin");
      this.isAdmin = false
      this.$router.push({path: '/'})
    },
  },
};
</script>

<style>
</style>
