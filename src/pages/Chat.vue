<script setup>
import { ref } from 'vue';

let message = ref('');
let messages = ref([]);
let name = ref('');
let nameSet = ref(false);

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {

});

// Listen for messages
socket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
    let data = JSON.parse(event.data);
    if (data.type === 'message') {
        messages.value.push(data);
    }
});

function send() {
    socket.send(JSON.stringify({ type: 'message', value: message.value, name: name.value, isMe: false }));
    messages.value.push({ type: 'message', value: message.value, name: name.value, isMe: true })
    message.value = '';
}

</script>

<template>
    <div v-if="nameSet">
        <div v-if="name" class="field has-addons">
            <div class="control is-expanded">
                <input v-model="message" class="input" type="text" placeholder="Message" @keydown.enter="send">
            </div>
            <div class="control">
                <button class="button is-info" @click="send">
                    Send
                </button>
            </div>
        </div>
        <div class="fixed-grid has-2-cells">
            <div class="grid" v-for="msg in messages">
                <!-- Not me message -->
                <div v-if="!msg.isMe" class="notification is-light cell is-link is-col-start-1">
                    <p>{{ msg.value }}</p>
                    <b>{{ msg.name }}</b>
                </div>
                <div v-if="!msg.isMe" class="cell is-col-start-2">
                </div>


                <div v-if="msg.isMe" class=" cell  is-col-start-1">
                </div>
                <div v-if="msg.isMe" class="notification is-light is-primary cell is-col-start-2">
                    <p>{{ msg.value }}</p>
                    <b>{{ msg.name }}</b>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="field has-addons">
        <div class="control is-expanded">
            <input v-model="name" class="input" type="text" placeholder="Name" @keydown.enter="nameSet = true">
        </div>
        <div class="control">
            <button class="button is-info" @click="nameSet = true">
                Join
            </button>
        </div>
    </div>
</template>