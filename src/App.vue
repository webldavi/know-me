<template>
  <nav class="w-full h-max px-8 lg:px-32 py-4 flex justify-end">
    <div class=" w-full hidden md:flex flex-row items-center justify-center">
      <router-link to="/" 
        class="px-4 py-2 w-max h-max text-white text-lg flex flex-row gap-2 items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Início
      </router-link>
      <router-link to="/projects" 
        class="px-4 py-2 w-max h-max text-white text-lg flex flex-row gap-2 items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Projetos
      </router-link>
      <router-link to="/" 
        class="px-4 py-2 w-max h-max text-white text-lg flex flex-row gap-2 items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Ferramentas e tecnologias
      </router-link>
      <router-link to="/blog" 
        class="px-4 py-2 w-max h-max text-white text-lg flex flex-row gap-2 items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Blog
      </router-link>
    </div>
    <button @click="()=>showAside = true" class="flex md:hidden text-white p-2 border border-zinc-700 rounded-md hover:bg-zinc-800">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
    </button>
  </nav>
  <aside :class="{'closed': !showAside, 'opened': showAside}" class="fixed top-0 right-0 bg-zinc-900/50 backdrop-blur p-4 z-20 w-full h-full flex flex-col justify-between items-center">
    <button @click="()=>showAside = false" class="font-bold text-xl text-white flex flex-row gap-2 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
      Fechar
    </button>
    <div class="h-max w-full">
      <router-link to="/" 
        class="w-full px-4 py-2 h-max text-white text-lg flex flex-row gap-2 justify-between items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Início
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"/></svg>
      </router-link>
      <router-link to="/projects" 
        class="w-full px-4 py-2 h-max text-white text-lg flex flex-row gap-2 justify-between items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Projetos
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"/></svg>
      </router-link>
      <router-link to="/" 
        class="w-full px-4 py-2 h-max text-white text-lg flex flex-row gap-2 justify-between items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Ferramentas e tecnologias
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"/></svg>
      </router-link>
      <router-link to="/blog" 
        class="w-full px-4 py-2 h-max text-white text-lg flex flex-row gap-2 justify-between items-center font-medium  rounded-md
        border border-transparent hover:border-zinc-700 hover:bg-zinc-800">
        Blog
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m16.288 7.208l-9.765 9.746q-.14.14-.344.13q-.204-.009-.344-.15q-.14-.14-.14-.334t.14-.335L15.58 6.5H6.788q-.212 0-.356-.144t-.144-.357t.144-.356q.144-.143.356-.143h9.693q.343 0 .575.232q.232.232.232.576V16q0 .213-.143.356t-.357.144q-.213 0-.356-.144T16.288 16z"/></svg>
      </router-link>
    </div>
    <span class="text-white/50">@2023</span>
  </aside>
  <div class="fixed top-0 left-0 w-full -z-20 h-full bg-dark" >
        
  </div>
  <router-view></router-view>
</template>

<script setup>
import {ref} from 'vue'

const showAside = ref(false)
</script>

<style scoped>
.bg-dark{
    background: #190826;
    background: linear-gradient(0deg, rgba(25,8,38,1) 0%, rgba(24,24,27,1) 25%);
  }

.closed{
  @apply translate-x-[3000px]
}
.opened{
  @apply translate-x-0
}
</style>