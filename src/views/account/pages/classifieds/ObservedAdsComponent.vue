<template>
    <div>
        <div class="title-page-account">
            {{title}} ({{classifieds.length}})
        </div>
        <b-row style="padding: 0 12px;">
            <b-col v-for="ad in classifieds" xl="3" lg="3" class="pr-1 pl-1">
                <div class="classifieds">
                    <div class="photo">
                        <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.id, title: ad.title}}">
                            <b-img :src="ad.ad.photos[0].href" :alt="ad.ad.title"></b-img>
                        </router-link>
                    </div>
                    <div class="title">
                        <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.follow_id, title: ad.ad.title}}">
                            {{ad.ad.title}}
                        </router-link>
                    </div>
                    <div class="footer">
                        <b-row>
                            <b-col xl="10" lg="10" class="pr-1">
                                <div class="price">
                                    {{ad.ad.price.price}} {{ad.ad.price.currency}}
                                </div>
                            </b-col>
                            <b-col xl="2" lg="2" class="pl-1">
                                <follow :id="ad.follow_id"/>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Follow from "../../../pages/classifieds/Follow";
    export default {
        name: "ObservedAdsComponent",
        components: {Follow},
        data(){
            return{
                title: 'Observed ads'
            }
        },
        computed: {
            ...mapGetters({
                classifieds: 'observedAds'
            })
        },
        created() {
            this.$store.dispatch('getObservedAds')
        }
    }
</script>