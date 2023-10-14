import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './routes/Home.vue'
import Contact from './routes/Contact.vue'
import { createPinia } from 'pinia'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import * as VueRouter from 'vue-router'
AOS.init();


const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/contact', component: Contact
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
  })

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
