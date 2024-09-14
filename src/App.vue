<script>
import { router } from "./router";
import HeaderPage from "./components/partial/HeaderPage.vue";
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
  },
};
</script>
<template>
  <HeaderPage />
  <main>
    <router-view></router-view>
  </main>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
</style>