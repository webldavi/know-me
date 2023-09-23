import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
