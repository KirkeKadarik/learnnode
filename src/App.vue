<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';

</script>

<template>
 <RouterTabs></RouterTabs>
<Suspense>
    <RouterView></RouterView>
    </Suspense>
</template>