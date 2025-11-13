<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

import { onMounted, useId, watch } from 'vue';
let {lat, lng, zoom} = defineProps(['lat', 'lng', 'zoom']);
 
let id='map-' + useId();
let map = null;
onMounted(() => {
    map = L.map(id).setView([lat, lng], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.41641, 24.79871]).addTo(map);

    var marker = L.marker([59.43206423753951, 24.557662524639003]).addTo(map);

    var latlngs = [
        [59.43206542893731, 24.55763545196977],
        [59.43181716818522, 24.55763276975735],
        [59.431851270044774, 24.55797072852211],
    ];

    var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    map.fitBounds(polygon.getBounds());
});
 
watch(() => zoom, (zoom, oldZoom) => {
    console.log(zoom, oldZoom);
    map.setZoom(zoom);
});
watch(() => lat, lat => {
    map.panTo([lat, lng]);
});
watch(() => lng, lng => {
    map.panTo([lat, lng]);
});
 
</script>
 
<template>
<div :id="id"></div>
 
</template>
 
<style scoped>
div { height: 80vh; }
</style>