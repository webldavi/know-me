<template>
    <div class="border-b-2 border-transparent transition hover:border-gray-300 cursor-pointer">
        {{name}}
    </div>
    
</template>
<script>
export default{
    name: 'Link',
    props:{
        name: String
    }
}
</script>
