<template>
  <div class="flex flex-col">
    <div><img :src="product.image_url" /></div>
    <div>{{ product.name }}</div>
    <div>{{ product.price }}</div>
    <div>{{ product.stock }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>
