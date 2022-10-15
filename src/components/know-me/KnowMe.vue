<template>
    <div class="w-full h-screen flex flex-col items-center justify-center gap-12 py-2">
        <div class="w-full flex flex-row gap-2 items-center justify-center font-mono text-white">
            <Separator name="Sobre Mim"/>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-12">
            <div>
                <img width="200" height="200" class="border-2 border-white rounded-xl" src="../../assets/photo.jpg" alt="">
            </div>
            <div class="font-mono text-white w-72 sm:w-96 flex flex-col gap-2">
                <span class="w-full break-words text-xl text-justify sm:text-left">
                    Meu nome é Luís Daví, tenho 18 anos🤓 e sou um estudante autodidata de engenharia de software 🚀
                </span>
                <div class="flex flex-row gap-2">
                    <div @click="toSocial('https://github.com/webldavi')" class="w-16 h-16 p-2 border-2 transition border-gray-600 text-white bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700">
                        <img src="../../assets/github.png" alt="">
                    </div>
                    <div @click="toSocial('mailto:luisdavi.contato@gmail.com')" class="w-16 h-16 p-2 border-2 transition border-gray-600 text-white bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700">
                        <img src="../../assets/Email.png" alt="">
                    </div>
                    <div @click="toSocial('https://instagram.com/_eudaviii')" class="w-16 h-16 p-2 border-2 transition border-gray-600 text-white bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-700">
                        <img src="../../assets/instagram.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Separator from '../Separator.vue'
    export default{
        name: 'Know-me',
        methods:{
            toSocial(url){
                window.open(url, "_blank")
            }
        },
        components:{
            Separator,
        }
    }
</script>

