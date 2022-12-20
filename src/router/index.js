import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProView from "../views/ProView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProfilView from "../views/ProfilView.vue";
import AddEventView from "../views/AddEventView.vue";
import ListEventView from "../views/ListEventView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/pro",
        name: "pro",
        component: ProView,
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/profil",
        name: "profil",
        component: ProfilView,
    },
    {
        path: "/add-event",
        name: "addEvent",
        component: AddEventView,
    },
    {
        path: "/list-event",
        name: "listEvent",
        component: ListEventView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
