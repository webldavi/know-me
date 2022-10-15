<template>
    <div class="w-full h-max hidden fixed top z-10 backdrop-blur-sm md:flex flex-row justify-between items-center gap-2 px-8 py-2 border-b-2 border-gray-400" id="nav">
        <div class="flex flex-col font-mono text-white">
            <div class="text-3xl">
                Luís Daví
            </div>
            <div class="text-xl">
                Desenvolvedor Front-end
            </div>
        </div>
        <div class="w-max flex flex-row gap-12 text-xl font-mono text-white">
            <Link name='Inicio'/>
            <Link name='Sobre Mim'/>
            <Link name='Projetos'/>
            <Link name='Habilidades'/>
        </div>
    </div>
</template>
<script>
    import  Link from './Link.vue'
    
    export default{
        name:' Nav',
        components: {
            Link
        }
    }
</script>

<style>
    #nav{
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
    }
</style>