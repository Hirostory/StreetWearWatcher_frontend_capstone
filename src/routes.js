/////////////////////////
// Component Imports
/////////////////////////
import AllPosts from "./pages/AllPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import UserForm from "./pages/UserForm.vue";
import TopForm from "./pages/TopForm.vue"
/////////////////////////
// Array of Routes
/////////////////////////
export default [
  // main page that shows all todos
  { path: "/", component: AllPosts, props: (route) => ({ posts: route.posts }) },
  // page for seeing an individual todo
  { path: "/post/:id", component: SinglePost, name: "post" },
  // route for creating a new todo
  { path: "/new", component: UserForm, props: true },
  // route for updating a todo
  { path: "/edit/:id", component: UserForm, name: 'edit'},
  { path: "/top/add/:id", component: TopForm, name: 'addtop' },
  { path: "/top/edit/:id", component: TopForm, name: 'edittop' }
];
