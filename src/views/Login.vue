<template>
  <div id="Login">
    <Header></Header>
    <hr/>
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>login</button>
          <p class="message">
            Not registered?
            <router-link to="/register">Register</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Login",
  components: {
    Header
  },
  methods: {
      login() {
          
      }
  }
};
</script>