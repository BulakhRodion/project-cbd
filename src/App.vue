<template>
  <div id="app">
    <Header />
    <about />
    <featured-products />
    <FAQ />
    <testimonials />
  </div>
</template>

<script>

import Header from './components/Header.vue';
import About from './components/About.vue'
import FeaturedProducts from './components/FeaturedProducts.vue';
import FAQ from './components/FAQ.vue';
import Testimonials from './components/Testimonials.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    FeaturedProducts,
    FAQ,
    Testimonials,
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
body {
  font-size: 100%;
  background-color: #F7F8F3;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>