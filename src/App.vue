<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';

let tabTitles =[ 'ToDo', 'Modals'];
let tabContent = [
    ToDo,
    Modals,

];
let tabActive = ref(0);

function setActive(key){
    tabActive.value = key;
}
</script>

<template>
<Tabs :titles="tabTitles" @change="setActive"></Tabs>
<component :is="tabContent[tabActive]"></component>
</template>