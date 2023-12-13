<template>
  <img class="main-image-logo" alt="street image" src="https://i.pinimg.com/564x/fd/0d/3b/fd0d3b6771a4079b99cb9f377e731ab6.jpg">
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-image-logo {
  height: 200px;
  width: 300px;
  object-fit: cover;
}
</style>
