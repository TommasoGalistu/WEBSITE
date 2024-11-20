<script>
export default {
  name: "FooterPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="row">
        <div
          class="col d-flex flex-column justify-content-center align-items-center"
        >
          <nav class="d-flex justify-content-center gap-2 menuLaptop">
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Selfsummary' }"
              >About</router-link
            >
            <router-link class="link" :to="{ name: 'Project' }"
              >Project</router-link
            >
            <router-link class="link" :to="{ name: 'Contact' }"
              >Contact</router-link
            >
          </nav>
          <div class="d-flex justify-content-center">
            <a
              href="https://www.freeprivacypolicy.com/live/51021a08-f94a-4620-a11a-5a8ad88cb936"
              >Privacy</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang='scss' scoped>
// @use 'path' as *;
footer {
  padding-bottom: 2rem;
}
.contImg {
  width: 5rem;
  img {
    width: 100%;
  }
}
</style>