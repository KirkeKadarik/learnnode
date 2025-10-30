<script setup>
defineProps(['disabled', 'building'])
</script>

<template>
    <div @click="$emit('click')" class="box has background-primary-invert mr-3 is-clickable is-unselectable"
        :class="{ 'is-disabled': disabled}">
        <article class="media">
            <div class="media-left">
                <h1 class="is-size-1">{{ building.icon }}</h1>
            </div>
            <div class="media-content">
                <div class="content is-flex is-justify-content-space-between">
                    <div><h1 class="has-text-primary">{{ building.name }}</h1></div>

                   <div> <h1 class="has-text-info">{{ building.count }}</h1></div>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a class="level-item has-text-info" aria-label="reply">
                           🍪 {{ building.price }}</a>
                    </div>
                </nav>
            </div>
        </article>
    </div>
</template>
<style>
.is-disabled {
    cursor: not-allowed !important;
    opacity: 50%;

}
</style>