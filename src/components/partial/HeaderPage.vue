<script>
import { router } from "../../router";
export default {
  name: "HeaderPage",
  data() {
    return {
      routes: router.options.routes,
      activeMenu: false,
    };
  },
  methods: {
    openMenu() {
      if (this.activeMenu) {
        this.activeMenu = false;
      } else {
        this.activeMenu = true;
      }
    },
  },
};
</script>
<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="contImg">
            <img src="/logo.webp" alt="" />
          </div>
        </div>
        <div class="col-auto">
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
          <div class="contNav" @click="openMenu()">
            <div class="menu"></div>
            <div class="menu"></div>
            <div class="menu"></div>
            <nav class="secondMenu" :class="{ active: activeMenu }">
              <router-link class="link" :to="{ name: 'Home' }"
                >Home</router-link
              >
              <router-link class="link" :to="{ name: 'Selfsummary' }"
                >About</router-link
              >
              <router-link class="link" :to="{ name: 'Project' }"
                >Project</router-link
              >
              <router-link class="link" :to="{ name: 'Contact' }"
                >Contact</router-link
              >
              <div class="contNav" @click.stop="openMenu()">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang='scss' scoped>
@import "./../../style/_variable.scss";
.contImg {
  height: 4rem;
  img {
    height: 100%;
  }
}
.contNav,
.secondMenu {
  display: none;
}
@media all and (max-width: 460px) {
  .menuLaptop {
    display: none !important;
  }
  .contNav {
    display: block;
    cursor: pointer;

    .menu {
      height: 1px;
      width: 2rem;
      background-color: $colorSite;
      margin: 0.5rem 0;
    }
  }
}
.secondMenu.active {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  text-align: center;
  z-index: 10;
  background-color: rgba($color: #2c2b30, $alpha: 0.9);
  .link {
    width: 100%;
  }
  .contNav {
    position: absolute;
    top: 14px;
    right: 13px;
  }
}
</style>