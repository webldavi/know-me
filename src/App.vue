<template>
  <main class="mainContainer">
    <Knowme/>
    <Projects/>
  </main>
</template>
<script setup>
import Knowme from './views/Knowme.vue';
import Projects from './views/Projects.vue'
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}
.mainContainer{
  @apply min-h-screen w-full overflow-hidden p-6 pt-20 text-zinc-800 flex flex-col gap-12 items-center bg-transparent
}
body{
  background: linear-gradient(0deg, rgba(237,237,237,1) 0%, rgba(255,255,255,1) 100%);
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
