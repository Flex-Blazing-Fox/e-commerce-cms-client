<template>
  <tbody>
    <tr>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          :src="product.image_url"
          class="h-12 w-12 bg-white rounded-full border"
          alt="..."
        />
        <span
          class="ml-3 font-bold mr-3">
          {{product.name}}
        </span>
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{product.stock}}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{product.price}}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
        <table-dropdown
        :product="product"
        />
      </td>
    </tr>
  </tbody>
</template>
<script>
import TableDropdown from '../Dropdowns/TableDropdown.vue'

export default {
  components: {
    TableDropdown
  },
  name: 'ListProduct',
  props: ['product']
}
</script>
