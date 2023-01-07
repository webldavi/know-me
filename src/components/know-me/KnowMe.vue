<template>
    <div class="w-full h-max flex flex-col items-center justify-center gap-12 pb-12">
        <div class="w-full flex flex-row gap-2 items-center justify-center font-mono text-white">
            <Separator name="Sobre Mim" />
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center md:items-start gap-12">
            <div>
                <img width="200" height="200" class="border-2 border-white rounded-xl" src="/photo.jpg" alt="">
            </div>
            <div class="font-mono text-white w-72 sm:w-96 flex flex-col gap-4">
                <span class="w-full break-words text-md text-justify sm:text-left">
                    Oi, eu sou o Luís Daví e tenho 18 anos. Sou apaixonado por tecnologia e estou sempre buscando me
                    atualizar na área de engenharia de software. Sou autodidata e estou sempre pronto para aprender
                    mais.
                </span>
                <div class="flex flex-row gap-2">
                    <div @click="toSocial('https://github.com/webldavi')"
                        class="w-12 h-12 sm:w-16 sm:h-16 p-2 border-2 transition border-gray-600 text-white bg-black rounded-lg cursor-pointer hover:bg-[#0f0f0f]">
                        <img src="/github.png" alt="">
                    </div>
                    <div @click="toSocial('mailto:luisdavi.contato@gmail.com')"
                        class="w-12 h-12 sm:w-16 sm:h-16 p-2 border-2 transition border-gray-600 text-white bg-black rounded-lg cursor-pointer hover:bg-[#0f0f0f]">
                        <img src="/Email.png" alt="">
                    </div>
                    <div @click="toSocial('https://instagram.com/_eudaviii')"
                        class="w-12 h-12 sm:w-16 sm:h-16 p-2 border-2 transition border-gray-600 text-white bg-black rounded-lg cursor-pointer hover:bg-[#0f0f0f]">
                        <img src="/instagram.png" alt="">
                    </div>
                    <div @click="toSocial('tel:84999153350')"
                        class="w-12 h-12 sm:w-16 sm:h-16 p-2 border-2 transition border-gray-600 text-white bg-black rounded-lg cursor-pointer hover:bg-[#0f0f0f]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-full h-full">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div @click="toSocial('https://discord.gg/Tp4p3n7N69')"
                        class="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden p-2 border-2 transition border-gray-600 text-white bg-black rounded-lg cursor-pointer hover:bg-[#0f0f0f]">
                        <img src="/discord.png" class="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Separator from '../Separator.vue'
function toSocial(url) {
    window.open(url, "_blank")
}
</script>

