<template>
  <router-link to="/" class="mr-2">Home</router-link>
  <router-link to="/login" class="mr-2">Login</router-link>
  <router-link to="/add" v-if="isAdmin" class="mr-2">Add</router-link>
  <a class="cursor-pointer" @click.prevent="logout">Logout</a>
  <div>
    <router-view :isAdmin="isAdmin" />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin;
    },
  },
};
</script>

<style>
</style>
