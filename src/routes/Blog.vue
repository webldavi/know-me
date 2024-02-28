<template>
    <main class="w-full min-h-screen">
        <Blog/>
    </main>
</template>

<script setup>
import Blog from '../views/Blog.vue';

import { onMounted } from 'vue';

import { useAsideStore } from '../store/Aside';
const asideStore = useAsideStore()

onMounted(() => {
    asideStore.updateShow(false)
})
</script>