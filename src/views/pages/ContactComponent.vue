<template>
    <div>
        <div class="bg-top-classifieds">
            <b-container>
                <div class="top-title-page">
                    <h1>{{title}}</h1>
                </div>
            </b-container>
        </div>
        <b-container class="mt-5">
            <div class="title-page-account">
                Contact us
            </div>
            <b-form @submit.prevent="sendMessageUs">
                <b-row class="form-group">
                    <b-col xl="6" lg="6" class="pr-1">
                        <b-label for="name">
                            <b-input id="name"
                                     placeholder="Name"
                                     v-model="dataContactUs.name"
                                     type="text" name="name"
                                     ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="6" lg="6" class="pl-1">
                        <b-label for="email">
                            <b-input id="email" type="email"
                                     placeholder="E-mail"
                                     name="email"
                                     v-model="dataContactUs.email"
                                     ></b-input>
                        </b-label>
                    </b-col>
                </b-row>
                <b-form-group>
                    <b-label for="message">
                        <b-textarea id="message" placeholder="Message"
                                    name="message"
                                    v-model="dataContactUs.message"
                                    rows="5"
                                    ></b-textarea>
                    </b-label>
                </b-form-group>
                <b-form-group>
                    <b-button type="submit" variant="success"
                              >Send</b-button>
                </b-form-group>
            </b-form>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ContactComponent",
        data() {
            return {
                title: 'Contact',
                dataContactUs: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        },
        computed: {
            ...mapGetters({

            })
        },
        methods:{
            sendMessageUs(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('contactSupport', this.dataContactUs)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>