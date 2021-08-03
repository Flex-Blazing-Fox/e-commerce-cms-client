<template>
  <div
    class="
      w-screen
      h-screen
      flex flex-col
      justify-center
      items-center
      bg-primarycolor
    "
  >
    <div class="w-1/2 mb-7">
      <h2 class="text-4xl text-white font-display font-bold">Edit Product</h2>
    </div>
    <div
      :class="{
        'w-1/2 h-screen/2++ bg-white rounded-md shadow-2xl text-gray-600':
          !errorMessage,
        'w-1/2 h-screen3/4 bg-white rounded-md shadow-2xl text-gray-600':
          errorMessage,
      }"
    >
      <form id="form-add" @submit.prevent="editProduct">
        <div>
          <label class="text-2xl font-display mt-6 ml-7 inline-block" for="name"
            >Product Name</label
          ><br />
          <input
            class="
              w-11/12
              text-lg
              my-2
              ml-7
              border-b-2
              focus:border-primarycolor
              outline-none
              transition-all
              duration-500
            "
            id="name"
            type="text"
            name="name"
            v-model="product.name"
          />
        </div>
        <div>
          <label
            class="text-gray-600 text-2xl font-display mt-6 ml-7 inline-block"
            for="image_url"
            >Image URL</label
          ><br />
          <input
            class="
              w-11/12
              text-lg
              my-2
              ml-7
              border-b-2
              focus:border-primarycolor
              outline-none
              transition-all
              duration-500
            "
            id="image_url"
            type="text"
            name="image_url"
            v-model="product.image_url"
          />
        </div>
        <div class="flex items-center justify-evenly">
          <div>
            <label for="price">Price</label><br />
            <input
              class="
                w-11/12
                text-lg
                my-2
                ml-7
                border-b-2
                focus:border-primarycolor
                outline-none
                transition-all
                duration-500
              "
              id="price"
              type="text"
              name="price"
              v-model="product.price"
            />
          </div>
          <div>
            <label for="stock">Stock</label><br />
            <input
              class="
                w-11/12
                text-lg
                my-2
                ml-7
                border-b-2
                focus:border-primarycolor
                outline-none
                transition-all
                duration-500
              "
              id="stock"
              type="text"
              name="stock"
              v-model="product.stock"
            />
          </div>
        </div>
        <div class="text-sm text-red-400 ml-8 mt-6" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <input
          class="
            ml-8
            mt-8
            bg-primarycolor
            px-4
            py-1
            rounded-md
            text-white
            cursor-pointer
            transform
            hover:translate-y-1
            transition-all
            duration-500
          "
          type="submit"
        />
      </form>
    </div>
    <div class="w-1/2 mt-4">
      <a
        class="text-white cursor-pointer justify-self-start font-medium"
        @click.prevent="backToHome"
      >
        Back To Home Page</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "EditProduct",
  data() {
    return {
      product: {
        name: "",
        image_url: "",
        price: "",
        stock: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    editProduct() {
      this.$store
        .dispatch("editProduct", {
          id: this.$route.params.id,
          product: {
            name: this.product.name,
            image_url: this.product.image_url,
            price: parseInt(this.product.price),
            stock: parseInt(this.product.stock),
          },
        })
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          this.errorMessage = err.response.data.error[0];
        });
    },
    backToHome() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.$store
      .dispatch("getProduct", this.$route.params.id)
      .then(({ data }) => {
        this.product.name = data.name;
        this.product.image_url = data.image_url;
        this.product.price = data.price;
        this.product.stock = data.stock;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
