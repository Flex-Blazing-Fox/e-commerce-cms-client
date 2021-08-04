<template>
  <BodyWrapper>
    <Navbar />
    <Wrapper>
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
    <Wrapper>
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
  }
}
</script>

<style scoped>
th {
  text-align: left;
}

th, td {
  padding: 1em;
}
</style>
