<script setup>
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);


// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");


// Connection opened
socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    messages.value.push(event.data);
});

function send() {
    socket.send(message.value);
    message.value = '';
}

</script>

<template>
    <div class="field has-addons">
        <div class="control is-expanded">
            <input v-model="message" class="input" type="text" placeholder="Message" @keydown.enter="send">
        </div>
        <div class="control">
            <button class="button is-info" @click="send">
                Send
            </button>
        </div>
    </div>
    <div class="notification is-link is-light" v-for="msg in messages">
        {{ msg }}
    </div>

</template>