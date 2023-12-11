/////////////////////////
// Component Imports
/////////////////////////
import AllPosts from "./pages/AllPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import UserForm from "./pages/UserForm"
/////////////////////////
// Array of Routes
/////////////////////////
export default [
  // main page that shows all todos
  { path: "/", component: AllPosts },
  // page for seeing an individual todo
  { path: "/post/:id", component: SinglePost, name: "post" },
  // route for creating a new todo
  { path: "/new", component: UserForm },
  // route for updating a todo
  { path: "/edit", component: UserForm },
];
