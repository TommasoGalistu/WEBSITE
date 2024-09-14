import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/page/HomePage.vue";
import AboutPage from "./components/page/AboutPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About me",
      component: AboutPage,
    },
  ],
});
export { router };
