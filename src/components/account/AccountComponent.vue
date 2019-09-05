<template>
    <b-container class="mt-5">
        <b-card>
                <div class="user-header-account">
                    <b-row>
                        <b-col xl="6" lg="6">
                            <div class="avatar cursor" @click="viewAccountPage">
                                <b-img :src="user.avatar.src" :alt="user.s.name"></b-img>
                                <span>{{user.s.name}} <span v-if="user.s.last_name"> {{user.s.last_name}}</span> </span>
                            </div>
                        </b-col>
                        <b-col xl="6" lg="6" class="text-right">
                            <b-button @click="viewAddAdvertisement" variant="warning"><span class="icon-plus-1"> Add an announcement</span></b-button>
                        </b-col>
                    </b-row>
                </div>

                <b-nav small class="mt-2">
                    <b-nav-item-dropdown
                            id="my-nav-dropdown"
                            text="Classifieds"
                            toggle-class="nav-link-custom"
                            center>
                        <b-dropdown-item @click="viewAddAdvertisement">Add</b-dropdown-item>
                        <b-dropdown-item @click="viewAddedClassifieds">Added</b-dropdown-item>
                        <b-dropdown-item @click="viewClassifiedsArchive">Archive</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                            id="my-nav-dropdown"
                            text="Observed"
                            toggle-class="nav-link-custom"
                            center>
                        <b-dropdown-item @click="viewObservedAds">Classifieds</b-dropdown-item>
                        <b-dropdown-item @click="viewObservedUsers">Users</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item @click="viewSettings">Settings</b-nav-item>
                    <b-nav-item @click="viewMessages">Messages</b-nav-item>
                </b-nav>
            <div class="content-account">
                <component :is="currentComponent"/>
            </div>
        </b-card>
    </b-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import BasicAccountComponent from "../../views/account/BasicAccountComponent";
    import CreateComponent from "../../views/account/pages/classifieds/CreateComponent";
    import ClassifiedsComponent from "../../views/account/pages/classifieds/ClassifiedsComponent";
    import ObservedAdsComponent from "../../views/account/pages/classifieds/ObservedAdsComponent";
    import SettingsComponent from "../../views/account/settings/SettingsComponent";
    import MessagesComponent from "../../views/account/messages/MessagesComponent";
    import ObservedUsersComponent from "../../views/account/users/ObservedUsersComponent";
    import ClassifiedsArchiveComponent from "../../views/account/pages/classifieds/ClassifiedsArchiveComponent";

    export default {
        name: "AccountComponent",
        data() {
            return {
                currentComponent: BasicAccountComponent
            }
        },
        computed: {
            ...mapGetters({
                user: 'loggedUser'
            })
        },
        methods: {
            viewAccountPage(){
                this.currentComponent = BasicAccountComponent
            },
            viewAddedClassifieds(){
                this.currentComponent = ClassifiedsComponent
            },
            viewAddAdvertisement(){
                this.currentComponent = CreateComponent
            },
            viewObservedAds(){
                this.currentComponent = ObservedAdsComponent
            },
            viewSettings(){
                this.currentComponent = SettingsComponent
            },
            viewMessages(){
                this.currentComponent = MessagesComponent
            },
            viewObservedUsers(){
                this.currentComponent = ObservedUsersComponent
            },
            viewClassifiedsArchive(){
                this.currentComponent = ClassifiedsArchiveComponent
            }
        },
        created() {
            this.$store.dispatch('getLoggedUser')
        }
    }
</script>

<style scoped>

</style>