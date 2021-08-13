<template>
  <div class="">
    <Navbar/>
    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>

</style>
