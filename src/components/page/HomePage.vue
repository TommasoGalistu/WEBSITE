<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {},
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
                <img
                  src="/src/assets/curriculum.jpg"
                  alt="foto profilo tommy"
                />
              </div>
              <div class="contText">
                <p class="moreImportant">FULL STACK DEVELOPER</p>
                <h1>Tommaso Galistu.</h1>
                <p class="lessImportant">
                  Sono un Full stack developer e vivo a Roma
                </p>
              </div>
            </div>
            <div class="contImgSvg visible">
              <img src="/src/assets/arrow.svg" alt="arrow photo" />
            </div>
            <div class="contImgSvg hoverEffect">
              <img src="/src/assets/arrowHover.svg" alt="arrow photo" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-lg-6">
        <div class="row mb-4">
          <div class="col">
            <router-link class="link" :to="{ name: 'Project' }">
              <div class="tcard">
                <p>ULTIMO PROGETTO ONLINE</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-mg-6 mb-4">
            <router-link class="link" :to="{ name: 'Curriculum' }">
              <div class="tcard">
                <div class="contImg littleCard">
                  <img src="/src/assets/firma.png" alt="" />
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <p class="lessImportant">QUALCOSA SU DI ME</p>
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
                  <img src="/src/assets/firma.png" alt="" />
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

.tcard {
  display: flex;
  flex-direction: column;
}
.contImg {
  height: 15rem;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  align-self: flex-end;
  img {
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
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