<template>
  <div @click="register" class="cursor-pointer hover:text-gray-500 flex flex-row items-center gap-3">
    <i class='bx bx-user-plus'></i>
    <span class="text-lg">Daftar</span>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      this.$router.push({ name: 'CustomerRegister' })
    }
  }
}
</script>

<style>

</style>