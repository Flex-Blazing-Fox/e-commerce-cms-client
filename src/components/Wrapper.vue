<template>
  <div class="mx-auto my-5 w-4/5" :class="size">
    <div class="flex flex-row gap-6 justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: String
  }
}
</script>

<style>

</style>