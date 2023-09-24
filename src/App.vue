<template>
  <main class="mainContainer" :class="{'bg-zinc-900 text-white': themeStore.getTheme, 'bg-white text-zinc-800': !themeStore.getTheme}">
    <button title="Mudar o tema da página" aria-label="Mudar o tema da página" @click="themeStore.switchTheme">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm0 6q.675 0 1.3-.125t1.2-.4q-1.575-.725-2.538-2.175T11 12q0-1.85.963-3.3T14.5 6.525q-.575-.275-1.2-.4T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z"/></svg>
    </button>
    <Knowme/>
    <Projects/>
    <Techs/>
    <Blog/>
  </main>
</template>
<script setup>
import { onBeforeMount, watch } from 'vue';
import { useThemeStore } from './store/theme';
import Knowme from './views/Knowme.vue';
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue';
import Techs from './views/Techs.vue';

const themeStore = useThemeStore()

onBeforeMount(() => {
  if(JSON.parse(localStorage.getItem('theme')) != null){
    themeStore.setTheme(JSON.parse(localStorage.getItem('theme')))
  }else{
    themeStore.setTheme(true)
  }
  
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}
.mainContainer{
  transition: all 500ms;
  @apply min-h-screen w-full overflow-hidden p-6 
  pt-20 flex flex-col gap-12 items-center  relative 
}

.mainContainer > button{
  @apply absolute top-5 right-5 flex flex-row cursor-pointer
}
body{
  background-attachment: fixed;
}
body::-webkit-scrollbar {
  width: 9px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: white; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #27272a;
  border: 2px solid white; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
}
</style>
