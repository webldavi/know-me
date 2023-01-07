<template>
    <div class="w-full flex flex-row gap-2 items-center justify-center font-mono text-[#ffffff]">
        <div class="flex-1 border-2 border-[#22e3b4] h-0 rounded-full"></div>
        <div class="w-max border-2 border-[#22e3b4] rounded-full p-4 text-2xl">{{ props.name }}</div>
        <div class="flex-1 border-2 border-[#22e3b4] h-0 rounded-full"></div>
    </div>
</template>
<script setup>
const props = defineProps({
    name: String
})
</script>

