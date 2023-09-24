<template>
    <section class="blogContainer">
        <template v-for="post in postsList" :key="post.id">
            <Post :src="post['cover_image']" :url="post.url" :tags="post['tag_list']">
                <template #title>{{ post.title }}</template>
                <template #desc>{{ post.description }}</template>
            </Post>
            
        </template>
    </section>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import Post from '../components/Post.vue';

const postsList = ref([])

onBeforeMount(async() => {
    await fetch('https://dev.to/api/articles?username=webdavi').then(res=>res.json()).then(res=>{
        postsList.value = res
    })
})
</script>

<style scoped>
.blogContainer{
    @apply w-full h-max flex flex-row flex-wrap justify-center gap-4
}
</style>