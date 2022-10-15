<template>
    <div id="Card" class="w-72 border-2 border-gray-300 rounded-lg flex flex-col justify-between gap-2 p-2 font-mono text-white">
        <slot></slot>
        <div class="text-2xl">
            {{name}}
        </div>
        <div class="w-full break-words text-left">
            <p>{{desc}}</p>
        </div>
        <div class="flex flex-row justify-between font-bold text-green-300">
            <div class="flex flex-row gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
                <span>Completo</span>
            </div>
            <div @click="toProject()" class="flex flex-row gap-2 text-blue-300 border-b-2 border-transparent hover:border-blue-300 pb-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                <span>Repositório</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'Card',
        props:{
            name: String,
            desc: String,
            rep: String
        },
        methods:{
            toProject(){
                window.open(`https://github.com/webldavi/${this.rep}`, "_blank")
            }
        }
    }
</script>
<style>
#Card{
    height: 32rem;
}
</style>
