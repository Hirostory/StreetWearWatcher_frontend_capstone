<template>
    <div>
        <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner">
        <div class="form-box">
            <form v-on:submit.prevent="handleSubmit">
            <input type="text" placeholder="Name" v-model="name" />
            <input type="text" placeholder="Image URL" v-model="image" />
            <textarea type="text" placeholder="comment" v-model="comment"></textarea>
            <input type="text" placeholder="Link URL" v-model="link" />
            <input type="text" placeholder="Price" v-model="price" />
            <input class="main-submit-button"  type="submit" :value="buttonLabel" />
            </form>
        </div>
        <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner-2">
    </div>
    <button class="delete-button" v-on:click="deleteOther()">Delete</button>
  </template>
  
  <script>
  import { useRoute, useRouter } from "vue-router"
  import { ref, toRefs } from "vue"
  
  export default {
    name: "OtherForm",
    props: ["othersUrl", "others", "getOthers"],
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      const { othersUrl, others, getOthers } = toRefs(props)
      const name = ref("")
      const image = ref("")
      const comment = ref("")
      const link = ref("")
      const price = ref(0)
      let buttonLabel
      let handleSubmit
      if (route.name === "editother") {
        const postId = route.params.id
        const styleToUpdate = others.value.find((p) => p._id == postId);
          if (styleToUpdate) {
            name.value = styleToUpdate.name
            image.value = styleToUpdate.image
            comment.value = styleToUpdate.comment
            link.value = styleToUpdate.link
            price.value = styleToUpdate.price
          } else {
            console.log(`No post found with ID ${postId}`)
          }
        buttonLabel = "Edit Style"
        
        handleSubmit = async () => {
          await fetch(othersUrl.value + postId + "/", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name.value,
              image: image.value,
              comment: comment.value,
              link: link.value,
              price: price.value
            }),
          });
  
          getOthers.value()
        //   router.push(`/post/${postId}`)
        router.push("/")
        };
      } else {
        buttonLabel = "Create Post"
  
        handleSubmit = async () => {
          const postId = route.params.id
          await fetch(othersUrl.value + postId + "/add", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name.value,
              image: image.value,
              comment: comment.value,
              link: link.value,
              price: price.value
            }),
          });
          
          getOthers.value()
        //   router.push(`/post/${postId}`)
          router.push("/")
        };
      }

      const deleteOther = async () => {
        const postId = route.params.id
        try {
          await fetch(`${othersUrl.value}/${postId}`, {
            method: "DELETE",
          })
          getOthers.value()
          router.push("/")
         } catch (error) {
          console.error(error)
        }
    }
  
      return {
        name,
        image,
        comment,
        link,
        price,
        handleSubmit,
        buttonLabel,
        deleteOther
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