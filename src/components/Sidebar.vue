<template>
  <div class="flex-initial">
    <Title :title="title" />
    <Search />
    <Dropdown />
  </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
import Search from './Search.vue'
import Title from './Title.vue'

export default {
  components: {
    Dropdown, 
    Search,
    Title
  },
  props: {
    title: String
  }
}
</script>

<style>

</style>