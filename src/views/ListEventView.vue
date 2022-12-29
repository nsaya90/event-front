<template>
    <div class="box-img">
        <h1>Bienvenue sur B.event</h1>
    </div>
    <div class="box-filter-date">
        <p>Trouver un événement</p>

        <form class="box-date">
            <input
                type="date"
                required="required"
                :min="`${dateNow}`"
                v-model="firstDate"
            />
            <input
                type="date"
                required="required"
                :min="`${dateNow}`"
                v-model="secondDate"
            />
            <button type="button" class="btn btn-primary" @click="filter">
                Rechercher
            </button>
        </form>
    </div>
    <div class="container-fluid">
        <nav-filter></nav-filter>

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
import NavFilter from "@/components/NavFilter.vue";

export default {
    name: "ListEventView",
    components: { Card, ButtonDetail, NavFilter },

    data() {
        return {
            getEvent: "",
            info: "",
            firstDate: null,
            secondDate: null,
            type: null,
        };
    },

    async mounted() {
        await axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/events",
        }).then((response) => (this.info = response.data));
        this.getEvent = this.info.events;

        localStorage.clear();
    },
    created() {
        var today = new Date().toISOString().slice(0, 10);
        this.dateNow = today;
    },
    methods: {
        filter() {
            localStorage.setItem("firstdate", this.firstDate);
            localStorage.setItem("secondDate", this.secondDate);

            if (this.firstDate == null && this.secondDate == null) {
                this.$router.go(0);
            } else {
                location = "http://localhost:8080/filter";
            }
        },
        eventDetail(idEvent) {
            console.log(idEvent);

            localStorage.setItem("id_event", idEvent);
            location = "http://localhost:8080/event-detail";
        },
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("fr", options);
        },
        onChange(e) {
            console.log(onChange(e));
        },
    },
};
</script>

<style scopped>
.box-filter-date p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: large;
    color: white;
}
.box-date {
    display: flex;

    justify-content: space-around;

    width: 100%;
}
.box-date button {
    width: 110px;
}

input[type="date"] {
    appearance: none;
    -webkit-appearance: none;

    font-family: "Helvetica", arial, sans-serif;
    font-size: 18px;
    border: 1px solid #ecf0f1;

    width: 100px;
    padding: 5px;
    display: inline-block !important;
    visibility: visible !important;
}

.box-filter-date {
    background-color: #fea347;
    height: 100px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}
.box-img {
    width: 100%;
    height: 200px;
    background-image: url(../assets/concert.jpg);
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-img h1 {
    color: white;
    margin-top: 85px;
}
</style>
