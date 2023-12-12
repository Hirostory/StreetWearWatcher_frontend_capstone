/////////////////////////
// Component Imports
/////////////////////////
import AllPosts from "./pages/AllPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import UserForm from "./pages/UserForm.vue";
import { styletargetsUrl }  from "./components/HelloWorld.vue"
/////////////////////////
// Array of Routes
/////////////////////////
console.log("this is the url ",styletargetsUrl)
export default [
  // main page that shows all todos
  { path: "/", component: AllPosts, props: (route) => ({ posts: route.posts }) },
  // page for seeing an individual todo
  { path: "/post/:id", component: SinglePost, name: "post" },
  // route for creating a new todo
  { path: "/new", component: UserForm, props: {styletargetsUrl: styletargetsUrl} },
  // route for updating a todo
  { path: "/edit", component: UserForm },
];
