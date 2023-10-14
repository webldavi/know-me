<script setup>
import {ref} from 'vue'
const message = ref(`
🚀 *Mensagem de {name}*
\n
📝 Assunto: *{subject}*
\n
{message}
`)

const form = ref({
    name: '',
    subject: '',
    message: ''
})


function sendMessage(){
    message.value = message.value
        .replace('{name}', form.value.name || 'Anônimo')
        .replace('{subject}', form.value.subject || 'Sem assunto')
        .replace('{message}', form.value.message || 'Mensagem vazia')
    
    window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(5584999153350)}&text=${encodeURIComponent(message.value)}`)
}


</script>

<template>
    <main class="w-fulll min-h-screen flex items-b justify-end p-6 text-white" id="main">
        <div class="flex flex-col items-center justify-between gap-2 w-full md:max-w-[60vw] h-full">
            <div class="flex flex-col h-max w-max mb-2">
                <h1 class="border-b-2 py-1 border-white text-3xl font-bold">Luís Daví Rebouças</h1>
                <h2 class="text-xl">Desenvolvimento de lading pages</h2>
            </div>
            <div class="w-full h-max min-h-[20rem] flex flex-col items-center gap-6 p-2" id="form">
                <div class="flex flex-row gap-2 items-center">
                    <img src="/Bitmap.png" alt="Emoji" class="w-12 h-12">
                    <h1 class="font-bold text-lg">Preencha o formulário<br> e entre em contato comigo!</h1>
                    
                </div>
                <div class="flex flex-wrap justify-center w-full h-max px-2 pb-2 gap-y-4">
                    <input type="text" class="w-[49%]" placeholder="Seu nome" v-model="form.name">
                    <select v-model="form.subject" class="w-[49%] bg-transparent text-white  toutline-none border-b border-zinc-200/50" placeholder="Seu Objetivo">
                        <option value="" disabled class="text-black/50">O que deseja fazer?</option>
                        <option value="Orçamento" >Orçamento</option>
                        <option value="Dúvida" >Tirar Dúvidas</option>
                    </select>
                    <textarea v-model="form.message" placeholder="Escreva sua mensagem"></textarea>
                    <button @click="sendMessage" class="w-full p-2 bg-[#41bd96] hover:bg-[#2fa27d] rounded font-bold">Enviar!</button>
                </div>
            </div>
            <div class="w-full h-max flex gap-4 flex items-center justify-end opacity-70">
                <div class="flex flex-row gap-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" stroke-miterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/><path stroke-linejoin="round" d="M2 9h4"/><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/></g></svg>
                    <span class="font-bold">Prazo de entrega de até uma semana</span>
                </div>
                <div class="flex flex-row gap-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm88 104a87.62 87.62 0 0 1-6.4 32.94l-44.7-27.49a15.92 15.92 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.62 16.62 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128Zm-176 0a87.53 87.53 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128Z"/></svg>
                    <span class="font-bold">Aumente sua presença online!</span>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
input{
    @apply outline-none bg-transparent border-b border-zinc-200/50 px-2 py-1
}
body{
    background-color: #18181b;
}

select > *{
    @apply text-black rounded-lg
}

textarea{
    @apply w-full h-52 bg-transparent outline-none border border-zinc-200/50 rounded p-2
}
#main{
    background-image: url('/linksBackground.png');
    background-position: center;
    background-size: cover;
}
#form{
    border-radius: 15px;
    border: 1px solid #FFF;
    background: rgba(24, 24, 27, 0.25);
    box-shadow: 0px 0px 129px 12px rgba(255, 255, 255, 0.131) inset, 0px 4px 165px -50px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(15px);
}

  
*{
    font-family: 'Poppins', sans-serif;
    transition: all 300ms;
}
</style>