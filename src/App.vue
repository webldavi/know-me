<template>
  <main class="mainContainer">
    <Knowme/>
  </main>
</template>
<script setup>
import Knowme from './views/Knowme.vue';
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}
  .mainContainer{
    @apply min-h-screen w-screen p-6 pt-20 text-zinc-800 flex flex-col gap-12 items-center
  }
</style>
