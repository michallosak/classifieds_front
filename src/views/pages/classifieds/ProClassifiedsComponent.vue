<template>
   <div v-if="classifieds.length > 0">
       <div class="title-content-page">
           Ogłoszenia promowane ({{classifieds.length}})
       </div>
       <b-row style="padding: 0 12px;">
           <b-col v-for="ad in classifieds" xl="3" lg="3" class="pr-1 pl-1" v-if="ad.status === 7">
               <div class="classifieds">
                   <div class="photo">
                       <router-link :to="{name: 'AdvertisementComponent', params: {id: 1, title: 2}}">
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
                               <span class="icon-star-empty cursor float-right"></span>
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
    export default {
        name: "ProClassifiedsComponent",
        data(){
            return{
                //
            }
        },
        computed:{
            ...mapGetters({
                classifieds: 'classifiedsPro'
            })
        },
        created() {
            this.$store.dispatch('getClassifiedsPro')
        }
    }
</script>