import { createApp } from "vue";
import DetailPage from "./Detail.vue";
import router from "../../router/index";

createApp(DetailPage).use(router).mount("#app");
