<script>
import { data } from "../../data";
export default {
  name: "ProjectOne",
  data() {
    return {
      projectId: null,
      card: null,
      stopSticky: false,
    };
  },
  //   props: {
  //     index: Number,
  //   },
  methods: {
    changeSticky() {
      // fermo il contenitore prima de footer
      let stickyElement = this.$refs.stickyElement;
      let container = this.$refs.container;
      // Ottieni l'altezza del contenitore
      const containerBottom = container.getBoundingClientRect().bottom;
      console.log(containerBottom);

      const stickyHeight = stickyElement.offsetHeight;
      const windowHeight = window.innerHeight;
      // Verifica se l'elemento sticky ha raggiunto il fondo del contenitore
      if (containerBottom <= windowHeight + stickyHeight) {
        // Usa transform per "fermare" lo sticky all'interno del contenitore
        stickyElement.style.transform = `translateY(${
          containerBottom - windowHeight - stickyHeight
        }px)`;
      } else {
        // Reset transform per mantenere lo sticky normale
        stickyElement.style.transform = "none";
      }
    },
  },
  created() {
    this.projectId = this.$route.params.id;
    this.card = data.cardProject[this.$route.params.id];
  },
  mounted() {
    window.addEventListener("scroll", this.changeSticky);
  },
};
</script>
<template>
  <div class="container" ref="container">
    <div class="row">
      <div class="col-md-4 col-xs-12 foto" ref="stickyElement">
        <div
          class="tcard d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <div class="contImg">
            <img :src="card.photo" :alt="`foto di ${card.titolo}`" />
          </div>
          <h3 class="mt-1">{{ card.titolo }}</h3>
          <p class="lessImportant">{{ card.tipo[0] }}</p>
          <a :href="card.link">Vedi il progetto</a>
          <a :href="card.linkGit">GitHub</a>
        </div>
      </div>
      <div class="col-md-8 col-xs-12 lung">
        <div class="tcard">
          <div class="contDescription">
            <h3 class="importantText">Descrizione del progetto</h3>
            <p class="lessImportant">
              {{ card.descrizione }}
            </p>
          </div>
          <div class="contDescription">
            <h3 class="importantText">Il mio ruolo</h3>
            <p class="lessImportant">
              {{ card.teamOrg }}
            </p>
          </div>
          <div class="contDescription">
            <h3 class="importantText">Problemi riscontrati</h3>
            <p class="lessImportant">
              {{ card.solution }}
            </p>
          </div>
          <div class="contDescription">
            <h3 class="importantText">Tecnologie utilizzate</h3>
            <span
              class="teck"
              v-for="(teck, index) in card.tecnologie"
              :key="index"
              >{{ teck }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "../../style/_variable.scss";
@media screen and (max-width: 768px) {
  .foto {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
  }
}
@media screen and (min-width: 768px) {
  .foto {
    height: 6rem;
    position: sticky;
    top: 0;
  }
  .foto.active {
  }
}

.contImg {
  width: 100%;
  img {
    width: 100%;
  }
}
.link {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: $colorSite;
  color: white;
}
.contDescription {
  margin-bottom: 3rem;
}
.importantText {
  color: $colorImportantText;
}
.teck {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  margin-top: 2rem;
  border-radius: 50%;
  border: 1px solid $colorSite;
}
</style>