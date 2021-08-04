<template>
  <div class="bg-white font-bold text-green-400 rounded-md my-5 w-96 shadow-md flex flex-col justify-center items-center gap-3 py-7">
    <i class='bx bx-folder-plus text-4xl'></i>
    <p class="text-xl">{{ title }}</p>
    <p class="text-gray-500 font-normal">{{ description }}</p>
    <AddButton :name="buttonName" />
  </div>
</template>

<script>
import AddButton from './AddButton.vue'

export default {
  components: {
    AddButton
  },
  props: {
    buttonName: String,
    title: String,
    description: String
  },
}
</script>