<template>
    <span>
        <span @click="followUser" class="icon-star-empty cursor"></span>
    </span>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Follow",
        data(){
            return{
                dataFollow: {
                    follow_id: this.user_id
                }
            }
        },
        props: {
            user_id: String
        },
        computed:{
            ...mapGetters({
                follow: 'follow'
            })
        },
        watch:{
            follow(){
                this.$store.dispatch('getAdvertisement', this.$route.params.id)
            }
        },
        methods: {
            followUser(){
                this.$store.dispatch('setFollowUser', this.dataFollow)
            }
        }
    }
</script>