<template>
    <section class="w-full h-full px-8 lg:px-32 flex flex-col lg:flex-row gap-8 text-white pb-20" style="z-index: 1;">
        <div class="flex-1 flex flex-col gap-4 max-w-full lg:max-w-[24rem]">
            <div class="w-full" data-aos="fade-right" data-aos-duration="800">
                <span class="font-bold text-2xl">Ferramentas e tecnologias que uso</span>
                <p class="font-medium opacity-70">Aqui estão algumas ferramentas essenciais para aprimorar meus projetos
                    diários. Elas impulsionam minha produtividade e criatividade, tornando meu trabalho mais eficiente e
                    satisfatório.</p>
            </div>
            <iframe data-aos="fade-right" data-aos-duration="800" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0sApFGSXpnwXOW7juGA6fW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div class="flex-1 h-max">
            <div class="w-full h-max flex flex-col gap-2" data-aos="fade-right" data-aos-duration="800"
                v-for="(c, i) in skillStore.skills" :key="i" style="z-index: 2;">
                <span class="font-bold text-2xl">{{ c.name }}</span>
                <div class="w-full h-max flex flex-row gap-4 flex-wrap">
                    <div style="z-index: 3;" id="techs" class="shadow-2xl shadow-purple-700/20 p-2
                h-max w-[15rem] rounded-md flex flex-row items-center justify-start gap-2 bg-zinc-800/50"
                        v-for="(s, i) in c.items" data-aos="fade-right" data-aos-duration="800"
                        :data-aos-delay="150 + (i + 1)">
                        <div class="relative">
                            <img class="w-12 inset-0 h-12 absolute scale-150 opacity-70 z-[1] brightness-200  blur-lg"
                                :src="s.link" alt="" style="z-index: -1;">
                            <div class="w-12 h-12 rounded-md relative p-2 overflow-hidden border border-zinc-100/30">
                                <img class="w-full inset-0 h-full scale-150 absolute z-0 blur-lg brightness-75"
                                    :src="s.link" alt="" style="z-index: -1;">
                                <img class="w-full h-full z-10 rounded" :src="s.link" alt="">
                            </div>
                        </div>
                        <span class="font-medium">{{ s.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useSkillStore } from '../store/Skills';
const skillStore = useSkillStore()

</script>

<style scoped>
#techs {
    overflow: hidden;
}
</style>