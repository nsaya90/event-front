<template>
    <div class="container-fluid">
        <h1>Bienvenue sur B.event</h1>

        <div class="box_link">
            <router-link to="/list-event" class="nav-link"
                >Liste événements</router-link
            >
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    name: "HomeView",
    components: { NavBar },
};
</script>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    height: 400px;
}
.box_link {
    border: 2px orange solid;
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box_link a {
    font-size: x-large;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
