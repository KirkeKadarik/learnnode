<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let newItem = ref('');
let i = 1;
let items = ref([
  {id: i++, name:'leib',  isDone: true},
  {id: i++, name:'piim,', isDone: false},
  {id: i++, name:'sai', isDone: true},
  {id: i++, name:'juust', isDone: true},
  {id: i++, name:'sink', isDone: false},
  
]);
let code = ref(404);
function addItem(){
  if(newItem.value.trim() !== '') {
  items.value.push({id: i++, name: newItem.value.trim(),  isDone: false});
  }
  newItem.value = '';
}

let doneItems = computed(() => {
  return items.value.filter(item => item.isDone);
});
let todoItems = computed(() => {
  return items.value.filter(item => !item.isDone);
});

</script>
<template>
<div class="content">
    <div class="container">
    <div class="field has-addons">
  <div class="control is-expanded">
    <input v-model="newItem" class="input" type="text" placeholder="Add item" @keydown.enter="addItem">
  </div>
  <div class="control">
    <button class="button is-info" @click="addItem">
      Add item
    </button>
  </div>
  </div>
 
<ItemList :items="items" title="All items"></ItemList>
<ItemList :items="doneItems" title="Done items"></ItemList>
<ItemList :items="toDoItems" title="toDo items"></ItemList>

  <input v-model="code" class="input" type="number" placeholder="error error code">
  <img :src="'https://http.cat/'+ code">
</div>
</div>
</template>