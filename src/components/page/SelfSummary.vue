<script>
export default {
  name: "SelfSummary",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-12 d-flex justify-content-center">
        <div class="tcard image">
          <div class="contImg">
            <img src="/src/assets/profilo.jpg" alt="foto profilo" />
          </div>
        </div>
      </div>
      <div class="col-lg-8 d-flex flex-column align-items-stretch">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="title">SELF-SUMMARY</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="tcard firstDescription">
              <h2>Tommaso Galistu</h2>
              <p class="lessImportant">
                Vivo a Roma e sono un junior full stack developer. Ho esperienza
                con Javascript e Php e i rispettivi framework Vue e Laravel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="tcard experience">
          <h5>ESPERIENZE</h5>
          <div class="contDescription">
            <p class="lessImportant">2024 – Presente</p>
            <h4 class="importantText">
              Junior Full Stack Developer – Progetti Personali
            </h4>
            <div class="contTeck">
              <span class="teck">HTML</span>
              <span class="teck">CSS</span>
              <span class="teck">BOOTSTRAP</span>
              <span class="teck">JAVASCRIPT</span>
              <span class="teck">VUE</span>
              <span class="teck">PHP</span>
              <span class="teck">MYSQL</span>
              <span class="teck">LARAVEL</span>
            </div>
          </div>
          <div>
            <p class="lessImportant">Boolean – 2024</p>
            <h4 class="importantText">Corso di Programmazione Full Stack</h4>
          </div>
          <div>
            <p class="lessImportant">Forze Armate Italiane – 2012-2024</p>
            <h4 class="importantText">
              Comandante di Squadra & Istruttore Militare
            </h4>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="tcard certification">
          <h5 class="pb-2">CERTIFICAZIONI</h5>
          <div class="contDescription pb-3">
            <p class="lessImportant">2024</p>
            <p class="importantText">Corso Full Stack Developer</p>
            <p class="lessImportant">Boolean</p>
          </div>
          <div class="contDescription">
            <p class="lessImportant">2021 - 2024</p>
            <p class="importantText">Laurea in Psicologia</p>
            <p class="lessImportant">Università Mercatorum</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12">
        <router-link class="link" :to="{ name: 'Home' }">
          <div class="tcard route">
            <div class="d-flex justify-content-between">
              <div>
                <p class="lessImportant">TORNA INDIETRO</p>
                <h4>Home</h4>
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
      <div class="col-lg-6 col-md-6 col-sm-12">
        <router-link class="link" :to="{ name: 'Contact' }">
          <div class="tcard routeCenter">
            <div class="d-flex justify-content-between">
              <div>
                <p class="lessImportant">LAVORIAMO INSIEME</p>
                <h4>Contatti</h4>
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
      <div class="col-lg-3 col-md-12 col-sm-12">
        <router-link class="link" :to="{ name: 'Curriculum' }">
          <div class="tcard route">
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
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "./../../style/_variable.scss";

.contImg {
  height: 15rem;
}

.title {
  font-size: 4rem;
}

.importantText {
  color: $colorImportantText;
  font-size: 1.2rem;
  font-weight: 600;
}
.tcard.image {
  margin-bottom: 2rem;
}
.firstDescription {
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.experience {
  margin-bottom: 2rem;
}
.route {
  .contImg {
    width: 90%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.contTeck {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.teck {
  padding: 0.5rem 1rem;
  border: 1px solid rgb(169, 169, 255);
}
@media screen and (max-width: 994px) {
  .contImg {
    text-align: center;
  }
  .tcard.image {
    width: 20rem;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .firstDescription,
  .route,
  .routeCenter,
  .certification {
    margin-bottom: 2rem;
  }
}
</style>