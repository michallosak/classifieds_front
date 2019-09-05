<template>
    <div>
        <div class="title-page-account">
            {{title}}
        </div>
        <b-form @submit.prevent="updateBasicData">
            <b-row class="form-group">
                <b-col xl="6" lg="6">
                    <b-label for="name">
                        <b-input id="name"
                                 placeholder="Name"
                                 v-model="dataEditBasic.name"
                                 type="text"
                                 name="name"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="6" lg="6">
                    <b-label for="last_name">
                        <b-input id="last_name"
                                 type="text"
                                 placeholder="Last name"
                                 name="last_name"
                                 v-model="dataEditBasic.last_name"
                                 ></b-input>
                    </b-label>
                </b-col>
            </b-row>
            <b-row class="form-group">
                <b-col xl="4" lg="4">
                    <b-label for="username">
                        <b-input id="username"
                                 type="text"
                                 placeholder="Username"
                                 name="username"
                                 v-model="dataEditBasic.username"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="4" lg="4">
                    <label for="sex" class="w-100">
                        <select id="sex" class="custom-select"
                                name="sex" v-model="dataEditBasic.sex">
                            <option disabled value="">Select sex</option>
                            <option v-for="s in sex" v-bind:value="s.value">{{s.text}}</option>
                        </select>
                    </label>
                </b-col>
                <b-col xl="4" lg="4">
                    <label for="type" class="w-100">
                        <select id="type" class="custom-select"
                                name="type_account" v-model="dataEditBasic.type_account">
                            <option disabled value="">Select type account</option>
                            <option v-for="t in type_acc" v-bind:value="t.value">{{t.text}}</option>
                        </select>
                    </label>
                </b-col>
            </b-row>
            <div v-if="dataEditBasic.type_account === 2">
                <b-row class="form-group">
                    <b-col xl="6" lg="6" class="pr-1">
                        <b-label for="name_company">
                            <b-input id="name_company"
                                     name="name_company"
                                     v-model="dataEditBasic.name_company"
                                     placeholder="Name company"
                                     type="text"
                            ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="6" lg="6" class="pl-1">
                        <b-label for="nip_company">
                            <b-input id="nip_company"
                                     name="nip_company"
                                     v-model="dataEditBasic.nip_company"
                                     placeholder="Nip company"
                                     type="number"
                            ></b-input>
                        </b-label>
                    </b-col>
                </b-row>
                <b-row class="form-group">
                    <b-col xl="5" lg="5" class="pr-1">
                        <b-label for="country_company">
                            <b-input id="country_company"
                                     type="text" v-model="dataEditBasic.country_company"
                                     placeholder="Country company"
                                     name="country_company"
                            ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="7" lg="7" class="pl-1">
                        <b-label for="address">
                            <b-input id="address" type="text"
                                     v-model="dataEditBasic.address_company"
                                     placeholder="Address company"
                                     name="address_company"
                            ></b-input>
                        </b-label>
                    </b-col>
                </b-row>
                <b-row class="form-group">
                    <b-col xl="4" lg="4" class="pr-1">
                        <b-label for="post_code">
                            <b-input id="post_code" type="text"
                                     v-model="dataEditBasic.post_code_company"
                                     placeholder="Post code company"
                                     name="post_code_company"
                            ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="8" lg="8" class="pl-1">
                        <b-label for="city_company">
                            <b-input id="city_company" type="text"
                                     placeholder="City company"
                                     v-model="dataEditBasic.city_company"
                                     name="city_company"
                            ></b-input>
                        </b-label>
                    </b-col>
                </b-row>
            </div>
            <b-form-group>
                <b-button type="submit" variant="success">
                    Edit
                </b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "BasicSettingsComponent",
        data(){
            return{
                title: 'Basic settings',
                dataEditBasic: {
                    name: '',
                    last_name: '',
                    username: '',
                    sex: '',
                    type_account: '',
                    name_company: '',
                    nip_company: '',
                    country_company: '',
                    address_company: '',
                    post_code_company: '',
                    city_company: ''
                },
                sex: [
                    {value: 1, text: 'Female'},
                    {value: 2, text: 'Male'}
                ],
                type_acc: [
                    {value: 1, text: 'Private account'},
                    {value: 2, text: 'Company account'}
                ]
            }
        },
        computed: {
            ...mapGetters({
                user: 'loggedUser',
                basicData: 'editBasicData'
            })
        },
        mounted(){
            this.dataEditBasic.name = this.user.s.name;
            this.dataEditBasic.last_name = this.user.s.last_name;
            this.dataEditBasic.username = this.user.s.username;
            this.dataEditBasic.sex = this.user.s.sex;
            this.dataEditBasic.type_account = this.user.s.type_account;
            this.dataEditBasic.name_company = this.user.company.name;
            this.dataEditBasic.address_company = this.user.company.address;
            this.dataEditBasic.post_code_company = this.user.company.post_code;
            this.dataEditBasic.city_company = this.user.company.city;
            this.dataEditBasic.nip_company = this.user.company.nip;
            this.dataEditBasic.country_company = this.user.company.country;
        },
        watch: {
            editBasicData(){
                this.$store.dispatch('getLoggedUser')
            }
        },
        methods: {
            updateBasicData(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('putBasicData', this.dataEditBasic)
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