<template>
  <div>
    <video controls height="400">
      <source src="https://drive.google.com/uc?id=19HviPqWq9T8sNm4ApdziyHHKz2q7QEaJ&export=download" type="video/mp4">
    </video>
    <form action="" enctype="multipart/form-data">
      <input type="file" id="file" ref="file" class="form-control">
      <button @click.prevent="uploadVideo" type="submit">Upload</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data () {
    return {
      file: ''
    }
  },
  methods: {
    uploadVideo () {
      const file = document.querySelector('#file')

      this.$store.dispatch('uploadVideo', file)
    }
  }
}
</script>
