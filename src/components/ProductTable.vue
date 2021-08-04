<template>
  <TableWrapper>
    <TableHead />
    <TableRow v-for="product in products" :key="product.id" :data="product" />
  </TableWrapper>
</template>

<script>
import TableWrapper from './TableWrapper.vue'
import TableHead from './TableHead.vue'
import TableRow from './TableRow.vue'

export default {
  components: {
    TableWrapper,
    TableHead,
    TableRow
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>