<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-center gap-4 py-2">
        <Separator name="Habilidades" />
        <div
            class="w-full h-max flex flex-col flex-1 flex-1 md:flex-row items-center justify-center gap-12 md:gap-0 pb-4 sm:px-4">
            <div class="md:w-128 flex flex-row flex-wrap w-full gap-2 sm:gap-4 sm:p-4 justify-center">
                <div @mouseover="updateSkill('html')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3291/3291670.png" class="rounded-lg" alt="" />
                    <span>HTML</span>
                </div>
                <div id="css" @mouseover="updateSkill('css')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img id="cssimg" src="/css.png" alt="" class="rounded-lg" />
                    <span>CSS</span>
                </div>
                <div @mouseover="updateSkill('js')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" class="rounded-lg" alt="" />
                    <span>JavaScript</span>
                </div>
                <div @mouseover="updateSkill('vue')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
                        alt="" class="rounded-lg" />
                    <span>Vuejs</span>
                </div>
                <div @mouseover="updateSkill('react')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" class="rounded-lg" alt="" />
                    <span>Reactjs</span>
                </div>
                <div @mouseover="updateSkill('ts')"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-400 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" class="rounded-lg" alt="" />
                    <span>TypeScript</span>
                </div>
            </div>
            <div v-show="skillName.length > 1"
                class="w-5/6 h-max sm:w-96 h-64 mx-2 relative flex flex-col gap-2 font-mono text-center text-white p-2 transition-all bg-black rounded-lg"
                id="Skill">
                <span class="absolute z-20 right-4 top-3 cursor-pointer" @click="removeSkill()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <div class="text-2xl text-green-300">
                    {{ skillName }}
                </div>
                <div class="text-xl text-pink-300">
                    {{ skillDesc }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Separator from "../Separator.vue";
const skillName = ref("")
const skillDesc = ref("")
const listSkill = ref({
    js: {
        skillName: "JavaScript",
        skillDesc:
            "Javascript é uma linguagem interpretada pelo navegador, ou seja, ela é client-side, vulgo Front-end.",
    },
    html: {
        skillName: "HTML5",
        skillDesc:
            "HTML5 é a sigla para HyperText Markup Language, linguagem de marcação usada para criar a estrutura de uma página.",
    },
    css: {
        skillName: "CSS3",
        skillDesc:
            "CSS3, uma linguagem de estilização usada para estilizar e dar forma as estruturas de uma página.",
    },
    vue: {
        skillName: "VueJS",
        skillDesc:
            "VueJs, um Framework usado para criar páginas SPA(single page application).",
    },
    react: {
        skillName: "ReactJS",
        skillDesc:
            "ReactJS é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    },
    ts: {
        skillName: "TypeScript",
        skillDesc:
            "É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    },
})

function updateSkill(skill) {
    skillName.value = listSkill.value[skill].skillName;
    skillDesc.value = listSkill.value[skill].skillDesc;
}
function removeSkill() {
    skillName.value = "";
    skillDesc.value = "";
}

</script>

<style>
#Skill {
    animation: Elevation 3s infinite;
    /* box-shadow: 0px 0px 16px 0px rgb(134 239 172); */
    /* box-shadow: 0px 0px 31px 3px rgba(155, 155, 155, 0.281); */
    border: 2px solid rgba(22, 126, 69, 0.315);
}

/* #css {
  background-color: #51a4ff;
} */
#cssimg {
    scale: 0.65;
}
</style>
