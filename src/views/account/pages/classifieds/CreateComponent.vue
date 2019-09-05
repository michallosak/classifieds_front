<template>
    <div>
        <div class="title-page-account">
            {{title}}
        </div>
        <b-form @submit.prevent="addAnnouncement">
            <b-row class="form-group">
                <b-col xl="7" lg="7">
                    <b-label for="title">
                        <b-input id="title"
                                 placeholder="Title"
                                 name="title"
                                 v-model="dataCreateAdvertisement.title"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="5" lg="5">
                    <label for="category" class="w-100">
                        <select id="category"
                                name="category_id"
                                v-model="dataCreateAdvertisement.category_id"
                                class="custom-select">
                            <option value="" disabled>Select Category</option>
                            <option v-for="c in categories" v-bind:value="c.id">{{c.name}}</option>
                        </select>
                    </label>
                </b-col>
            </b-row>
            <b-form-group>
                <b-label for="body">
                    <b-textarea id="body" name="body"
                                v-model="dataCreateAdvertisement.body"
                                placeholder="Content of the announcement"
                                rows="10"
                                ></b-textarea>
                </b-label>
            </b-form-group>
            <b-row class="form-group">
                <b-col xl="4" lg="4" class="pr-1">
                    <b-label for="location">
                        <b-input id="location"
                                 type="text"
                                 placeholder="Location"
                                 v-model="dataCreateAdvertisement.location"
                                 name="location"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="4" lg="4" class="pl-1 pr-1">
                    <label for="type" class="w-100">
                        <select class="custom-select" id="type"
                                name="type" v-model="dataCreateAdvertisement.type"
                                >
                            <option value="" disabled>Type advertisement</option>
                            <option v-for="t in type" v-bind:value="t.value">{{t.text}}</option>
                        </select>
                    </label>
                </b-col>
                <b-col xl="4" lg="4" class="pl-1">
                    <b-row>
                        <b-col xl="7" lg="7" class="pr-0">
                            <b-label for="price">
                                <b-input id="price"
                                         name="price"
                                         placeholder="Price"
                                         v-model="dataCreateAdvertisement.price"
                                         ></b-input>
                            </b-label>
                        </b-col>
                        <b-col xl="5" lg="5" class="pl-0">
                            <label for="currency" class="w-100">
                                <select id="currency"
                                        name="currency"
                                        v-model="dataCreateAdvertisement.currency"
                                        class="custom-select"
                                        >
                                    <option disabled value="">Currency</option>
                                    <option v-for="c in currency">{{c}}</option>
                                </select>
                            </label>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-form-group>
                <b-button type="submit" variant="success">{{title}}</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "CreateComponent",
        data(){
            return{
                title: 'Add announcement',
                dataCreateAdvertisement: {
                    title: '',
                    category_id: '',
                    body: '',
                    location: '',
                    type: '',
                    price: '',
                    currency: ''
                },
                currency: [
                    'ALL',
                    'AFN',
                    'ARS',
                    'AWG',
                    'AUD',
                    'AZN',
                    'BSD',
                    'BBD',
                    'BDT',
                    'BYR',
                    'BZD',
                    'BMD',
                    'BOB',
                    'BAM',
                    'BWP',
                    'BGN',
                    'BRL',
                    'BND',
                    'KHR',
                    'CAD',
                    'KYD',
                    'CLP',
                    'CNY',
                    'COP',
                    'CRC',
                    'HRK',
                    'CUP',
                    'CZK',
                    'DKK',
                    'DOP',
                    'XCD',
                    'EGP',
                    'SVC',
                    'EEK',
                    'EUR',
                    'FKP',
                    'FJD',
                    'GHC',
                    'GIP',
                    'GTQ',
                    'GGP',
                    'GYD',
                    'HNL',
                    'HKD',
                    'HUF',
                    'ISK',
                    'INR',
                    'IDR',
                    'IRR',
                    'IMP',
                    'ILS',
                    'JMD',
                    'JPY',
                    'JEP',
                    'KZT',
                    'KPW',
                    'KRW',
                    'KGS',
                    'LAK',
                    'LVL',
                    'LBP',
                    'LRD',
                    'LTL',
                    'MKD',
                    'MYR',
                    'MUR',
                    'MXN',
                    'MNT',
                    'MZN',
                    'NAD',
                    'NPR',
                    'ANG',
                    'NZD',
                    'NIO',
                    'NGN',
                    'NOK',
                    'OMR',
                    'PKR',
                    'PAB',
                    'PYG',
                    'PEN',
                    'PHP',
                    'PLN',
                    'QAR',
                    'RON',
                    'RUB',
                    'SHP',
                    'SAR',
                    'RSD',
                    'SCR',
                    'SGD',
                    'SBD',
                    'SOS',
                    'ZAR',
                    'LKR',
                    'SEK',
                    'CHF',
                    'SRD',
                    'SYP',
                    'TWD',
                    'THB',
                    'TTD',
                    'TRY',
                    'TRL',
                    'TVD',
                    'UAH',
                    'GBP',
                    'USD',
                    'UYU' ,
                    'UZS',
                    'VEF',
                    'VND',
                    'YER',
                    'ZWD'
                ],
                type: [
                    {value: 1, text: 'Private'},
                    {value: 2, text: 'Company'}
                ]
            }
        },
        computed: {
            ...mapGetters({
                categories: 'categories',
                create: 'createAD'
            })
        },
        watch:{
            create(){
                this.$router.push('AddedClassifiedsComponent')
            }
        },
        methods: {
            addAnnouncement(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('storeAdvertisement', this.dataCreateAdvertisement)
                    })
                    .catch(() => {
                        //
                    })
            }
        },
        created() {
            this.$store.dispatch('getAllCategories')
        }
    }
</script>
