<template>
  <div class="bg-green-50 h-screen text-gray-700">
    <navbar class="bg-white text-2xl shadow-md flex flex-row justify-between items-center px-32 py-3">
      <div class="cursor-pointer">
        <span>JFK Workshop</span>
      </div>
      
      <div class="cursor-pointer hover:text-gray-500 flex flex-row items-center gap-3">
        <i class='bx bx-log-out-circle'></i>
        <span class="text-lg">Keluar</span>
      </div>
    </navbar>

    <div class="flex flex-row gap-4">
      <div class="bg-white font-bold text-green-400 rounded-md my-5 w-96 shadow-md flex flex-col justify-center items-center gap-3 py-7">
        <i class='bx bx-folder-plus text-4xl'></i>
        <p class="text-xl">Tambah Produk</p>
        <p class="text-gray-500 font-normal">Tambahkan produk baru pada database</p>
        <button class="text-center mt-4 w-44 bg-green-400 hover:bg-green-600 py-2 px-6 rounded-md text-white">Produk Baru</button>
      </div>

      <div class="bg-white font-bold text-green-400 rounded-md my-5 w-96 shadow-md flex flex-col justify-center items-center gap-3 py-7">
        <i class='bx bx-plus text-4xl'></i>
        <p class="text-xl">Tambah Tipe</p>
        <p class="text-gray-500 font-normal">Tambahkan tipe produk baru pada database</p>
        <button class="text-center mt-4 w-44 bg-green-400 hover:bg-green-600 py-2 px-6 rounded-md text-white">Tipe Baru</button>
      </div>
    </div>


    <div class="flex flex-row">
      <!-- SIDEBAR -->
      <div class="flex-initial my-4">
        <div class="text font-bold text-4xl text-gray-600">Filter</div>
        <div class="relative mt-6 m">
          <input type="text" class="py-2 pl-4 pr-10 rounded-sm text-lg" placeholder="Cari produk..." />
          <i class='bx bx-search absolute text-xl top-2 right-3'></i>
        </div>
        <div class="bg-white my-4">
          <select class="w-full h-full py-3 px-2 bg-white">
            <option selected>Tipe Produk</option>
            <option value="Sling bag">Sling bag</option>
            <option value="Shoulder bag">Shoulder bag</option>
          </select>
        </div>
      </div>

      <!-- TABLE -->
      <div class="px-7">
        <table class="table-auto w-full">
          <tr class="text-gray-400">
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Tipe</th>
            <th>Dibuat Pada</th>
          </tr>
          <tr class="bg-white border-b-8 border-green-50">
            <td>1</td>
            <td>Sling bag hijau</td>
            <td>100000</td>
            <td>10</td>
            <td>Sling bag</td>
            <td>2021-02-02</td>
            <td>
              <div class="flex flex-row gap-2">
                <i class='bx bx-edit text-green-400 hover:text-green-600 text-2xl cursor-pointer'></i>
                <i class='bx bx-trash-alt text-red-400 hover:text-red-600 text-2xl cursor-pointer'></i>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b-8 border-green-50">
            <td>1</td>
            <td>Sling bag hijau dan biru</td>
            <td>100000</td>
            <td>10</td>
            <td>Sling bag</td>
            <td>2021-02-02</td>
            <td>
              <div class="flex flex-row gap-2">
                <i class='bx bx-edit text-green-400 hover:text-green-600 text-2xl cursor-pointer'></i>
                <i class='bx bx-trash-alt text-red-400 hover:text-red-600 text-2xl cursor-pointer'></i>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminHome'
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
