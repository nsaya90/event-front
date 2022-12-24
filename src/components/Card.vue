<template>
    <div class="card" style="width: 18rem">
        <img :src="path" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Date : {{ date }}</li>
            <li class="list-group-item">Heures : {{ hours }}</li>
            <li class="list-group-item">Adresse : {{ adress }}</li>
            <li class="list-group-item">Ville : {{ city }}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "cardTitle",
        "description",
        "date",
        "hours",
        "adress",
        "city",
        "path",
    ],
    data() {
        return {};
    },
};
</script>

<style></style>
