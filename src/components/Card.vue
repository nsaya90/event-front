<template>
    <div class="card" style="width: 18rem">
        <img
            :src="path"
            class="card-img-top"
            alt="event image"
            width="290"
            height="190"
        />
        <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">{{ description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <img
                    src="https://img.icons8.com/ios/24/null/squared-menu.png"
                />
                {{ type }}
            </li>
            <li class="list-group-item">
                <img src="https://img.icons8.com/ios/24/null/calendar-13.png" />
                {{ date }}
            </li>
            <li class="list-group-item">
                <img
                    src="https://img.icons8.com/ios/24/null/place-marker--v1.png"
                />
                {{ city }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "cardTitle",
        "description",
        "date",
        "type",
        "hours",
        "adress",
        "city",
        "path",
    ],
    methods: {
        eventDetail(idEvent) {
            console.log(idEvent);
            // this.$router.push("/event-detail");
        },
    },
};
</script>

<style>
.list-group {
    text-align: left;
}
</style>
