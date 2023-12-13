<template>
  <div class="mother-box">
    <div class="main-top-container">
      <div class="title-logo-container">
      <div class="whole-logo-container">
        <!-- <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjo5MywidyI6MTAwMCwiZnMiOjkzLCJmZ2MiOiIjNUU2NjY2IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IDMgU3RyZWV0IFdlYXIgV2F0Y2hlciA/ahganirya-personal-use.png" alt="title-logo" class="title-logo" /> -->
      <img src="https://see.fontimg.com/api/renderfont4/GXWP/eyJyIjoiZnMiLCJoIjo5MywidyI6MTAwMCwiZnMiOjkzLCJmZ2MiOiIjNUE2NDY0IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Sg/wmfashion.png" alt="title-camera-logo" class="title-logo-person" />
      <!-- <img src="https://see.fontimg.com/api/renderfont4/EaM04/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjNjE2QjZDIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/YQ/kamera-dings.png" alt="title-camera-logo" class="title-logo" /> -->
      <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjo4NywidyI6MTAwMCwiZnMiOjg3LCJmZ2MiOiIjNUU2NjY2IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IFN0cmVldCBXZWFyIFdhdGNoZXIg/ahganirya-personal-use.png" alt="title-logo" class="title-logo" />
      <img src="https://see.fontimg.com/api/renderfont4/GXWP/eyJyIjoiZnMiLCJoIjo5MywidyI6MTAwMCwiZnMiOjkzLCJmZ2MiOiIjNUE2NDY0IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/dQ/wmfashion.png" alt="title-camera-logo" class="title-logo-person-2" />
      </div>
      </div>
      <div class="black-line-1">

      </div>
    </div>
    <router-link to="/new"><button>Post a Style</button></router-link>
    <router-view :posts="posts" :tops="tops" :styletargets="styletargets" :styletargetsUrl="styletargetsUrl" :topsUrl="topsUrl" :bottomsUrl="bottomsUrl" :shoesUrl="shoesUrl" :outerwearsUrl="outerwearUrl" :accessoriesUrl="accessoriesUrl" :othersUrl="othersUrl" :getPosts="getPosts" :getStyleTargets="getStyleTargets" :getTops="getTops" :getBottoms="getBottoms" :getShoes="getShoes" :getOuterwears="getOuterwears" :getAccessories="getAccessories" :getOthers="getOthers" :bottoms="bottoms" :shoes="shoes" :outerwears="outerwears" :accessories="accessories" :others="others"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; 
export default {
  name: "HelloWorld",
  setup(props) {
    const styletargetsUrl = "https://capstonefashion-1061b525260f.herokuapp.com/styletarget/"
    const topsUrl = "https://capstonefashion-1061b525260f.herokuapp.com/top/"
    const bottomsUrl = "https://capstonefashion-1061b525260f.herokuapp.com/bottom/"
    const shoesUrl = "https://capstonefashion-1061b525260f.herokuapp.com/shoe/"
    const outerwearUrl = "https://capstonefashion-1061b525260f.herokuapp.com/outerwear/"
    const accessoriesUrl = "https://capstonefashion-1061b525260f.herokuapp.com/accessory/"
    const othersUrl = "https://capstonefashion-1061b525260f.herokuapp.com/other/"

    const styletargets = ref([]);
    const tops = ref([])
    const bottoms = ref([])
    const shoes = ref([])
    const posts = ref([])
    const outerwears = ref([])
    const accessories =ref([])
    const others = ref([])

    const fetchData = async (url, setData) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData.value = data;
        console.log("Data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getStyleTargets = async () => {
      await fetchData(styletargetsUrl, styletargets)
      // console.log("this is main styletargets from HelloWorld", styletargets)
    }

    const getTops = async () => {
      await fetchData(topsUrl, tops);
      // console.log("this is main tops from HelloWorld", tops)
    }

    const getBottoms = async () => {
      await fetchData(bottomsUrl, bottoms)
      console.log("this is main bottom from HelloWorld", bottoms)
    }

    const getShoes= async () => {
      await fetchData(shoesUrl, shoes)
      // console.log("this is main tops from HelloWorld", shoes)
    }

    const getOuterwears= async () => {
      await fetchData(outerwearUrl, outerwears)
      // console.log("this is main tops from HelloWorld", outerwears)
    }

    const getAccessories= async () => {
      await fetchData(accessoriesUrl, accessories)
      // console.log("this is main tops from HelloWorld", accessories)
    }

    const getOthers= async () => {
      await fetchData(othersUrl, others)
      // console.log("this is main tops from HelloWorld", others)
    }

    //frist try 
    const getPosts = async () => {
      await fetchData(styletargetsUrl, posts)
      // console.log("this is main post from HelloWorld", posts)
    }

    onMounted(async () => {
      await Promise.all([getStyleTargets(), getTops(), getPosts(), getBottoms(), getShoes(), getOuterwears(), getAccessories(), getOthers()]);
    });

    return {
      posts,
      styletargets,
      bottoms,
      tops,
      shoes,
      outerwears,
      accessories,
      others,
      getPosts,
      getTops,
      getStyleTargets,
      getBottoms,
      getShoes,
      getOuterwears,
      getAccessories,
      getOthers,
      topsUrl,
      othersUrl,
      accessoriesUrl,
      outerwearUrl,
      shoesUrl,
      bottomsUrl,
      styletargetsUrl,
      ...props
    };
  },
};
</script>

<style>
body{
  height: 100vh;
  width: 100vw;
}

.mother-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;
}

.title-logo-person-2 {
  margin-left: -5rem;
  height: 15rem;
}

.title-logo-person {
  margin-right: -15rem;
  height: 15rem;
}

.title-logo {
  height: 5.5rem;
  width: auto;
  /* margin: 1rem; */
}

.main-top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.whole-logo-container {
  margin-left: 9rem;
}

.black-line-1 {
  height: 3px;
  width: 800px;
  background-color: #5E6666;
  margin: 2rem;
  margin-top: -1rem;
}
</style>
