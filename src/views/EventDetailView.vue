<template>
    <div class="container-fluid">
        <img src="../assets/concert.jpg" class="img-fluid" alt="..." />

        <div class="box_info">
            <ul
                class="list-group list-group-flush"
                v-for="elem in detail"
                :key="elem.id"
            >
                <li class="list-group-item">
                    <img
                        src="https://img.icons8.com/ios/24/null/squared-menu.png"
                    />
                    {{ elem.type }}
                </li>
                <li class="list-group-item">
                    <img
                        src="https://img.icons8.com/ios/24/null/calendar-13.png"
                    />
                    {{ formatDate(elem.date) }}
                </li>
                <li class="list-group-item">
                    <img
                        src="https://img.icons8.com/material-outlined/24/null/clock--v1.png"
                    />
                    {{ elem.hours }}
                </li>
                <li class="list-group-item">
                    <img
                        src="https://img.icons8.com/ios/24/null/place-marker--v1.png"
                    />
                    {{ elem.adress }} {{ elem.city }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const idEvent = localStorage.getItem("id_event");
import axios from "axios";

export default {
    name: "EventDetailView",
    data() {
        return {
            date: "",
            hours: "",
            adress: "",
            city: "",
            detail: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            url: "http://localhost:8000/api/event-detail/" + idEvent,
        }).then((response) => (this.detail = response.data.events));
        console.log(this.detail);
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("fr", options);
        },
    },
};
</script>

<style>
.box_info {
    text-align: left;
}
</style>
