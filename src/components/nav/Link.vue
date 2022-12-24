<template>
    <div class="border-b-2 border-transparent transition hover:border-gray-300 cursor-pointer" @click="Scroll()">
        {{ props.name }}
    </div>

</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name: String,
    scroll: Number
})
function Scroll() {
    window.scroll({
        top: props.scroll,
        behavior: 'smooth'
    })
}

</script>
