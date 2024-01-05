<template>
    <main class="mainContainer" :class="{'text-white': themeStore.getTheme, ' text-zinc-800': !themeStore.getTheme}">
      <Knowme/>
      
    </main>
  </template>
  <script setup>
  import { onBeforeMount, watch } from 'vue';
  import { useThemeStore } from '../store/theme';
  import Knowme from '../views/Knowme.vue';
  import Projects from '../views/Projects.vue'
  import Blog from '../views/Blog.vue';
  import Techs from '../views/Techs.vue';
  
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
    pt-8 flex flex-col gap-12 items-center  relative  px-8 lg:px-32
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

  #blobFirst{
    box-shadow: 0px 0px 300px 200px #43c493;
  }
  #blobSecound{
    box-shadow: 0px 0px 300px 200px #39a1af;
  }

  .bg-dark{
    background: #190826;
    background: linear-gradient(0deg, rgba(25,8,38,1) 0%, rgba(24,24,27,1) 25%);
  }
  .bg-light{
    background: rgb(236,211,255);
    background: linear-gradient(0deg, rgba(236,211,255,1) 0%, rgba(255,255,255,1) 22%);
  }
  @media(min-width: 768px){
    #blobFirst{
      box-shadow: 0px 0px 300px 400px #43c493;
    }
    #blobSecound{
      box-shadow: 0px 0px 300px 400px #39a1af;
    }
  }
  </style>
  