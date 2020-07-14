<template>
  <div class="header">
    <nav>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <li>
          <router-link to="/bookDetail">BookDetail</router-link>
        </li>
        <li>
          <router-link to="/bookEdit">BookEdit</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

