/////////////////////////
// Component Imports
/////////////////////////
import AllPosts from "./pages/AllPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import UserForm from "./pages/UserForm.vue";
import TopForm from "./pages/TopForm.vue"
import BottomForm from "./pages/BottomForm.vue"
import ShoeForm from "./pages/ShoeForm.vue"
import OuterwearForm from "./pages/OuterwearForm.vue"
import AccessoryForm from "./pages/AccessoryForm.vue"
import OtherForm from "./pages/OtherForm.vue"
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
  { path: "/top/edit/:id", component: TopForm, name: 'edittop' },
  { path: "/bottom/add/:id", component: BottomForm, name: "addbottom" },
  { path: "/bottom/edit/:id", component: BottomForm, name: "editbottom" },
  { path: "/shoe/add/:id", component: ShoeForm, name: "addshoe" },
  { path: "/shoe/edit/:id", component: ShoeForm, name: "editshoe" },
  { path: "/outerwear/add/:id", component: OuterwearForm, name: "addouterwear" },
  { path: "/outerwear/edit/:id", component: OuterwearForm, name: "editouterwear" },
  { path: "/accessory/add/:id", component: AccessoryForm, name: "addaccessory" },
  { path: "/accessory/edit/:id", component: AccessoryForm, name: "editaccessory" },
  { path: "/other/add/:id", component: OtherForm, name: "addother" },
  { path: "/other/edit/:id", component: OtherForm, name: "editother" },
];

