<template>
    <div class="container-fluid">
        <h1>Ajouter un événement</h1>
        <div class="container-md">
            <form class="form-event" action="" @submit.prevent>
                <div>
                    <input
                        class="form-control form-control-mb"
                        type="text"
                        placeholder="Titre"
                        aria-label=".form-control-sm example"
                        v-model="title"
                    />
                </div>
                <div>
                    <select
                        class="form-select form-select-mb"
                        aria-label=".form-select-sm example"
                        @change="checkType"
                    >
                        <option selected>Sélection un genre</option>
                        <option value="Spectacle">Spectacle</option>
                        <option value="Concert">Concert</option>
                        <option value="Sport">Sport</option>
                        <option value="Soirée">Soirée</option>
                    </select>
                </div>

                <div class="input-group">
                    <input
                        @change="file"
                        accept=".png, .jpg, .jpeg"
                        type="file"
                        class="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                    />
                </div>

                <label for="date">Date</label>
                <input
                    class="form-control form-control-mb"
                    type="date"
                    aria-label=".form-control-sm example"
                    :min="`${dateNow}`"
                    @change="checkDate"
                    v-model="date"
                />

                <label for="date">Heure de l'événement</label>
                <input
                    class="form-control form-control-mb"
                    type="time"
                    placeholder="Heure"
                    aria-label=".form-control-sm example"
                    @change="checkHour"
                    v-model="hours"
                />

                <input
                    class="form-control form-control-mb"
                    type="text"
                    placeholder="Adresse"
                    aria-label=".form-control-sm example"
                    v-model="adress"
                />

                <input
                    class="form-control form-control-mb"
                    type="text"
                    placeholder="Ville"
                    aria-label=".form-control-sm example"
                    v-model="city"
                />

                <input
                    class="form-control form-control-mb"
                    type="text"
                    placeholder="Code Postal"
                    aria-label=".form-control-sm example"
                    v-model="zipCode"
                />

                <div class="mb-3">
                    <textarea
                        v-model="description"
                        class="form-control"
                        id="description"
                        rows="3"
                    ></textarea>
                </div>
                <button type="button" class="btn btn-warning" @click="addEvent">
                    Ajouter un événement
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
const token = localStorage.getItem("token");
const idUSer = localStorage.getItem("id");

export default {
    name: "AddEventView",
    date() {
        return {
            title: "",
            type: "",
            image: "",
            date: "",
            hours: "",
            adress: "",
            city: "",
            zipCode: "",
            description: "",
            urlImage: "",
            urlFile: "",
            infoEvent: "",
            dateNow: "",
        };
    },
    created() {
        var today = new Date().toISOString().slice(0, 10);
        this.dateNow = today;
    },

    methods: {
        async file(e) {
            this.image = e.target.files[0];
            const formData = new FormData();

            formData.set("image", this.image);

            console.log(this.image);
            await axios
                .post("http://127.0.0.1:8000/api/upload", formData)
                .then((response) => (this.urlImage = response.data));

            this.urlFile = this.urlImage.url;
        },
        checkType(e) {
            this.type = e.target.value;
        },
        checkHour(e) {
            this.hours = e.target.value;
        },
        checkDate(e) {
            this.date = e.target.value;
        },
        async addEvent() {
            axios({
                method: "post",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
                url: "http://127.0.0.1:8000/api/add-event",

                data: {
                    title: this.title,
                    type: this.type,
                    image: this.urlFile,
                    date: this.date,
                    hours: this.hours,
                    adress: this.adress,
                    city: this.city,
                    zip_code: this.zipCode,
                    description: this.description,
                    id_user: idUSer,
                },
            })
                .then((response) => (this.infoEvent = response.data))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(this.errors);
                });
        },
    },
};
</script>

<style scopped>
.form-event input {
    margin-top: 5px;
}
.container-fluid {
    height: auto;
    margin-top: 15px;
}
</style>
