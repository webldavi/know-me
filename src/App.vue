<template>
  <div class="w-full 'q' min-h-screen bg-black flex flex-col">
    <Nav />
    <Welcome />
    <KnowMe />
    <Projects />
    <Skills />
    <!-- <Skills/> -->
  </div>

</template>
<script setup>
import Nav from './components/nav/Nav.vue';
import Welcome from './components/welcome/Welcome.vue';
import KnowMe from './components/know-me/KnowMe.vue';
import Projects from './components/projects/projects.vue';
import Skills from './components/Skills/Skills.vue';
</script>
<style>
html,
body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
</style>