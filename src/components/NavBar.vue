<template>
    <ul class="nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link" href="#"
                ><img class="logo" src="../assets/logo.jpg" alt="logo"
            /></router-link>
        </li>
        <li class="nav-item">
            <router-link to="" class="nav-link" href="#">Visiteur</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/pro" class="nav-link" href="#"
                >Professionel</router-link
            >
        </li>
    </ul>
</template>

<script>
export default {
    name: "NavBar",
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    display: flex;
    align-items: center;
    border-bottom: #fea347 solid 2px;
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
