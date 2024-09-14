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
      <div class="col-lg-6 col-sm-12">1</div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col">2</div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-6">3</div>
          <div class="col-sm-6 col-lg-6">4</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;

.col {
  background-color: grey;
  // height: 5rem;
  // width: 5rem;
  border: 1px solid white;
}
</style>