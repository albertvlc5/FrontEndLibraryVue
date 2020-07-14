<template>
  <div id="Register">
      <Header></Header>
      <form class="register-form">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>create</button>
          <p class="message">
            Already registered?
            <a href="#">Sign In</a>
          </p>
        </form>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
    name:"Register",
    components: {
        Header
  }
}
</script>