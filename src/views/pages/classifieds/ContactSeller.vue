<template>
    <div>
        <b-button class="w-100 br-0" variant="success" v-b-modal.contact>
            Contact
        </b-button>
        <b-modal hide-footer id="contact" title="Contact seller">
            <b-row class="mb-3">
                <b-col v-if="user.contact.phone_priv || user.contact.phone_company" xl="6" lg="6">
                    <b-dropdown id="phone" text="Phone" class="w-100">
                        <b-dropdown-item v-b-tooltip.hover title="Phone user" v-if="user.contact.phone_priv"><span
                                class="icon-user"> {{user.contact.phone_priv}}</span></b-dropdown-item>
                        <b-dropdown-item v-b-tooltip.hover title="Phone company" v-if="user.contact.phone_company"><span
                                class="icon-industry"> {{user.contact.phone_company}}</span></b-dropdown-item>
                    </b-dropdown>
                </b-col>
                <b-col xl="6" lg="6">
                    <b-dropdown id="email" text="Email" class="w-100">
                        <b-dropdown-item v-if="user.contact.email">{{user.contact.email}}</b-dropdown-item>
                        <b-dropdown-item v-else>{{user.email}}</b-dropdown-item>
                        <b-dropdown-item v-if="user.contact.email_two">{{user.contact.email_two}}</b-dropdown-item>
                    </b-dropdown>
                </b-col>
            </b-row>
            <b-form @submit.prevent="sendMessage">
                <b-row class="form-group">
                    <b-col xl="6" lg="6" class="pr-1">
                        <b-label for="name">
                            <b-input id="name"
                                     type="text"
                                     disabled
                                     v-bind:value="user.s.name"
                            ></b-input>
                        </b-label>
                    </b-col>
                    <b-col xl="6" lg="6" class="pl-1">
                        <b-label id="email">
                            <b-input id="email"
                                     type="email"
                                     disabled
                                     v-bind:value="user.email"
                            ></b-input>
                        </b-label>
                    </b-col>
                </b-row>
                <b-form-group>
                    <b-label for="message">
                        <b-textarea id="message"
                                    placeholder="Message"
                                    rows="6"
                                    name="message"
                                    v-model="dataSendMessage.message"
                        ></b-textarea>
                    </b-label>
                </b-form-group>
                <b-form-group>
                    <b-button type="submit" variant="success"
                    >Send message
                    </b-button>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "ContactSeller",
        data() {
            return {
                dataSendMessage: {
                    message: '',
                    ad_id: this.id,
                    seller_id: this.user.id
                }
            }
        },
        props: {
            user: Object,
            id: String
        },
        computed: {
            ...mapGetters({
                message: 'message'
            })
        },
        watch: {
            message() {
                this.$refs['contact'].hide();
                this.dataSendMessage.message = '';
            }
        },
        methods: {
            sendMessage() {
                this.$validator.validateAll()
                    .then(() => {
                        this.$store.dispatch('sendUserMessage', this.dataSendMessage)
                    })
                    .catch(() => {
                        //
                    })
            }
        }
    }
</script>