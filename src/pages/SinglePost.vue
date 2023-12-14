<template>
    <div class="single-main-container">
      <div class="artbox-button">
        <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/eg/font-frame-pro.png" alt="backgroundbutton" class="button-background">
        <router-link to="/"><button class="back-button">BACK</button></router-link>
      </div>
      <div v-if="post" class="post">
        <div class="corner-box">
          <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/MQ/font-frame-pro.png" alt="border" class="single-corner-border">
          <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/MQ/font-frame-pro.png" alt="border" class="single-corner-border-3">
          <img src="https://see.fontimg.com/api/renderfont4/GXWP/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiM1QTY0NjQiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/cg/wmfashion.png" alt="male-person" class="background-person">
          <img src="https://see.fontimg.com/api/renderfont4/GXWP/eyJyIjoiZnMiLCJoIjo0MDAsInciOjIwMDAsImZzIjoyMDAsImZnYyI6IiM1QTY0NjQiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/eA/wmfashion.png" alt="male-person" class="background-person-2">
        <div class="single-target-container" >
          <img :src="post.image" alt="Post Image" class="target-image">
          <div class="target-info">
            <h3>{{ post.description }}</h3>
           <router-link :to="{name: 'edit', params: {id: post.id}}"
            ><button class="default-button" >Edit Target</button>
          </router-link>
            <button class="delete-button" v-on:click="deleteStyleTarget">Delete Target</button>
          </div>
        </div>
        <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/MQ/font-frame-pro.png" alt="border" class="single-corner-border-2">
        <img src="https://see.fontimg.com/api/renderfont4/L36OZ/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/MQ/font-frame-pro.png" alt="border" class="single-corner-border-4">
        </div>
        
        <!-- {{ console.log("this is posts", post._id) }} -->
         

            <!-- {{ console.log("this is top in the function", topsForPost) }} -->
        <div v-if="topsForPost && topsForPost.length > 0" class="tops-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/VG9wcw/ahganirya-personal-use.png" alt="TOP-PIC" class="item-images" />
          
            <router-link :to="{name: 'addtop', params: {id: post.id}}"><button class="default-button" >Add a Top</button></router-link>
          </div>
          <div class="tops-container">
            <div v-for="top in topsForPost" :key="top._id" class="top-item">
                <div class="top-hover-box">
                  <a :href="top.link" target="_blank">
                    <img :src="top.image" :alt="top.name" class="top-image">
                  </a>
                  <div class="top-hover-detail">
                    <p>{{ top.name }}</p>
                    <router-link :to="{name: 'edittop', params: {id: top._id}}"
                    ><button class="default-button" >Edit Top</button></router-link>
                    </div>
                </div>
              <div class="top-details">
                <p>{{ top.comment }}</p> 
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

        {{ console.log("this is botoom in the function", bottomsForPost) }}
        <div v-if="bottomsForPost && bottomsForPost.length > 0" class="bottoms-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Qm90dG9tcw/ahganirya-personal-use.png" alt="BOTTOM-PIC" class="item-images" />

            <router-link :to="{name: 'addbottom', params: {id: post.id}}"><button class="default-button" >Add a Bottom</button></router-link>
          </div>
          <div class="bottoms-container">
            <div v-for="bottom in bottomsForPost" :key="bottom._id" class="bottom-item">
                <div class="bottom-hover-box">
                  <a :href="bottom.link" target="_blank">
                    <img :src="bottom.image" :alt="bottom.name" class="bottom-image">
                  </a>
                  <div class="bottom-hover-detail">
                    <p>{{ bottom.name }}</p>
                    <router-link :to="{name: 'editbottom', params: {id: bottom._id}}"
                    ><button class="default-button" >Edit Bottom</button></router-link>
                  </div>
                </div>
              <div class="bottom-details">
                {{ console.log("this is bottom", bottom.name) }}
                <p>{{ bottom.comment }}</p> 
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

        <div v-if="shoesForPost && shoesForPost.length > 0" class="shoes-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U2hvZXM/ahganirya-personal-use.png" alt="SHOE-PIC" class="item-images" />

            <router-link :to="{name: 'addshoe', params: {id: post.id}}"><button class="default-button" >Add a Shoe</button></router-link>
          </div>
          <div class="shoes-container">
            <div v-for="shoe in shoesForPost" :key="shoe._id" class="shoe-item">
                <div class="shoe-hover-box">
                  <a :href="shoe.link" target="_blank">
                    <img :src="shoe.image" :alt="shoe.name" class="shoe-image">
                </a>
                <div class="shoe-hover-detail">
                  <p>{{ shoe.name }}</p>
                <router-link :to="{name: 'editshoe', params: {id: shoe._id}}"
                ><button class="default-button" >Edit Shoe</button></router-link>
                </div>
                </div>
              <div class="shoe-details">
                {{ console.log("this is shoe", shoe.name) }}
                <p>{{ shoe.comment }}</p> 
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

        <div v-if="outerwearsForPost && outerwearsForPost.length > 0" class="outerwears-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/T3V0ZXJ3ZWFycw/ahganirya-personal-use.png" alt="OUTERWEAR-PIC" class="item-images" />

            <router-link :to="{name: 'addouterwear', params: {id: post.id}}"><button class="default-button" >Add a Outerwear</button></router-link>
          </div>
          <div class="outerwears-container">
            <div v-for="outerwear in outerwearsForPost" :key="outerwear._id" class="outerwear-item">
                <div class="outerwear-hover-box">
                  <a :href="outerwear.link" target="_blank">
                    <img :src="outerwear.image" :alt="outerwear.name" class="outerwear-image">
                </a>
                 <div class="outerwear-hover-detail">
                  <p>{{ outerwear.name }}</p>
                 <router-link :to="{name: 'editouterwear', params: {id: outerwear._id}}"
                ><button class="default-button" >Edit Outerwear</button></router-link>
                 </div>
                </div>
              <div class="outerwear-details">
                {{ console.log("this is outerwear", outerwear.name) }}
                <p>{{ outerwear.comment }}</p> 
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

        <div v-if="accessoriesForPost && accessoriesForPost.length > 0" class="accessories-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QWNjZXNzb3JpZXM/ahganirya-personal-use.png" alt="ACCESSORY-PIC" class="item-images" />

            <router-link :to="{name: 'addaccessory', params: {id: post.id}}"><button class="default-button" >Add an Accessory</button></router-link>
          </div>
          <div class="accessories-container">
            <div v-for="accessorie in accessoriesForPost" :key="accessorie._id" class="accessorie-item">
                <div class="accessory-hover-box">
                  <a :href="accessorie.link" target="_blank">
                    <img :src="accessorie.image" :alt="accessorie.name" class="accessorie-image">
                </a>
                <div class="accessory-hover-detail">
                  <p>{{ accessorie.name }}</p>
                <router-link :to="{name: 'editaccessory', params: {id: accessorie._id}}"
                ><button class="default-button" >Edit Accessory</button></router-link>
                </div>
                </div>
              <div class="accessorie-details">
                {{ console.log("this is accessorie", accessorie.name) }}
                <p>{{ accessorie.comment }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

        <div v-if="othersForPost && othersForPost.length > 0" class="others-section">
          <div class="item-boxes">
            <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
            <div class="black-line-2"></div>
            <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiIzVFNjY2NiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/T3RoZXJz/ahganirya-personal-use.png" alt="OTHER-PIC" class="item-images" />

            <router-link :to="{name: 'addother', params: {id: post.id}}"><button class="default-button" >Add a Other</button></router-link>
          </div>
          <div class="others-container">
            <div v-for="other in othersForPost" :key="other._id" class="other-item">
                <div class="other-hover-box">
                  <a :href="other.link" target="_blank">
                    <img :src="other.image" :alt="other.name" class="other-image">
                 </a>
                 <div class="other-hover-detail">
                  <p>{{ other.name }}</p>
                   <router-link :to="{name: 'editother', params: {id: other._id}}"
                   ><button class="default-button" >Edit Other</button></router-link>
                 </div>
                </div>
              <div class="other-details">
                {{ console.log("this is other", other.name) }}
                <p>{{ other.comment }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="black-line-3"></div>

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

  .artbox-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .button-background {
    height: 4.5rem;
    width: auto;
    
  }

  .back-button {
    position: absolute;
    background-color: #909f9f;
    border: 1px solid #909f9f;
    margin-top: -4.1rem;
    margin-left: -4.9rem;
    transition: background-color 0.3s, border-color 0.3s
  }

  .back-button:hover {
    background-color: #5e6666;
    border-color: #5e6666;
  }

  .item-boxes{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item-images {
    height: 5rem;
    width: auto;
    margin: 2rem;
  }

  .single-main-container, .post {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .single-target-container  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;

    margin: 6rem;
    border: 3px solid #5E6666;

    /* border: red 5px solid; */

    height: autopx;
    width: 600px;
}

.background-person {
  position: absolute;
  height: 100rem;
  right: 50rem;
  opacity: .3;
}

.background-person-2 {
  position: absolute;
  height: 100rem;
  left: 35rem;
  opacity: .3;
}

.corner-box {
  position: relative;
}

.single-banner {
  height: auto;
  width: 25rem;
  margin: 2rem;
}

.single-banner-2 {
  height: auto;
  width: 25rem;
  margin: 2rem;
  margin-top: 4rem;
  transform: scaleY(-1);
}

.single-corner-border, .single-corner-border-2, .single-corner-border-3, .single-corner-border-4 {
  height: 5rem;
  width: auto;
  position: absolute;
}

.single-corner-border {
  margin-bottom: -6rem;
  left: 24px;
  top: 24px;
  z-index: 3;
}

.single-corner-border-2 {
  bottom: 2.5rem;
  left: 2.5rem;
  transform: scaleY(-1)
}

.single-corner-border-3 {
  left: 64.6rem;
  top: 23px;
  z-index: 3;
  transform: scaleX(-1)
}

.single-corner-border-4 {
  bottom: 2.5rem;
  left: 64.6rem;
  z-index: 3;
  transform: scaleY(-1) scaleX(-1);
}
.tops-section, .bottoms-section, .shoes-section, .outerwears-section, .accessories-section, .others-section {

  margin-top: 20px;
  /* border: #5e6666 .5px solid; */
  width: 900px;
  height: auto;

  overflow: auto;
}

.tops-container, .bottoms-container, .shoes-container, .outerwears-container, .accessories-container, .others-container {
  
  display: flex;
  /* gap: 20px; */
}

.top-item, .bottom-item, .shoe-item, .outerwear-item, .accessorie-item, .other-item {
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 1rem;

  width: 300px;
  /* border: yellow 5px solid; */
}

.top-hover-box, .bottom-hover-box, .shoe-hover-box, .outerwear-hover-box, .accessory-hover-box, .other-hover-box {
  width: 300px;
  height: 400px;
  cursor: pointer;
  position: relative;
}

.top-hover-detail, .bottom-hover-detail, .shoe-hover-detail, .outerwear-hover-detail, .accessory-hover-detail, .other-hover-detail {
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

.top-hover-box:hover .top-hover-detail, .bottom-hover-box:hover .bottom-hover-detail, .shoe-hover-box:hover .shoe-hover-detail, .outerwear-hover-box:hover .outerwear-hover-detail, .accessory-hover-box:hover .accessory-hover-detail, .other-hover-box:hover .other-hover-detail, .single-target-container:hover .target-info {
  opacity: 1;
}

.top-image, .bottom-image, .shoe-image, .outerwear-image, .accessorie-image, .other-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.top-details, .bottom-details, .shoe-details, .outerwear-details, .accessorie-details, .other-details {
  height: auto;
  width: 300px;
  padding: 1rem;
  color: rgb(110, 107, 107);
  text-align: left;
  word-wrap: normal;
  border-bottom-left-radius: 2%;
  border-bottom-right-radius: 2%;

  background-color: #b0bfbf5d;

  /* border: red 5px solid; */
}
  </style>
  