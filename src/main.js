import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = "http://api.project.test"; // Backend URL for API

createApp(App).use(router, bootstrap, axios).mount("#app");
