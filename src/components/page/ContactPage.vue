<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      emailSent: false,
      // inizio controlli
      nameLength: false,
      emailError: false,
      subjectLength: false,
      messageLength: false,
    };
  },
  methods: {
    sendEmail() {
      let isValidate = this.checkValidate();
      if (isValidate) {
        const serviceID = "service_3gm2suh"; // Sostituisci con il tuo Service ID da EmailJS
        const templateID = "template_pjqfm3p"; // Sostituisci con il tuo Template ID
        const userID = "4PLSrtVRdufkeuRQ8"; // Sostituisci con il tuo User ID

        const templateParams = {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        };

        // emailjs
        //   .send(serviceID, templateID, templateParams, userID)
        //   .then(() => {
        //     this.emailSent = true;
        //     this.resetForm();
        //   })
        //   .catch((error) => {
        //     console.error("Errore nell'invio dell'email: ", error);
        //   });
        console.log("inviato");
      } else {
        console.log("NON inviato");
      }
    },
    checkValidate() {
      // controllo nome valido

      this.nameLength = this.form.name.trim().length < 3;

      // controllo email valida
      const regex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      );
      this.emailError = !regex.test(this.form.email.trim());

      // controllo subject validità

      this.subjectLength = this.form.subject.trim().length < 3;

      this.messageLength = this.form.message.trim().length < 15;

      // se è false ci sono problemi se è true non ci sono problemi
      let errorGeneral =
        !this.nameLength &&
        !this.emailError &&
        !this.subjectLength &&
        !this.messageLength;

      return errorGeneral;
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
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
          <div class="contInfo">
            <p class="lessImportant">Linkedin</p>

            <a href="https://www.linkedin.com/in/tommasogalistu/"
              >Profilo Linkedin</a
            >
          </div>
          <div class="contInfo">
            <p class="lessImportant">GitHub</p>

            <a href="https://github.com/TommasoGalistu">Profilo GitHub</a>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <div class="tcard text-center formContainer">
          <span class="importantText"> Contattami</span>

          <form @submit.prevent="sendEmail" class="form-control p-4">
            <div class="mb-3">
              <label for="name" class="form-label">Nome:</label>
              <input
                type="text"
                v-model="form.name"
                id="name"
                class="form-control"
                placeholder="Scrivi il tuo nome"
                required
              />
              <small v-if="nameLength">Inserisci un nome valido</small>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input
                type="email"
                v-model="form.email"
                id="email"
                class="form-control"
                placeholder="Scrivi la tua email"
                required
              />
              <small v-if="emailError">Scrivi una email valida</small>
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">Oggetto:</label>
              <input
                type="text"
                v-model="form.subject"
                id="subject"
                class="form-control"
                placeholder="Scrivi l'oggetto"
                required
              />
              <small v-if="subjectLength"
                >L'oggetto deve essere maggiore di 3 lettere</small
              >
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Messaggio:</label>
              <textarea
                v-model="form.message"
                id="message"
                class="form-control"
                rows="4"
                placeholder="Scrivi il tuo messaggio"
                required
              ></textarea>
              <small v-if="messageLength"
                >Il messaggio deve essere più lungo di 15 lettere</small
              >
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
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