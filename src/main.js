import { createApp } from 'vue'

import pinia from './pinia'
import router from './router'

import './style.css'
import App from './App.vue'

createApp(App).use(pinia).use(router).mount('#app')
