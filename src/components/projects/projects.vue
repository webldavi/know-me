<template>
    <div class="w-full min-h-screen flex flex-col gap-4 py-2">
        <Separator name="Projetos" />
        <div class="w-full h-max flex flex-col items-center justify-center gap-12 pb-8 transition-all">
            <div class="w-full items-center justify-center flex flex-row flex-wrap gap-8 px-4">
                <Card v-for="(Project, index) in Projects.slice(0, projectsListLimit)" :key="index" :name="Project.name"
                    :desc="Project.desc" :rep="Project.rep">
                    <img :src="`/${Project.nameFile}.png`" class="rounded-lg">
                </Card>

            </div>
            <button @click="showProjects" id="showMoreProjects" v-if="Projects >= 4"
                class="p-4 bg-gray-900 rounded-lg transition-all text-lg font-bold text-white font-mono text-center border-2 border-gray-800 cursor-pointer">{{
                        ShowProjectsButtonText
                }}</button>
        </div>
    </div>
</template>
<script setup>
import Separator from '../Separator.vue'
import Card from '../Card.vue';
import { ref } from 'vue';


const ShowProjectsButtonText = ref('Mostrar mais')
const showMoreProjectValidation = ref(false)
const projectsListLimit = ref(3)
const Projects = ref([
    {
        name: 'PigApp',
        desc: 'Um Projeto com a função de registar despesas e ganhos de dinheiro com a finalidade de obter um controle maior de tudo',
        rep: 'PigApp',
        nameFile: "PigApp"
    },
    {
        name: 'Food List',
        desc: 'Projeto feito para estudar as ultilidades do Vuex e como usar em projetos.',
        rep: 'foodlist',
        nameFile: "food"
    },
    {
        name: 'Todo Redux',
        desc: 'Projeto feito para estudar as ultilidades do Redux e como usar em projetos.',
        rep: 'todo-redux',
        nameFile: "todo"
    },
    {
        name: 'Todo Redux',
        desc: 'Projeto feito para estudar as ultilidades do Redux e como usar em projetos.',
        rep: 'todo-redux',
        nameFile: "todo"
    },
    {
        name: 'Todo Redux',
        desc: 'Projeto feito para estudar as ultilidades do Redux e como usar em projetos.',
        rep: 'todo-redux',
        nameFile: "todo"
    },
    {
        name: 'Todo Redux',
        desc: 'Projeto feito para estudar as ultilidades do Redux e como usar em projetos.',
        rep: 'todo-redux',
        nameFile: "todo"
    },
    {
        name: 'Todo Redux',
        desc: 'Projeto feito para estudar as ultilidades do Redux e como usar em projetos.',
        rep: 'todo-redux',
        nameFile: "todo"
    }

])
function showProjects() {
    if (showMoreProjectValidation == false) {
        ShowProjectsButtonText = "Mostrar menos",
            projectsListLimit = this.Projects.length
        showMoreProjectValidation = true
    } else {
        showMoreProjectValidation = false
        projectsListLimit = 3
        ShowProjectsButtonText = "Mostrar mais"
    }

}
</script>

<style>
@keyframes showProject {
    from {
        scale: 0;
    }

    to {
        scale: 1
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