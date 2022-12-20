<template>
    <div class="w-full min-h-screen flex flex-col items-center justify-center gap-4 py-2">
        <Separator name="Habilidades"/>
        <div class="w-full h-max flex flex-1 flex-col md:flex-row items-center md:justify-start gap-4 px-4">
            <div class=" md:w-128 flex flex-row flex-wrap w-full gap-4 p-4 justify-center">
                <div @mouseover="updateSkill('html')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img src="https://cdn-icons-png.flaticon.com/512/3291/3291670.png" alt="">
                </div>
                <div id="css" @mouseover="updateSkill('css')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img id="cssimg" src="../../assets/css.png" alt="">
                </div>
                <div @mouseover="updateSkill('js')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="">
                </div>
                <div @mouseover="updateSkill('vue')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 bg-gray-700 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img src="https://br.vuejs.org/images/logo.svg" alt="">
                </div>
                <div @mouseover="updateSkill('react')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="">
                </div>
                <div @mouseover="updateSkill('ts')" @mouseleave="removeSkill()" class="w-24 h-24 md:w-36 md:h-36 cursor-pointer border-2 border-gray-300 rounded-full overflow-hidden transition hover:scale-110">
                    <img src="https://www.svgrepo.com/show/303600/typescript-logo.svg" alt="">
                </div>
            </div>
            <div class="w-96 flex-1 flex flex-col gap-2 font-mono text-center text-white p-2 bg-gray-700 rounded-lg" id="Skill">
                <div class="text-2xl text-green-300">
                    {{skillName}}
                </div>
                <div class="text-xl text-pink-300">
                    {{skillDesc}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Separator from '../Separator.vue';
export default{
    name: 'Skills',
    data(){
        return{
            skillName: 'Minhas Habilidades',
            skillDesc: '/* Essas são as minhas Habilidades */',
            listSkill: {
                js:{
                    skillName: 'JavaScript',
                    skillDesc: 'Javascript é uma linguagem interpretada pelo navegador, ou seja, ela é client-side, vulgo Front-end.'
                },
                html:{
                    skillName: 'HTML5',
                    skillDesc: 'HTML5 é a sigla para HyperText Markup Language, linguagem de marcação usada para criar a estrutura de uma página.'
                },
                css:{
                    skillName: 'CSS3',
                    skillDesc: 'CSS3, uma linguagem de estilização usada para estilizar e dar forma as estruturas de uma página.'
                },
                vue:{
                    skillName: 'VueJS',
                    skillDesc: 'VueJs, um Framework usado para criar páginas SPA(single page application).'
                },
                react:{
                    skillName: 'ReactJS',
                    skillDesc: 'ReactJS é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
                },
                ts:{
                    skillName: 'TypeScript',
                    skillDesc: 'É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
                },
            }
        }
    },
    components:{
        Separator
    },
    methods:{
        updateSkill(skill){
            this.skillName = this.listSkill[skill].skillName
            this.skillDesc = this.listSkill[skill].skillDesc
        },
        removeSkill(){
            this.skillName = 'Minhas Habilidades';
            this.skillDesc = '/* Essas são as minhas Habilidades */';
        }
    }
}
</script>

<style>
#Skill{
    animation: Elevation 3s infinite;
    box-shadow: 0px 0px 16px 0px  rgb(55 65 81);
    border: 2px solid  rgb(77, 89, 109);
}
#css{
    background-color: #51A4FF;
}
#cssimg{
    scale: .65;
}
</style>
