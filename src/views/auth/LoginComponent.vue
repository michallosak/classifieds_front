<template>
    <div class="bg-auth">
        <b-container>
            <b-row class="justify-content-center">
                <b-col xl="4" lg="5">
                    <b-card class="shadow mt-5 bg-transparent-dark">
                        <b-card-header>
                            {{title}}
                        </b-card-header>
                        <b-card-body>
                            <b-form @submit.prevent="login">
                                <b-form-group>
                                    <b-label for="email">
                                        <b-input id="email" type="email" class="input-dark" name="email" placeholder="E-mail" v-model="credentials.email"></b-input>
                                    </b-label>
                                </b-form-group>
                                <b-form-group>
                                    <b-label for="password">
                                        <b-input id="password" type="password" class="input-dark" name="password" placeholder="Hasło" v-model="credentials.password"></b-input>
                                    </b-label>
                                </b-form-group>
                                <b-form-group>
                                    <b-button type="submit" variant="success">{{title}}</b-button>
                                </b-form-group>
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
        name: "LoginComponent",
        data(){
            return{
                title: 'Zaloguj się',
                credentials: {
                    email: '',
                    password: '',
                    error: false
                }
            }
        },
        computed:{
            ...mapGetters({
                logged: 'logged'
            })
        },
        watch:{
            logged(){
                this.$router.push({path: '/'});
                location.reload();
            }
        },
        methods:{
            login(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('loginUser', this.credentials)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>