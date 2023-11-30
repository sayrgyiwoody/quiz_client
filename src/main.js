import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store'
import App from './App.vue'

import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    cluster: 'mt1',

    forceTLS: false,
    disableStats: true
   
});






createApp(App).use(store).use(router).mount('#app')


