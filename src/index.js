import './style.scss';

import { createApp } from 'vue';

import App from './App.vue';

import { createMemoryHistory,createWebHashHistory,createWebHistory, createRouter } from 'vue-router';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

let app = createApp(App);
app.use(router);
app.mount('#app');
