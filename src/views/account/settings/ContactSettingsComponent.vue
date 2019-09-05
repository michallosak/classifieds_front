<template>
    <div>
        <div class="title-page-account">
            {{title}}
        </div>
        <div class="title-page-account">
            - User contact
        </div>
        <b-form @submit.prevent="updateContactData">
            <b-row class="form-group">
                <b-col xl="4" lg="4" class="pr-1">
                    <b-label for="email">
                        <b-input id="email" name="email"
                                 v-model="dataEditContact.email"
                                 placeholder="E-mail"
                                 type="email"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="4" lg="4" class="pl-1 pr-1">
                    <b-label for="email_two">
                        <b-input id="email_two" name="email_two"
                                 v-model="dataEditContact.email_two"
                                 placeholder="Second E-mail"
                                 type="email"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="4" lg="4" class="pl-1">
                    <b-label for="phone_priv">
                        <b-input id="phone_priv" name="phone_priv"
                                 v-model="dataEditContact.phone_priv"
                                 placeholder="Phone"
                                 type="text"
                                 ></b-input>
                    </b-label>
                </b-col>
            </b-row>
            <b-row class="form-group">
                <b-col xl="4" lg="4" class="pr-1">
                    <b-label for="country">
                        <b-input id="country" type="text"
                                 name="country" placeholder="Country"
                                 v-model="dataEditContact.country"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="3" lg="3" class="pl-1 pr-1">
                    <b-label for="post_code">
                        <b-input id="post_code"
                                 type="text" name="post_code"
                                 v-model="dataEditContact.post_code"
                                 placeholder="Post code"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="5" lg="5" class="pl-1">
                    <b-label for="city">
                        <b-input id="city" name="city"
                                 placeholder="City"
                                 type="text"
                                 v-model="dataEditContact.city"
                                 ></b-input>
                    </b-label>
                </b-col>
            </b-row>
            <b-row class="form-group">
                <b-col xl="8" lg="8" class="pr-1">
                    <b-label for="street">
                        <b-input id="street" type="text"
                                 name="street" placeholder="Street"
                                 v-model="dataEditContact.street"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="2" lg="2" class="pr-0 pl-1">
                    <b-label for="number_local">
                        <b-input class="br-0" id="number_local"
                                 name="number_local" type="text"
                                 placeholder="Number local"
                                 v-model="dataEditContact.number_local"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="2" lg="2" class="pl-0">
                    <b-label for="number_home">
                        <b-input id="number_home" class="br-0"
                                 name="numer_home" type="text"
                                 v-model="dataEditContact.number_home"
                                 placeholder="Number home"
                                 ></b-input>
                    </b-label>
                </b-col>
            </b-row>
            <b-form-group>
                <b-row>
                    <b-col v-if="user.s.type_account === 2" xl="4" lg="4">
                        <b-label for="phone_company">
                            <b-input id="phone_company"
                                     type="text" name="phone_company"
                                     v-model="dataEditContact.phone_company"
                                     placeholder="Phone company"
                            ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="3" lg="3" >
                        <b-button type="submit" variant="success" class="w-100">
                            Edit contact user
                        </b-button>
                    </b-col>
                </b-row>
            </b-form-group>
        </b-form>
        <div v-if="user.s.type_account === 2" class="title-page-account">
            - Company contact
        </div>
        <b-form v-if="user.s.type_account === 2" @submit.prevent="updateCompanyContact">
            <b-row class="form-group">
                <b-col xl="5" lg="5" class="pr-1">
                    <b-label for="country_c">
                        <b-input id="country_c" type="text"
                                 v-model="dataEditContactCompany.country_company"
                                 placeholder="Country Company"
                                 name="country_company"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="7" lg="7" class="pl-1">
                    <b-label for="address_c">
                        <b-input id="address_c" type="text"
                                 v-model="dataEditContactCompany.address_company"
                                 placeholder="Address company"
                                 name="address_company"
                                 ></b-input>
                    </b-label>
                </b-col>
            </b-row>
            <b-row class="form-group">
                <b-col xl="4" lg="4" class="pr-1">
                    <b-label for="post_code_c">
                        <b-input id="post_code_c" type="text"
                                 placeholder="Post code company"
                                 name="post_code_comapny"
                                 v-model="dataEditContactCompany.post_code_company"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="5" lg="5" class="pl-1 pr-1">
                    <b-label for="city_c">
                        <b-input id="city_c" type="text" placeholder="City company"
                                 name="city_company"
                                 v-model="dataEditContactCompany.city_company"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="3" lg="3" class="pl-1">
                    <b-button type="submit" variant="success" class="w-100">
                        Edit contact company
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ContactSettingsComponent",
        data(){
            return{
                title: 'Contact settings',
                dataEditContact: {
                    email: '',
                    email_two: '',
                    phone_priv: '',
                    phone_company: '',
                    city: '',
                    post_code: '',
                    country: '',
                    street: '',
                    number_local: '',
                    number_home: ''
                },
                dataEditContactCompany: {
                    address_company: '',
                    city_company: '',
                    country_company: '',
                    post_code_company: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                user: 'loggedUser'
            })
        },
        watch: {
            user(){
                //
            }
        },
        mounted(){
            this.dataEditContact.email = this.user.email;
            this.dataEditContact.phone_company = this.user.contact.phone_company;
            this.dataEditContact.number_home = this.user.contact.number_home;
            this.dataEditContact.number_local = this.user.contact.number_local;
            this.dataEditContact.street = this.user.contact.street;
            this.dataEditContact.city = this.user.contact.city;
            this.dataEditContact.phone_priv = this.user.contact.phone_priv;
            this.dataEditContact.email_two = this.user.contact.email_two;
            this.dataEditContact.country = this.user.contact.country;
            this.dataEditContact.post_code = this.user.contact.post_code;
            this.dataEditContactCompany.city_company = this.user.company.city;
            this.dataEditContactCompany.post_code_company = this.user.company.post_code;
            this.dataEditContactCompany.address_company = this.user.company.address;
            this.dataEditContactCompany.country_company = this.user.company.country;
        },
        methods: {
            updateContactData(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('putContactUser', this.dataEditContact)
                    })
                    .catch(() => {
                        //
                    })
            },
            updateCompanyContact(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('putContactCompany', this.dataEditContactCompany)
                    })
                    .catch(() => {
                        //
                    })
            }
        },
        created() {
            this.$store.dispatch('getLoggedUser')
        }
    }
</script>