import { createApp } from "vue";
import "flowbite";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./index.css";

import store from "./store";

import "ant-design-vue/dist/antd.css";
createApp(App).use(store).use(Antd).use(router).mount("#app");

import axios from "axios";
// Request API.
// Add your own code here to customize or restrict how the public can register new users.
axios
  .post("http://localhost:1337/api/user-examples", {
    username: "Strapi user",
    email: "user@strapi.io",
    password: "strapiPassword",
  })
  .then((response) => {
    // Handle success.
    alert("Отлично!");
    alert("User profile", response.data.user);
    alert("User token", response.data.jwt);
  })
  .catch((error) => {
    // Handle error.
    console.log("An error occurred:", error.response);
  });
