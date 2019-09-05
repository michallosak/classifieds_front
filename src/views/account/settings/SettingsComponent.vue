<template>
    <div>
        <b-dropdown size="sm" text="Settings">
            <b-dropdown-item-button @click="viewBasicSettings">Basic</b-dropdown-item-button>
            <b-dropdown-item-button @click="viewContactSettings">Contact</b-dropdown-item-button>
        </b-dropdown>
        <component :is="currentComponent" class="mt-2"/>
    </div>
</template>

<script>

    import BasicSettingsComponent from "./BasicSettingsComponent";
    import ContactSettingsComponent from "./ContactSettingsComponent";

    export default {
        name: "SettingsComponent",
        data(){
            return{
                title: 'Settings',
                currentComponent: BasicSettingsComponent
            }
        },
        methods: {
            viewBasicSettings(){
                this.currentComponent = BasicSettingsComponent
            },
            viewContactSettings(){
                this.currentComponent = ContactSettingsComponent
            }
        }
    }
</script>
