<template>
    <div class="opinion">
        <div class="title-page-account">
            {{title}}
        </div>
        <b-form @submit.prevent="setRating">
            <b-form-group>
                <star-rating v-model="dataRating.rating"
                             :max-rating="10"
                             :star-size="20"
                             text-class="custom-text"
                ></star-rating>
            </b-form-group>
            <b-form-group>
                <b-label for="textarea">
                    <b-textarea id="textarea"
                                placeholder="Opinion"
                                name="opinion"
                                v-model="dataRating.opinion"></b-textarea>
                </b-label>
            </b-form-group>
            <b-form-group>
                <b-button type="submit" variant="success">Publish opinion</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    import StarRating from 'vue-star-rating';
    import {mapGetters} from 'vuex'
    export default {
        name: "SetRating",
        components: {StarRating},
        data(){
            return{
                dataRating: {
                    rating_id: this.rating_id,
                    rating: '',
                    opinion: ''
                },
                title: 'Add rating'
            }
        },
        props: {
            rating_id: String
        },
        computed:{
            ...mapGetters({
                rating: 'rating'
            })
        },
        watch: {
          rating(){
              this.dataRating.rating = null;
              this.dataRating.opinion = null;
              this.$store.dispatch('getReviewsUser', this.$route.params.id);
          }
        },
        methods:{
            setRating(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('addRating', this.dataRating)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>