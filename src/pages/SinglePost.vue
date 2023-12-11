<template>
    <div>
      <router-link to="/"><button>BACK</button></router-link>
      <div v-if="post" class="post">
        <img :src="post.image" alt="Post Image" class="target-image">
        <h1>{{ post.description }}</h1>
  
        <!-- Render tops images -->
        <div v-if="topsForPost && topsForPost.length > 0" class="tops-section">
          <h2>Tops</h2>
          <div class="tops-container">
            <div v-for="top in topsForPost" :key="top._id" class="top-item">
                <a :href="top.link" target="_blank">
                    <img :src="top.image" :alt="top.name" class="top-image">
                </a>
              <div class="top-details">
                <p>{{ top.name }}</p>
                <p>{{ top.comment }}</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SinglePost",
    props: {
      posts: Array,
      styletargets: Array,
      tops: Array,
    },
    computed: {
      post() {
        const postId = this.$route.params.id;
        return this.posts.find(post => post._id === postId);
      },
      topsForPost() {
        if (this.post && this.tops && this.post.tops) {
          return this.tops.filter(top => this.post.tops.includes(top._id));
        }
        return [];
      },
    },
  };
  </script>
  
  <style>
  /* Styles for horizontal layout */
.tops-section {
  margin-top: 20px;
}

.tops-container {
  display: flex;
  gap: 20px; /* Adjust the gap between items as needed */
}

.top-item {
  display: flex;
  flex-direction: column;
}

.top-image {
  width: 100px; /* Set the appropriate size for the tops images */
  height: auto;
  margin-bottom: 10px;
}

.top-details {
  text-align: left;
}
  </style>
  