<template>
    <div class="w-full min-h-screen flex flex-col gap-4 py-2">
        <Separator name="Projetos"/>
        <div class="w-full h-max flex flex-col items-center justify-center gap-12 ">
            <div class="w-full items-center justify-center flex flex-row flex-wrap gap-8 px-4">
                <Card v-for="(Project, index) in Projects" :key="index" :name="Project.name" :desc="Project.desc" :rep="Project.rep">
                    <img :src="`/${Project.nameFile}.png`" class="rounded-lg">
                </Card>
                
            </div>
        </div>
    </div>
</template>
<script>
    import Separator from '../Separator.vue'
    import Card from '../Card.vue';
    export default {
        name: 'Projects',
        data(){
            return{
                Projects:[
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
                    }
                    
                ]
            }
        },
        components:{
            Separator,
            Card
        }
    }
</script>

<style>
</style>