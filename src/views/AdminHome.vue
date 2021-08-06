<template>
  <BodyWrapper>
    <Navbar />
      <Wrapper size="w-3/5">
        <Banner 
          title="Tambah Produk" 
          description="Tambahkan produk baru pada database" 
          buttonName="Produk Baru"
        />
        <Banner 
          title="Tambah Tipe" 
          description="Tambahkan tipe produk baru pada database" 
          buttonName="Tipe Baru"
        />
      </Wrapper>
      <Wrapper size="w-4/5">
        <Sidebar title="Filter"/>
        <ProductTable />
      </Wrapper>
  </BodyWrapper>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper.vue'
import Navbar from '../components/Navbar.vue'
import Wrapper from '../components/Wrapper.vue'
import Banner from '../components/Banner.vue'
import Sidebar from '../components/Sidebar.vue'
import ProductTable from '../components/ProductTable.vue'

export default {
  name: 'AdminHome',
  components: {
    BodyWrapper,
    Navbar, 
    Wrapper,
    Banner,
    Sidebar,
    ProductTable
  },
  created() {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchTypes')
  }
}
</script>
