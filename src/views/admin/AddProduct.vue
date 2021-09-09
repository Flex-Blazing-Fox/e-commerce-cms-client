<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-8/12 px-4">
      <div
        class='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'
      >
        <div class='rounded-t bg-white mb-0 px-6 py-6'>
          <div class='text-center flex justify-between'>
            <h6 class='text-blueGray-700 text-xl font-bold'>Add New Product</h6>
            <router-link
              to="/admin/dashboard"
              class='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
            >
              Cancel
            </router-link>
          </div>
        </div>
        <div class='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <form  @submit.prevent="addProduct">
            <h6 class='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              Add New Product
            </h6>
            <!--name, image_url, price, stock-->
            <div class='flex flex-wrap'>
              <div class='w-full lg:w-6/12 px-4'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='Product Name'
                    v-model="product.name"
                  />
                </div>
              </div>
              <div class='w-full lg:w-6/12 px-4'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Price
                  </label>
                  <input
                    type='text'
                    class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='1000'
                    v-model="product.price"
                  />
                </div>
              </div>
              <div class='w-full lg:w-6/12 px-4'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Stock
                  </label>
                  <input
                    type='text'
                    class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='10'
                    v-model="product.stock"
                  />
                </div>
              </div>
              <div class='w-full lg:w-6/12 px-4'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Image
                  </label>
                  <input
                    type='text'
                    class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    placeholder='Url'
                    v-model="product.image_url"
                  />
                </div>
              </div>
            </div>
            <div class='flex flex-wrap mt-3 mb-6'>
              <div class='w-full lg:w-12/12 px-4'>
                <div class='relative w-full mb-3'>
                  <label
                    class='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Description
                  </label>
                  <textarea
                    type='text'
                    class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    rows='4'
                    placeholder='Product Description'
                    v-model="product.description"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <button
              class='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
              type='submit'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        price: '',
        stock: '',
        image_url: '',
        description: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
      this.product = {
        name: '',
        price: '',
        stock: '',
        image_url: '',
        description: ''
      }
    }
  }
}
</script>
