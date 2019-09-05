<template>
    <div class="search-home">
        <b-form @submit.prevent="searchClassifieds">
            <b-row>
                <b-col xl="3" lg="3">
                    <b-label for="title">
                        <b-input id="title"
                                 placeholder="Title"
                                 name="title"
                                 v-model="dataSearch.title"
                                 size="lg"
                                 class="input-top-home"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="3" lg="3">
                    <label for="category" class="w-100">
                        <select id="category" name="category_id"
                                v-model="dataSearch.category_id"
                                class="form-control input-top-home"
                                size="lg">
                            <option value="">Select Category</option>
                            <option v-for="c in categories" v-bind:value="c.id">
                                {{c.name}}
                            </option>
                        </select>
                    </label>
                </b-col>
                <b-col xl="3" lg="3">
                    <b-label for="location">
                        <b-input id="location"
                                 placeholder="Location"
                                 name="location"
                                 v-model="dataSearch.location"
                                 size="lg"
                                 class="input-top-home"
                                 ></b-input>
                    </b-label>
                </b-col>
                <b-col xl="3" lg="3">
                    <b-button class="w-100"
                             variant="primary"
                             type="submit"
                              size="lg"
                             ><span class="icon-search-1"> Search</span></b-button>
                </b-col>
            </b-row>
        </b-form>
        <div class="search-classifieds">
            <div class="title-page-account">
                Found ads ({{classifieds.length}})
            </div>
            <b-row style="padding: 0 12px;">
                <b-col v-for="ad in classifieds" xl="3" lg="3" class="pr-1 pl-1">
                    <div class="classifieds">
                        <div class="photo">
                            <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.id, title: ad.title}}">
                                <b-img :src="ad.photos[0].href" :alt="ad.title"></b-img>
                            </router-link>
                        </div>
                        <div class="title">
                            <router-link :to="{name: 'AdvertisementComponent', params: {id: ad.id, title: ad.title}}">
                                {{ad.title}}
                            </router-link>
                        </div>
                        <div class="footer">
                            <b-row>
                                <b-col xl="10" lg="10" class="pr-1">
                                    <div class="price">
                                        {{ad.price.price}} {{ad.price.currency}}
                                    </div>
                                </b-col>
                                <b-col xl="2" lg="2" class="pl-1">
                                    <follow :id="ad.id" :follows="ad.follow"/>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "HomeSearch",
        data(){
            return{
                dataSearch: {
                    title: '',
                    category_id: '',
                    location: '',
                    error: false
                }
            }
        },
        computed:{
            ...mapGetters({
                categories: 'categories',
                classifieds: 'foundClassifieds'
            })
        },
        watch:{
            //
        },
        methods:{
            searchClassifieds(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('getSearchClassifieds', this.dataSearch)
                    })
                    .catch(() => {
                        //
                    })
            }
        },
        created() {
            this.$store.dispatch('getAllCategories');
        }
    }
</script>