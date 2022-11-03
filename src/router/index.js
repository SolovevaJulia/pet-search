import { createRouter, createWebHistory } from "vue-router";
import NewsFeed from "../views/NewsFeed.vue";
import AuthentificationForm from "../views/AuthentificationForm.vue";
import RegistrationForm from "../views/RegistrationForm.vue";
import ChangePasswordForm from "../views/ChangePasswordForm.vue";
import AdCard from "@/components/AdCard.vue";
import DashBoard from "@/views/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: NewsFeed,
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthentificationForm,
  },
  {
    path: "/reg",
    name: "reg",
    component: RegistrationForm,
  },
  {
    path: "/change-password",
    name: "ChangePasswordForm",
    component: ChangePasswordForm,
  },
  {
    path: "/card",
    name: "card",
    component: AdCard,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
