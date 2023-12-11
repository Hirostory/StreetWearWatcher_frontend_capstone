import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import routes from "./routes"
import "milligram"

const router = createRouter({
    history: createWebHistory(), 
    routes
})

//Create our vue application
const app = createApp(App);

// inject our router into our app
app.use(router);

// Mount our App to the DOM
app.mount("#app");
