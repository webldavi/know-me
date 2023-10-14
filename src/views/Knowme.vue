<template>
    <section class="knowmeContainer">
        <div class="profile" data-aos="fade-right" data-aos-duration="800">
            <img src="../assets/photo.jpg" alt="Luís Daví Rebouças | Foto de perfil"/>
            <h1 class="text-2xl font-bold">Luís Daví Rebouças</h1>
            <p class="font-bold text text-lg opacity-70">Desenvolvedor Front-end Jr.</p>
            <div class="links">
                <a v-for="link in links" :key="link.id"
                :class="{'text-white hover:text-zinc-800 hover:bg-white': themeStore.getTheme,
                 'text-zinc-800 hover:text-white hover:bg-zinc-800': !themeStore.getTheme}" 
                :aria-label="link.desc" :title="link.desc" target="_blank" :href="link.url">
                    <component :is="link.icon" alt="awdawd"></component>
                </a>
            </div>
        </div>
        <div class="about" data-aos="fade-left" data-aos-duration="800">
            <h1 class="text-2xl lg:text-4xl font-bold">Sobre mim</h1>
            <p class="text-sm md:text-base lg:text-lg xl:text-xl opacity-70">
                Oi, meu nome é Luís Daví, e aos meus 19 anos, sou completamente apaixonado por tecnologia. Desde que me lembro, fui cativado pelo mundo da inovação e do progresso tecnológico. É incrível como a tecnologia está constantemente mudando e moldando o nosso mundo, e eu sinto que estou apenas começando a arranhar a superfície de tudo o que posso aprender e conquistar nessa área.
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import Email from "../icons/Email.vue"
import Pdf from "../icons/Pdf.vue"
import Github from "../icons/Github.vue"
import Linkedin from "../icons/Linkedin.vue"
import Devto from "../icons/Devto.vue"
import Instagram from "../icons/Instagram.vue"
import Work from "../icons/Work.vue"
import { useThemeStore } from "../store/theme";

const themeStore = useThemeStore()

const links = ref([
    {
        icon: Pdf,
        desc: "link para o meu Currículo",
        id: Date.now(),
        url: "/Luis_Davi_Rebouças.pdf"
    },
    {
        icon: Work,
        desc: "link para entrar em contato comigo",
        id: Date.now(),
        url: "/contact"
    },
    {
        icon: Email,
        desc: "link para o meu email",
        id: Date.now(),
        url: "mailto:luisdavi.contato@gmail.com"
    },
    {
        icon: Github,
        desc: "link para o meu Github",
        id: Date.now(),
        url: "https://github.com/webldavi"
    },
    {
        icon: Linkedin,
        desc: "link para o meu Linkedin",
        id: Date.now(),
        url: "https://www.linkedin.com/in/luisdav1"
    },
    {
        icon: Devto,
        desc: "link para o meu perfil na dev.to",
        id: Date.now(),
        url: "https://dev.to/webdavi"
    },
    {
        icon: Instagram,
        desc: "link para o meu instagram",
        id: Date.now(),
        url: "https://instagram.com/lu1s.dev"
    },
    
])

</script>

<style scoped>
.knowmeContainer{
    @apply w-full h-max flex flex-col lg:flex-row gap-12 items-center lg:items-start
}

.profile{
    @apply w-full min-h-[342px] sm:w-[26rem] p-4 
    flex flex-col gap-4 items-center text-center justify-between
    shadow-sm shadow-zinc-400 rounded-lg  
}

.about{
    @apply flex-1 min-h-[342px]  p-4 
    flex flex-col gap-4 items-center text-center lg:text-left lg:items-start
    shadow-sm shadow-zinc-400 rounded-lg  
}
.profile img{
    @apply w-40 -mt-20 shadow border border-gray-300 rounded-lg 
}
.links{
    @apply w-full h-max flex flex-row flex-wrap gap-2 items-center justify-center
}
.links a{
    @apply w-max h-max p-3 flex items-center justify-center transition-all rounded-lg
    cursor-pointer hover:-translate-y-2 hover:shadow 
}

</style>