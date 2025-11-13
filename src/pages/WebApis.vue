<script setup>
import { computed, onMounted, ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';

function vibrate() {
    navigator.vibrate(200);
}
function Starwars() {
    navigator.vibrate([500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]);
}
function speak() {
    const utterThis = new SpeechSynthesisUtterance('hello world');
    utterThis.voice = voices.value[selectedVoiceKey.value]
    window.speechSynthesis.speak(utterThis);
}
let voices = ref([]);
function setVoices() {
    voices.value = window.speechSynthesis.getVoices();
}

let selectedVoiceKey = ref(0);
let coords = ref({latitude: 0, longitude: 0});
function setCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
  coords.value = position.coords;
});
}
onMounted (() => {
     setCoords();
    setInterval(() =>{
        setCoords();
    }, 30_000)
});

</script>

<template>

    <button class="button is-primary" @click="vibrate">Vibrate</button>
    <button class="button is-warning" @click="vibrate">Starwars</button>
    <div class="field has-addons mt-3">
        <div class="control">
            <div class="select">
                <select>
                    <option v-for="(voice, key) in voices" :value="key" >{{ voice.name }}</option>

                </select>
            </div>
        </div>
        <div class="control is-expanded">
            <input class="input" v-model=text></input>
        </div>
    </div>

    <div class="control">
        <button class="button is-primary" @click="speak">Speak</button>
    </div>
    <Leaflet :lat="coords.latitude" :lng="coords.longitude" :zoom="18" ></Leaflet>
</template>