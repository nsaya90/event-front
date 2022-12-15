<template>
    <div class="container-fluid">
        <div class="box_info">
            <div class="container_info">
                <h2>Votre profil</h2>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nom : {{ info.firstname }}</li>
                    <li class="list-group-item">
                        Prénom : {{ info.lastname }}
                    </li>
                    <li class="list-group-item">
                        Nom de scène : {{ info.nickname }}
                    </li>
                    <li class="list-group-item">Email : {{ info.email }}</li>
                </ul>

                <button class="btn_update" @click="formUpdate">
                    Modifier vos informations
                </button>
            </div>
        </div>

        <div class="box_update" v-if="update">
            <form class="form_update" action="" @submit.prevent>
                <h2>Modifier vos informations</h2>

                <input
                    class="form_input"
                    type="text"
                    placeholder="Nom"
                    v-model="firstname"
                />
                <p
                    class="errors"
                    v-if="this.errors.firstname"
                    v-text="errors.firstname[0]"
                ></p>

                <input
                    class="form_input"
                    type="text"
                    placeholder="Prénom"
                    v-model="lastname"
                />
                <p
                    class="errors"
                    v-if="this.errors.lastname"
                    v-text="errors.lastname[0]"
                ></p>
                <input
                    class="form_input"
                    type="text"
                    placeholder="Nom de scène"
                    v-model="nickname"
                />
                <p
                    class="errors"
                    v-if="this.errors.nickname"
                    v-text="errors.nickname[0]"
                ></p>

                <input
                    class="form_input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />
                <p
                    class="errors"
                    v-if="this.errors.email"
                    v-text="errors.email[0]"
                ></p>

                <input
                    class="form_input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                />
                <p
                    class="errors"
                    v-if="this.errors.password"
                    v-text="errors.password[0]"
                ></p>

                <button class="btn_update" @click="updateInfo">Valider</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");

export default {
    name: "ProfilView",
    components: {},
    data() {
        return {
            nom: "",
            lastname: "",
            nickname: "",
            email: "",
            password: "",
            info: "",
            infoUpdate: "",
            update: "",
            errors: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/profil/" + idUser,
        }).then((response) => (this.info = response.data.user));
    },
    methods: {
        formUpdate() {
            this.update = true;
        },
        async updateInfo() {
            await axios({
                method: "put",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/profil/" + idUser,

                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => (this.infoUpdate = response))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });

            console.log(this.infoUpdate);
        },
    },
};
</script>

<style scopped>
.container-fluid {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 500px;
}
.form_update {
    display: flex;
    flex-direction: column;
    width: 350px;
}
.container_info {
    width: 350px;
}

.box_update,
.box_info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.errors {
    font-size: small;
    font-weight: bolder;
    color: red;
    margin: 0;
}
</style>
