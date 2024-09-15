<script>
export default {
  name: "CurriculumPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-xs-12 foto">foto</div>
      <div class="col-md-6 col-xs-12 lung">scorrimento elementi</div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
.foto {
  height: 5rem;
  position: sticky;
  top: 10rem;
}
@media screen and (max-width: 768px) {
  .foto {
    position: relative;
    top: 0;
  }
}
.lung {
  height: 100rem;
}
</style>