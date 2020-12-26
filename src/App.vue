<template>
  <div id="app">
    <Header />
    <About />
  </div>
</template>

<script>

import Header from './components/Header.vue';
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    About
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');
#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
