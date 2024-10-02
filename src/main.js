import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router";
import "./style.scss";
import App from "./App.vue";
import { createHead } from "@vueuse/head"; // Usa @vueuse/head

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

library.add(faX);

const app = createApp(App);

// Configura la gestione dei meta tag
const head = createHead();
app.use(head);

// FontAwesome component
app.component("font-awesome-icon", FontAwesomeIcon);

// Vue Router
app.use(router);

app.mount("#app");
