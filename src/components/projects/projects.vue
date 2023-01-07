<template>
  <div class="w-full min-h-screen flex flex-col gap-4 py-2">
    <Separator name="Projetos" />
    <div class="w-full h-max mt-4 flex flex-col items-center justify-center gap-12 pb-8 transition-all">
      <div class="w-full items-center justify-center flex flex-row flex-wrap gap-8 px-4">
        <Card v-for="(Project, index) in Projects.slice(0, projectsListLimit)" :key="index"
          :type-link-text="Project.typeLinkText" :name="Project.name" :desc="Project.desc" :rep="Project.rep"
          :to-link="Project.toLink" :link="Project.link">
          <img :src="`/${Project.nameFile}.png`" class="rounded-lg" />
        </Card>
      </div>
      <button @click="showProjects()" id="showMoreProjects" v-if="Projects.length >= 4"
        class="p-4 bg-black rounded-lg transition-all text-lg font-bold text-white font-mono text-center border-2 border-gray-800 cursor-pointer">
        {{ ShowProjectsButtonText }}
      </button>
    </div>
  </div>
</template>
<script setup>
import Separator from "../Separator.vue";
import Card from "../Card.vue";
import { ref } from "vue";

const ShowProjectsButtonText = ref("Mostrar mais");
const showMoreProjectValidation = ref(false);
const projectsListLimit = ref(4);
const Projects = ref([
  {
    name: "n0d3rr Syntax Highlighter",
    desc: "Este é um editor de código cuja o objetivo é facilitar a escrita de documentações em exeplos de códigos",
    rep: "",
    nameFile: "NSH",
    typeLinkText: "Link",
    toLink: true,
    link: "https://n0d3rr-sh.vercel.app/#/",
  },
  {
    name: "Laravel course page",
    desc: "Este foi um freelancer que fiz, resumidamente uma pagina para um curso gratuito de laravel",
    rep: "",
    nameFile: "laravelCourse",
    typeLinkText: "Em breve",
    toLink: true,
    link: "https://cursolaravel.com.br/",
  },
  {
    name: "Turing Community",
    desc: "Uma comunidade de programação no discord para todos desfrutarem.",
    rep: "",
    nameFile: "turingCommunity",
    typeLinkText: "Link",
    toLink: true,
    link: "https://discord.gg/Tp4p3n7N69",
  },
  {
    name: "TWvue",
    desc: "Plugin para vuejs baseados nos estilos do Tawildindcss.",
    rep: "twvue",
    nameFile: "twvue",
    typeLinkText: "Repositório",
    toLink: false,
  },
  {
    name: "PigApp",
    desc: "Um Projeto com a função de registar despesas e ganhos de dinheiro com a finalidade de obter um controle maior de tudo",
    rep: "PigApp",
    nameFile: "PigApp",
    typeLinkText: "Repositório",
    toLink: false,
  },
  {
    name: "Food List",
    desc: "Projeto feito para estudar as ultilidades do Vuex e como usar em projetos.",
    rep: "foodlist",
    nameFile: "food",
    typeLinkText: "Repositório",
    toLink: false,
  },
  {
    name: "Todo Redux",
    desc: "Projeto feito para estudar as ultilidades do Redux e como usar em projetos.",
    rep: "todo-redux",
    nameFile: "todo",
    typeLinkText: "Repositório",
    toLink: false,
  },
]);
function showProjects() {
  if (showMoreProjectValidation.value == false) {
    ShowProjectsButtonText.value = "Mostrar menos";
    projectsListLimit.value = Projects.length;
    showMoreProjectValidation.value = true;
  } else {
    showMoreProjectValidation.value = false;
    projectsListLimit.value = 3;
    ShowProjectsButtonText.value = "Mostrar mais";
  }
}
</script>

<style>
@keyframes showProject {
  from {
    scale: 0;
  }

  to {
    scale: 1;
  }
}

#showMoreProjects {
  animation: showProject 1.5s;
}

#showMoreProjects:hover {
  scale: 1.1;
  box-shadow: 0px 0px 16px 0px rgb(39 46 58);
  border: 2px solid rgb(38, 44, 56);
}
</style>
