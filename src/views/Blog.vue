<template>
    <section class="BlogContainer">
        <div class="infoCard" data-aos="fade-right" data-aos-duration="800">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ewfqGUIL--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/794617/318fc00d-4d54-41b1-b521-b7433ba6b1e1.jpeg" alt="Foto de perfil da dev.to">
            <h1 class="font-bold text-2xl">Luís Daví</h1>
            <div class="flex flex-row gap-4">
                <span class="flex flex-row items-center text-zinc-400">
                    <Devto class="text-white"/> 
                    @webdavi       
                </span>
                <span>|</span>
                <span class="flex flex-row items-center text-zinc-400">
                    <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><path fill="currentColor" d="M206.13 75.92A57.79 57.79 0 0 0 201.2 29a6 6 0 0 0-5.2-3a57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24a6 6 0 0 0-5.2 3a57.79 57.79 0 0 0-4.93 46.92A55.88 55.88 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26a38 38 0 0 0-38-38a6 6 0 0 0 0 12a26 26 0 0 1 26 26a38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.88 55.88 0 0 0-7.87-28.08M202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69a6 6 0 0 0 .81-5.76a45.85 45.85 0 0 1 1.43-36.42a45.85 45.85 0 0 1 35.23 21.1a6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76a45.83 45.83 0 0 1 35.23-21.11a45.85 45.85 0 0 1 1.43 36.42a6 6 0 0 0 .79 5.74A43.78 43.78 0 0 1 202 104Z"/></svg> 
                    @webldavi       
                </span>
            </div>
            <p class="text-center font-medium">Olá Devs!✌️Me chamo Luís Daví tenho 19 anos, sou desenvolvedor front-end junior 🚀</p>
            <a href="https://dev.to/webdavi" target="_blank" 
            class="w-full p-2 font-bold bg-purple-600 text-center rounded-md">Visitar Perfil</a>
        </div>

        <div class="postsContainer" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
            <div class="w-full flex flex-row justify-between">
                <span class="font-bold text-2xl text-white">Ultimos Posts</span>
                <a href="https://dev.to/webdavi" target="_blank"
                class="w-max font-medium text-base text-center text-purple-400 flex flex-row items-center"> 
                Ver Todos
                <svg class="rotate-[-135deg]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.392V6q0-.213.143-.357q.144-.143.357-.143t.357.143q.143.144.143.357v9.392l3.746-3.746q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354l-4.389 4.388q-.242.243-.565.243q-.323 0-.565-.243l-4.389-4.388q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16z"/></svg>
            </a>
        </div>
        <div class="post"
                v-for="(post, index) in postsList" :key="index" v-show="index <= 2">
                <img class="w-full sm:w-52 xl:w-72" :src="post.cover_image" alt="">
                <div class="flex flex-col gap-2 items-start justify-center">
                    <a :href="post.url" target="_blank" class="font-bold text-xl text-left">{{ post.title }}</a>
                    <p class="text-sm">{{ post.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import Devto from '../icons/Devto.vue'

const postsList = ref([])
const userData = ref({})

onBeforeMount(async () => {
    await fetch('https://dev.to/api/articles?username=webdavi').then(res => res.json()).then(res => {
        postsList.value = res
    })
    await fetch('https://dev.to/api/users/by_username?url=webdavi').then(res => res.json()).then(res => {
        userData.value = res
    })

})
</script>

<style scoped>
.BlogContainer{
    @apply w-full min-h-screen px-8 md:px-32 pt-14 flex flex-col 
     items-center lg:items-start lg:justify-center lg:flex-row gap-4 pb-8
}
.infoCard{
    @apply w-max h-max p-2 border border-zinc-700 rounded-md text-white 
    flex flex-col gap-4 items-center justify-center relative pt-14 max-w-[20rem]
}

.infoCard > img{
    @apply rounded-md w-24 h-24 absolute -top-14 shadow-lg shadow-zinc-700
}

.postsContainer{
    @apply flex-1 h-max min-h-full p-4
    border border-zinc-700 rounded-md 
    flex flex-col gap-4

}

.post{
    @apply w-full flex flex-col sm:flex-row items-center gap-4 text-white hover:bg-zinc-800 p-2 rounded-md
    border-b border-zinc-800
}

.post > img{
    @apply shadow-2xl shadow-purple-700/20 hover:transform-none
}

.post:hover > img{
    transform: perspective(1000px) rotateY(13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-3%);
}

.post:hover > div > a{
    @apply text-purple-400
}
img{
    @apply shadow-lg shadow-zinc-700 rounded-md
}


</style>