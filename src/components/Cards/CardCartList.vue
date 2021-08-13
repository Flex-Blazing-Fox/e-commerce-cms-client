<template>
  <tbody>
    <tr>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          :src="cart.Product.image_url"
          class="h-12 w-12 bg-white rounded-full border"
          alt="..."
        />
        <span
          class="ml-3 font-bold mr-3">
          {{cart.Product.name}}
        </span>
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{cart.qty}}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {{cart.total_price}}
      </td>
      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
        <i class="fas fa-trash-alt text-lg leading-lg" />
      </td>
    </tr>
  </tbody>
</template>
<script>

export default {
  components: {
  },
  name: 'CartList',
  props: ['cart']
}
</script>
