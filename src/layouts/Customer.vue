<template>
  <div>
    <home-navbar />
    <router-view />
  </div>
</template>
<script>
import HomeNavbar from '../layouts/Customer.vue'
export default {
  name: 'admin-layout',
  components: {
    HomeNavbar
  }
}
</script>
