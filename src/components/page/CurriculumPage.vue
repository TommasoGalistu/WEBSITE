<script>
import { useHead } from "@vueuse/head";
export default {
  name: "CurriculumPage",
  setup() {
    useHead({
      title: "Curriculum Sviluppatore Web Full Stack",
      meta: [
        {
          name: "description",
          content:
            "Curriculum di Tommaso Galistu, Full Stack Developer con esperienza in Javascript, Vue, PHP e Laravel.",
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
          content: "Curriculum Sviluppatore Web Full Stack",
        },
        {
          property: "og:description",
          content:
            "Scopri il curriculum di Tommaso Galistu, sviluppatore full stack con esperienza in front-end e back-end.",
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
          content: "Curriculum Sviluppatore Web Full Stack",
        },
        {
          name: "twitter:description",
          content:
            "Visualizza il curriculum di Tommaso Galistu, sviluppatore web full stack.",
        },
      ],
    });
  },
  data() {
    return {
      stopSticky: false,
    };
  },
  methods: {
    changeSticky() {
      // fermo il contenitore prima de footer
      let stickyElement = this.$refs.stickyElement;
      let container = this.$refs.container;
      // Ottieni l'altezza del contenitore
      const containerBottom = container.getBoundingClientRect().bottom;

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
            <img src="/src/assets/profilo.png" alt="foto profilo tommy" />
          </div>
          <h3 class="mt-1">Tommaso Galistu</h3>
          <p class="lessImportant">Jr. Full Stack Developer</p>
          <router-link class="link" :to="{ name: 'Contact' }"
            >Contattami</router-link
          >
        </div>
      </div>
      <div class="col-md-8 col-xs-12 lung">
        <div class="tcard">
          <div class="contDescription">
            <p class="lessImportant">2024 – Presente</p>
            <h4 class="importantText">
              Junior Full Stack Developer – Progetti Personali
            </h4>
            <p class="lessImportant">
              Sviluppo front-end utilizzando
              <strong>HTML5, CSS3, JavaScript</strong> e
              <strong>Bootstrap</strong> per costruire interfacce responsive e
              user-friendly. Implementazione di back-end in
              <strong>PHP</strong> con gestione di database
              <strong>MySQL</strong> e integrazione di API per arricchire le
              funzionalità dell'applicazione. Esperienza con
              <strong>Vue.js</strong> per applicazioni dinamiche e
              <strong>Laravel</strong> per backend robusti e scalabili. Uso di
              <strong>Git</strong> per il controllo delle versioni e
              ottimizzazione delle prestazioni con best practices per la
              sicurezza.
            </p>
          </div>

          <div class="contDescription">
            <p class="lessImportant">Boolean – 2024</p>
            <h4 class="importantText">Corso di Programmazione Full Stack</h4>
            <p class="lessImportant">
              Completamento di un corso intensivo di 700 ore con focus su
              tecnologie come
              <strong
                >HTML, CSS, JavaScript, Vue.js, PHP, Laravel, MySQL</strong
              >
              e <strong>Git</strong>. Il corso ha previsto esercizi pratici e
              progetti reali, con l’adozione di metodologie Agile per il
              miglioramento continuo e la collaborazione efficace.
            </p>
          </div>

          <div class="contDescription">
            <p class="lessImportant">Forze Armate Italiane – 2012-2024</p>
            <h4 class="importantText">
              Comandante di Squadra & Istruttore Militare
            </h4>
            <p class="lessImportant">
              Esperienza di leadership nella gestione di squadre e nella
              risoluzione di problemi in contesti complessi. Queste competenze
              sono state applicate anche nella gestione di progetti di sviluppo.
              Forte capacità di collaborazione e lavoro di squadra, con
              eccellente gestione del tempo e delle scadenze, qualità essenziali
              per operare in ambienti Agile.
            </p>
          </div>
          <div class="contDescription text-center">
            <h4>SKILL</h4>
            <div class="container">
              <div class="row mb-3">
                <div class="col">
                  <div class="tcard d-flex flex-column gap-2">
                    <h5 class="importantText">Html</h5>
                    <h5 class="importantText">CSS</h5>
                    <h5 class="importantText">Bootstrap</h5>
                    <h5 class="importantText">JavaScript</h5>
                    <h5 class="importantText">Vue</h5>
                  </div>
                </div>
                <div class="col">
                  <div class="tcard d-flex flex-column gap-2">
                    <h5 class="importantText">Php</h5>
                    <h5 class="importantText">Laravel</h5>
                    <h5 class="importantText">MySql</h5>
                  </div>
                </div>
              </div>
              <h4>OTHER</h4>
              <div class="row">
                <div class="col text-center">
                  <div class="tcard d-flex flex-column gap-2">
                    <h5 class="importantText">Git</h5>
                    <h5 class="importantText">GitHub</h5>
                    <h5 class="importantText">Vite</h5>
                    <h5 class="importantText">Sass</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "./../../style/_variable.scss";
// .foto {
//   height: 7rem;
//   position: sticky;
//   top: 6rem;
// }

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
</style>