<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
let tabTitles =[ 'Pictures', 'Music', 'Videos', 'Documents', 'Games'];
let tabContent = [
    'some cool Picures',
     'some cool Music',
      'some cool Videos',
       'some cool Documents',
        'some cool Games',

]
let tabActive = ref(0);

function setActive(key){
    tabActive.value = key;
}
</script>

<template>
<Tabs :titles="tabTitles" @change="setActive"></Tabs>
<div class="content">
    <h1>{{ tabContent[tabActive] }}</h1>
</div>
</template>