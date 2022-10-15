<template>
  <div class="w-screen min-h-screen bg-gray-900 flex flex-col">
    <Nav/>
    <Welcome/>
  </div>
  
</template>
<script >
import Nav from './components/nav/Nav.vue';
import Welcome from './components/welcome/Welcome.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Welcome
  }
}
</script>

<style >

</style>
