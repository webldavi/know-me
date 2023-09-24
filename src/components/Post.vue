<template>
    <div class="postContainer">
        <img :src="src" alt="banner da postagem">
        <div class="content">
            <div class="tags">
                <template v-for="(tag, index) in tags" :key="index">
                    <div>{{ tag }}</div>
                </template>
            </div>
            <h1><slot name="title"/></h1>
            <p><slot name="desc"/></p>
            <a :href="url" target="_blank">Saiba mais</a>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['src', 'tags', 'url'])
</script>
<style scoped>
.postContainer{
    @apply w-72 h-[28rem] flex flex-col gap-6 overflow-hidden rounded-lg
    shadow shadow-zinc-600/50
}
/* .postContainer > img{
    @apply h-52 
} */
.postContainer > .content{
    @apply px-3 pb-3 w-full flex flex-col gap-1 flex-1  justify-between
}
.postContainer > .content > .tags{
    @apply w-full flex flex-row gap-3 flex-wrap
}
.postContainer > .content > .tags > div{
    @apply p-2 text-xs bg-zinc-600/25 rounded-lg 
}
.postContainer > .content > h1{
    @apply text-lg font-semibold
}
.postContainer > .content > p{
    @apply text-sm opacity-75
}
.postContainer > .content > a{
    @apply w-full h-max p-2 bg-zinc-600/25 hover:bg-zinc-600/50 rounded-lg font-semibold text-center
}
</style>