<template>
    <div class="w-full h-max hidden fixed top z-10 backdrop-blur-sm md:flex flex-row justify-between items-center gap-2 px-8 py-2 border-b-2 border-gray-400"
        id="nav">
        <div class="flex flex-col font-mono text-white">
            <div class="text-3xl">
                Luís Daví
            </div>
            <div class="text-xl">
                Desenvolvedor Front-end
            </div>
        </div>
        <div class="w-max flex flex-row gap-12 text-xl font-mono text-white">
            <Link name='Inicio' :scroll="0" />
            <Link name='Sobre Mim' :scroll="500" />
            <Link name='Projetos' :scroll="1050" />
            <Link name='Habilidades' :scroll="1850" />
        </div>
    </div>
</template>
<script setup>
import Link from './Link.vue'
</script>

<style>
#nav {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 15px -12px 20px 0px rgb(255 255 255 / 42%) inset;
}
</style>