<template>
  <div @click="logout" class="cursor-pointer hover:text-gray-500 flex flex-row items-center gap-3">
    <i class='bx bx-log-out-circle'></i>
    <span class="text-lg">Keluar</span>
  </div>
</template>

<script>
export default {
  props: {
    routeName: String
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: this.routeName })
    }
  }
}
</script>

<style>

</style>