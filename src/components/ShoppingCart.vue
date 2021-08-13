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
              <td align="left"><button @click.prevent="$store.dispatch('sub', item.id)" class="btn btn-warning btn-sm">-</button> {{ item.qty }} <button @click.prevent="$store.dispatch('add', item.id)"  class="btn btn-warning btn-sm">+</button></td>
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
        <router-link to="/checkout" class="btn btn-success">Checkout </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
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
    }
  },
  created () {
    this.$store.dispatch('fetchShoppingCart')
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
