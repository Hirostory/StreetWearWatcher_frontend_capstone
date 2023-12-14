<template>
  <div class="top-border-block"></div>
  <!-- <img class="main-image-logo" alt="street image" src="https://www.mensfashionmagazine.com/wp-content/uploads/2015/05/featured-image6.jpg"> -->
  <HelloWorld />
  <div class="bottom-border-block"></div>
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
  width: 100%;
  margin-top: -5rem;
  object-fit: cover;
  object-position: 0rem -15rem;
}

.top-border-block {
  width: 100%;
  height: 100px;
  background-color: #5E6666;
  margin-top: -10rem;
  margin-bottom: 5rem;
  opacity: .5;
}

.bottom-border-block {
  width: 100%;
  height: 50px;
  background-color: #5E6666;
  margin-top: 15rem;
  opacity: .5;
}

</style>
