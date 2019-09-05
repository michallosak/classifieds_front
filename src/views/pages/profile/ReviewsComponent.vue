<template>
    <div>
        <set-rating :rating_id="user_id"/>
        <div class="title-page-account">
            {{title}} ({{reviews.length}})
        </div>
        <div class="reviews">
            <div class="rating" v-for="r in reviews">
                <b-row>
                    <b-col xl="2" lg="2" class="pr-1">
                        <router-link :to="{name: 'ProfileUserComponent', params: {id: r.user.id, name: r.user.s.name}}" class="avatar">
                            <b-img :src="r.user.avatar.src" :alt="r.user.s.name"></b-img>
                        </router-link>
                    </b-col>
                    <b-col xl="10" lg="10" class="pl-1">
                        <div class="header">
                            <router-link :to="{name: 'ProfileUserComponent', params: {id: r.user.id, name: r.user.s.name}}">
                                {{r.user.s.name}} {{r.user.s.last_name}} {{r.user.s.username}}
                            </router-link>
                            <span class="float-right mr-1">
                                {{r.created_at | moment('DD MMM YYYY')}}
                            </span>
                        </div>
                        <div class="content">
                            <stars :rating="r.rating"/>
                            <p>{{r.opinion}}</p>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
    import SetRating from "../../reviews/SetRating";
    import Stars from "../../reviews/Stars";
    export default {
        name: "ReviewsComponent",
        components: {Stars, SetRating},
        data(){
            return{
                title: 'Reviews'
            }
        },
        props:{
            user_id: String,
            reviews: Array
        }
    }
</script>