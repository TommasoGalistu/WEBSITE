<script>
import { data } from "../../data";
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
        // menu responsive chiuso
        this.activeMenu = false;
        document.body.style.overflow = "";
      } else {
        // menu responsive aperto
        this.activeMenu = true;
        document.body.style.overflow = "hidden";
      }
    },
  },
};
</script>
<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <!-- logo -->
        <div class="col">
          <router-link :to="{ name: 'Home' }">
            <div class="contImg">
              <img src="/logo.png" alt="" />
            </div>
          </router-link>
        </div>
        <!-- menu computer e tablet -->
        <div class="col-auto">
          <nav class="d-flex justify-content-center gap-2">
            <div class="contMenuLaptop">
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
            </div>
          </nav>
          <!-- menu ad hamburger -->
          <div class="contNav" @click="openMenu()">
            <div class="menu"></div>
            <div class="menu"></div>
            <div class="menu"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- tendina che si apre -->
    <nav class="secondMenu" :class="{ active: activeMenu }" @click="openMenu()">
      <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="link" :to="{ name: 'Selfsummary' }"
        >About</router-link
      >
      <router-link class="link" :to="{ name: 'Project' }">Project</router-link>
      <router-link class="link" :to="{ name: 'Contact' }">Contact</router-link>
    </nav>
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
.contNav {
  #iconClass {
    color: white;
    font-size: 2rem;
  }
}

@media all and (max-width: 460px) {
  .contMenuLaptop {
    display: none;
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
// secondo menu responsive a tendina
.secondMenu.active {
  display: block;
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
  z-index: 100;
  background-color: rgba($color: #2c2b30, $alpha: 1);
  overflow: hidden;

  .link {
    width: 100%;
    color: white;
  }
  .contNav {
    position: absolute;
    top: 14px;
    right: 13px;
  }
}
</style>