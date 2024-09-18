import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/page/HomePage.vue";
import AboutPage from "./components/page/AboutPage.vue";
import SelfSummary from "./components/page/SelfSummary.vue";
import CurriculumPage from "./components/page/CurriculumPage.vue";
import ProjectPage from "./components/page/ProjectPage.vue";
import ProjectOne from "./components/page/ProjectOne.vue";
import ContactPage from "./components/page/ContactPage.vue";

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
      name: "About",
      component: AboutPage,
    },
    {
      path: "/self-summary",
      name: "Selfsummary",
      component: SelfSummary,
    },
    {
      path: "/curriculum",
      name: "Curriculum",
      component: CurriculumPage,
    },
    {
      path: "/project",
      name: "Project",
      children: [
        {
          path: "/project",
          name: "Project",
          component: ProjectPage,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
        {
          path: ":id",
          name: "ProjectOne",
          component: ProjectOne,
        },
      ],
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactPage,
    },
  ],
});
export { router };
