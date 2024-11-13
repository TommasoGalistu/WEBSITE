<script>
import { useHead } from "@vueuse/head";
import { data } from "../../data";
import ScrollMagic from "scrollmagic";
export default {
  name: "ProjectOne",
  setup() {
    useHead({
      title: "Progetti Full Stack - Javascript, Vue, PHP, Laravel",
      meta: [
        {
          name: "description",
          content:
            "Dettagli sui progetti sviluppati da Tommaso Galistu, Full Stack Developer con competenze in Javascript, Vue, PHP e Laravel.",
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
          content: "Progetti Full Stack - Javascript, Vue, PHP, Laravel",
        },
        {
          property: "og:description",
          content:
            "Scopri i progetti di Tommaso Galistu sviluppati con tecnologie moderne come Vue, PHP e Laravel.",
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
          content: "Progetti Full Stack - Javascript, Vue, PHP, Laravel",
        },
        {
          name: "twitter:description",
          content:
            "Dettagli sui progetti full stack realizzati da Tommaso Galistu.",
        },
      ],
    });
  },
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
    toggleFullscreen() {
      var videoElement = document.getElementById("video");

      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen(); // Per browser moderni
      } else if (videoElement.mozRequestFullScreen) {
        // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        // IE/Edge
        videoElement.msRequestFullscreen();
      }
    },
  },
  created() {
    // this.projectId = this.$route.params.id;
    this.card = data.cardProject[this.$route.params.id];
  },
  mounted() {
    // Crea un nuovo controller ScrollMagic
    // const controller = new ScrollMagic.Controller();
    // const pageHeight = document.documentElement.scrollHeight;
    // new ScrollMagic.Scene({
    //   triggerElement: this.$refs.pinElement,
    //   triggerHook: 0.05, // Pinnato prima che raggiunga il top della pagina
    //   duration: pageHeight * 0.23,
    // })
    //   .setPin(this.$refs.pinElement, { pushFollowers: true })
    //   .on("enter", (event) => {
    //     const spacer = document.querySelector(".scrollmagic-pin-spacer");
    //     spacer.style.width = "calc((100% / 12) * 4)";
    //     spacer.style.height = "500px";
    //     spacer.style.margin = "0";
    //     spacer.style.padding = "0";
    //     this.$refs.pinElement.style.transition =
    //       "transform 0.3s ease, top 0.3s ease";
    //   })
    //   .addTo(controller);
    // window.addEventListener("scroll", this.changeSticky());
  },
  computed: {
    isPhoto() {
      return this.card.video;
    },
  },
};
</script>
<template>
  <div class="container" ref="container">
    <div class="row">
      <div class="col-md-4 foto" ref="stickyElement">
        <div
          class="tcard d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <div class="contImg">
            <img
              v-if="!isPhoto"
              :src="card.photo"
              :alt="`foto di ${card.titolo}`"
            />
            <video v-else id="video" controls>
              <source :src="card.video" type="video/mp4" />
              Il tuo browser non supporta il formato video.
            </video>
          </div>
          <h3 class="mt-1">{{ card.titolo }}</h3>
          <p class="lessImportant">{{ card.tipo[0] }}</p>
          <a :href="card.link" class="button">Guarda il progetto</a>
          <a :href="card.linkGit" class="button">GitHub</a>
        </div>
      </div>
      <div class="col-md-8 colDestra">
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
            <div class="d-flex flex-wrap">
              <span
                class="teck"
                v-for="(teck, index) in card.tecnologie"
                :key="index"
                >{{ teck }}</span
              >
            </div>
          </div>
          <div class="d-flex gap-2 justify-content-center">
            <a :href="card.link" class="button tablet">Guarda il progetto</a>
            <a :href="card.linkGit" class="button tablet">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "../../style/_variable.scss";

video {
  width: 320px; /* Imposta una larghezza fissa per il video in piccolo */
  height: 180px; /* Imposta una altezza fissa per il video in piccolo */
  object-fit: cover; /* Assicura che il video mantenga la proporzione senza deformarsi */
}
@media screen and (max-width: 768px) {
  .foto {
    position: relative;
    top: 0;
    margin-bottom: 2rem;
  }
}
@media screen and (min-width: 768px) {
  // .foto {
  //   height: 6rem;
  //   position: sticky;
  //   top: 0;
  // }

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
.button.tablet {
  display: none;
}
@media screen and (max-width: 768px) {
  .button.tablet {
    display: inline-block;
  }
}
// .pin-spacer {
//   width: calc((100% / 12) * 4);
//   position: relative; /* Evita sovrapposizioni */
//   margin: 0;
//   padding: 0;
//   transition: transform 0.3s ease, top 0.3s ease;
//   transition: top 0.3s ease; /* Imposta una transizione dolce per la posizione */
// }
// .trow {
//   display: flex;
//   margin: 0;
//   padding: 0;
//   gap: 2rem;
// }
// .colDestra {
//   width: calc((100% / 12) * 8);
// }
// .scrollmagic-pin-spacer {
//   transition: all 0.3s ease;
// }
</style>