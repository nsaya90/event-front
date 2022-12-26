<template>
    <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="elem in getEvent" :key="elem.id">
                <div class="d-flex justify-content-center">
                    <card
                        class="card"
                        :path="`http://localhost:8000/storage/${elem.image}`"
                        :cardTitle="`${elem.title}`"
                        :date="formatDate(elem.date)"
                        :type="elem.type"
                        :city="`${elem.city}`"
                    ></card>
                </div>
                <button-detail @click="eventDetail(elem.id)"></button-detail>
            </div>
        </div>
    </div>
</template>

<script>
const idUser = localStorage.getItem("id");

import axios from "axios";
import Card from "@/components/Card.vue";
import ButtonDetail from "@/components/ButtonDetail.vue";

export default {
    name: "ListEventView",
    components: { Card, ButtonDetail },

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
        }).then((response) => (this.info = response.data));
        this.getEvent = this.info.events;
    },
    methods: {
        eventDetail(idEvent) {
            console.log(idEvent);

            localStorage.setItem("id_event", idEvent);
            location = "http://localhost:8080/event-detail";
        },
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("fr", options);
        },
    },
};
</script>

<style></style>
