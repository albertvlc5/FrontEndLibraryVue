<template>
  <div id="Home">
      <h1>Home</h1>
        <Header></Header>
        <button @click="getAllBooks()">Ver Libros</button>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";

export default {
    name:"Home",
    components: {
        Header
  },
  methods: {
      getAllBooks() {
          axios.http.get('localhost:3789/api/books/')
          .then(res => {
              console.log(res)
          })
      }
  }
}
</script>