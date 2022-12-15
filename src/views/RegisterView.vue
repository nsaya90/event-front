<template>
    <div class="container-fluid">
        <form class="box_register" action="" @submit.prevent>
            <h1>Inscription</h1>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Nom"
                    v-model="firstname"
                />
                <label for="floatingInput">Nom</label>
                <p
                    class="errors"
                    v-if="this.errors.firstname"
                    v-text="errors.firstname[0]"
                ></p>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Prénom"
                    v-model="lastname"
                />
                <label for="floatingPassword">Prénom</label>
                <p
                    class="errors"
                    v-if="this.errors.lastname"
                    v-text="errors.lastname[0]"
                ></p>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Nom d'artiste"
                    v-model="nickname"
                />
                <label for="floatingPassword">Nom d'artiste</label>
                <p
                    class="errors"
                    v-if="this.errors.nickname"
                    v-text="errors.nickname[0]"
                ></p>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Email"
                    v-model="email"
                />
                <label for="floatingPassword">Email</label>
                <p class="errors" v-if="this.errorMail" v-text="errorMail"></p>
            </div>
            <div class="form-floating mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="password"
                    v-model="password"
                />
                <label for="floatingPassword">Mot de passe</label>
                <p
                    class="errors"
                    v-if="this.errors.password"
                    v-text="errors.password[0]"
                ></p>
            </div>
            <button
                @click="register"
                type="button"
                class="btn btn-primary btn-lg"
            >
                Inscription
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
    name: "RegisterView",
    components: { NavBar },
    data() {
        return {
            infoRegister: "",
            firstname: "",
            lastname: "",
            nickname: "",
            email: "",
            password: "",
            errors: "",
            errorMail: "",
        };
    },

    methods: {
        async register() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/register",

                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => (this.infoRegister = response.data))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });

            // this.$router.replace({ path: "/login" });
            if (this.infoRegister) {
                location = "http://localhost:8080/login";
            }
            if (this.infoRegister.error_mail) {
                this.errorMail = this.infoRegister.error_mail;
            }

            console.log(this.infoRegister);
        },
    },
};
</script>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: center;
    text-align: center;
}
.box_register {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
}
.btn-primary {
    background-color: #5271ff;
}
.errors {
    font-size: small;
    font-weight: bolder;
    color: red;
}
</style>
