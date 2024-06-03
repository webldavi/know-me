import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './routes/Home.vue'

import { createPinia } from 'pinia'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import * as VueRouter from 'vue-router'
import Projects from './routes/Projects.vue';
import Blog from './routes/Blog.vue';
import Techs from './routes/Techs.vue';

import { inject } from '@vercel/analytics';
import Links from './routes/Links.vue'
 
inject()
AOS.init();


const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/projects', component: Projects
    },
    {
        path: '/techs', component: Techs
    },
    {
        path: '/links', component: Links
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
  })

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
