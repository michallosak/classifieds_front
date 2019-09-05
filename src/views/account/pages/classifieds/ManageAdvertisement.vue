<template>
    <b-dropdown id="dropdown-divider" size="sm" style="z-index: 1!important;">
        <b-dropdown-item-button>Edit</b-dropdown-item-button>
        <b-dropdown-item-button @click="trashAd(id)">Delete</b-dropdown-item-button>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button v-if="status === 1" @click="moveArchive">Move to archive</b-dropdown-item-button>
        <b-dropdown-item-button v-else @click="removeFromArchive">Remove from archive</b-dropdown-item-button>
    </b-dropdown>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ManageAdvertisement",
        data() {
            return {
                dataArchive: {
                    id: this.id
                }
            }
        },
        props: {
            id: String,
            status: String
        },
        computed: {
            ...mapGetters({
                delete: 'deleteAD',
                move: 'moveToArchive',
                deleteA: 'deleteArchive'
            })
        },
        watch: {
            delete() {
                this.$store.dispatch('getAddedClassifieds');
                this.$store.dispatch('getClassifiedsArchive');
            },
            move() {
                this.$store.dispatch('getAddedClassifieds');
            },
            deleteA() {
                this.$store.dispatch('getAddedClassifieds');
                this.$store.dispatch('getClassifiedsArchive')
            }
        },
        methods: {
            trashAd(id) {
                this.$store.dispatch('destroyAd', id)
            },
            moveArchive() {
                this.$store.dispatch('moveAdToArchive', this.dataArchive)
            },
            removeFromArchive() {
                this.$store.dispatch('destroyFromArchive', this.dataArchive);
            }
        }
    }
</script>