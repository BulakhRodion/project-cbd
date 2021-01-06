<template>
  <div class="app">
    
    <the-preloader />
    <the-navigation />
    <the-header />
    <the-about />
    <the-featured-products />
    <the-questions />
    <the-testimonials />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/sections/TheHeader.vue';
import TheAbout from './components/sections/TheAbout.vue'
import TheFeaturedProducts from './components/sections/TheFeaturedProducts.vue';
import TheQuestions from './components/sections/TheQuestions.vue';
import TheTestimonials from './components/sections/TheTestimonials.vue';
import TheFooter from './components/sections/TheFooter.vue';
import TheNavigation from './components/sections/TheNavigation.vue';
import ThePreloader from './components/ThePreloader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheAbout,
    TheFeaturedProducts,
    TheQuestions,
    TheTestimonials,
    TheFooter,
    TheNavigation,
    ThePreloader,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap');
.app {
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