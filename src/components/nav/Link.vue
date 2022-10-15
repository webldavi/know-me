<template>
    <div class="border-b-2 border-transparent transition hover:border-gray-300 cursor-pointer" @click="Scroll()">
        {{name}}
    </div>
    
</template>
<script>
export default{
    name: 'Link',
    props:{
        name: String,
        scroll: Number
    },
    methods:{
        Scroll(){
            window.scroll({
                top: this.scroll,
                behavior: 'smooth'
            })
        }
    }
}
</script>
