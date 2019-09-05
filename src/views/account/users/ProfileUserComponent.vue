<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col xl="10" lg="10">
                <b-card class="shadow profile mt-5">
                    <div class="header">
                        <b-row>
                            <b-col xl="2" lg="2" class="p-0">
                                <div class="avatar">
                                    <b-img :src="user.avatar.src" :alt="user.s.name"></b-img>
                                </div>
                            </b-col>
                            <b-col xl="10" lg="10">
                                <div class="name">
                                    {{user.s.name}} <span v-if="user.s.last_name">{{user.s.last_name}}</span>
                                    <span v-if="user.s.username"> ({{user.s.username}})</span>
                                </div>
                                <div class="statistics">
                                    <b-row class="p-0 mt-1">
                                        <b-col xl="6" lg="6">
                                            <div>Classifieds: {{user.classifieds.length}}</div>
                                            <div>Reviews: {{reviews.length}}</div>
                                            <div>User since {{user.created_at | moment('DD MMM YYYY')}}</div>
                                        </b-col>
                                        <b-col xl="6" lg="6" class="text-right type_acc">
                                            <div v-if="user.s.type_account === 1">Private account</div>
                                            <div v-else>Company account</div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="content">
                        <div>
                            <b-nav tabs>
                                <b-nav-item active @click="viewProfile">{{user.s.name}}</b-nav-item>
                                <b-nav-item @click="viewClassifieds">Classifieds ({{user.classifieds.length}})</b-nav-item>
                                <b-nav-item @click="viewReviews">Reviews ({{reviews.length}})</b-nav-item>
                            </b-nav>
                        </div>
                        <component :is="currentComponent" :classifieds="user.classifieds" :user_id="user.id" :reviews="reviews"/>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ProfileComponent from "../../pages/profile/ProfileComponent";
    import ClassifiedsComponent from "../../pages/profile/ClassifiedsComponent";
    import ReviewsComponent from "../../pages/profile/ReviewsComponent";
    export default {
        name: "ProfileUserComponent",
        data(){
            return{
                title: 'Profile User',
                currentComponent: ProfileComponent
            }
        },
        computed: {
            ...mapGetters({
                user: 'profile',
                reviews: 'reviewsUser'
            })
        },
        methods:{
            viewProfile(){
                this.currentComponent = ProfileComponent
            },
            viewClassifieds(){
                this.currentComponent = ClassifiedsComponent
            },
            viewReviews(){
                this.currentComponent = ReviewsComponent
            }
        },
        created() {
            this.$store.dispatch('getProfile', this.$route.params.id);
            document.title = this.title;
            this.$store.dispatch('getReviewsUser', this.$route.params.id);
        }
    }
</script>