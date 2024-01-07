<template>
    <main class="w-full min-h-screen">
        <Techs/>
    </main>
</template>

<script setup>
import Techs from '../views/Techs.vue'
import { onMounted } from 'vue';
import { useAsideStore } from '../store/Aside';
const asideStore = useAsideStore()

onMounted(() => {
    asideStore.updateShow(false)
})
</script>