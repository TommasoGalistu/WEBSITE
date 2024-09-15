<script>
export default {
  name: "ProjectPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-md-4 col-sm-12">
          <p class="title2">title</p>
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
          <div class="card">4</div>
          <div class="card">5</div>
        </div>
        <div class="col-md-8 col-sm-12 align-self-start">
          <p class="title1">title</p>
          <div class="row justify-content-end p-0">
            <div class="col-md-6 col-sm-12">
              <div class="card">6</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">7</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">8</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">9</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">10</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">11</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">12</div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card">13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
// @use 'path' as *;

// [class^="col-"] {
//   //   height: 33%;
//   //   width: 5rem;
// }

.card {
  //   height: 5rem;
  width: 100%;
  height: 7rem;
}
.title2 {
  display: none;
}
.container-fluid {
  overflow: auto;
}
@media screen and (max-width: 768px) {
  .title2 {
    display: block;
  }
  .title1 {
    display: none;
  }
}
</style>