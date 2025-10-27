<script setup>
import axios from 'axios';
import CharacterCard from './CharacterCard.vue';
import { ref } from 'vue';

let characters = ref([]);
let info = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});

let currentPage = ref(1);
let searchValue = ref('');

async function getCharacters(page) {
    let res = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page,
            name: searchValue.value,
        }
    });
    console.log(res);
    characters.value.push(...res.data.results);
    info.value = res.data.info;
}

await getCharacters(currentPage.value)

let timeout;

async function getPage(page) {
clearTimeout(timeout);
    timeout = setTimeout(async () => {
        currentPage.value = page;
        await getCharacters(currentPage.value);
    }, 1000);
}
document.addEventListener('scroll', function() {
console.log(window.innerHeight, document.body.clientHeight,window.scrollY);
if(window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
    getPage(currentPage.value + 1);
}
});


</script>
<template>

    <div class="field has-addons">
        <div class="control is-expanded">


            <input v-model="searchValue" @input="getPage(1)" class="input" type="text">
        </div>
        <div class="control">
            <button class="button is-info">
                Search
            </button>
        </div>
    </div>


    
    <div class="columns is-multiline">
        <div class="column is-3" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>

        </div>
    </div>
</template>