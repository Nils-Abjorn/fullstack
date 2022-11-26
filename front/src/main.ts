import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import axios from "axios";

export const HTTP = axios.create({
  baseURL: `baseURL: "http://localhost:3000"`,
});

createApp(App).use(ElementPlus).mount("#app");
