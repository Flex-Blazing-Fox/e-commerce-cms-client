<template>
  <div class="flex font-display">
    <div>
      <img :src="product.image_url" alt="" class="w-80 h-96 mt-10 ml-40" />
    </div>
    <div class="flex-col ml-20 mt-12">
      <div class="font-semibold text-5xl text-blue-900">{{ product.name }}</div>
      <div class="text-2xl mt-8">Harga: {{ product.price }}</div>
      <div class="text-2xl mt-8">Stock Tersedia: {{ product.stock }}</div>
      <div class="text-2xl mt-8">Jumlah Stok: {{ product.stock }}</div>
      <div class="flex items-center">
        <div class="text-2xl mt-8">Jumlah Pembelian:</div>
        <input
          type="text"
          class="
            w-10
            h-10
            mt-8
            ml-4
            border-2
            text-center
            border-blue-400
            text-lg
          "
          v-model="order.count"
        />
      </div>
      <div class="flex">
        <button
          class="
            bg-red-400
            mt-5
            p-2
            text-white
            rounded-md
            transform
            hover:translate-y-1
            duration-500
          "
          @click.prevent="addToCart"
        >
          Tambahkan Ke Cart
        </button>
        <div class="mt-6 ml-4 text-lg text-red-400">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  methods: {
    addToCart() {
      if (+this.order.count > +this.product.stock)
        this.errorMessage = "Stok tidak mencukupi";
      else {
        this.$store.commit("SET_ORDERS", this.order);
        if (this.$store.state.access_token) {
          this.errorMessage = "";
          this.$router.push({ path: "/cart" });
        } else {
          this.$router.push({ path: "/login" });
        }
      }
    },
  },
  data() {
    return {
      product: {
        name: "",
        image_url: "",
        price: "",
        stock: "",
      },
      order: {
        name: "",
        price: "",
        count: "",
        image_url: "",
        stock: "",
      },
      errorMessage: "",
    };
  },
  created() {
    this.$store
      .dispatch("getProduct", this.$route.params.id)
      .then(({ data }) => {
        this.product.name = data.name;
        this.order.name = data.name;
        this.product.image_url = data.image_url;
        this.order.image_url = data.image_url;
        this.product.price = data.price;
        this.order.price = data.price;
        this.product.stock = data.stock;
        this.order.stock = data.stock;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>