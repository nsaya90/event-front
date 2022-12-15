<template>
    <div class="container-fluid">
        <form class="box_register" action="" @submit.prevent>
            <h1>Connexion</h1>

            <div class="form-floating mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Email"
                    v-model="email"
                />
                <label for="floatingPassword">Email</label>
                <p
                    class="errors"
                    v-if="this.info"
                    v-text="this.info.error_mail"
                ></p>
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
            <button @click="login" type="button" class="btn btn-primary btn-lg">
                Connexion
            </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
    name: "LoginView",
    components: { NavBar },
    data() {
        return {
            email: "",
            password: "",
            message: "",
            info: "",
            errors: "",
        };
    },
    methods: {
        async login() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/login",

                data: {
                    email: this.email,
                    password: this.password,
                },
            }).then((response) => (this.info = response.data));

            console.log(this.info);

            localStorage.setItem("token", this.info.token);

            console.log(this.info.id_user);

            if (this.info.succes) {
                localStorage.setItem("id", this.info.id_user);

                location = "http://localhost:8080/profil";
            } else {
                this.message = "Mauvais identifiant";
            }
        },
    },
};
</script>
<style>
.container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 400px;
}

.box_register {
    width: 350px;
}
</style>
