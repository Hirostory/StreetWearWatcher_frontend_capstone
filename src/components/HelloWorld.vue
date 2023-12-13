<template>
  <div>
    <div class="main-top-container">
      <div class="title-logo-container">
      <img src="https://see.fontimg.com/api/renderfont4/Yznaj/eyJyIjoiZnMiLCJoIjo5MywidyI6MTAwMCwiZnMiOjkzLCJmZ2MiOiIjNUU2NjY2IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/IDMgU3RyZWV0IFdlYXIgV2F0Y2hlciA/ahganirya-personal-use.png" alt="title-logo" class="title-logo" />
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
.title-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;
}

.title-logo {
  display: flex;
  height: 100%;
  width: auto;
}

.main-top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.black-line-1 {
  height: 3px;
  width: 1200px;
  background-color: #5E6666;
  margin: 2rem;
}
</style>
