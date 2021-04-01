<template>
  <div id="app">
    <Designer/>
  </div>
</template>

<script>
import Designer from './components/Designer.vue'

export default {
  name: 'App',
  components: {
    Designer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
