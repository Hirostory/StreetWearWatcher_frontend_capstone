<template>
  <div>
    <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
    <div class="form-box">
    <form v-on:submit.prevent="handleSubmit">
    <input type="text" placeholder="Image URL" v-model="image" />
    <textarea type="text" placeholder="Description" v-model="description"></textarea>
    <input type="submit" :value="buttonLabel" class="main-submit-button" />
    </form>
  </div>
  <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner-2">
  </div>
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
        window.location.reload()
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

.form-box {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  margin-top: 1rem;
}

.main-submit-button {
  background-color: #909f9f !important;
  border: 1px solid #909f9f !important;
  transition: background-color 0.3s, border-color 0.3s !important;
}

.main-submit-button:hover {
  background-color: #5e6666 !important;
  border-color: #5e6666 !important;
}

</style>