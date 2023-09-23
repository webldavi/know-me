<template>

    <div class="cardContainer">
        <img :src="`/${props.image}.png`" alt="">
        <div class="content">
            <h1 class="text-xl font-bold">{{ props.title }}</h1>
            <p class="font-semibold opacity-70">{{ props.desc }}</p>
            <div class="w-full flex flex-row gap-2">
                <span class="text-green-500 font-bold">
                    Completo
                </span>
                <a class="font-bold text-sky-500" :href="props.link" target="_blank">
                    Link
                </a>
            </div>
            <div class="w-full flex flex-row flex-wrap gap-2">
                <img class="h-6 w-6" v-for="tech in props.techs" :key="tech.name" :src="tech.src">
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps(["image", "title", "desc", "techs", "link"])
</script>
<style scoped>
.cardContainer{
    @apply w-[18rem] h-[18rem] flex flex-col gap-4 
    relative overflow-hidden shadow shadow-zinc-400
    rounded-lg
}
.content{
    /* background: linear-gradient(0deg, rgba(39,39,42,1) 0%, rgba(39,39,42,0.958420868347339) 25%, rgba(39,39,42,0.908000700280112) 40%, rgba(39,39,42,0) 100%); */
    transition: all 500ms;
    @apply absolute p-4 bg-zinc-800/75 backdrop-blur rounded-t-lg text-white 
    h-max  w-full -bottom-[20rem]
    flex flex-col gap-3
}

.cardContainer:hover > .content{
    @apply bottom-0 h-[18rem]
}
.cardContainer:hover > img{
    @apply scale-125
}

.cardContainer > img{
    @apply w-full h-full transition-all
}


</style>