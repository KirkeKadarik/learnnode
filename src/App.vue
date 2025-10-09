<script setup>
import { ref } from 'vue';
let newItem = ref('');
let items = ref=(['leib', 'piim,', 'sai']);
let code = ref(404);
function addItem(){
  items.value.push(newItem.value);
  newItem.value = '';
}
</script>
<template>
<div class="content">
    <div class="container">
    <div class="field has-addons">
  <div class="control is-expanded">
    <input v-model="message" class="input" type="text" placeholder="Add item">
  </div>
  <div class="control">
    <button class="button is-info" @click="items.push(newItem)">
      Add item
    </button>
  </div>
  </div>
  <h1>{{ newItem }}</h1>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
  <input v-model="code" class="input" type="number" placeholder="error error code">
  <img :src="'https://http.cat/'+ code">
</div>
</div>
</template>