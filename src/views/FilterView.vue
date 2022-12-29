<template>
    <div class="container-fluid">
        <div v-if="filterDate" class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="elem in info" :key="elem.id">
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

        <div v-if="filterType" class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="elem in info" :key="elem.id">
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

        <div v-if="filterCity" class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="elem in info" :key="elem.id">
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
const first = localStorage.getItem("firstDate");
const second = localStorage.getItem("secondDate");
const type = localStorage.getItem("type");
const city = localStorage.getItem("city");
import axios from "axios";
import Card from "@/components/Card.vue";
import ButtonDetail from "@/components/ButtonDetail.vue";

export default {
    components: { Card, ButtonDetail },
    name: "FilterView",
    data() {
        return {
            info: "",
            city: "",
            type: "",
            dataType: "",
            dataCity: "",
            filterDate: "",
            filterType: "",
            filterCity: "",
        };
    },
    async created() {
        // Filtre par entre 2 dates
        if (second) {
            await axios({
                method: "get",
                url:
                    "http://localhost:8000/api/filter-date/" +
                    first +
                    "/" +
                    second,
            }).then((response) => (this.info = response.data.filter));

            this.filterDate = true;
            console.log(this.info);
        }

        // Filtre par type
        if (type) {
            this.dataType = type.toLowerCase();
            console.log(this.dataType);
            await axios({
                method: "get",
                url: "http://localhost:8000/api/filter-type/" + this.dataType,
            }).then((response) => (this.info = response.data.filter));

            this.filterType = true;
        }

        // Filtre par ville
        if (city) {
            this.dataCity = city.toLowerCase();
            console.log(this.dataCity);

            await axios({
                method: "get",
                url: "http://localhost:8000/api/filter-city/" + this.dataCity,
            }).then((response) => (this.info = response.data.filter));
            console.log(this.info);

            this.filterCity = true;
        }
    },

    mounted() {},
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("fr", options);
        },
        checkType(e) {
            this.type = e.target.value;
        },
    },
};
</script>

<style></style>
