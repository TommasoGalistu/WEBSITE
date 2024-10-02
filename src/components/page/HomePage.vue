<script>
import { useHead } from "@vueuse/head";
export default {
  name: "HomePage",
  setup() {
    useHead({
      title: "Programmatore Full Stack | Home",
      meta: [
        {
          name: "description",
          content:
            "Tommaso Galistu, Full Stack Developer specializzato in Javascript, Vue, PHP e Laravel.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "Programmatore Full Stack | Home",
        },
        {
          property: "og:description",
          content:
            "Tommaso Galistu, Full Stack Developer a Roma, esperto in Javascript, Vue e Laravel.",
        },
        {
          property: "og:image",
          content: "https://tommasogalistu.com/profilo.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Programmatore Full Stack | Home",
        },
        {
          name: "twitter:description",
          content:
            "Tommaso Galistu, sviluppatore web full stack esperto in Vue e PHP.",
        },
        {
          property: "og:url",
          content: "https://tommasogalistu.com/",
        },
      ],
    });
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // Avvia l'animazione quando il componente è montato
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-12 mb-4">
        <!-- card del curriculum self con foto -->
        <router-link class="link" :to="{ name: 'Selfsummary' }">
          <div class="tcard">
            <div class="contDescription">
              <div class="contImg">
                <img src="/src/assets/profilo.png" alt="foto profilo tommy" />
              </div>
              <div class="contText">
                <p class="moreImportant">FULL STACK DEVELOPER</p>
                <h1>Tommaso Galistu</h1>
                <p class="lessImportant">
                  Sono un Full stack developer e vivo a Roma
                </p>
              </div>
            </div>
            <div class="contImgSvg visible">
              <img src="/src/assets/arrow.svg" alt="" />
            </div>
            <div class="contImgSvg hoverEffect">
              <img src="/src/assets/arrowHover.svg" alt="" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-lg-6">
        <div class="row mb-4">
          <div class="col">
            <router-link
              class="link"
              :to="{ name: 'ProjectOne', params: { id: 0 } }"
            >
              <div class="tcard banner">
                <span>Ultimo progetto</span>
                <span class="textRilevant">ONLINE</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-mg-6 mb-4">
            <router-link class="link" :to="{ name: 'Curriculum' }">
              <div class="tcard">
                <div class="contImg littleCard">
                  <img src="/src/assets/foto_curriculum.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="lessImportant">SU DI ME</p>
                    <h4>Curriculum</h4>
                  </div>
                  <div class="contImgSvg visible">
                    <img src="/src/assets/arrow.svg" alt="arrow photo" />
                  </div>
                  <div class="contImgSvg hoverEffect">
                    <img src="/src/assets/arrowHover.svg" alt="arrow photo" />
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-lg-6">
            <router-link class="link" :to="{ name: 'Project' }">
              <div class="tcard">
                <div class="contImg littleCard">
                  <img
                    class="photoProject"
                    src="/src/assets/project_photo.png"
                    alt="foto progetto"
                  />
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="lessImportant">VETRINA</p>
                    <h4>Progetti</h4>
                  </div>
                  <div class="contImgSvg visible">
                    <img src="/src/assets/arrow.svg" alt="arrow photo" />
                  </div>
                  <div class="contImgSvg hoverEffect">
                    <img src="/src/assets/arrowHover.svg" alt="arrow photo" />
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "../../style/_variable.scss";
h1 {
  font-size: 1.7rem;
}
.tcard {
  display: flex;
  flex-direction: column;
}
.contImg {
  height: 15rem;
  border-radius: 20px;
  align-self: flex-end;
  width: 100%;
  img {
    border-radius: 20px;
    height: 100%;
  }
}
.contImg.littleCard {
  height: 8.2rem;
}
.contImgSvg {
  height: 3rem;
  align-self: flex-end;
  img {
    height: 100%;
  }
}

.moreImportant,
.lessImportant {
  color: rgba($color: $colorSite, $alpha: 0.5);
}
.moreImportant {
  font-size: 0.9rem;
}

.contDescription {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.tcard.banner {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
  span {
    font-size: 1.5rem;
  }
  span.textRilevant {
    color: $colorTextLinkActive;
    font-size: 2rem;
  }
}
// .banner {
//   position: relative;
//   width: 100%;
//   height: 70px;

//   overflow: hidden; /* Nasconde le lettere che escono dal contenitore */
// }
// .moving-word {
//   position: relative;
//   white-space: nowrap; /* Impedisce che il testo vada a capo */
//   height: 100%;
// }

// .letter {
//   position: absolute;
//   transition: opacity 0.5s ease-in-out; /* Animazione per lo sparire/riapparire */
// }

@media screen and (max-width: 1200px) {
  .photoProject {
    width: 100%;
  }
}
@media screen and (max-width: 576px) {
  .photoProject {
    width: auto;
  }
}
@media screen and (max-width: 500px) {
  .tcard {
    flex-direction: column;
    text-align: center;
  }
  .contDescription {
    display: block;
  }
  .contText {
    text-align: left;
    margin-top: 2rem;
  }
}
</style>