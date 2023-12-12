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
    const route = useRoute()
    const router = useRouter()
    const { styletargetsUrl,posts, getPosts } = toRefs(props)
    console.log("this is the styletargetURL: ", styletargetsUrl.value)
    console.log("this is the getPosts: ", getPosts.value )
    console.log("this is post on UserForm: ", posts.value)
    const image = ref("");
    const description = ref("");
    let buttonLabel
    let handleSubmit
    if (route.name === "edit") {
      const postId = route.params.id
      console.log("this is postId:", postId)
      const styleToUpdate = posts.value.find((p) => p._id == postId);
      console.log("this is styletoupdate: ", styleToUpdate)
        if (styleToUpdate) {
          image.value = styleToUpdate.image
          description.value = styleToUpdate.description
        } else {
          console.log(`No post found with ID ${postId}`)
        }
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
        router.push("/")
      };
    } else {
      buttonLabel = "Create Post"

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
        router.push("/")
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