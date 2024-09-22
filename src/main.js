import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router";
import "./style.scss";
import App from "./App.vue";
// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faX } from "@fortawesome/free-solid-svg-icons";
library.add(faX);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
