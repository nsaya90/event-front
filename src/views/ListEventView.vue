<template>
    <div class="container-fluid">
        <h1>Liste événement</h1>
        <div class="box-card" v-for="elem in getEvent" :key="elem.id">
            <card
                :path="`http://localhost:8000/storage/${elem.image}`"
                :cardTitle="`${elem.title}`"
                :description="`${elem.description}`"
                :date="`${elem.date}`"
                :hours="`${elem.hours}`"
                :adress="`${elem.adress}`"
                :city="`${elem.city}`"
            ></card>
        </div>
    </div>
</template>

<script>
const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
    name: "ListEventView",
    components: { Card },

    data() {
        return {
            getEvent: "",
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
        this.getEvent = this.info.events;
    },
    methods: {},
};
</script>

<style>
.box-card {
    margin-bottom: 15px;
}
</style>
