<template>
    <div>
        <top-home/>
        <b-container>
            <pro-classifieds-component/>
        </b-container>
    </div>
</template>

<script>
    import TopHome from "./TopHome";
    import ProClassifiedsComponent from "../../views/pages/classifieds/ProClassifiedsComponent";
    export default {
        name: "HomeComponent",
        components: {ProClassifiedsComponent, TopHome}
    }
</script>