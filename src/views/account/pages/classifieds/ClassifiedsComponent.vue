<template>
    <div>
        <div class="title-page-account">
            Added classifieds ({{classifieds.length}})
        </div>
        <b-row style="padding: 0 12px;">
            <b-col v-for="ad in classifieds" xl="3" lg="3" class="pr-1 pl-1">
                <div class="classifieds position-relative">
                    <div class="position-absolute">
                        <manage-advertisement :id="ad.id" :status="ad.status"/>
                    </div>
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
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ManageAdvertisement from "./ManageAdvertisement";
    export default {
        name: "AddedClassifiedsComponent",
        components: {ManageAdvertisement},
        data(){
            return{
                //
            }
        },
        computed: {
            ...mapGetters({
                classifieds: 'addedClassifieds'
            })
        },
        created() {
            this.$store.dispatch('getAddedClassifieds')
        }
    }
</script>