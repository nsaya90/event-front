<template>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="box-filter bg-light">
            <form class="form-filter" action="" @submit.prevent>
                <h5 class="text-black h4">Recherche avancé</h5>
                <select
                    class="form-select form-select-mb"
                    aria-label=".form-select-sm example"
                    v-model="type"
                >
                    <option selected>Sélection un genre</option>
                    <option value="Spectacle">Spectacle</option>
                    <option value="Concert">Concert</option>
                    <option value="Sport">Sport</option>
                    <option value="Soirée">Soirée</option>
                </select>

                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm"
                        >Ville</span
                    >
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="city"
                    />
                </div>

                <button type="button" class="btn btn-primary" @click="filter">
                    Validez
                </button>
            </form>
        </div>
    </div>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <button
                class="button-5"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Recherche avancé
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavFilter",
    data() {
        return {
            type: null,
            city: null,
        };
    },
    methods: {
        filter() {
            // localStorage.setItem("type", this.type);
            // location = "http://localhost:8080/filter";

            const filterCity = this.city;
            localStorage.setItem("type", filterCity);
            location = "http://localhost:8080/filter";
        },
    },
};
</script>

<style>
.box-filter {
    width: 380px;
    height: 187px;
}
.form-filter {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 180px;
}
.button-5 {
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
        Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
}

.button-5:hover,
.button-5:focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
    transform: translateY(-1px);
}

.button-5:active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
}
</style>
