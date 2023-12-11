<template>
  <div>
    <h1>Street Wear Style</h1>
    <router-view />
    <all-posts :posts="posts" />
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import AllPosts from '@/pages/AllPosts.vue';

  export default {
    name: "App",
    setup(props) {
        const url = "https://capstonefashion-1061b525260f.herokuapp.com/styletarget/";
        const posts = ref([]);
        const getTargets = async function () {
            const response = await fetch(url);
            const data = await response.json();
            posts.value = await data;
            console.log("this is data", data);
            console.log("this is posts", posts);
        };
        onMounted(() => getTargets());
        return {
            posts,
            getTargets,
            url,
            ...props
        };
    },
    components: { AllPosts }
};
</script>

<style></style>
