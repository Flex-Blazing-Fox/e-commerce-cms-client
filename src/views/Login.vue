<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center">
    <form
      class="w-full flex flex-col justify-center items-center"
      id="form-login"
      @submit.prevent="submitLogin"
    >
      <h2 class="text-3xl my-8 font-semibold font-display text-gray-700">
        Welcome
      </h2>
      <div>
        <i class="fa fa-user text-primarycolor text-xl"></i>
        <input
          class="
            border-b-2
            outline-none
            focus:border-primarycolor
            text-md
            transition-all
            duration-500
            text-lg
            ml-3
          "
          type="text"
          placeholder="Email"
          id="login-email"
          v-model="user.email"
        />
      </div>
      <div class="mt-8">
        <i class="fa fa-lock text-primarycolor text-xl"></i>
        <input
          class="
            border-b-2
            outline-none
            focus:border-primarycolor
            text-md
            transition-all
            duration-500
            text-lg
            ml-3
          "
          type="password"
          placeholder="Password"
          id="login-password"
          v-model="user.password"
        />
      </div>
      <div
        class="mt-8 w-50 text-sm text-red-400"
        id="login-error-message"
        v-if="errorMessage"
      >
        {{ errorMessage }}
      </div>
      <div class="mt-8">
        <div>
          <input
            class="
              bg-primarycolor
              text-white
              rounded-full
              px-20
              py-3
              text-lg
              font-bold
              uppercase
              transform
              hover:translate-y-1
              transition-all
              duration-500
              cursor-pointer
            "
            type="submit"
            value="Login"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    submitLogin() {
      this.$store
        .dispatch("submitLogin", this.user)
        .then(({ data }) => {
          this.$store.commit("SET_ACCESS_TOKEN", data.access_token);
          if (data.role === "admin") this.$store.commit("SET_IS_ADMIN", true);
          if (data.role === "admin") {
            this.$router.push({ path: "/products-admin" });
          } else {
            this.$store.state.orders.length > 0
              ? this.$router.push({ path: "/cart" })
              : this.$router.push({ path: "/" });
          }
        })
        .catch((err) => {
          this.errorMessage = err.response.data.error[0];
        })
        .finally(() => {
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>