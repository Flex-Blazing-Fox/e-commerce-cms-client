<template>
  <div @click="login" class="cursor-pointer hover:text-gray-500 flex flex-row items-center gap-3">
    <i class='bx bx-log-in-circle'></i>
    <span class="text-lg">Masuk</span>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'CustomerLogin' })
    }
  }
}
</script>

<style>

</style>