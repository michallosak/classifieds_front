<template>
    <div class="float-left">
        <span v-if="!isFollowed" @click="followAdd" class="icon-star-empty cursor"></span>
        <span v-else @click="followAdd" class="icon-star cursor"></span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Follow",
        data(){
            return{
                dataFollow: {
                    follow_id: this.id
                },
                isFollowed: ''
            }
        },
        props: {
            id: String,
            follows: Array
        },
        computed: {
            ...mapGetters({
                follow: 'follow',
                user: 'loggedUser'
            })
        },
        watch: {
            follow(){
                this.$store.dispatch('getAdvertisement', this.id)
            }
        },
        methods: {
            followAdd(){
                this.$store.dispatch('setFollow', this.dataFollow);
                this.$store.dispatch('getLoggedUser');
            }
        }
    }
</script>