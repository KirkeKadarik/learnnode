<script setup>
import { ref } from 'vue';
import RouterTabs from './components/RouterTabs.vue';

</script>

<template>
 <RouterTabs></RouterTabs>
 <div class="container mt-3">
<div class= "content">

</div>
 </div>
<Suspense>
    <RouterView></RouterView>

    </Suspense>
</template>