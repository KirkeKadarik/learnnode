<script setup>
import { ref } from 'vue';
 
let cookies = ref(0);
</script>
 
<template>
    <div class="columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ cookies }} cookies!</h1>
            <div @click="cookies++">
                <img src="https://pngimg.com/d/cookie_PNG13669.png"></img>
            </div>
        </div>
        <div class="column has-background-warning">
            easda
        </div>
        <div class="column has-background-link">
            tegs
        </div>
    </div>
</template>