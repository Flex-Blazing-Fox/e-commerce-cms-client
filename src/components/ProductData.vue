<template>
  <div class="border-2">
    <div class="flex">
      <div>
        <img :src="product.image_url" class="w-32 h-40" />
      </div>
      <div class="flex">
        <div class="ml-4 flex-col">
          <div class="mt-2">Nama: {{ product.name }}</div>
          <div class="mt-1">URL: {{ product.image_url }}</div>
          <div class="mt-1">Harga: {{ product.price }}</div>
          <div class="mt-1">Stock: {{ product.stock }}</div>
          <div class="flex mt-1">
            <a class="cursor-pointer" @click.prevent="toEditProduct(product.id)"
              >Edit</a
            >
            <a
              class="ml-2 cursor-pointer"
              @click.prevent="deleteProduct(product.id)"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductData",
  props: ["product"],
  methods: {
    deleteProduct(id) {
      this.$store
        .dispatch("deleteProduct", id)
        .then(() => {
          this.$store.dispatch("getProducts");
          this.$router.push({ path: '/products-admin' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toEditProduct(id) {
      this.$router.push({ path: `/edit/${id}` });
    },
  },
};
</script>