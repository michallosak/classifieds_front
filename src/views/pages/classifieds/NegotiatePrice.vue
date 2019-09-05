<template>
    <div>
        <div @click="showNegotiatePrice ^= true" class="negotiate cursor">Negotiate price</div>
        <b-form v-show="showNegotiatePrice" @submit.prevent="sendMessage">
            <b-row>
                <b-col xl="10" lg="10" class="pr-0">
                    <b-input placeholder="Your price"
                             type="number"
                             v-model="your_price"
                    ></b-input>
                </b-col>
                <b-col xl="2" lg="2" class="pl-0">
                    <b-button type="submit"
                              variant="success"
                              class="br-0"
                              ><span class="icon-right"></span>
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "NegotiatePrice",
        data(){
            return{
                your_price: '',
                dataSendMessage: {
                    message: '',
                    ad_id: this.id,
                    seller_id: this.user_id
                },
                showNegotiatePrice: false
            }
        },
        props: {
            id: String,
            user_id: String,
            currency: String
        },
        computed:{
            ...mapGetters({
                message: 'message'
            })
        },
        watch: {
            message(){
                this.showNegotiatePrice = false;
                this.your_price = null;
            }
        },
        methods:{
            sendMessage(){
                this.$validator.validateAll()
                    .then(() => {
                        this.dataSendMessage.message = 'Hello, I propose a price of ' + this.your_price + ' ' + this.currency + '. Greetings';
                        this.$store.dispatch('sendUserMessage', this.dataSendMessage)
                    })
            }
        }
    }
</script>

<style scoped>

</style>