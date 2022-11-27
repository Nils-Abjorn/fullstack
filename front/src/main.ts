import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
import axios from "axios";

export const HTTP = axios.create({
  baseURL: `baseURL: "http://localhost:3000"`,
});

createApp(App).use(ElementPlus).mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
