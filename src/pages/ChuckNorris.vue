<script setup>
import { ref } from 'vue';

let res =  await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
console.log(data);

let joke = ref('');
joke.value = data.value;


try{
res = await fetch('https://xkcd.com/');
console.log(res);
} catch(err){
    console.log(err);
};

</script>


<template>
<h1> {{ joke }} </h1>
</template>