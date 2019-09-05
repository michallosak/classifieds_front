<template>
    <div>
        <div class="bg-top-classifieds">
            <b-container>
                <div class="top-title-page">
                    <h1>{{title}}</h1>
                </div>
                <home-search/>
            </b-container>
        </div>
        <b-container>
            <pro-classifieds-component/>
            <div class="title-content-page">
                Ogłoszenia ({{classifieds.length}})
            </div>
            <b-row style="padding: 0 12px;">
                <b-col v-for="ad in classifieds" xl="3" lg="3" class="pr-1 pl-1">
                    <div class="classifieds">
                        <div class="photo">
                            <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.id, title: ad.title}}">
                                <b-img :src="ad.photos[0].href" :alt="ad.title"></b-img>
                            </router-link>
                        </div>
                        <div class="title">
                            <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.id, title: ad.title}}">
                                {{ad.title}}
                            </router-link>
                        </div>
                        <div class="footer">
                            <b-row>
                                <b-col xl="10" lg="10" class="pr-1">
                                    <div class="price">
                                        {{ad.price.price}} {{ad.price.currency}}
                                    </div>
                                </b-col>
                                <b-col xl="2" lg="2" class="pl-1">
                                    <follow :id="ad.id" :follows="ad.follow"/>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>import HomeSearch from "../../../components/home/HomeSearch";
import ProClassifiedsComponent from "./ProClassifiedsComponent";
import {mapGetters} from 'vuex'
import Follow from "./Follow";
    export default {
        name: "ClassifiedsCityComponent",
        components: {Follow, ProClassifiedsComponent, HomeSearch},
        data(){
            return{
                //
            }
        },
        computed: {
            ...mapGetters({
                classifieds: 'classifiedsCity'
            })
        },
        created() {
            this.$store.dispatch('getClassifiedsCity', this.$route.params.city)
        }
    }
</script>

<style scoped>

</style>