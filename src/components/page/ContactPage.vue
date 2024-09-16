<script>
export default {
  name: "ContactPage",
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <div class="row contenitoreFlex">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <div class="tcard">
          <div class="contInfo">
            <p class="lessImportant">E-MAIL</p>
            <p>tommasogalistu@gmail.com</p>
          </div>
          <div class="contInfo">
            <p class="lessImportant">Telefono</p>
            <p>+39 3400009656</p>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <div class="tcard text-center formContainer">
          <span class="importantText"> Contattami</span>

          <form class="mt-4" action="">
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Oggetto*" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Il tuo messaggio"
            ></textarea>
            <button type="submit">invia</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@import "/src/style/_variable.scss";
.contInfo {
  margin-bottom: 3rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
h2 {
  display: inline-block;
}
.importantText {
  color: $colorImportantText;
  font-size: 3rem;
  margin-bottom: 3rem;
}

@media screen and (max-width: 767px) {
  .contenitoreFlex {
    flex-direction: column-reverse;
    gap: 2rem;
  }
}
</style>