<script setup>
import { ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';
 
let zoom = ref(19);
let coords = ref({
    lat: 59.42690,
    lng: 24.74344,
});
 
</script>
 
<template>
    <div>
        <input v-model="zoom" type="range" max="19" min="1" step="1">
        {{ zoom }}
        <button class="button is-primary" @click="coords={lat: 59.41641, lng: 24.79871}">Go to Airport</button>
    </div>
     <div>
        <input v-model="zoom" type="range" max="19" min="1" step="1">
        {{ zoom }}
        <button class="button is-secondary" @click="coords={lat: 59.43202604374753, lng: 24.55770543997852}">Go to Home</button>
    </div>
    <Leaflet :lat="coords.lat" :lng="coords.lng" :zoom="zoom"></Leaflet>
    <Leaflet :lat="12.397" :lng="98.50" :zoom="10"></Leaflet>
</template>