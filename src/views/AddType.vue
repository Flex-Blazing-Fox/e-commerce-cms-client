<template>
  <BodyWrapper>
    <div class="bg-white w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
      <form class="p-10 flex flex-col justify-center ">
        <h2 class="text-3xl text-center text-gray-700 mt-4 mb-10">Tambah Tipe</h2>
        <div class="relative border-b-2 mb-5">
          <div class="absolute top-2 left-2 text-gray-400">
            <i class='bx bxs-book-add'></i>
          </div>
          <input v-model="name" type="text" placeholder="Nama Tipe" class="pb-2 pl-9 w-full focus:outline-none focus:ring-0 border-none" />
        </div>
        <button @click="addType" class="w-1/2 mx-auto bg-green-200 mt-10 py-2 rounded-full hover:bg-green-400 active:ring-2 active:ring-green-400" type="button">Tambah</button>
      </form>
    </div>
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'
import axios from 'axios'

export default {
  components: {
    BodyWrapper
  },
  date() {
    return {
      name: ''
    }
  },
  methods: {
    addType () {
      axios({
        url: '/types',
        method: 'POST',
        headers: { access_token: localStorage.access_token },
        data: {
          name: this.name
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.name = ''
          this.$store.dispatch('fetchTypes')
          this.$router.push({ name: 'AdminHome' })
        })
        .catch(err => {
          console.log(err.response.data.errors)
        })
    }
  }
}
</script>