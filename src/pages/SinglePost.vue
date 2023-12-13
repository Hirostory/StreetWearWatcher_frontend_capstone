<template>
    <div>
      <router-link to="/"><button>BACK</button></router-link>
      <div v-if="post" class="post">
        <img :src="post.image" alt="Post Image" class="target-image">
        <h1>{{ post.description }}</h1>
        <!-- {{ console.log("this is posts", post._id) }} -->
        <router-link :to="{name: 'edit', params: {id: post.id}}"
            ><button>Edit Todo</button></router-link>
            <button v-on:click="deleteStyleTarget">Delete Target</button>

            <!-- {{ console.log("this is top in the function", topsForPost) }} -->
        <div v-if="topsForPost && topsForPost.length > 0" class="tops-section">
          <h2>Tops</h2>
          
          <router-link :to="{name: 'addtop', params: {id: post.id}}"><button>Add a Top</button></router-link>
          <div class="tops-container">
            <div v-for="top in topsForPost" :key="top._id" class="top-item">
                <a :href="top.link" target="_blank">
                    <img :src="top.image" :alt="top.name" class="top-image">
                </a>
              <div class="top-details">
                <p>{{ top.name }}</p>
                <p>{{ top.comment }}</p> 
                <router-link :to="{name: 'edittop', params: {id: top._id}}"
                ><button>Edit Top</button></router-link>
              </div>
            </div>
          </div>
        </div>

        {{ console.log("this is botoom in the function", bottomsForPost) }}
        <div v-if="bottomsForPost && bottomsForPost.length > 0" class="bottoms-section">
          <h2>Bottoms</h2>
          <div class="bottoms-container">
            <div v-for="bottom in bottomsForPost" :key="bottom._id" class="bottom-item">
                <a :href="bottom.link" target="_blank">
                    <img :src="bottom.image" :alt="bottom.name" class="bottom-image">
                </a>
              <div class="bottom-details">
                <p>{{ bottom.name }}</p>
                {{ console.log("this is bottom", bottom.name) }}
                <p>{{ bottom.comment }}</p> 
                <router-link :to="{name: 'editbottom', params: {id: bottom._id}}"
                ><button>Edit Bottom</button></router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="shoesForPost && shoesForPost.length > 0" class="shoes-section">
          <h2>Shoes</h2>
          <div class="shoes-container">
            <div v-for="shoe in shoesForPost" :key="shoe._id" class="shoe-item">
                <a :href="shoe.link" target="_blank">
                    <img :src="shoe.image" :alt="shoe.name" class="shoe-image">
                </a>
              <div class="shoe-details">
                <p>{{ shoe.name }}</p>
                {{ console.log("this is shoe", shoe.name) }}
                <p>{{ shoe.comment }}</p> 
                <router-link :to="{name: 'editshoe', params: {id: shoe._id}}"
                ><button>Edit Shoe</button></router-link>
              </div>
            </div>
          </div>
        </div>

        <div v-if="outerwearsForPost && outerwearsForPost.length > 0" class="outerwears-section">
          <h2>Outerwears</h2>
          <div class="outerwears-container">
            <div v-for="outerwear in outerwearsForPost" :key="outerwear._id" class="outerwear-item">
                <a :href="outerwear.link" target="_blank">
                    <img :src="outerwear.image" :alt="outerwear.name" class="outerwear-image">
                </a>
              <div class="outerwear-details">
                <p>{{ outerwear.name }}</p>
                {{ console.log("this is outerwear", outerwear.name) }}
                <p>{{ outerwear.comment }}</p> 
                <router-link :to="{name: 'editouterwear', params: {id: outerwear._id}}"
                ><button>Edit Outerwear</button></router-link>
                
              </div>
            </div>
          </div>
        </div>

        <div v-if="accessoriesForPost && accessoriesForPost.length > 0" class="accessories-section">
          <h2>Accessories</h2>
          <div class="accessories-container">
            <div v-for="accessorie in accessoriesForPost" :key="accessorie._id" class="accessorie-item">
                <a :href="accessorie.link" target="_blank">
                    <img :src="accessorie.image" :alt="accessorie.name" class="accessorie-image">
                </a>
              <div class="accessorie-details">
                <p>{{ accessorie.name }}</p>
                {{ console.log("this is accessorie", accessorie.name) }}
                <p>{{ accessorie.comment }}</p>
                <router-link :to="{name: 'editaccessory', params: {id: accessorie._id}}"
                ><button>Edit Accessory</button></router-link>
                
              </div>
            </div>
          </div>
        </div>

        <div v-if="othersForPost && othersForPost.length > 0" class="others-section">
          <h2>Others</h2>
          <div class="others-container">
            <div v-for="other in othersForPost" :key="other._id" class="other-item">
                <a :href="other.link" target="_blank">
                    <img :src="other.image" :alt="other.name" class="other-image">
                </a>
              <div class="other-details">
                <p>{{ other.name }}</p>
                {{ console.log("this is other", other.name) }}
                <p>{{ other.comment }}</p>
                <router-link :to="{name: 'editother', params: {id: other._id}}"
                ><button>Edit Other</button></router-link>
                
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
      bottoms: Array,
      shoes: Array,
      outerwears: Array,
      accessories: Array,
      others: Array,

      topsUrl: String,
      bottomsUrl: String,
      shoesUrl: String,
      outerwearsUrl: String,
      accessoriesUrl: String,
      othersUrl: String,
      styletargetsUrl: String,

      getPosts: Function,
      getBottoms: Function,
      getShoes: Function,
      getOuterwears: Function,
      getAccessories: Function,
      getOthers: Function
    },
    // props: ["posts", "styletargets", "tops", "styletargetsUrl", "getPosts"],
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      // const refreshPage = () => {
      // window.location.reload()
      // }
      const { posts, styletargetsUrl, getPosts, tops, } = toRefs(props)

      const styleId = posts.value.find((post) => post._id === route.params.id)

      const topId = tops.value.find((top) => top._id === route.params.tops)
      console.log("this is topID: ", topId)

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
      topId,
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
      bottomsForPost() {
        if (this.post && this.bottoms && this.post.bottoms) {
          return this.bottoms.filter(bottom => this.post.bottoms.includes(bottom._id))
        }
        return [];
      },
      shoesForPost() {
        if(this.post && this.shoes && this.post.shoes) {
          return this.shoes.filter((shoe) => this.post.shoes.includes(shoe._id))
        }
        return []
      },
      outerwearsForPost() {
        if(this.post && this.outerwears && this.post.outerwears) {
          return this.outerwears.filter((outerwear) => this.post.outerwears.includes(outerwear._id))
        }
        return []
      },
      accessoriesForPost() {
        if(this.post && this.accessories && this.post.accessories) {
          return this.accessories.filter((accessorie) => this.post.accessories.includes(accessorie._id))
        }
        return []
      },
      othersForPost() {
        if(this.post && this.others && this.post.others) {
          return this.others.filter((other) => this.post.others.includes(other._id))
        }
        return []
      },
    },
  };
  </script>
  
  <style>
.tops-section, .bottoms-section, .shoes-section, .outerwears-section, .accessories-section, .others-section {
  margin-top: 20px;
}

.tops-container, .bottoms-container, .shoes-container, .outerwears-container, .accessories-container, .others-container {
  display: flex;
  gap: 20px;
}

.top-item, .bottom-item, .shoe-item, .outerwear-item, .accessorie-item, .other-item {
  display: flex;
  flex-direction: column;
}

.top-image, .bottom-image, .shoe-image, .outerwear-image, .accessorie-image, .other-image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.top-details, .bottom-details, .shoe-details, .outerwear-details, .accessorie-details, .other-details {
  text-align: left;
}
  </style>
  