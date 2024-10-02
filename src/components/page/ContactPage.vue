<script>
import { useHead } from "@vueuse/head";
import emailjs from "emailjs-com";
export default {
  name: "ContactPage",
  setup() {
    useHead({
      title: "Contatta Tommaso Galistu - Full Stack Developer",
      meta: [
        {
          name: "description",
          content:
            "Contatta Tommaso Galistu, Full Stack Developer, per informazioni su progetti di sviluppo web.",
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
          content: "Contatta Tommaso Galistu - Full Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Contattaci per collaborare con Tommaso Galistu, esperto sviluppatore Full Stack.",
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
          content: "Contatta Tommaso Galistu - Full Stack Developer",
        },
        {
          name: "twitter:description",
          content:
            "Manda un messaggio a Tommaso Galistu per consulenze o progetti web.",
        },
      ],
    });
  },
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
      checkedPrivacy: true,
      sendMessage: false,
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

        emailjs
          .send(serviceID, templateID, templateParams, userID)
          .then(() => {
            this.emailSent = true;
            this.resetForm();
            this.sendMessage = true;
          })
          .catch((error) => {
            this.emailSent = false;

            this.sendMessage = false;
          });
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
      // controllo la privacy
      const form = document.forms["myForm"];
      let formElement = form.elements;
      this.checkedPrivacy = formElement[4].checked;
      // se è false ci sono problemi se è true non ci sono problemi
      let errorGeneral =
        !this.nameLength &&
        !this.emailError &&
        !this.subjectLength &&
        !this.messageLength &&
        this.checkedPrivacy;
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
      <div class="col-md-5">
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
            <p class="lessImportant upButton">Linkedin</p>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/tommasogalistu/"
              class="button"
              >Profilo Linkedin</a
            >
          </div>
          <div class="contInfo">
            <p class="lessImportant upButton">GitHub</p>

            <a
              target="_blank"
              href="https://github.com/TommasoGalistu"
              class="button"
              >Profilo GitHub</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <div class="tcard text-center formContainer">
          <span class="importantText"> Contattami</span>

          <form
            @submit.prevent="sendEmail"
            class="form-control p-4"
            id="myForm"
          >
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
              <div class="alert alert-danger" v-if="nameLength">
                <small>Inserisci un nome valido di almeno 3 caratteri</small>
              </div>
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
              <div class="alert alert-danger" v-if="emailError">
                <small>Scrivi una email valida</small>
              </div>
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
              <div class="alert alert-danger" v-if="subjectLength">
                <small
                  >L'oggetto di questo messaggio deve essere maggiore di 3
                  lettere</small
                >
              </div>
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
              <div class="alert alert-danger" v-if="messageLength">
                <small
                  >Il messaggio deve essere più lungo di 15 caratteri</small
                >
              </div>
            </div>
            <div class="input-group-text d-flex gap-2">
              <input
                class="form-check-input mt-0"
                type="checkbox"
                value="Policy Privacy"
                aria-label="Checkbox for following text input"
              />
              <a
                href="https://www.freeprivacypolicy.com/live/51021a08-f94a-4620-a11a-5a8ad88cb936"
                target="_blank"
                >Trattamento ai dati personali</a
              >
            </div>
            <div class="alert alert-danger" v-if="!checkedPrivacy">
              <small
                >Leggere e sottoscrivere il trattamento dei dati
                personali</small
              >
            </div>

            <button type="submit" class="btn btn-primary mb-4">Invia</button>
            <div class="alert alert-success" v-if="emailSent && sendMessage">
              <small>La tua email è stata inviata con successo!!!!</small>
            </div>
            <div
              class="alert alert-danger"
              v-else-if="!emailSent && sendMessage"
            >
              <small>La tua email NON è stata inviata</small>
            </div>
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
  text-align: left;
}
button {
  margin-top: 2rem;
}
h2 {
  display: inline-block;
}
.importantText {
  color: $colorImportantText;
  font-size: 3rem;
  margin-bottom: 3rem;
}
.upButton {
  margin: 1rem 0;
}
@media screen and (max-width: 767px) {
  .contenitoreFlex {
    flex-direction: column-reverse;
    gap: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .contenitoreFlex {
    gap: 2rem;
  }
}
</style>