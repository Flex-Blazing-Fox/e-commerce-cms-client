<template>
  <div class="bg-white text-2xl shadow-md flex flex-row justify-between items-center px-32 py-3">
    <div class="cursor-pointer">
      <span>JFK Workshop</span>
    </div>
    
    <div @click="logout" class="cursor-pointer hover:text-gray-500 flex flex-row items-center gap-3">
      <i class='bx bx-log-out-circle'></i>
      <span class="text-lg">Keluar</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/admin/login')
    }
  }
}
</script>