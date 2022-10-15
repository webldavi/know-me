<template>
    <div class="w-full flex flex-row gap-2 items-center justify-center font-mono text-white">
        <div class="flex-1 border-2 border-gray-300 h-0 rounded-full"></div>
        <div class="w-max border-2 border-gray-300 rounded-full p-4 text-2xl">{{name}}</div>
        <div class="flex-1 border-2 border-gray-300 h-0 rounded-full"></div>
    </div>
</template>
<script>
    export default{
        name: 'Separator',
        props: {
            name: String
        }
    }
</script>

