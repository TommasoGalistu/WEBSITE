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
    };
  },
  methods: {
    sendEmail() {
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
        })
        .catch((error) => {
          console.error("Errore nell'invio dell'email: ", error);
        });
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
        </div>
      </div>
      <div class="col-lg-8 col-md-7 col-sm-12">
        <div class="tcard text-center formContainer">
          <span class="importantText"> Contattami</span>

          <form @submit.prevent="sendEmail">
            <div>
              <label for="name">Nome:</label>
              <input type="text" v-model="form.name" id="name" required />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" v-model="form.email" id="email" required />
            </div>
            <div>
              <label for="subject">Oggetto:</label>
              <input type="text" v-model="form.subject" id="subject" required />
            </div>
            <div>
              <label for="message">Messaggio:</label>
              <textarea v-model="form.message" id="message" required></textarea>
            </div>
            <button type="submit">Invia</button>
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