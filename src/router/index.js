import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import AboutView from "../views/AboutView.vue";
import PostsView from "@/views/PostsView.vue";
import PostDetail from "@/views/PostDetail.vue";
import ModalsView from "@/views/ModalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductView,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostsView,
    },
    {
      path: "/postDetail/:id",
      name: "postDetail",
      component: PostDetail,
    },
    {
      path: "/modals",
      name: "modals",
      component: ModalsView,
    },
  ],
});

export default router;
