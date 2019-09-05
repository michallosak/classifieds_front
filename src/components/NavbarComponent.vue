<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">Classifieds</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'HomeComponent'}">Home</b-nav-item>
                    <b-nav-item :to="{name: 'ClassifiedsComponent'}">Classifieds</b-nav-item>
                    <b-nav-item :to="{name: 'ContactComponent'}">Contact</b-nav-item>
                </b-navbar-nav>
                <span v-if="!$store.getters.logged">
                    <router-link :to="{name: 'LoginComponent'}" class="ml-4 mr-1 btn btn-success">Login</router-link>
                    <router-link :to="{name: 'RegisterComponent'}" class="btn btn-success">Register</router-link>
                </span>

                <b-nav-item-dropdown v-if="$store.getters.logged" right>
                    <!-- Using 'button-content' slot -->
                    <template slot="button-content">Account</template>
                    <b-dropdown-item :to="{name: 'AccountComponent'}">Profile</b-dropdown-item>
                    <b-dropdown-item @click="LOGOUT">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "NavbarComponent",
        data(){
            return{
                //
            }
        },
        computed:{
            ...mapGetters({
                logged: 'logged'
            })
        },
        watch: {
            logged(){
                this.$router.push({path: '/'})
            }
        },
        methods: {
            LOGOUT(){
                this.$store.dispatch('logoutUser')
            }
        }
    }
</script>