<template>
  <div id="app">
    <navigation />
    <Header />
    <about />
    <featured-products />
    <FAQ />
    <testimonials />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue';
import About from './components/About.vue'
import FeaturedProducts from './components/FeaturedProducts.vue';
import FAQ from './components/FAQ.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    FeaturedProducts,
    FAQ,
    Testimonials,
    Footer,
    Navigation,
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
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>