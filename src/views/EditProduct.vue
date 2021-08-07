<template>
  <BodyWrapper>
    <div class="bg-white w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <form class="p-10 flex flex-col justify-center ">
        <h2 class="text-3xl text-center text-gray-700 mt-4 mb-10">Edit Produk</h2>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-book-add'></i>
          </div>
          <input v-model="product.name" type="text" placeholder="Nama Produk" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-image' ></i>
          </div>
          <input v-model="product.image_url" type="text" placeholder="Link Foto Produk" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-dollar-circle'></i>
          </div>
          <input v-model="product.price" type="number" placeholder="Harga Produk" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-cube-alt'></i>
          </div>
          <input v-model="product.stock" type="number" placeholder="Stok Produk" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-widget'></i>
          </div>
          <input v-model="product.typeName" type="text" placeholder="Tipe Produk" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <button @click="editProduct" class="w-1/2 mx-auto bg-green-200 mt-10 py-2 rounded-full hover:bg-green-400 active:ring-2 active:ring-green-400" type="button">Edit</button>
      </form>
    </div>
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'
import axios from 'axios'

export default {
  data() {
    return {
      product: {
        id: null,
        name: '',
        image_url: '',
        price: null,
        stock: null,
        typeName: '',
      }
    }
  },
  components: {
    BodyWrapper
  },
  created() {
    this.$store.dispatch('fetchProduct', this.$route.params.id)
      .then(({ data }) => {
        this.product = {
          ...data.product,
          typeName: data.product.Product_Types[0].Type.name,
        }
      })
  },
  methods: {
    editProduct () {
      axios({
        url: '/products/' + this.product.id,
        method: 'PUT',
        headers: { access_token: localStorage.access_token },
        data: {
          name: this.product.name,
          image_url: this.product.imageUrl,
          price: this.product.price,
          stock: this.product.stock,
          type_name: this.product.typeName
        }
      })
        .then(({ data }) => {
          console.log(data)
          
          this.$store.dispatch('fetchProducts')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })

    }
  }
}
</script>