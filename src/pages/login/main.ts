import { createApp } from "vue";
import LoginPage from "./Login.vue";
import router from "../../router/index";

createApp(LoginPage).use(router).mount("#app");
