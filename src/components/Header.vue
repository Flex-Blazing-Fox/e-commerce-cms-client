<template>
  <div class="h-100 w-screen bg-primarycolor">
    <div class="flex w-screen justify-between font-display">
      <div class="mt-56 ml-32">
        <div
          class="
            transform
            transition-all
            -translate-y-36
            opacity-0
            duration-1500
          "
          data-replace='{"-translate-y-36": "translate-y-0", "opacity-0":"opacity-1"}'
        >
          <div class="text-4xl font-extrabold text-blue-600">DISKON 70%</div>
          <div class="text-4xl mt-5 font-black text-blue-900">
            Ajak Om Kamu Belanja
          </div>
          <div class="text-4xl mt-5 font-black text-blue-900">
            Cuma di Yukahom
          </div>
        </div>

        <button
          class="
            bg-red-400
            mt-5
            pt-3
            pb-3
            pl-6
            pr-6
            rounded-lg
            text-white
            transition-all
            -translate-y-36
            opacity-0
            duration-1500
            transform
            hover:translate-y-2
          "
          data-replace='{"-translate-y-36": "translate-y-0", "opacity-0":"opacity-1"}'
          ref="lihatBarangViralButton"
          id="lihatBarangViralButton"
        >
          Lihat Yang Hot
        </button>
      </div>
      <img
        class="
          mt-10
          -mr-24
          transform
          transition-all
          delay-1000
          -translate-x-72
          opacity-0
          duration-1500
        "
        src="../../public/assets/advert2.png"
        alt=""
        data-replace='{"-translate-x-72": "translate-x-0", "opacity-0":"opacity-1"}'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>