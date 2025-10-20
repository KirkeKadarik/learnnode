<script setup>
let res =  await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
console.log(data);



</script>


<template>

</template>