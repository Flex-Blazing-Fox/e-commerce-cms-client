<template>
  <div class="flex-initial my-4">
    <Title :title="title" />
    <Search />
    <Dropdown />
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
import Search from './Search.vue'

export default {
  components: {
    Dropdown, 
    Search
  },
  props: {
    title: String
  }
}
</script>

<style>

</style>