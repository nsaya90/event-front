<template>
    <h1>Liste événement</h1>
    <div class="box" v-for="elem in allEvent" :key="elem.id">
        <p>{{ elem.title }}</p>
        <!-- <p>{{ elem.city }}</p> -->
        <p>{{ elem.date }}</p>
        <p>{{ elem.hours }}</p>
        <p>{{ elem.adress }}</p>
        <p>{{ elem.city }}</p>
        <p>{{ elem.description }}</p>
    </div>
</template>

<script>
const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");
import axios from "axios";

export default {
    name: "ListEventView",
    data() {
        return {
            allEvent: "",
            info: "",
        };
    },

    async mounted() {
        await axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/events",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => (this.info = response.data));
        this.allEvent = this.info.events;
    },
    methods: {},
};
</script>

<style></style>
