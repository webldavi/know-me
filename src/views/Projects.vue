<template>
    <section class="projectsContainer" data-aos="fade-up" data-aos-duration="800">
        <h1 class="text-2xl font-bold">Meus Projetos</h1>
        <div class="projectList" :class="{'h-80':!showAll, 'h-max':showAll}">
            <div class="project" v-for="(project, index) in projects" :key="index">
                <Card :title="project.name" :image="project.nameFile" :desc="project.desc"
                :techs="project.techs" :link="project.link"></Card>
            </div>
        </div>
        <button aria-label="Visualizar mais ou menos projetos" @click="showAll = !showAll" :class="{'rotate-180': showAll}">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7z"/></svg>
        </button>
    </section>
</template>

<script setup>
import {ref} from "vue"
import Card from "../components/Card.vue"
const showAll = ref(false)
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
        src: "https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667",
      },
      {
        name: "Vue.js",
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    name: "Nexus-ui",
    desc: "Estou criando uma lib de componentes de para vuejs baseada em tailwindcss",
    rep: "",
    nameFile: "nexus",
    typeLinkText: "Link",
    toLink: true,
    link: "https://nexus-ui.gitbook.io/nexus-ui/",
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    name: "TWvue",
    desc: "Plugin para vuejs baseados nos estilos do Tawildindcss.",
    rep: "twvue",
    nameFile: "twvue",
    typeLinkText: "Repositório",
    toLink: false,
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    name: "PigApp",
    desc: "Um Projeto com a função de registar despesas e ganhos de dinheiro com a finalidade de obter um controle maior de tudo",
    rep: "PigApp",
    nameFile: "PigApp",
    typeLinkText: "Repositório",
    link: "https://github.com/webldavi/PigApp",
    toLink: false,
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    name: "Food List",
    desc: "Projeto feito para estudar as ultilidades do Vuex e como usar em projetos.",
    rep: "foodlist",
    nameFile: "food",
    typeLinkText: "Repositório",
    link: "https://github.com/webldavi/foodList",
    toLink: false,
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
        src: "https://camo.githubusercontent.com/077997d77bfa74b144c9e286e65143b4edc547dc948098491264bb2dde282d6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7675656a732f7675656a732d6f726967696e616c2e737667",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    name: "Todo Redux",
    desc: "Projeto feito para estudar as ultilidades do Redux e como usar em projetos.",
    rep: "todo-redux",
    nameFile: "todo",
    typeLinkText: "Repositório",
    link: "https://github.com/webldavi/todo-redux",
    toLink: false,
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
        src: "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667",
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
    @apply w-full h-max flex flex-col items-center gap-12
    rounded-lg 
}
.projectList{
    @apply w-full overflow-hidden  flex flex-row flex-wrap
    items-center justify-center gap-12
}
</style>