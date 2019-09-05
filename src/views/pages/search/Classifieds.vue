<template>
    
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Classifieds",
        data(){
            return{
                dataSearch:{
                    title: '',
                    category_id: '',
                    location: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                classifieds: 'searchClassifieds'
            })
        },
        watch: {
            classifieds(){

            }
        },
        methods:{
            search(){
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('getSearchClassifieds', this.dataSearch)
                    }).catch(() => {
                        //
                })
            }
        }
    }
</script>