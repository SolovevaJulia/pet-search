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
