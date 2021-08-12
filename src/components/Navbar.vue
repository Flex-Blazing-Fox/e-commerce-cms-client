<template>
  <div class="bg-white text-2xl shadow-md flex flex-row justify-between items-center px-32 py-3">
    <div class="cursor-pointer" @click="$router.push('/')">
      <span>JFK Workshop</span>
    </div>
    
    <div class="flex flex-row gap-8">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>