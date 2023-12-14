<template>
  <router-link to="/new"><button>Post a Style</button></router-link>
   <div class="post-box">
     <div class="post-container" v-for="post of posts" :key="post._id">
        <div>
          <router-link :to="{ name: 'post', params: { id: post._id } }">
          <img :src="post.image" alt="Post Image" class="target-image">
          <h1 class="target-info" >{{ post.description }}</h1>
        </router-link>
        </div>
        <!-- <img src="https://see.fontimg.com/api/renderfont4/EaM04/eyJyIjoiZnMiLCJoIjo5MywidyI6MTAwMCwiZnMiOjkzLCJmZ2MiOiIjNUE2NDY0IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/YQ/kamera-dings.png" /> -->
      </div>
  </div>
</template>
  
  <script>
    export default {
      name: "AllPost",
      props: {
        posts: Array,
      },
    };
  </script>
  
  <style>
  .post-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
    text-align: center;
    margin: 3rem;
    gap: 2rem;
  }

  .post-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 980px;
    width: 650px;
    cursor: pointer;
    position: relative;
    margin: 3rem; 
    gap: 2rem;
    border: 4px solid #5E6666;
  }

  .target-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: aliceblue;
    padding: 15px;
    text-align: center;
    background-color: rgba(0,0,0,0.6);
    opacity:0;
    transition: opacity 0.3s ease;
  }

  .target-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .post-container:hover .target-info {
    opacity: 1;
  }
</style>