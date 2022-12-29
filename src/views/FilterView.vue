<template>
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

    <div v-if="type" class="row row-cols-1 row-cols-md-2 g-4">
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
</template>

<script>
const first = localStorage.getItem("firstDate");
const second = localStorage.getItem("secondDate");
const type = localStorage.getItem("type");
const city = localStorage.getItem("city");
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
    components: { Card },
    name: "FilterView",
    data() {
        return {
            info: "",
            city: "",
            dataType: "",
            dataCity: "",
            filterDate: "",
            filterType: "",
            filterCity: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            url: "http://localhost:8000/api/filter/" + first + "/" + second,
        }).then((response) => (this.info = response.data.filter));
        this.filterDate = true;
        close();
        console.log(this.info);

        if (type) {
            this.dataType = type.toLowerCase();
            console.log(this.dataType);
            await axios({
                method: "get",
                url: "http://localhost:8000/api/filter/" + this.dataType,
            }).then((response) => (this.info = response.data.filter));
            console.log(this.info);
        }

        if (city) {
            await axios({
                method: "get",
                url: "http://localhost:8000/api/filter/" + this.dataCity,
            }).then((response) => (this.info = response.data.filter));
            console.log(this.info);
            this.filterCity = true;
        }
    },
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
