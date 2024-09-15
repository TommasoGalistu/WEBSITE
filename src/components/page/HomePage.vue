<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row align-items-stretch">
      <div class="col-lg-6 col-sm-12">
        <router-link class="link" :to="{ name: 'Selfsummary' }"
          >Selfsummary</router-link
        >
      </div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col">last work animation</div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">
            <router-link class="link" :to="{ name: 'Curriculum' }"
              >Curriculum</router-link
            >
          </div>
          <div class="col-sm-6 col-lg-6">
            <router-link class="link" :to="{ name: 'Project' }"
              >Project</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
</style>