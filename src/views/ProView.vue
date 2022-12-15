<template>
    <div class="container-fluid">
        <h1>Espace professionnel</h1>

        <div class="d-flex flex-column mb-3">
            <div class="p-2">
                <p>
                    Professionel, amateur , chanteur , danseur ou autres ?
                    N'hésitez pas a vous inscrire et ainsi créer un événement
                    pour partager votre passion au grand public !
                </p>
                <div class="p-3 border bg-light">
                    <router-link to="/register" class="nav-link"
                        >Enregistrez-vous</router-link
                    >
                </div>
            </div>
            <div class="p-2">
                <p>
                    Déjà inscrit ? N'hésitez pas a créer d'autre événement sans
                    plus tarder !
                </p>
                <div class="p-3 border bg-light">
                    <router-link to="/login" class="nav-link"
                        >Connectez-vous</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    name: "ProView",
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
