<template>
  <div
    class='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'
  >
    <div class='rounded-t bg-white mb-0 px-6 py-6'>
      <div class='text-center flex justify-between'>
        <h6 class='text-blueGray-700 text-xl font-bold'>Add New Product</h6>
        <button
          class='bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
          type='button'
        >
          Cancel
        </button>
      </div>
    </div>
    <div class='flex-auto px-4 lg:px-10 py-10 pt-0'>
      <form>
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
                type='email'
                class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                placeholder='1000'
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
              />
            </div>
          </div>
        </div>
        <hr class='mt-6 border-b-1 border-blueGray-300' />
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
              >
              </textarea>
            </div>
          </div>
        </div>
        <button
          class='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
          type='button'
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>
