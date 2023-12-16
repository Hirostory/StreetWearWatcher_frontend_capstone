<template>
  <div class="main-post-container">
    <router-link to="/new"><button class="button" style="background-color: #909f9f; border: #909f9f" >Post a Style</button></router-link>
    <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiMyOTNCMzciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/Tw/font-frame-pro.png" class="main-post-image"/>
    
  </div>
   <div class="post-box">
    <!-- <img src="https://see.fontimg.com/api/renderfont4/GXWP/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiM1QTY0NjQiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/ag/wmfashion.png" alt="big-moder" class="big-model"> -->
    
     <div class="post-container" v-for="post of posts" :key="post._id">
      <!-- <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoyNDAsInciOjIwMDAsImZzIjoxMjAsImZnYyI6IiM2MTZCNkMiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/Zg/wmdividers1.png" class="side-l" /> -->
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

  /* .big-model {
    position: absolute;
    height: 500%;
    width: auto;
    margin-right: -130rem
  } */

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

  .button {
  background-color: #909f9f;
  border: 1px solid #909f9f;
  color: white; /* Adding text color for better visibility */
  transition: background-color 0.3s, border-color 0.3s; /* Adding transition for smooth effect */
  }

  .button:hover {
    background-color: #5e6666; /* Darker gray for background on hover */
    border-color: #5e6666; /* Darker gray for border on hover */
  }

  .main-post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-post-image {
    margin-top: -1rem;
    height: 7rem;
    width: 20rem;
    position: absolute;
    z-index: -1;
  }

  /* .side-l {
    margin-top: -2rem;
    height: 5rem;
    position: absolute;
    transform: scale();
    z-index: -2;
  } */
</style>