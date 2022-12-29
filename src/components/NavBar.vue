<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link"
                ><img class="logo" src="../assets/logo.jpg" alt="logo"
            /></router-link>
        </li>

        <li class="nav-item">
            <router-link to="/profil" class="nav-link" v-if="idUser"
                >Professionel</router-link
            >
            <router-link to="/pro" class="nav-link" v-else
                >Professionel</router-link
            >
        </li>
    </ul>
</template>

<script>
const idUser = localStorage.getItem("id");
export default {
    name: "NavBar",
    props: ["path"],
    data() {
        return {
            idUser: idUser,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    align-items: center;
    justify-content: space-around;
    border-bottom: #fea347 solid 10px;
}
.logo {
    width: 95px;
    height: 100px;
}

h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: black;
}
</style>
