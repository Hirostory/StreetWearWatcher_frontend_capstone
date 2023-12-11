<template>
  <form v-on:submit.prevent="handleSubmit">
    <input type="text" placeholder="subject" v-model="subject" />
    <input type="text" placeholder="subject" v-model="details" />
    <input type="submit" :value="buttonLabel" />
  </form>
</template>

<script>
  
</script>

<style></style>