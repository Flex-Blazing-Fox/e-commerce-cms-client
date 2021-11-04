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
      <h2 class="text-4xl text-white font-display font-bold">Add Product</h2>
    </div>
    <div
      :class="{
        'w-1/2 h-screen/2++ bg-white rounded-md shadow-2xl text-gray-600':
          !errorMessage,
        'w-1/2 h-screen3/4 bg-white rounded-md shadow-2xl text-gray-600':
          errorMessage,
      }"
    >
      <form id="form-add" @submit.prevent="submitProduct">
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
        <div class="flex items-center ml-7 my-2">
          <div>
            <label for="price">Price</label><br />
            <input
              class="
                w-11/12
                text-lg
                my-2
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
                ml-2
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
            mt-4
            mb-4
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
        @click.prevent="backToCMS"
      >
        Back To CMS Page</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AddProduct",
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
    submitProduct() {
      this.$store
        .dispatch("addProduct", this.product)
        .then(() => {
          this.$router.push({ path: "/products-admin" });
        })
        .catch((err) => {
          this.errorMessage = err.response.data.error[0];
        })
        .finally(() => {
          this.name = "";
          this.image_url = "";
          this.price = "";
          this.stock = "";
        });
    },
    backToCMS() {
      this.$router.push({ path: "/products-admin" });
    },
  },
};
</script>
