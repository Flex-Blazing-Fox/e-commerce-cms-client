<template>
  <div>
    <div class="mt-10 flex w-full place-content-center">
      <table class="w-2/3 border">
        <tr class="bg-primarycolor text-white">
          <th>Item</th>
          <th>Stok</th>
          <th>Jumlah</th>
          <th>Subtotal</th>
          <th>Status</th>
        </tr>
        <tr v-for="order in orders" :key="order.name" ref="cart">
          <td class="text-center mt-2">
            {{ order.name }}
            <span
              class="ml-2 text-sm text-red-400 cursor-pointer"
              @click.prevent="removeOrder(order.id)"
              >Remove</span
            >
          </td>
          <td class="text-center mt-2">{{ order.stock }}</td>
          <td class="text-center mt-2">
            <input
              type="number"
              v-model="order.count"
              class="w-16 text-center"
            />
          </td>
          <td class="text-center mt-2">
            {{ parseInt(order.count) * parseInt(order.price) }}
          </td>
          <td :class="getStatusClass(order.count, order.stock)">
            {{ isAvailable(order.count, order.stock) }}
          </td>
        </tr>
      </table>
    </div>
    <div class="mt-6 flex w-full ml-60">Total: {{ totalOrder }}</div>
    <div class="flex">
      <div>
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
          @click.prevent="checkout"
        >
          Checkout
        </button>
      </div>
      <div class="ml-3 text-md text-red-400 mt-6">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      areAllAvailable: [],
      errorMessage: "",
    };
  },
  methods: {
    removeOrder(id) {
      this.$store.dispatch("removeOrder", id);
    },
    isAvailable(toBuy, stock) {
      if (toBuy <= stock) {
        return "Barang Tersedia";
      } else {
        return "Stok Tidak Cukup";
      }
    },
    getStatusClass(toBuy, stock) {
      if (toBuy <= stock) {
        return "text-center mt-2 text-green-600";
      } else {
        return "text-center mt-2 text-red-600";
      }
    },
    checkout() {
      let areAllAvailable = this.orders.map((order) => {
        if (order.count <= order.stock) return true;
        return false;
      });
      if (areAllAvailable.includes(false)) {
        this.errorMessage = "Terdapat item dengan stok tidak mencukupi";
      } else {
        this.$store.dispatch("sendOrder").then(() => {
          this.$store.commit("RESET_ORDERS");
          this.errorMessage = ""
        });
      }
    },
  },
  computed: {
    totalOrder() {
      if (this.orders.length > 0) {
        return this.orders
          .map((order) => order.count * order.price)
          .reduce((prev, next) => prev + next);
      } else {
        return 0;
      }
    },
    orders() {
      return this.$store.state.orders;
    },
  },
};
</script>