<template>
    <div>
      <router-link to="/"><button>BACK</button></router-link>
      <div v-if="post" class="post">
        <img :src="post.image" alt="Post Image" class="target-image">
        <h1>{{ post.description }}</h1>
        {{ console.log("this is posts", post._id) }}
        <router-link :to="{name: 'edit', params: {id: post.id}}"
            ><button>Edit Todo</button></router-link>
            <button v-on:click="deleteStyleTarget">Delete Target</button>
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
  import { useRoute, useRouter } from 'vue-router'
  import { toRefs } from 'vue'

  export default {
    name: "SinglePost",
    props: {
      posts: Array,
      styletargets: Array,
      tops: Array,
      styletargetsUrl: String,
      getPosts: Function
    },
    // props: ["posts", "styletargets", "tops", "styletargetsUrl", "getPosts"],
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      const { posts, styletargetsUrl, getPosts } = toRefs(props)

      const styleId = posts.value.find((post) => post._id === route.params.id)

      const deleteStyleTarget = async () => {
        try {
          await fetch(`${styletargetsUrl.value}/${styleId._id}`, {
            method: "DELETE",
          })
          await getPosts.value()
          router.push("/");
         } catch (error) {
          console.error(error)
        }
    }

    return {
      styleId,
      deleteStyleTarget,
    }

    },
    computed: {
      post() {
        const postId = this.$route.params.id;
        return this.posts.find(post => post._id === postId)
        
      },
      topsForPost() {
        if (this.post && this.tops && this.post.tops) {
          return this.tops.filter(top => this.post.tops.includes(top._id))
        }
        return [];
      },
    },
  };
  </script>
  
  <style>
.tops-section {
  margin-top: 20px;
}

.tops-container {
  display: flex;
  gap: 20px;
}

.top-item {
  display: flex;
  flex-direction: column;
}

.top-image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.top-details {
  text-align: left;
}
  </style>
  