<script setup>
import { ref } from 'vue'
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


function sendMessage() {
    message.value = message.value
        .replace('{name}', form.value.name || 'Anônimo')
        .replace('{subject}', form.value.subject || 'Sem assunto')
        .replace('{message}', form.value.message || 'Mensagem vazia')

    window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(5584999153350)}&text=${encodeURIComponent(message.value)}`)
}


</script>

<template>
    <main class="w-full h-max min-h-screen flex flex-col gap-24 text-white overflow-hidden">
        <section class="w-full min-h-screen flex items-center justify-end" id="formSection">
            <div class="flex flex-col items-center justify-between gap-2 w-full md:max-w-[60vw] h-full">
                <div class="flex flex-col h-max w-max mb-2">
                    <h1 class="border-b-2 py-1 border-white text-2xl font-bold">Luís Daví Rebouças</h1>
                    <h2 class="text-xl">Desenvolvimento de lading pages</h2>
                </div>
                <div class="w-full h-max min-h-[20rem] flex flex-col items-center gap-6 p-2" id="form">
                    <div class="flex flex-row gap-2 items-center">
                        <img src="/Bitmap.png" alt="Emoji" class="w-12 h-12">
                        <h1 class="font-bold text-lg">Preencha o formulário<br> e entre em contato comigo!</h1>

                    </div>
                    <div class="flex flex-wrap justify-center w-full h-max px-2 pb-2 gap-y-4">
                        <input type="text" class="w-[49%]" placeholder="Seu nome" v-model="form.name">
                        <select v-model="form.subject"
                            class="w-[49%] bg-transparent text-white  toutline-none border-b border-zinc-200/50"
                            placeholder="Seu Objetivo">
                            <option value="" disabled class="text-black/50">O que deseja fazer?</option>
                            <option value="Orçamento">Orçamento</option>
                            <option value="Dúvida">Tirar Dúvidas</option>
                        </select>
                        <textarea v-model="form.message" placeholder="Escreva sua mensagem"></textarea>
                        <button @click="sendMessage"
                            id="buttonForm"
                            class="w-full p-2 rounded font-bold text-zinc-800 hover:text-zinc-100 transition-all
                            bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600 border border-emerald-300
                             hover:from-emerald-800 hover:via-emerald-500 hover:to-emerald-800 hover:border-emerald-500
                            ">Quero minha própria página
                            web!</button>
                    </div>
                </div>
                <div class="w-full h-max flex gap-4 flex items-center justify-end opacity-70">
                    <div class="flex flex-row gap-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
                                <path stroke-linejoin="round" stroke-miterlimit="1.5"
                                    d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" />
                                <path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9" />
                                <path stroke-linejoin="round" d="M2 9h4" />
                                <path
                                    d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1" />
                            </g>
                        </svg>
                        <span class="font-bold">Prazo de entrega de até duas semana</span>
                    </div>
                    <div class="flex flex-row gap-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path fill="currentColor"
                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm88 104a87.62 87.62 0 0 1-6.4 32.94l-44.7-27.49a15.92 15.92 0 0 0-6.24-2.23l-22.82-3.08a16.11 16.11 0 0 0-16 7.86h-8.72l-3.8-7.86a15.91 15.91 0 0 0-11-8.67l-8-1.73L96.14 104h16.71a16.06 16.06 0 0 0 7.73-2l12.25-6.76a16.62 16.62 0 0 0 3-2.14l26.91-24.34A15.93 15.93 0 0 0 166 49.1l-.36-.65A88.11 88.11 0 0 1 216 128Zm-176 0a87.53 87.53 0 0 1 8.54-37.8l11.34 30.27a16 16 0 0 0 11.62 10l21.43 4.61l3.81 7.92a16.09 16.09 0 0 0 14.4 9h1.48l-7.23 16.23a16 16 0 0 0 2.86 17.37l.14.14l19.61 20.2l-1.94 10A88.11 88.11 0 0 1 40 128Z" />
                        </svg>
                        <span class="font-bold">Aumente sua presença online!</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full min-h-screen flex flex-col md:flex-row items-center justify-center" :style="{padding: '3rem'}" id="ladingAbout">
            <div class="flex flex-col items-center gap-12 flex-1">
                <div class="flex gap-2 items-center justify-center">
                    <img src="/website.png" alt="Emoji" class="w-24 h-24">
                    <h1 class="text-4xl lg:text-6xl font-bold">O que é uma lading page?</h1>
                </div>
                <p class="w-full max-w-[72rem] text-xl text-center opacity-80">Uma landing page é uma página da web criada para direcionar a atenção do visitante a uma oferta específica e incentivá-lo a tomar uma ação desejada, como preencher um formulário ou fazer uma compra. É projetada para conversões eficazes.</p>
            </div>
            <div class="flex-1 h-full flex items-center justify-center">
                <img src="/websitess.png" alt="websites">
            </div>
            
        </section>
        <section class="w-full min-h-screen flex flex-col items-center gap-2" id="">
            <div class="flex flex-col items-center gap-2">
                <div class="flex gap-2 items-center justify-center">
                    <img src="/bullseye.png" alt="Emoji" class="w-24 h-24">
                    <h1 class="text-4xl lg:text-6xl font-bold">Quais as vantagens?</h1>
                </div>
                <p class="w-full max-w-[80vw] text-xl text-center opacity-80">Uma landing page eficaz é uma ferramenta valiosa para
                    qualquer negócio. Ela simplifica a conversão de visitantes em clientes, fornece informações claras,
                    aumenta a visibilidade e ajuda a economizar tempo e recursos. Potencialize seu sucesso online com uma
                    landing</p>
                <div class="flex flex-wrap gap-4 mt-20 w-full justify-center gap-y-10">
                    <div class="flex flex-col  max-w-[28rem] gap-4">
                        <div class="flex gap-2 items-center">
                            <img src="/1st.png" alt="Emoji" class="w-16 h-16">
                            <h1 class="text-3xl h-max font-bold">Atração de clientes</h1>
                        </div>
                        <p class="pl-[4.5rem] opacity-80 text-left text-xl">
                            Uma landing page é uma poderosa ferramenta de atração de clientes, fornecendo informações
                            diretas e cativantes, incentivando visitantes a tomar medidas específicas, como inscrições ou
                            compras. Ela simplifica o processo de conversão, resultando em mais leads e clientes para o seu
                            negócio.</p>
                    </div>
                    <div class="flex flex-col  max-w-[28rem] gap-4">
                        <div class="flex gap-2 items-center">
                            <img src="/2st.png" alt="Emoji" class="w-16 h-16">
                            <h1 class="text-3xl h-max font-bold">Economia de tempo</h1>
                        </div>
                        <p class="pl-[4.5rem] opacity-80 text-left text-xl">Ter uma landing page economiza tempo ao oferecer
                            informações claras e diretas aos visitantes, acelerando a tomada de decisão e a conversão.
                            Simplifica o processo de comunicação, poupando tempo tanto para os clientes quanto para os
                            prestadores de serviços. </p>
                    </div>
                    <div class="flex flex-col  max-w-[28rem] gap-4">
                        <div class="flex gap-2 items-center">
                            <img src="/3st.png" alt="Emoji" class="w-16 h-16">
                            <h1 class="text-3xl h-max font-bold">Facilidade de compartilhamento</h1>
                        </div>
                        <p class="pl-[4.5rem] opacity-80 text-left text-xl">Uma landing page simplifica o compartilhamento de
                            informações,
                            fornecendo um link único que pode ser facilmente compartilhado em diversos canais, tornando a
                            divulgação dos serviços mais acessível e eficaz.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full min-h-screen flex flex-col items-center gap-2" id="">
            <div class="w-max h-max p-2 ml-20 px-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600 border border-emerald-300 text-emerald-950 flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.285 2.142a3 3 0 0 0-4.57 0l-.042.05a1 1 0 0 1-.842.348l-.065-.005a3 3 0 0 0-3.23 3.231l.004.065a1 1 0 0 1-.348.842l-.05.042a3 3 0 0 0 0 4.57l.05.042a1 1 0 0 1 .348.842l-.005.065A3.002 3.002 0 0 0 8 15.429V22a1 1 0 0 0 1.555.832L12 21.202l2.445 1.63A1 1 0 0 0 16 22v-6.57a3.002 3.002 0 0 0 2.465-3.196l-.005-.065a1 1 0 0 1 .348-.842l.05-.042a3 3 0 0 0 0-4.57l-.05-.042a1 1 0 0 1-.348-.842l.005-.065a3 3 0 0 0-3.231-3.23l-.065.004a1 1 0 0 1-.842-.348l-.042-.05ZM10 20.132V16.15a3.002 3.002 0 0 0 4 0v3.98l-1.445-.963a1 1 0 0 0-1.11 0L10 20.131Zm4.707-11.425a1 1 0 0 0-1.414-1.414L11 9.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l3-3Z" clip-rule="evenodd"/></svg>
                <h1 class="font-bold text-lg">Selo de qualidade</h1>
            </div>
            <div class="flex flex-col items-center gap-2">
                <div class="flex gap-2 items-center justify-center">
                    <img src="/truck.png" alt="Emoji" class="w-24 h-24">
                    <h1 class="text-4xl lg:text-6xl font-bold">Entregas</h1>
                </div>
                <p class="w-full max-w-[80vw] text-xl text-center opacity-80">Uma landing page eficaz é uma ferramenta valiosa para
                    qualquer negócio. Ela simplifica a conversão de visitantes em clientes, fornece informações claras,
                    aumenta a visibilidade e ajuda a economizar tempo e recursos. Potencialize seu sucesso online com uma
                    landing</p>
            </div>
            <div class="flex flex-wrap gap-4 mt-20 w-full justify-center gap-y-10 text-sinc-200" id="cardList">
                <div class="w-72 h-[215px] border border-zinc-200 bg-zinc-200/10 p-4
                shadow-lg shadow-zinc-200/20 
                rounded-[25px] flex flex-col gap-2 items-center">
                    <div class="flex gap-4 p-2 items-center justify-center border-b border-zinc-200 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" stroke-miterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/><path stroke-linejoin="round" d="M2 9h4"/><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/></g></svg>
                        <h1 class="font-bold">ENTREGA RÁPIDA</h1>
                    </div>
                    <p class="text-justify">
                        Nossas landing pages são entregues rapidamente graças à minha dedicação exclusiva, experiência e eficiência operacional
                    </p>
                </div>
                <div class="w-72 h-[215px] border border-zinc-200 bg-zinc-200/10 p-4
                shadow-lg shadow-zinc-200/20 
                rounded-[25px] flex flex-col gap-2 items-center">
                    <div class="flex gap-4 p-2 items-center justify-center border-b border-zinc-200 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 13.1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V23h2.1l6.1-6.1l-2.1-2M21 3h-8v6h8V3m-2 4h-4V5h4v2m-6 11.06V11h8v.1c-.76 0-1.43.4-1.81.79L18.07 13H15v3.07l-2 1.99M11 3H3v10h8V3m-2 8H5V5h4v6m2 9.06V15H3v6h8v-.94M9 19H5v-2h4v2Z"/></svg>
                        <h1 class="font-bold">DESIGN ÚNICO</h1>
                    </div>
                    <p class="text-justify">
                        Designs de landing pages exclusivos que refletem a singularidade da sua marca e cativam seu público-alvo.
                    </p>
                </div>
                <div class="w-72 h-[215px] border border-zinc-200 bg-zinc-200/10 p-4
                shadow-lg shadow-zinc-200/20 
                rounded-[25px] flex flex-col gap-2 items-center">
                    <div class="flex gap-4 p-2 items-center justify-center border-b border-zinc-200 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m-1 2h1.5v3.78l2.33 2.33l-1.06 1.06L14 12.4V8M2 18a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3.83c.31.71.71 1.38 1.17 2H2m1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h2.05L5 12l.05 1H3m1-5a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3c-.46.62-.86 1.29-1.17 2H4Z"/></svg>
                        <h1 class="font-bold">VELOCIDADE DE CARREGAMENTO</h1>
                    </div>
                    <p class="text-justify">
                        Landing pages eficientes e ágeis, otimizadas para carregamento rápido e melhor experiência do usuário.
                    </p>
                </div>
                <div class="w-72 h-[215px] border border-zinc-200 bg-zinc-200/10 p-4
                shadow-lg shadow-zinc-200/20 
                rounded-[25px] flex flex-col gap-2 items-center">
                    <div class="flex gap-4 p-2 items-center justify-center border-b border-zinc-200 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6H4M0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2H0m11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1h-1m-2-8v7h5v-7h-5Z"/></svg>
                        <h1 class="font-bold">RESPONSIVIDADE</h1>
                    </div>
                    <p class="text-justify">
                        Priorizamos a responsividade para garantir que suas landing pages se adaptem perfeitamente a todos os dispositivos e telas..
                    </p>
                </div>
                <div class="w-72 h-[215px] border border-zinc-200 bg-zinc-200/10 p-4
                shadow-lg shadow-zinc-200/20 
                rounded-[25px] flex flex-col gap-2 items-center">
                    <div class="flex gap-4 p-2 items-center justify-center border-b border-zinc-200 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17.73 19.875A2.225 2.225 0 0 1 15.782 21H8.499a2.222 2.222 0 0 1-1.947-1.158l-4.272-6.75a2.269 2.269 0 0 1 0-2.184l4.272-6.75A2.225 2.225 0 0 1 8.498 3h7.285c.809 0 1.554.443 1.947 1.158l3.98 6.75a2.33 2.33 0 0 1 0 2.25l-3.98 6.75v-.033z"/><path d="M8 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l2 2"/></g></svg>
                        <h1 class="font-bold">SEO OTIMIZADO</h1>
                    </div>
                    <p class="text-justify">
                        Nossas landing pages têm SEO otimizado para melhorar a visibilidade online, alcançando mais potenciais clientes.
                    </p>
                </div>
                

            </div>
        </section>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
    font-family: 'Poppins', sans-serif;
    transition: all 300ms;
}

input {
    @apply outline-none bg-transparent border-b border-zinc-200/50 px-2 py-1
}

body {
    background-color: #18181b;
}

select>* {
    @apply text-black rounded-lg
}

section {
    @apply p-6
}

main {
    @apply bg-[#18181b]
}


textarea {
    @apply w-full h-52 bg-transparent outline-none border border-zinc-200/50 rounded p-2
}
#cardList * svg{
    @apply text-emerald-300
}
#formSection {
    background-image: url('/linksBackground.png');
    background-position: center;
    background-size: cover;
}

#form {
    border-radius: 15px;
    border: 1px solid #FFF;
    background: rgba(24, 24, 27, 0.25);
    box-shadow: 0px 0px 129px 12px rgba(255, 255, 255, 0.131) inset;
    backdrop-filter: blur(15px);
}
/* #buttonForm{
    transition: all 300ms;
    background: linear-gradient(180deg, #059669 0%, #6EE7B7 50%, #059669 100%);
    stroke-width: 4px;
    stroke: #6EE7B7;
}
#buttonForm:hover{
    background: linear-gradient(180deg, #036949 0%, #54b890 50%, #036949 100%);
} */
</style>