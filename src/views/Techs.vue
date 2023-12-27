<template>
    <section class="techContainer">
        <h1 class="text-2xl font-bold">Habilidades</h1>
        <div>
            <div v-for="(skill, index) in skillStore.getSkills" :key="index" class="skill">
                <div class="image" :style="{
                    backgroundColor: skill.mainColor + '80'
                }">
                    <img :src="skill.link" alt="Imagem da tecnologia" >
                </div>
                <div class="hover" id="vibracyHover">
                    <div class="content" >
                        <div class="image" :style="{ backgroundColor: skill.mainColor + '80' }">
                            <img :src="skill.link" alt="Imagem da tecnologia" >
                        </div>
                        <div class="text-white">
                            <h1 class="font-bold text-lg">{{ skill.skillName }}</h1>
                            <p class="opacity-75 font-bold">{{ skill.skillDesc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useSkillStore } from '../store/Skills';
import { useThemeStore } from '../store/theme';

const themeStore = useThemeStore()
const skillStore = useSkillStore()


</script>

<style scoped>
.techContainer{
    transition: all 500ms;
    @apply w-full h-max flex flex-col gap-16 items-center justify-center
}

.techContainer > div {
    @apply w-full h-max flex flex-row flex-wrap gap-12 justify-center
}
.techContainer > div > .skill{
    transition: all 500ms;
    @apply p-3 rounded-lg bg-transparent 
    overflow-hidden h-[11.5rem] w-[11.5rem] hover:overflow-visible
}
.techContainer > div > .skill > .hover{
    transition: all 500ms;
    @apply fixed opacity-0 -z-20
}
.techContainer > div > .skill:hover > .hover{
    @apply bottom-0 right-0 z-20 opacity-100 m-5
}
.techContainer > div > .skill > .hover > .content{
    @apply w-full sm:max-w-[30rem] text-sm flex flex-row gap-2 p-3 rounded-lg
}

.techContainer > div > .skill > .hover > .content > .image{
    @apply w-40 h-40 min-w-[10rem] p-4 bg-opacity-75 rounded-lg
}

.techContainer > div > .skill > .hover > .content > .image > img{
    @apply w-full h-full rounded-lg
}
.techContainer > div > .skill > .image{
    @apply w-40 h-40 min-w-[10rem] p-4 bg-opacity-75 rounded-lg border border-white
}

.techContainer > div > .skill > .image > img{
    @apply w-full h-full rounded-lg
}
#vibracyHover{
    @apply bg-zinc-500/30 backdrop-blur-lg border border-zinc-200 rounded-lg
}
</style>