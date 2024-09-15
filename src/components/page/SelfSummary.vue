<script>
export default {
  name: "SelfSummary",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row align-items-stretch">
      <div class="col-lg-6 col-sm-12">photo</div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col">title</div>
        </div>
        <div class="row">
          <div class="col-lg-12">breve presentazione</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">esperienze</div>
      <div class="col-sm-12 col-md-6">educazione</div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">home</div>
      <div class="col-lg-6 col-md-6 col-sm-12">contact</div>
      <div class="col-lg-3 col-md-12 col-sm-12">
        <router-link class="link" :to="{ name: 'Curriculum' }"
          >curriculum</router-link
        >
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
</style>