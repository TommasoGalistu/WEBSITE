<script>
import { data } from "../../data";
import ScrollMagic from "scrollmagic";
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
<<<<<<< HEAD
  methods: {},
=======
  methods: {
    // changeSticky() {
    //   // fermo il contenitore prima de footer
    //   const stickyElement = this.$refs.stickyElement;
    //   const container = this.$refs.cont;
    //   const containerRect = container.getBoundingClientRect();
    //   const stickyRect = stickyElement.getBoundingClientRect();
    //   const stickyHeight = stickyElement.offsetHeight;
    //   const windowHeight = window.innerHeight;
    //   const containerBottom = containerRect.bottom;
    //   // Verifica se l'elemento sticky ha raggiunto il fondo del contenitore
    //   if (containerBottom <= windowHeight - stickyHeight) {
    //     // Usa transform per "fermare" lo sticky all'interno del contenitore
    //     stickyElement.style.transform = `translateY(${
    //       containerBottom - windowHeight - stickyHeight
    //     }px)`;
    //   } else {
    //     // Reset transform per mantenere lo sticky normale
    //     stickyElement.style.transform = "none";
    //   }
    // },
  },
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675
  created() {
    // this.projectId = this.$route.params.id;
    this.card = data.cardProject[this.$route.params.id];
  },
  mounted() {
    // Crea un nuovo controller ScrollMagic
<<<<<<< HEAD
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
=======
    const controller = new ScrollMagic.Controller();
    const pageHeight = document.documentElement.scrollHeight;
    new ScrollMagic.Scene({
      triggerElement: this.$refs.pinElement,
      triggerHook: 0.05, // Pinnato prima che raggiunga il top della pagina
      duration: pageHeight * 0.23,
    })
      .setPin(this.$refs.pinElement, { pushFollowers: true })
      .on("enter", (event) => {
        const spacer = document.querySelector(".scrollmagic-pin-spacer");
        spacer.style.width = "calc((100% / 12) * 4)";
        spacer.style.height = "500px";
        spacer.style.margin = "0";
        spacer.style.padding = "0";
        this.$refs.pinElement.style.transition =
          "transform 0.3s ease, top 0.3s ease";
      })
      .addTo(controller);

    // window.addEventListener("scroll", this.changeSticky);
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675
  },
};
</script>
<template>
<<<<<<< HEAD
  <div class="container" ref="container">
    <div class="row">
      <div class="col-md-4 foto" ref="stickyElement">
=======
  <div class="container" ref="cont">
    <div class="trow">
      <div class="tcol foto pin-spacer" ref="pinElement">
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675
        <div
          class="tcard d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <div class="contImg">
            <img :src="card.photo" :alt="`foto di ${card.titolo}`" />
          </div>
          <h3 class="mt-1">{{ card.titolo }}</h3>
          <p class="lessImportant">{{ card.tipo[0] }}</p>
          <a :href="card.link" class="button">Vedi il progetto</a>
          <a :href="card.linkGit" class="button">GitHub</a>
        </div>
      </div>
<<<<<<< HEAD
      <div class="col-md-8 colDestra">
=======
      <div class="tcol colDestra">
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675
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
<<<<<<< HEAD
  // .foto {
  //   height: 6rem;
  //   position: sticky;
  //   top: 0;
  // }
=======
  .foto {
    height: 6rem;
    position: sticky;
    top: 0;
  }
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675

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
<<<<<<< HEAD
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
=======
.pin-spacer {
  width: calc((100% / 12) * 4);
  position: relative; /* Evita sovrapposizioni */
  margin: 0;
  padding: 0;
  transition: transform 0.3s ease, top 0.3s ease;
  transition: top 0.3s ease; /* Imposta una transizione dolce per la posizione */
}
.trow {
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2rem;
}
.colDestra {
  width: calc((100% / 12) * 8);
}
.scrollmagic-pin-spacer {
  transition: all 0.3s ease;
}
>>>>>>> 2eabf34826fb59ae1db0c04478d7c23497c17675
</style>