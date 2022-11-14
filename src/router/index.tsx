import { createRouter, createWebHistory } from "vue-router";
import DetailPage from "../pages/detail/Detail.vue";
import LoginPage from "../pages/login/Login.vue";
import App from "../App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "App",
      component: App,
    },
    {
      path: "/detail",
      name: "Detail",
      component: DetailPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
  ],
});

router.beforeEach(async (to) => {
  const login: { name: string; password: string } | null =
    localStorage.getItem("login") !== null
      ? JSON.parse(localStorage.getItem("login") as string)
      : null;
  if (
    !(login && login.name === "TestUser" && login.password === "secret") &&
    to.name !== "Login"
  ) {
    return { name: "Login" };
  }
});

export default router;
