<template>
  <div>
    <h1>Street Wear Watcher</h1>
    <router-link to="/new"><button>Post a Style</button></router-link>
    <router-view :posts="posts" :tops="tops" :styletargets="styletargets" :styletargetsUrl="styletargetsUrl" :getPosts="getPosts" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: "HelloWorld",
  setup(props) {
    const styletargetsUrl = "https://capstonefashion-1061b525260f.herokuapp.com/styletarget";
    const topsUrl = "https://capstonefashion-1061b525260f.herokuapp.com/top";

    const styletargets = ref([]);
    const tops = ref([]);
    const posts = ref([]);

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
      await fetchData(styletargetsUrl, styletargets);
    };

    const getTops = async () => {
      await fetchData(topsUrl, tops);
    };

    //frist try 
    const getPosts = async () => {
      await fetchData(styletargetsUrl, posts)
    };

    onMounted(async () => {
      await Promise.all([getStyleTargets(), getTops(), getPosts()]);
    });

    return {
      posts,
      styletargets,
      tops,
      getPosts,
      ...props
    };
  },
};
</script>

<style></style>
