<script setup>
import { ref } from 'vue';

</script>

<template>
    <RouterLink class="button is-primary" to="/">ToDo</RouterLink>
    <RouterLink class="button is-primary" to="/modals">Modals</RouterLink>

    <RouterView></RouterView>
</template>