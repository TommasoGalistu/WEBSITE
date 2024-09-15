<script>
import { router } from "./router";
import HeaderPage from "./components/partial/HeaderPage.vue";
import FooterPage from "./components/partial/FooterPage.vue";
export default {
  name: "App",
  data() {
    return {
      router,
    };
  },
  methods: {},
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>
<template>
  <HeaderPage />
  <main>
    <router-view></router-view>
  </main>
  <FooterPage />
</template>
<style lang='scss'>
@import "./style/_variable.scss";
</style>