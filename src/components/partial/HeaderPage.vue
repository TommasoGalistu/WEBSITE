<script>
import { data } from "../../data";
import { router } from "../../router";
export default {
  name: "HeaderPage",
  data() {
    return {
      routes: router.options.routes,
      activeMenu: false,
      clickedMenu: "Home",
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
  watch: {
    $route(to, from) {
      this.clickedMenu = to.name;
      console.log(`${to.name}`);
      // Puoi anche eseguire altre azioni come aggiornare lo stato locale
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
              <router-link
                class="link"
                :class="{ active: clickedMenu === 'Home' }"
                :to="{ name: 'Home' }"
                >Home</router-link
              >
              <router-link
                class="link"
                :class="{ active: clickedMenu === 'Selfsummary' }"
                :to="{ name: 'Selfsummary' }"
                >About</router-link
              >
              <router-link
                class="link"
                :class="{
                  active:
                    clickedMenu === 'Project' || clickedMenu === 'ProjectOne',
                }"
                :to="{ name: 'Project' }"
                >Project</router-link
              >
              <router-link
                class="link"
                :class="{ active: clickedMenu === 'Contact' }"
                :to="{ name: 'Contact' }"
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

.contNav {
  // display: none;
  z-index: 101;
}
.secondMenu {
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: height 0.2s ease-out;
  .link {
    display: none;
  }
}

.contNav {
  #iconClass {
    color: white;
    font-size: 2rem;
  }
}
.contMenuLaptop {
  .link.active {
    font-size: 1.3rem;
    color: $colorTextLinkActive;
    text-decoration: underline;
  }
}
@media all and (max-width: 460px) {
  .contMenuLaptop {
    display: none;
  }
  .contNav {
    cursor: pointer;
    z-index: 101;

    .menu {
      height: 2px;
      width: 2rem;
      background-color: $colorSite;
      margin: 0.5rem 0;
      z-index: 101;
    }
  }
}
// secondo menu responsive a tendina
.secondMenu.active {
  height: 23rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  text-align: center;
  z-index: 50;
  background-color: rgba($color: white, $alpha: 1);
  overflow: hidden;
  transition: height 0.2s ease-out;

  .link {
    display: block;
    width: 100%;
    color: black;
    font-size: 1.3rem;
  }
  .contNav {
    position: absolute;
    top: 14px;
    right: 13px;
  }
}
</style>