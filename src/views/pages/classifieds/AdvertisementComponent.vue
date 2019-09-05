<template>
    <b-container class="mt-5">
        <b-row>
            <b-col xl="9" lg="9" class="pr-2">
                <b-card class="shadow">
                        <b-card-header>
                            <router-link to="/">{{a.category.name}}</router-link>
                        </b-card-header>
                        <div class="ad-photo">
                            <Gallery :images="a.photos"></Gallery>
                        </div>
                        <div class="ad-title">
                            {{a.title}}
                        </div>
                        <div class="ad-s">
                            <b-row>
                                <b-col xl="9" lg="9">
                                    <b-row>
                                        <b-col xl="4" lg="4" class="pr-1">
                                            <span>{{a.price.price}} <b> {{a.price.currency}}</b></span>
                                            <negotiate-price :id="a.id" :user_id="a.user_id" :currency="a.price.currency"/>
                                        </b-col>
                                        <b-col xl="4" lg="4" class="pl-1">
                                            <router-link :to="{name: 'ClassifiedsCityComponent', params: {city: a.location}}">{{a.location}}</router-link>
                                        </b-col>
                                        <b-col xl="4" lg="4" class="pl-1">
                                            <span class="icon-eye"> 1200</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col xl="3" lg="3">
                                    <div class="float-right">{{a.created_at | moment('D MMM YYYY')}}</div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="ad-body">
                            {{a.body}}
                        </div>

                </b-card>
            </b-col>
            <b-col xl="3" lg="3" class="pl-1">
                <sidebar :user="a.user" :type="a.type" :id="a.id" :follow="a.follow"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Gallery from 'vue-cover-gallery'
    import Follow from "./Follow";
    import Sidebar from "./Sidebar";
    import NegotiatePrice from "./NegotiatePrice";

    export default {
        name: "AdvertisementComponent",
        components: {
            NegotiatePrice,
            Sidebar,
            Follow,
            Gallery
        },
        data() {
            return {
                //
            }
        },
        computed: {
            ...mapGetters({
                a: 'advertisement'
            })
        },
        created() {
            this.$store.dispatch('getAdvertisement', this.$route.params.id);
            document.title = this.$route.params.title;
        }
    }
</script>

<style scoped>

</style>