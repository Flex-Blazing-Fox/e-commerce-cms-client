<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table">
          <thead>
            <tr>
              <th>Nama Barang</th>
              <th width="10%" align="center">QTY</th>
              <th width="15%">Harga</th>
              <th width="15%">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>{{ item.Product.name }}</td>
              <td align="left"> {{ item.qty }} </td>
              <td align="right"><span class="pull-left">Rp.</span> {{ item.Product.price }}</td>
              <td align="right"><span class="pull-left">Rp.</span> {{ item.Product.price * item.qty }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Total Pembelian</th>
              <th align="right">Rp. <span class="pull-right">{{ total }}</span></th>
            </tr>
          </tfoot>
        </table>
    </div>
    <div class="col-md-6">
      <h3>Informasi Pengiriman</h3>
      <form action="">
        <div class="form-group">
          <label for="">Nama Lengkap</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="">No Telepon</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="">Alamat</label>
          <textarea type="text" class="form-control"></textarea>
        </div>
        <div class="from-group">
            <label for="">Provinsi</label>
            <select class="form-control">
              <option>-- Pilih Province</option>
              <option v-for="province in provinces" :key="province.province_id">{{province.province}}</option>
            </select>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  computed: {
    cart () {
      return this.$store.state.shoppingCart
    },
    total () {
      const total = this.$store.state.shoppingCart
      let jumlah = 0
      total.forEach((el, index) => {
        jumlah += el.qty * el.Product.price
      })
      return jumlah
    },
    provinces () {
      return this.$store.state.province
    }
  },
  created () {
    this.$store.dispatch('fetchShoppingCart')
    this.$store.dispatch('getProvince')
  }
}
</script>

<style scoped>
.pull-left{
  float:left;
}
.pull-right{
  float:right
}
</style>
