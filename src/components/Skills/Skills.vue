<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-center gap-4 py-2">
        <Separator name="Habilidades" />
        <div
            class="w-full h-max flex flex-col flex-1 flex-1 md:flex-row items-center justify-center gap-12 md:gap-0 pb-4 sm:px-4">
            <div class="md:w-128 flex flex-row flex-wrap w-full gap-2 sm:gap-4 sm:p-4 justify-center">
                <div @mouseover="updateSkill('html')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/3291/3291670.png" class="rounded-lg" alt="" />
                    <span>HTML</span>
                </div>
                <div id="css" @mouseover="updateSkill('css')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img id="cssimg" src="/css.png" alt="" class="rounded-lg" />
                    <span>CSS</span>
                </div>
                <div @mouseover="updateSkill('js')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" class="rounded-lg" alt="" />
                    <span>JavaScript</span>
                </div>
                <div @mouseover="updateSkill('vue')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
                        alt="" class="rounded-lg" />
                    <span>Vuejs</span>
                </div>
                <div @mouseover="updateSkill('react')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" class="rounded-lg" alt="" />
                    <span>Reactjs</span>
                </div>
                <div @mouseover="updateSkill('ts')" @mouseleave="removeSkill()"
                    class="w-36 h-44 text-gray-300 font-mono font-bold text-xl cursor-pointer border-2 border-gray-600 rounded-lg overflow-hidden transition hover:scale-110 flex flex-col gap-2 justify-center items-center p-2">
                    <img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" class="rounded-lg" alt="" />
                    <span>TypeScript</span>
                </div>
            </div>
            <div class="w-5/6 h-max sm:w-96 h-64 mx-2 flex flex-col gap-2 font-mono text-center text-white p-2 bg-gray-900 rounded-lg"
                id="Skill">
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
<script setup

>
import { ref } from "vue";
import Separator from "../Separator.vue";
const skillName = ref("Minhas Habilidades")
const skillDesc = ref("/* Essas são as minhas Habilidades */")
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
    skillName.value = "Minhas Habilidades";
    skillDesc.value = "/* Essas são as minhas Habilidades */";
}

</script>

<style>
#Skill {
    animation: Elevation 3s infinite;
    /* box-shadow: 0px 0px 16px 0px rgb(134 239 172); */
    box-shadow: 0px 0px 31px 3px rgba(134, 239, 173, 0.281);
    border: 2px solid rgba(22, 126, 69, 0);
}

/* #css {
  background-color: #51a4ff;
} */
#cssimg {
    scale: 0.65;
}
</style>
