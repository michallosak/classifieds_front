<template>
    <div class="bg-top-home">
        <b-container>
            <b-row class="justify-content-center">
                <b-col xl="10">
                    <div class="top-home-text">
                        <div class="mt-5 pt-5 mb-4">
                            We have 850,000 great classifieds you deserve!
                        </div>
                        <h1 class="mb-5">Your Dream <br><span>Job is Waiting</span></h1>
                    </div>
                    <home-search/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import HomeSearch from "./HomeSearch";
    export default {
        name: "TopHome",
        components: {HomeSearch}
    }
</script>

<style scoped>

</style>