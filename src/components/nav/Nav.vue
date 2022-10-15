<template>
    <div class="w-full h-max fixed top flex flex-row justify-between items-center gap-2 px-8 py-2 border-b-2 border-gray-400 rounded-xl">
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
            <Link name='Contato'/>
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

