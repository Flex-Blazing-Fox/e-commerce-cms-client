<template>
  <button
    class="
      text-center 
      mt-4 
      w-44 
      bg-green-400
      hover:bg-green-600 
      py-2 
      px-6 
      rounded-md 
      text-white"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
