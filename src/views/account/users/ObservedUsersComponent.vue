<template>
    <div>
        <div class="title-page-account">
            {{title}} ({{users.length}})
        </div>
        <b-row style="padding: 0 12px;">
            <b-col v-for="user in users" xl="3" lg="3" class="pr-1 pl-1">
                <div class="classifieds">
                    <div class="photo">
                        <router-link :to="{name: 'ProfileUserComponent', params: {id: user.users.id, name: user.users.s.name}}">
                            <b-img :src="user.users.avatar.src" :alt="user.users.s.name"></b-img>
                        </router-link>
                    </div>
                    <div class="title">
                        <router-link :to="{name: 'ProfileUserComponent', params: {id: user.users.id, name: user.users.s.name}}">
                            {{user.users.s.name}} <span v-if="user.users.s.last_name">{{user.users.s.last_name}}</span>
                        </router-link>
                    </div>
                    <div class="footer">
                        <b-row>
                            <b-col xl="12" lg="12" class="pr-1">
                                <div>
                                    <span class="icon-star cursor"></span>
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
    export default {
        name: "ObservedUsersComponent",
        data(){
            return{
                title: 'Observed users'
            }
        },
        computed:{
            ...mapGetters({
                users: 'observedUsers'
            })
        },
        created() {
            this.$store.dispatch('getObservedUsers')
        }
    }
</script>

<style scoped>

</style>