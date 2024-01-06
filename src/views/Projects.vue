<template>
  <section class="projectsContainer">
    <div class="projects">
      <div class="w-full flex flex-row gap-2 justify-between">
        <span class="font-bold text-2xl">
          Principais Projetos
        </span>
        <a href="https://github.com/webldavi?tab=repositories" target="_blank"
          class="w-max font-medium text-base text-center text-purple-400 flex flex-row items-center"> 
          Ver Todos
          <svg class="rotate-[-135deg]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M11.5 15.392V6q0-.213.143-.357q.144-.143.357-.143t.357.143q.143.144.143.357v9.392l3.746-3.746q.14-.14.344-.15q.204-.01.364.15t.16.354q0 .194-.16.354l-4.389 4.388q-.242.243-.565.243q-.323 0-.565-.243l-4.389-4.388q-.14-.14-.15-.344q-.01-.204.15-.364t.354-.16q.194 0 .354.16z"/></svg>
        </a>
      </div>
      <div class="w-full h-max flex flex-col gap-4">
        <div v-for="(p, i) in projects" :key="i" data-aos="fade-right" data-aos-duration="800" :data-aos-delay="i <= 1 ? (i+1)*250 : 0"
          class="flex flex-col lg:flex-row gap-4 items-center border-b border-zinc-800">
          <img class="w-full lg:w-[30%] rounded-md" :src="`${p.nameFile}.webp`" alt="">
          <div class="flex-1 flex flex-col gap-2">
            <span class="font-semibold text-xl">{{ p.name }}</span>
            <p class="font-medium text-zinc-300 text-sm lg:text-lg">{{ p.desc }}</p>
            <div class="w-full flex flex-row gap-2">
              <img class="w-6 h-6" v-for="(t, i) in p.techs" :src="t.src" :alt="t.name">
            </div>
            <a :href="p.rep" aria-label="Visitar Repositório do Projeto" title="Visitar Repositório do Projeto" class="font-bold w-full p-4 bg-purple-600 text-center rounded-md">Visitar Repositório</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const projects = ref([
{
  name: "Tail-theme",
  desc: "Tail-theme foi desenvolvido usando as cores padrões do tailwind CSS, assim criando um tema agradavel e com cores aprovadas pela comunidade",
  rep: "",
  nameFile: "tail-theme",
  typeLinkText: "Repositório",
  toLink: false,
  link: "https://github.com/webldavi/tail-theme",
  techs: [
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Node.js",
      src: "https://nodejs.org/static/images/favicons/favicon.png",
    },
    {
      name: "Json",
      src: "https://img.icons8.com/?size=1080&id=50024&format=png",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
{
  name: "SyncEduc",
  desc: "O SyncEduc foi um trabalho de conclusão de curso, onde eu e meus amigos desenvolvemos uma aplicação full-stack de uma plataforma de cursos online",
  rep: "",
  nameFile: "synceduc",
  typeLinkText: "Repositório",
  toLink: false,
  link: "https://github.com/SyncEduc/SyncEduc",
  techs: [
    {
      name: "HTML5",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Typescript",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      name: "Vue.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
{
  name: "Web Chat",
  desc: "Web Chat foi um projeto pessoal onde criei um chat com salas para entender os fundamentos do websocket",
  rep: "",
  nameFile: "chat",
  typeLinkText: "Repositório",
  toLink: false,
  link: "https://github.com/webldavi/chatSocket",
  techs: [
    {
      name: "HTML5",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Node.js",
      src: "https://nodejs.org/static/images/favicons/favicon.png",
    },
    {
      name: "WebSocket",
      src: "https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=17523",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
{
  name: "Voice to Text",
  desc: "Aplicação simples que usa reconhecimento de voz para transformar a voz em texto",
  rep: "",
  nameFile: "voicerecognition",
  typeLinkText: "Link",
  toLink: true,
  link: "https://voice2totext.vercel.app",
  techs: [
    {
      name: "HTML5",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Vue.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
{
  name: "n0d3rr Syntax Highlighter",
  desc: "é um editor de código cuja o objetivo é facilitar a escrita de documentações com exemplos de códigos",
  rep: "",
  nameFile: "NSH",
  typeLinkText: "Link",
  toLink: true,
  link: "https://n0d3rr-sh.vercel.app/#/",
  techs: [
    {
      name: "HTML5",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Vue.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
{
  name: "Laravel course page",
  desc: "Este foi um freelancer que fiz, resumidamente uma pagina para um curso gratuito de laravel",
  rep: "",
  nameFile: "laravelCourse",
  typeLinkText: "Link",
  toLink: true,
  link: "https://cursolaravel.com.br/",
  techs: [
    {
      name: "HTML5",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    },
    {
      name: "Vue.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
  ],
},
])
</script>

<style scoped>
.projectsContainer{
  @apply w-full min-h-screen px-8 md:px-32 pt-14 flex flex-col 
     items-center lg:items-start lg:justify-center lg:flex-row gap-4 pb-8 text-white
}

.projects{
  @apply w-full min-h-screen border border-zinc-800 rounded-lg p-4
}

.projects * img{
  @apply shadow-2xl shadow-purple-700/20 
}
@media (min-width: 1024px){
  .projects * img{
    transform: perspective(1000px) rotateY(13deg) rotateX(5deg) rotate(1deg) scaleY(.9) scaleX(.95) translate(3%) translateY(-3%);
  }
}
</style>