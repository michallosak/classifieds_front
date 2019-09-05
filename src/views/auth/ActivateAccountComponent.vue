<template>
    <div class="bg-auth">
        <b-container>
            <b-row class="justify-content-center">
                <b-col xl="5" lg="5">
                    <b-card class="bg-transparent-dark mt-5 shadow">
                        <b-card-header>
                            {{title}}
                        </b-card-header>
                        <b-card-body>
                            <b-form @submit.prevent="activateAcc">
                                <b-row class="form-group">
                                    <b-col xl="10" lg="10" class="pr-1">
                                        <b-label for="key">
                                            <b-input id="key" type="text" placeholder="Kod aktywacyjny" class="input-dark" name="key" v-model="dataActivateAccount.key"></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="2" lg="2" class="pl-1">
                                        <b-button v-b-tooltip.hover title="Aktywuj" type="submit" variant="success"><span class="icon icon-right"></span> </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ActivateAccountComponent",
        data(){
            return{
                title: 'Activate account',
                dataActivateAccount:{
                    key: '',
                    error: false
                }
            }
        },
        computed:{
            ...mapGetters({
                activate: 'activate'
            })
        },
        watch:{
            activate(){
                this.$router.push({path: '/'})
            }
        },
        methods:{
            activateAcc(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('activateAccount', this.dataActivateAccount)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>