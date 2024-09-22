<script>
import { data } from "../../data.js";
export default {
  name: "ProjectPage",
  data() {
    return {
      cards: data.cardProject,
    };
  },

  methods: {},
  computed: {
    firstColumn() {
      return this.cards.filter((card) => card.id <= 2);
    },
    secondColumn() {
      return this.cards.filter((card) => card.id > 2 && card.id < 7);
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="container d-flex flex-column">
      <h2 class="align-self-center secondTitle">PROJECT</h2>
      <div class="row mb-4">
        <div class="col-md-4 d-flex flex-column gap-4">
          <router-link
            v-for="(card, index) in firstColumn"
            :key="index"
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

        <div class="col-md-8 d-flex flex-column">
          <h2 class="align-self-center firstTitle">PROJECT</h2>
          <div class="row">
            <div class="col-12 d-flex gap-4 flex-wrap secondColumn">
              <router-link
                v-for="(card, index) in secondColumn"
                :key="index"
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