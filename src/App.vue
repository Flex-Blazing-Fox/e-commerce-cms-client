<template>
  <router-link to="/">Home</router-link>
  <router-link to="/login" @submitLogin="submitLogin">Login</router-link>
  <router-link to="/add" v-if="isAdmin">Add</router-link>
  <a class="cursor-pointer" @click.prevent="logout">Logout</a>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isAdmin: localStorage.isAdmin === true ? true : false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("isAdmin");
    },
  },
};
</script>

<style>
</style>
