<template>
  <div>
    <h1>Street Wear Watcher</h1>
    <router-view :posts="posts" :tops="tops" :styletargets="styletargets" />
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

    const getPosts = async () => {
      const response = await fetch(styletargetsUrl); // Fetch posts from styletarget endpoint
      const data = await response.json();
      posts.value = data;
      console.log("Posts data:", posts.value);
    };

    onMounted(async () => {
      await Promise.all([getStyleTargets(), getTops(), getPosts()]);
    });

    return {
      posts,
      styletargets,
      tops,
      ...props
    };
  },
};
</script>

<style></style>
