<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';
let modalActive = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);
</script>
<template>
  
    <button class="button is-primary mx-2" @click="modalActive=true">Open modal</button>
    <button class="button is-warning mx-2" @click="modal2Active=true">Open modal 2</button>
    <button class="button is-danger mx-2" @click="modal3Active=true">Open modal 3</button>
    
<ImgModal :active="modalActive" @close="modalActive = false" url="https://placekittens.com/1280/960?r=1"></ImgModal>
<ImgModal :active="modal2Active" @close="modal2Active = false" url="https://placekittens.com/1280/960?r=2"></ImgModal>
<Modal :active="modal3Active" @close="modal3Active=false">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="https://bulma.io/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://bulma.io/assets/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    </Modal>
</template>