<template>
   <div>
    <div class="post" v-for="post of posts" :key="post._id">
      <router-link :to="{ name: 'post', params: { id: post._id } }">
        <img :src="post.image" alt="Post Image" class="target-image">
        <h1>{{ post.description }}</h1>
      </router-link>
    </div>
  </div>

</template>
  
  <script>
    export default {
      name: "AllPost",
      props: {
        posts: Array
      }
    };
  </script>
  
  <style>
  .post {
    text-align: center;
    border: 3px solid green;
    margin: 10px auto;
    width: 80%;
  }
  .target-image {
    width: 100%;
    height: auto;
  }
</style>