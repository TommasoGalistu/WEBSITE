<script>
import { useHead } from "@vueuse/head";
import { data } from "../../data.js";
export default {
  name: "ProjectPage",
  setup() {
    useHead({
      title: "Progetti Full Stack, Javascript, Vue e PHP",
      meta: [
        {
          name: "description",
          content:
            "Elenco dei progetti sviluppati da Tommaso Galistu, Full Stack Developer specializzato in Javascript, Vue e PHP.",
        },
        {
          property: "og:url",
          content: "https://tommasogalistu.com/",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "Progetti Full Stack, Javascript, Vue e PHP",
        },
        {
          property: "og:description",
          content:
            "Scopri i progetti full stack di Tommaso Galistu sviluppati con Javascript, Vue e PHP.",
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
          content: "Progetti Full Stack, Javascript, Vue e PHP",
        },
        {
          name: "twitter:description",
          content: "Visualizza i progetti full stack di Tommaso Galistu.",
        },
      ],
    });
  },
  data() {
    return {
      cards: data.cardProject,
    };
  },

  methods: {},
};
</script>
<template>
  <div class="container-fluid">
    <div class="container d-flex flex-column">
      <h2 class="align-self-center">I miei progetti</h2>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 mb-4"
          v-for="(card, index) in cards"
          :key="index"
        >
          <router-link
            class="link"
            :to="{ name: 'ProjectOne', params: { id: card.id - 1 } }"
          >
            <div class="tcard">
              <div class="contImg littleCard">
                <img :src="card.photo" :alt="`foto di ${card.titolo}`" />
              </div>
              <div class="d-flex justify-content-between">
                <div>
                  <p
                    class="lessImportant"
                    v-for="(tipi, index) in card.tipo"
                    :key="index"
                  >
                    {{ tipi }}
                  </p>
                  <h4 class="title">{{ card.titolo }}</h4>
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
</template>
<style lang='scss' scoped>
// @use 'path' as *;

.secondColumn {
  // padding-top: 3rem;

  .link {
    width: calc((100% / 2) - 1rem);
  }
}
h2 {
  font-size: 4rem;
  margin-bottom: 2rem;
}
.secondTitle {
  display: none;
}
.contImg {
  width: 100%;
  img {
    width: 100%;
  }
}
@media screen and (max-width: 992px) {
  .title {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 768px) {
  .secondColumn {
    padding-top: 2rem;
    .link {
      width: calc(100% - 1rem);
    }
  }
  .firstTitle {
    display: none;
  }
  .secondTitle {
    display: block;
  }
}
@media screen and (max-width: 447px) {
  h2 {
    font-size: 2rem;
  }
}
</style>