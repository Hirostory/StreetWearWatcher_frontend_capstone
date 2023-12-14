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
            <input  class="main-submit-button" type="submit" :value="buttonLabel" />
            </form>
        </div>
        <img src="https://see.fontimg.com/api/renderfont4/qxwd/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzYxNkI2QyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/aQ/wmdividers1.png" alt="Single-Banner" class="single-banner-2">
    </div>
    <button class="delete-button" v-on:click="deleteShoe()">Delete</button>
  </template>
  
  <script>
  import { useRoute, useRouter } from "vue-router"
  import { ref, toRefs } from "vue"
  
  export default {
    name: "ShoeForm",
    props: ["shoesUrl", "shoes", "getShoes"],
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      const { shoesUrl, shoes, getShoes } = toRefs(props)
      const name = ref("")
      const image = ref("")
      const comment = ref("")
      const link = ref("")
      const price = ref(0)
      let buttonLabel
      let handleSubmit
      if (route.name === "editshoe") {
        const postId = route.params.id
        const styleToUpdate = shoes.value.find((p) => p._id == postId);
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
          await fetch(shoesUrl.value + postId + "/", {
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
  
          getShoes.value()
        //   router.push(`/post/${postId}`)
        router.push("/")
        };
      } else {
        buttonLabel = "Create Post"
  
        handleSubmit = async () => {
          const postId = route.params.id
          await fetch(shoesUrl.value + postId + "/add", {
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
          
          getShoes.value()
        //   router.push(`/post/${postId}`)
          router.push("/")
        };
      }

      const deleteShoe = async () => {
        const postId = route.params.id
        try {
          await fetch(`${shoesUrl.value}/${postId}`, {
            method: "DELETE",
          })
          getShoes.value()
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
        deleteShoe
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