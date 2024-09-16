<script>
export default {
  name: "CurriculumPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-xs-12 foto">
        <div
          class="tcard d-flex flex-column justify-content-center align-items-center gap-3"
        >
          <div class="contImg">
            <img src="/src/assets/curriculum.jpg" alt="foto profilo tommy" />
          </div>
          <h3 class="">Tommaso Galistu</h3>
          <router-link class="link" :to="{ name: 'Contact' }"
            >Contattami</router-link
          >
        </div>
      </div>
      <div class="col-md-9 col-xs-12 lung">
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
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "./../../style/_variable.scss";
.foto {
  height: 5rem;
  position: sticky;
  top: 2rem;
}
@media screen and (max-width: 768px) {
  .foto {
    position: relative;
    top: 0;
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
</style>