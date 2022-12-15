import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router, bootstrap, axios).mount("#app");
