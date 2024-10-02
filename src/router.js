import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/page/HomePage.vue";
import SelfSummary from "./components/page/SelfSummary.vue";
import CurriculumPage from "./components/page/CurriculumPage.vue";
import ProjectPage from "./components/page/ProjectPage.vue";
import ProjectOne from "./components/page/ProjectOne.vue";
import ContactPage from "./components/page/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/la-mia-storia",
      name: "Selfsummary",
      component: SelfSummary,
    },
    {
      path: "/curriculum",
      name: "Curriculum",
      component: CurriculumPage,
    },
    {
      path: "/progetti",
      name: "Project",
      component: ProjectPage,
    },
    {
      path: "/progetti/:id",
      name: "ProjectOne",
      component: ProjectOne,
    },
    {
      path: "/contatti",
      name: "Contact",
      component: ContactPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export { router };
