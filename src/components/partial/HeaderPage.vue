<script>
import { router } from "../../router";
export default {
  name: "HeaderPage",
  data() {
    return {
      routes: router.options.routes,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <nav v-for="(route, index) in routes" :key="index">
        <router-link class="link" :to="{ name: route.name }">{{
          route.name
        }}</router-link>
      </nav>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
</style>