<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
</style>
