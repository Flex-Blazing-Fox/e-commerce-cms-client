<template>
  <div class="container">
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      axios({
        method: "GET",
        url: "/product",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      })
        .then(({ data }) => {
          this.products = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
