<template>
    <div class="shadow p-1 sidebar-ad">

            <contact-seller :user="user" :id="id"/>

        <div class="seller">
            <div class="avatar">
                <div class="follow">
                    <follow-user :user_id="user.id"/>
                </div>
                <b-img :src="user.avatar.src" :alt="user.s.name"></b-img>
            </div>
            <div class="name">
                <span v-if="user.s.type_account === 1">
                    <span v-if="user.s.username">
                    {{user.s.username}}
                </span>
                <span v-else>
                    {{user.s.name}}
                <span v-if="user.s.last_name">{{user.s.last_name}}</span>
                </span>
                </span>
                <span v-else>
                    <router-link :to="{name: 'ProfileUserComponent', params: {id: user.id, name: user.s.name}}">{{user.company.name}}</router-link>
                </span>
            </div>
            <div class="created">User since {{user.created_at | moment('MMM YYYY')}}</div>
            <div v-if="user.s.type_account === 2" class="type_acc">Company account</div>
            <router-link :to="{name: 'ProfileUserComponent', params: {id: user.id, name: user.s.name}}">User's ads</router-link>
        </div>
        <div class="ad">
            <div class="title">Advertisement</div>
            <b-row>
                <b-col md="9">
                    <follow :id="id" :follows="follow"/> <span class="float-left">{{follow.length}}</span>
                </b-col>
                <b-col md="3" class="text-right">
                    <span class="icon-flag color-r"></span>
                </b-col>
            </b-row>
            <b-row>
                <b-col xl="12" lg="12" md="12" sm="12">
                    <div class="type_acc" v-if="type === 1">
                        Private advertisement
                    </div>
                    <div class="type_acc" v-else>
                        Advertisement from the company
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Follow from "./Follow";
    import ContactSeller from "./ContactSeller";
    import FollowUser from "../../account/users/Follow";
    export default {
        name: "Sidebar",
        components: {ContactSeller, Follow, FollowUser},
        data(){
            return{
                //
            }
        },
        props: {
            user: Object,
            type: String,
            id: String,
            follow: Array
        }
    }
</script>

<style scoped>

</style>