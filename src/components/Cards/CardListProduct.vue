<template>
  <tbody>
    <tr>
      <th
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
      >
        <img
          :src="product.image"
          class="h-12 w-12 bg-white rounded-full border"
          alt="..."
        />
        <span
          class="ml-3 font-bold"
          :class="[
            color === 'light' ? 'text-blueGray-600' : 'text-white',
          ]"
        >
          {{product.name}}
        </span>
      </th>
      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{product.Stock}}
      </td>
      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
      >
        {{product.price}}
      </td>
      <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
      >
        <table-dropdown />
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
  //   {
  //   color: {
  //     default: 'light',
  //     validator: function (value) {
  //       // The value must match one of these strings
  //       return ['light', 'dark'].indexOf(value) !== -1
  //     }
  //   }
  // }
}
</script>
