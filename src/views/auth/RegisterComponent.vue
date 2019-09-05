<template>
    <div class="bg-auth">
        <b-container>
            <b-row class="justify-content-center">
                <b-col xl="7" lg="7">
                    <b-card class="mt-5 shadow-lg">
                        <b-card-header>
                            {{title}}
                        </b-card-header>
                        <b-card-body>
                            <b-form @submit.prevent="addUser">
                                <b-row class="form-group">
                                    <b-col xl="6" lg="6" class="pr-1">
                                        <b-label for="email">
                                            <b-input type="email"
                                                     id="email"
                                                     placeholder="Email"
                                                     v-model="dataRegisterUser.email"

                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="6" lg="6" class="pl-1">
                                        <b-label for="password">
                                            <b-input type="password"
                                                     id="password"
                                                     placeholder="Password"
                                                     v-model="dataRegisterUser.password"

                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                </b-row>
                                <b-row class="form-group">
                                    <b-col xl="5" lg="5" class="pr-1">
                                        <b-label for="name">
                                            <b-input id="name"
                                                     type="text"
                                                     placeholder="Name"

                                                     v-model="dataRegisterUser.name"
                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="7" lg="7" class="pl-1" title="Select sex">
                                        <b-form-radio-group
                                                id="btn-radios-1"
                                                v-model="dataRegisterUser.sex"
                                                :options="sexOptions"
                                                buttons
                                                name="radios-btn-default"
                                        ></b-form-radio-group>
                                    </b-col>
                                </b-row>
                                <b-row class="form-group">
                                    <b-col xl="6" lg="6" class="pr-1">
                                        <b-label for="birthday">
                                            <b-input id="birthday"
                                                     style="color: gray!important;"
                                                     v-model="dataRegisterUser.birthday"
                                                     name="birthday"
                                                     type="date"
                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="6" lg="6" class="pl-1">
                                        <label for="type" class="w-100">
                                            <select id="type" class="custom-select"
                                                    name="type_account"
                                                    v-model="dataRegisterUser.type_account"
                                                    >
                                                <option disabled value="">Select type account</option>
                                                <option v-for="t in type_acc" v-bind:value="t.value">{{t.text}}</option>
                                            </select>
                                        </label>
                                    </b-col>
                                </b-row>
                                <div v-if="dataRegisterUser.type_account === 2">
                                   <b-row class="form-group">
                                       <b-col xl="6" lg="6" class="pr-1">
                                           <b-label for="name_company">
                                               <b-input id="name_company"
                                                        placeholder="Name company"
                                                        name="name_company"
                                                        type="text"

                                                        v-model="dataRegisterUser.name_company"
                                               ></b-input>
                                           </b-label>
                                       </b-col>
                                       <b-col xl="6" lg="6" class="pl-1">
                                           <b-label for="nip">
                                               <b-input id="nip" type="number"
                                                        placeholder="Nip company"
                                                        name="nip_company"
                                                        v-model="dataRegisterUser.nip_company"></b-input>
                                           </b-label>
                                       </b-col>
                                   </b-row>
                                <b-row class="form-group">
                                    <b-col xl="5" lg="5" class="pr-1">
                                        <b-label for="country">
                                            <b-input id="country" placeholder="Country company"
                                                     type="text"
                                                     v-model="dataRegisterUser.country_company"
                                            ></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="7" lg="7" class="pl-1">
                                        <b-label for="address">
                                            <b-input id="address" placeholder="Address company"
                                                     type="text"
                                                     v-model="dataRegisterUser.address_company"
                                            ></b-input>
                                        </b-label>
                                    </b-col>
                                </b-row>
                                <b-row class="form-group">
                                    <b-col xl="4" lg="4" class="pr-1">
                                        <b-label for="post_code">
                                            <b-input id="post_code" type="text"

                                                     placeholder="Post code company"
                                                     name="post_code"
                                                     v-model="dataRegisterUser.post_code_company"
                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                    <b-col xl="8" lg="8" class="pl-1">
                                        <b-label for="city_company">
                                            <b-input id="city_company" type="text"
                                                     placeholder="City company"
                                                     name="city_company"
                                                     v-model="dataRegisterUser.city_company"
                                                     ></b-input>
                                        </b-label>
                                    </b-col>
                                </b-row>
                                </div>
                                <b-form-group>
                                    <b-button type="submit" variant="success">
                                        {{title}}
                                    </b-button>
                                </b-form-group>
                            </b-form>
                        </b-card-body>
                        <b-card-footer>
                            <p class="annotation text-center">
                                By registering on the site, you accept the availability.
                            </p>
                        </b-card-footer>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "RegisterComponent",
        data(){
            return{
                title: 'Zarejestruj się',
                dataRegisterUser: {
                    email: '',
                    name: '',
                    password: '',
                    birthday: '',
                    sex: '',
                    type_account: '',
                    name_company: '',
                    nip_company: '',
                    country_company: '',
                    address_company: '',
                    post_code_company: '',
                    city_company: ''
                },
                sexOptions: [
                    { text: 'Female', value: '1' },
                    { text: 'Male', value: '2' }
                ],
                type_acc: [
                    {text: 'Private account', value: 1},
                    {text: 'Company account', value: 2}
                ]
            }
        },
        computed:{
            ...mapGetters({
                register: 'register'
            })
        },
        watch: {
            register(){
                this.$router.push({path: '/login'})
            }
        },
        methods: {
            addUser(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('registerUser', this.dataRegisterUser)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>