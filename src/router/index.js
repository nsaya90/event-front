import { createRouter, createWebHistory } from "vue-router";

import ProView from "../views/ProView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProfilView from "../views/ProfilView.vue";
import AddEventView from "../views/AddEventView.vue";
import ListEventView from "../views/ListEventView.vue";
import EventDetailView from "../views/EventDetailView.vue";
import FilterView from "../views/FilterView.vue";

const routes = [
    {
        path: "/",
        name: "listEvent",
        component: ListEventView,
    },
    {
        path: "/filter",
        name: "FilterView",
        component: FilterView,
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
        path: "/event-detail",
        name: "eventDetail",
        component: EventDetailView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
