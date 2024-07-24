import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PropertyView from "../views/PropertyView.vue";
import ChangeiogView from "@/views/ChangeiogView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/properties",
    name: "properties",
    component: PropertyView,
  },
  {
    path: "/changeiog",
    name: "changeiog",
    component: ChangeiogView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
