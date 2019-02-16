<template>
  <div id="app">
    <AddItemForm></AddItemForm>
  </div>
</template>

<script>
import AddItemForm from './components/myForm.vue'

export default {
  name: 'app',
  components: {
    AddItemForm
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
