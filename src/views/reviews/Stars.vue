<template>
    <div class="stars">
        <div v-if="rating === 1">
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 2">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 3">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 4">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 5">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 6">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 7">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 8">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else-if="rating === 9">
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
        <div v-else>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <b> {{rating}}/10</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stars",
        data(){
            return{
                //
            }
        },
        props:{
            rating: String
        }
    }
</script>