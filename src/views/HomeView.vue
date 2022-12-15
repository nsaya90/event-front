<template>
    <div class="container-fluid">
        <h1>Bienvenue sur B.event</h1>

        <router-link to="" class="nav-link">Liste événements</router-link>
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
</style>
