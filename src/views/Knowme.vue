<template>
    <section class="knowmeContainer">
        <div class="profile" data-aos="fade-right" data-aos-duration="800">
            <img src="https://avatars.githubusercontent.com/u/89264926?v=4" alt="Luís Daví Rebouças | Foto de perfil" />
            <div class="info">
                <h1 class="font-bold" id="name">Luís Daví Rebouças</h1>
                <p class="text-lg opacity-70" id="desc">Desenvolvedor Front-end Jr.</p>
                <div class="w-full flex flex-wrap flex-row gap-2 mt-1">
                    <div v-for="skill, index in skillStore.getSkills" 
                    :class="{'bg-zinc-800 text-white': themeStore.getTheme, 'bg-zinc-400/25 text-zinc-800': !themeStore.getTheme}" class="w-max h-max px-2  text-xs sm:text-sm font-medium rounded-full">{{ skill.skillName }}</div>
                </div>
            </div>
        </div>
        <div class="about"  data-aos="fade-right" data-aos-duration="800" data-aos-delay="300"
        :class="{'border-zinc-700':themeStore.getTheme, 'border-zinc-400/50': !themeStore.getTheme}">
            <h1 class="text-xl font-bold"> 👋🏼 Sobre mim</h1>
            <p class="text-base xl:text-lg opacity-70">
                Oi, meu nome é Luís Daví, e aos meus 19 anos, sou completamente apaixonado por tecnologia. Desde que me lembro, fui cativado pelo mundo da inovação e do progresso tecnológico. É incrível como a tecnologia está constantemente mudando e moldando nosso mundo, e sinto que estou apenas começando a explorar as vastas possibilidades de aprendizado e conquista que essa área oferece.
            </p>
        </div>
        <div class="w-full flex flex-col lg:flex-row gap-4" id="stats">
            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="600" 
            class="min-h-full flex flex-col justify-between gap-4 p-4 rounded-md border"  :class="{'border-zinc-700':themeStore.getTheme, 'border-zinc-400/50': !themeStore.getTheme}">
                <span class="font-bold text-xl flex flex-row items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>
                    Github
                </span>
                <div class=" h-full flex flex-col gap-4 text-left justify-between">
                    <div class="w-full flex flex-row gap-6 items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
                        <span class="flex-1 font-semibold">Total de Estrelas: </span>
                        <span class="w-max font-semibold">10</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16v-2h1V4H6v10.035c.163-.023.33-.035.5-.035H8v2H6.5a1.5 1.5 0 0 0 0 3H10v2H6.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-4v-2h3v-3zM7 5h2v2H7zm0 3h2v2H7zm7 9v6h-2v-6H9l4-5l4 5z"/></svg>
                        <span class="flex-1 font-semibold">Total de commits(últimos 365 dias): </span>
                        <span class="w-max font-semibold">230</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m12 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 8v8"/><path d="M11 6h5a2 2 0 0 1 2 2v8"/><path d="m14 9l-3-3l3-3"/></g></svg>
                        <span class="flex-1 font-semibold">Total de PRs(últimos 365 dias): </span>
                        <span class="w-max font-semibold">23</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12.7 11.2l-1.45-1.425q-.275-.275-.687-.275t-.713.3q-.275.275-.275.7t.275.7L12 13.35q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.288-.7t-.288-.7q-.3-.3-.712-.312t-.713.287zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6q.425 0 .713.288T4 7v13h13q.425 0 .713.288T18 21q0 .425-.288.713T17 22z"/></svg>
                        <span class="flex-1 font-semibold">Total de Contribuições(últimos 365 dias): </span>
                        <span class="w-max font-semibold">2</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6.75 11.5c2.75 0 3.49-2.03 3.68-3.1c.91-.29 1.57-1.14 1.57-2.15C18 7 17 6 15.75 6S13.5 7 13.5 8.25c0 .94.57 1.75 1.39 2.08C14.67 11 14 12 12 12c-1.38 0-2.34.35-3 .84V8.87c.87-.31 1.5-1.14 1.5-2.12c0-1.25-1-2.25-2.25-2.25S6 5.5 6 6.75c0 .98.63 1.81 1.5 2.12v6.26c-.87.31-1.5 1.14-1.5 2.12c0 1.25 1 2.25 2.25 2.25s2.25-1 2.25-2.25c0-.93-.56-1.75-1.37-2.07c.28-.68 1.1-1.68 3.62-1.68m-4.5 3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0-10.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m7.5 1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75"/></svg>
                        <span class="flex-1 font-semibold">Total de repositórios: </span>
                        <span class="w-max font-semibold">{{ githubUser["public_repos"] }}</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M14 14.252v2.09A6 6 0 0 0 6 22H4a8 8 0 0 1 10-7.749M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m5.793 8.914l3.535-3.535l1.415 1.414l-4.95 4.95l-3.536-3.536l1.415-1.414z"/></svg>
                        <span class="flex-1 font-semibold">Seguidores: </span>
                        <span class="w-max font-semibold">{{ githubUser["followers"] }}</span>
                    </div>
                    <div class="w-full flex flex-row gap-6 items-center  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm5.414-4.919a1 1 0 0 1 1.498 1.32l-.084.095L20 13.324a1 1 0 0 1-1.32.083l-.094-.083l-1.414-1.414a1 1 0 0 1 1.32-1.498l.094.084l.707.707zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"/></g></svg>
                        <span class="flex-1 font-semibold">Seguindo: </span>
                        <span class="w-max font-semibold">{{ githubUser["following"] }}</span>
                    </div>
                </div>
                <a href="https://github.com/webldavi" target="_blank" class="w-full h-max p-2 text-center bg-purple-600 transition-all rounded-md font-semibold hover:bg-purple-500">
                    Visitar Perfil
                </a>
            </div>

            <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="900" 
            class="min-h-full flex flex-col gap-4 p-4 rounded-md border"  :class="{'border-zinc-700':themeStore.getTheme, 'border-zinc-400/50': !themeStore.getTheme}">
                <span class="font-bold text-xl flex flex-row items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 485 672" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M312.478 32.5987C303.853 22.4603 293.128 14.3171 281.045 8.73262C268.963 3.14817 255.811 0.255859 242.5 0.255859C229.189 0.255859 216.037 3.14817 203.955 8.73262C191.872 14.3171 181.147 22.4603 172.522 32.5987L171.236 34.13C168.089 37.8217 164.11 40.7131 159.627 42.5659C155.144 44.4188 150.284 45.1802 145.449 44.7875L143.459 44.6343C130.196 43.5714 116.861 45.4018 104.375 49.9991C91.8888 54.5963 80.5504 61.8506 71.1436 71.2603C61.7368 80.67 54.486 92.0107 49.8926 104.498C45.2993 116.985 43.4729 130.321 44.54 143.584L44.6625 145.574C45.0553 150.409 44.2939 155.269 42.441 159.752C40.5881 164.235 37.6967 168.214 34.005 171.361L32.4737 172.647C22.3353 181.272 14.1921 191.997 8.60766 204.08C3.02321 216.162 0.13089 229.314 0.13089 242.625C0.13089 255.936 3.02321 269.088 8.60766 281.17C14.1921 293.253 22.3353 303.978 32.4737 312.603L34.005 313.889C37.6967 317.036 40.5881 321.015 42.441 325.498C44.2939 329.981 45.0553 334.841 44.6625 339.676L44.5094 341.666C42.6852 364.44 49.4059 387.077 63.3617 405.166C77.3176 423.255 97.5087 435.499 120 439.513V640.75C119.999 646.294 121.504 651.735 124.353 656.492C127.202 661.248 131.289 665.142 136.177 667.757C141.066 670.373 146.573 671.613 152.111 671.344C157.649 671.075 163.01 669.307 167.622 666.23L242.5 616.311L317.378 666.23C321.99 669.307 327.351 671.075 332.889 671.344C338.427 671.613 343.934 670.373 348.823 667.757C353.711 665.142 357.798 661.248 360.647 656.492C363.496 651.735 365.001 646.294 365 640.75V439.544C387.497 435.529 407.693 423.281 421.649 405.185C435.606 387.09 442.323 364.445 440.491 341.666L440.337 339.676C439.945 334.841 440.706 329.981 442.559 325.498C444.412 321.015 447.303 317.036 450.995 313.889L452.526 312.603C462.665 303.978 470.808 293.253 476.392 281.17C481.977 269.088 484.869 255.936 484.869 242.625C484.869 229.314 481.977 216.162 476.392 204.08C470.808 191.997 462.665 181.272 452.526 172.647L450.995 171.361C447.303 168.214 444.412 164.235 442.559 159.752C440.706 155.269 439.945 150.409 440.337 145.574L440.491 143.584C441.554 130.321 439.723 116.986 435.126 104.5C430.529 92.0138 423.274 80.6754 413.865 71.2685C404.455 61.8617 393.114 54.6109 380.627 50.0176C368.14 45.4242 354.804 43.5979 341.541 44.665L339.551 44.7875C334.716 45.1802 329.856 44.4188 325.373 42.5659C320.89 40.7131 316.911 37.8217 313.764 34.13L312.478 32.5987ZM181.25 583.543V461.594C198.101 476.647 219.905 484.968 242.5 484.968C265.095 484.968 286.899 476.647 303.75 461.594V583.481L259.497 553.989C254.464 550.632 248.55 548.84 242.5 548.84C236.45 548.84 230.536 550.632 225.503 553.989L181.25 583.543ZM325.402 233.652C330.98 227.876 334.067 220.14 333.997 212.11C333.928 204.08 330.707 196.399 325.029 190.721C319.351 185.043 311.67 181.822 303.64 181.752C295.61 181.683 287.874 184.77 282.098 190.348L211.875 260.571L202.902 251.598C197.126 246.02 189.39 242.933 181.36 243.002C173.33 243.072 165.649 246.293 159.971 251.971C154.293 257.649 151.072 265.33 151.002 273.36C150.933 281.39 154.02 289.126 159.598 294.902L190.223 325.527C195.966 331.268 203.754 334.493 211.875 334.493C219.996 334.493 227.784 331.268 233.527 325.527L325.402 233.652Z" fill="url(#paint0_linear_205_5)"/><defs><linearGradient id="paint0_linear_205_5" x1="242.5" y1="0.255859" x2="242.5" y2="671.38" gradientUnits="userSpaceOnUse"><stop stop-color="#C78F00"/><stop offset="0.445" stop-color="#FFE5A2"/><stop offset="1" stop-color="#FFB800"/></linearGradient></defs></svg>
                    Principais cursos e eventos
                </span>
                <div class="w-full max-h-[98%] flex-1 flex flex-col gap-4 p-1">
                    <div @click="showCertificate(course)" class="flex flex-row gap-2 hover:bg-zinc-700/50 rounded-md cursor-pointer" v-for="(course, i) in courses" :key="i">
                        <img class="w-14 h-14 rounded-md " :src="course.img" alt="Capa do curso">
                        <div class="flex flex-col ">
                            <span class="font-bold text-sm sm:text-base">{{ course.name }}</span>
                            <span class="opacity-70 text-xs sm:text-sm">{{ course.date }} | {{ course.certificate ? 'Com certificado' : 'Sem certificação' }}</span>
                        </div>
                    </div>
                </div>
                <a href="/Luis_Davi_Rebouças.pdf" target="_blank" class="w-full h-max p-2 text-center bg-purple-600 transition-all rounded-md font-semibold hover:bg-purple-500">
                    Baixar Currículo
                </a>
            </div>
        </div>
        <div class="w-full p-4 flex flex-col gap-4 border rounded-md" data-aos="fade-right" data-aos-duration="800" :class="{'border-zinc-700':themeStore.getTheme, 'border-zinc-400/50': !themeStore.getTheme}">
            <span class="font-bold text-xl flex flex-row items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f2265id5)"><path fill="url(#f2265id0)" d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.599 1.599 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"/><path fill="url(#f2265id1)" d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.599 1.599 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"/><path fill="url(#f2265id2)" d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.599 1.599 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"/><path fill="url(#f2265id3)" d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.599 1.599 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"/><path fill="url(#f2265id4)" d="M2.675 13.65C4.61 9.86 9.057 5.378 16.172 5.378c7.134 0 11.531 4.247 13.457 8.311a2.61 2.61 0 0 1 .04 2.731c-2.504 4.324-6.383 8.272-13.497 8.272c-.947 0-1.878-.041-2.73-.162c-.46-.065-.934-.007-1.342.214c-1.155.623-2.315 1.3-3.795 2.135a.657.657 0 0 1-.98-.613l.217-3.409a1.599 1.599 0 0 0-.584-1.315c-1.73-1.456-3.085-3.288-4.243-5.171c-.525-.851-.544-1.86-.04-2.721"/></g><g filter="url(#f2265id6)"><path fill="url(#f2265id8)" d="m8.738 21.117l-.584 4.505a.25.25 0 0 0 .373.249l3.922-2.28l-1.268-2.258z"/></g><g filter="url(#f2265id7)"><ellipse cx="16.172" cy="16.172" fill="#DBD1F0" fill-opacity=".5" rx="8.72" ry="5.69"/></g><defs><radialGradient id="f2265id0" cx="0" cy="0" r="1" gradientTransform="rotate(108.693 9.138 11.635)scale(17.3662 42.1894)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#D7C6DE"/></radialGradient><radialGradient id="f2265id1" cx="0" cy="0" r="1" gradientTransform="matrix(-9.27646 -17.1923 24.86346 -13.4156 11.585 22.57)" gradientUnits="userSpaceOnUse"><stop offset=".619" stop-color="#CECECE" stop-opacity="0"/><stop offset="1" stop-color="#CECECE"/></radialGradient><radialGradient id="f2265id2" cx="0" cy="0" r="1" gradientTransform="matrix(-28.94244 -4.57627 6.61819 -41.8565 27.664 23.436)" gradientUnits="userSpaceOnUse"><stop offset=".781" stop-color="#CECECE" stop-opacity="0"/><stop offset="1" stop-color="#CECECE"/></radialGradient><radialGradient id="f2265id3" cx="0" cy="0" r="1" gradientTransform="matrix(22.01604 -17.56335 25.40005 31.8395 12.08 24.673)" gradientUnits="userSpaceOnUse"><stop offset=".645" stop-color="#CECECE" stop-opacity="0"/><stop offset="1" stop-color="#CECECE"/></radialGradient><radialGradient id="f2265id4" cx="0" cy="0" r="1" gradientTransform="matrix(3.95805 25.4792 -28.34266 4.40287 15.42 8.347)" gradientUnits="userSpaceOnUse"><stop offset=".464" stop-color="#B6A8F2" stop-opacity="0"/><stop offset="1" stop-color="#B6A8F2"/></radialGradient><filter id="f2265id5" width="27.726" height="21.598" x="2.309" y="5.378" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy=".01"/><feGaussianBlur stdDeviation=".25"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 0 0.758333 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_7154_6147"/></filter><filter id="f2265id6" width="6.297" height="6.789" x="7.152" y="20.117" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_7154_6147" stdDeviation=".5"/></filter><filter id="f2265id7" width="27.44" height="21.379" x="2.452" y="5.482" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_7154_6147" stdDeviation="2.5"/></filter><linearGradient id="f2265id8" x1="10.268" x2="13.191" y1="26.404" y2="20.931" gradientUnits="userSpaceOnUse"><stop stop-color="#DCD0F4"/><stop offset="1" stop-color="#DED0F9" stop-opacity="0"/></linearGradient></defs></g></svg>
                Entre em contato comigo
            </span>
            <p class="font-medium opacity-80">Combinando paixão e habilidades técnicas, sou um programador front-end em busca de desafios inspiradores. Se você busca um colaborador dedicado e criativo para seus projetos, estou pronto para contribuir. Além do WhatsApp e e-mail, fique à vontade para conectar-se através de outras redes sociais, como GitHub e LinkedIn. Estou ansioso para discutir como podemos trabalhar juntos para alcançar resultados excepcionais.</p>
            <div class="links">
                    <a v-for="link in links" :key="link.id" :class="{
                        'text-white hover:bg-purple-600': themeStore.getTheme,
                    }" :aria-label="link.desc"
                        :title="link.desc" target="_blank" :href="link.url">
                        <component :is="link.icon" alt="awdawd"></component>
                    </a>
                </div>
        </div>
        <div @click="()=> showCourseImage = false" :class="{'closed': !showCourseImage, 'opened': showCourseImage}" class="w-full h-full transition-all duration-500 fixed top-0 left-0 z-20 py-8 px-40 bg-zinc-900/50 backdrop-blur">
            <img class="w-full h-full rounded-md" :src="`/${currentCourseImage}.webp`" alt="Certificado" id="certificate">
            <div class="absolute top-8 right-8 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Email from "../icons/Email.vue"
import Github from "../icons/Github.vue"
import Linkedin from "../icons/Linkedin.vue"
import Devto from "../icons/Devto.vue"
import Instagram from "../icons/Instagram.vue"
import { useThemeStore } from "../store/theme";
import { useSkillStore } from '../store/Skills';
import Whats from "../icons/whats.vue";

const themeStore = useThemeStore()
const skillStore = useSkillStore()
const links = ref([
    {
        icon: Whats,
        desc: "Link para meu whatsapp",
        id: Date.now(),
        url: "https://api.whatsapp.com/send?phone=5584999153350"
    },
    {
        icon: Email,
        desc: "link para o meu email",
        id: Date.now(),
        url: "mailto:luisdavi.contato@gmail.com"
    },
    {
        icon: Linkedin,
        desc: "link para o meu Linkedin",
        id: Date.now(),
        url: "https://www.linkedin.com/in/luisdav1"
    },
    {
        icon: Instagram,
        desc: "link para o meu instagram",
        id: Date.now(),
        url: "https://instagram.com/lu1s.dev"
    },
    {
        icon: Github,
        desc: "link para o meu Github",
        id: Date.now(),
        url: "https://github.com/webldavi"
    },
    {
        icon: Devto,
        desc: "link para o meu perfil na dev.to",
        id: Date.now(),
        url: "https://dev.to/webdavi"
    },
    

])

const currentCourseImage = ref('nlwia')
const showCourseImage = ref(false)

const courses = ref([
    {
        name: 'Discorver - Rocketseat',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJnRvWRy-78AaXMifCtdKqZ5BA_PQdfWU7CGnxzm-WTd7r1UACynBVKFMuH8cJ8Mb3Is&usqp=CAU',
        date: '09/07 - de 2023', 
        certificate: true,
        file: 'discover'
    },
    {
        name: 'NLW IA - Rocketseat',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhppcZ9Ven366K7U3fKnJlRLGotYb6PxVw-TzkbCb1eiV9qS_dnBysMKZwk2zia9U_xI&usqp=CAU',
        date: '11/09 - 14/09 de 2023', 
        certificate: true,
        file: 'nlwia'
    },
    {
        name: 'Web Back-End - Senac',
        img: 'https://www.economiasc.com.br/wp-content/uploads/2021/10/senac-mg-abre-inscricao-para-5-mil-vagas-de-cursos-gratuitos.png',
        date: '05/07 - 08/09 de 2023', 
        certificate: true,
        file: 'devbackend'
    },
    {
        name: 'Curso introdutório ao Vue.js - Dio',
        img: 'data:image/png;base64,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',
        date: '02/09 de 2023', 
        certificate: true,
        file: "introvuejs"
    },
    {
        name: 'Curso de Nuxt.js 2 - Youtube',
        img: 'data:image/png;base64,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',
        date: 'Abril de 2023', 
        certificate: false,
    },
])

function showCertificate(course){
    if(Object.keys(course).includes('file')){
        currentCourseImage.value = course.file
        showCourseImage.value = true
    }
}

const githubUser = ref([])

onMounted(async() => {
    await fetch('https://api.github.com/users/webldavi').then(response => response.json()).then(response=> {
        githubUser.value = response
})
    
})

</script>

<style scoped>
@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
#name{
    animation-delay: 300ms;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    @apply w-[200px] sm:w-[240px]
}
.knowmeContainer {
    @apply w-full h-max flex flex-col gap-4 items-center lg:items-start
}

.profile {
    @apply w-full flex flex-row items-center gap-4
}

.about{
    @apply w-full p-4 rounded-md border
}

.profile .info{
    @apply w-full
}

.profile img {
    @apply w-24 rounded
}

.links {
    @apply w-full h-max flex flex-row flex-wrap gap-2 items-center justify-start
}

.links a {
    @apply w-max h-max p-3 flex items-center justify-center transition-all rounded-lg cursor-pointer hover:-translate-y-2 hover:shadow
}

#stats * svg{

    @apply text-[#b600ff] 
}

#certificate{
    object-fit: cover;
}

.closed{
    @apply -translate-x-[3000px]
}
.opened{
    @apply translate-x-0
}

@media (min-width: 1024px) {
    #stats > div{
        width: calc(50% - 0.5rem);
    }
}

#name{
    @apply text-xl sm:text-2xl
}

#desc{
    @apply text-sm sm:text-xl
}
</style>