<template>
  <form v-on:submit.prevent="handleSubmit">
    <input type="text" placeholder="Image URL" v-model="image" />
    <textarea type="text" placeholder="Description" v-model="description"></textarea>
    <input type="submit" :value="buttonLabel" />
  </form>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { ref, toRefs } from "vue"

export default {
  name: "UserForm",
  props: ["styletargetsUrl", "posts", "getPosts"],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { styletargetsUrl, posts, getPosts } = toRefs(props);
    console.log("this is the styletargetURL: ", styletargetsUrl.value)
    console.log("this is the getPosts: ", getPosts.value )
    const image = ref("");
    const description = ref("");
    let buttonLabel
    let handleSubmit
    console.log("if this is post: ", posts.value)
    if (route.name === "edit") {
      const postId = route.params.id
      const styleToUpdate = posts.value.find((p) => p.id == postId);
      console.log("this is styletoupdate: ", styleToUpdate)
      image.value = styleToUpdate.image
      description.value = styleToUpdate.description;
      buttonLabel = "Edit Style"
      
      handleSubmit = async () => {
        await fetch(styletargetsUrl.value + postId + "/", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: image.value,
            description: description.value,
          }),
        });

        getPosts.value()
        // getPosts().value
        router.push("/");
      };
    } else {
      buttonLabel = "Create Post";

      handleSubmit = async () => {
        await fetch(styletargetsUrl.value, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: image.value,
            description: description.value,
          }),
        });
        
        getPosts.value()
        // getPosts().value
        router.push("/");
      };
    }

    return {
      image,
      description,
      handleSubmit,
      buttonLabel,
    };
  },
};
</script>

<style>
input,
textarea {
  display: block;
  margin-bottom: 10px;
}
</style>