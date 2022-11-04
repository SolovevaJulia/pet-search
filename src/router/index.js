import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/NewsFeed.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/AuthentificationForm.vue"),
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import("../views/RegistrationForm.vue"),
  },
  {
    path: "/change-password",
    name: "ChangePasswordForm",
    component: () => import("../views/ChangePasswordForm.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("@/components/AdCard.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashBoard.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
