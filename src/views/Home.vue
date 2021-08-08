<template>
  <Header></Header>
  <SpotlightItem></SpotlightItem>
</template>

<script>
// @ is an alias to /src
// import ProductCard from "../components/ProductCard.vue";
import Header from "../components/Header.vue"
import SpotlightItem from "../components/SpotlightItem.vue"

export default {
  name: "Home",
  components: { SpotlightItem, Header },
};
</script>
