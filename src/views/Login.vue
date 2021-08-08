<template>
  <div class="row">
      <div class="col-md-4">
          <form action="">
              <div class="form-group">
                  <label for="Email">Email</label>
                  <input v-model="email" type="text" class="form-control">
              </div>
              <div class="form-group">
                  <label for="Password">Password</label>
                  <input v-model="password" type="password" class="form-control">
              </div>
              <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
