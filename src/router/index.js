import { createRouter, createWebHistory } from "vue-router";
import FeedsPage from "../views/Feeds-Page.vue";
import AuthPage from "../views/Auth-Page.vue";
import RegPage from "../views/Reg-Page.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: FeedsPage,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
  },
  {
    path: "/reg",
    name: "reg",
    component: RegPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
