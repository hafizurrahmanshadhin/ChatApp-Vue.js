import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import Pusher from 'pusher-js';
window.Pusher = Pusher;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

createApp(App).mount('#app')
