<template>
    <form v-on:submit.prevent="handleSubmit">
      <input type="text" placeholder="Name" v-model="name" />
      <input type="text" placeholder="Image URL" v-model="image" />
      <textarea type="text" placeholder="comment" v-model="comment"></textarea>
      <input type="text" placeholder="Link URL" v-model="link" />
      <input type="text" placeholder="Price" v-model="price" />
      <input type="submit" :value="buttonLabel" />
    </form>
  </template>
  
  <script>
  import { useRoute, useRouter } from "vue-router"
  import { ref, toRefs } from "vue"
  
  export default {
    name: "TopForm",
    props: ["topsUrl", "tops", "getTops"],
    setup(props) {
      const route = useRoute()
      const router = useRouter()
      const { topsUrl, tops, getTops } = toRefs(props)
      const name = ref("")
      const image = ref("")
      const comment = ref("")
      const link = ref("")
      const price = ref(0)
      let buttonLabel
      let handleSubmit
      if (route.name === "edittop") {
        const postId = route.params.id
        const styleToUpdate = tops.value.find((p) => p._id == postId);
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
          await fetch(topsUrl.value + postId + "/", {
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
  
          getTops.value()
        //   router.push(`/post/${postId}`)
        router.push("/")
        };
      } else {
        buttonLabel = "Create Post"
  
        handleSubmit = async () => {
          const postId = route.params.id
          await fetch(topsUrl.value + postId + "/add", {
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
          
          getTops.value()
        //   router.push(`/post/${postId}`)
          router.push("/")
        };
      }
  
      return {
        name,
        image,
        comment,
        link,
        price,
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