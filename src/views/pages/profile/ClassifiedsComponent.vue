<template>
    <div>
        <div class="title-page-account">
            {{title}}
        </div>
        <b-row style="padding: 0 12px;">
            <b-col v-for="ad in classifieds" xl="4" lg="4" class="pr-1 pl-1">
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
                                <follow :id="ad.id"/>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Follow from "../classifieds/Follow";
    export default {
        name: "ClassifiedsComponent",
        components: {Follow},
        data(){
            return{
                title: 'User classifieds'
            }
        },
        props: {
            classifieds: Array
        }
    }
</script>

<style scoped>

</style>