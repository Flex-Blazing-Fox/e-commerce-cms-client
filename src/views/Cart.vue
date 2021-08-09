<template>
  <div>
    <div class="mt-10 flex w-full place-content-center">
      <table class="w-2/3 border">
        <tr class="bg-primarycolor text-white">
          <th>Item</th>
          <th>Jumlah</th>
          <th>Subtotal</th>
        </tr>
        <tr v-for="order in orders" :key="order.name">
          <td class="text-center mt-2">{{ order.name }}</td>
          <td class="text-center mt-2">{{ order.count }}</td>
          <td class="text-center mt-2">
            {{ parseInt(order.count) * parseInt(order.price) }}
          </td>
        </tr>
      </table>
    </div>
    <div class="mt-6 flex w-full ml-60">Total: {{ totalOrder }}</div>
    <button
      class="
        mt-6
        flex
        w-28
        text-white
        ml-60
        p-1
        pl-5
        rounded-md
        transform
        hover:translate-y-1
        duration-500
        bg-red-400
      "
    >
      Checkout
    </button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      orders: [],
    };
  },
  computed: {
    totalOrder() {
      return this.orders
        .map((order) => order.count * order.price)
        .reduce((prev, next) => prev + next);
    },
  },
  created() {
    this.orders = this.$store.state.orders;
  },
};
</script>