<template>
  <div
    class="
      flex flex-col
      border-2
      font-display
      rounded-md
      shadow-md
      items-center
      cursor-pointer
      transform
      hover:-translate-y-2
      duration-500
    "
  >
    <div class="container">
      <div class="overlay"></div>
      <div class="icons-card">
        <div
          class="
            absolute
            bg-red-400
            rounded-full
            ml-36
            mt-14
            z-10
            transform
            hover:-translate-y-1
            duration-500
          "
        >
          <i class="bx bx-heart p-2 pl-3 pr-3 text-white text-xl"></i>
        </div>
        <div
          class="
            absolute
            bg-red-400
            rounded-full
            mt-28
            ml-36
            z-10
            transform
            hover:-translate-y-1
            duration-500
          "
        >
          <i
            class="bx bx-shopping-bag p-2 pl-3 pr-3 text-white text-xl"
            @click.prevent="toOrder(product.id)"
          ></i>
        </div>
        <div
          class="
            absolute
            bg-red-400
            rounded-full
            mt-42
            ml-36
            z-10
            transform
            hover:-translate-y-1
            duration-500
          "
        >
          <i class="bx bx-search p-2 pl-3 pr-3 text-white text-xl"></i>
        </div>
      </div>
      <img :src="product.image_url" width="200" height="200" />
    </div>
    <div class="font-bold text-purple-900 mt-2">{{ product.name }}</div>
    <div class="mt-2 mb-2">{{ formatRupiah(product.price, "Rp. ") }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    formatRupiah(angka, prefix) {
      var number_string = String(angka).replace(/[^,\d]/g, ""),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
    },
    toOrder(id) {
      this.$router.push({ path: `/order/${id}` });
    },
  },
};
</script>
