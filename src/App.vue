<template>
  <div id="app">
    <process></process>
  </div>
</template>

<script>
import Process from './components/Process'
export default {
  name: 'app',
  components: {
    Process
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
