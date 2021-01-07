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
import TheHeader from "./components/sections/header/TheHeader.vue";
import TheAbout from "./components/sections/about/TheAbout.vue";
import TheFeaturedProducts from "./components/sections/featured/TheFeaturedProducts.vue";
import TheQuestions from "./components/sections/questions/TheQuestions.vue";
import TheTestimonials from "./components/sections/testimonials/TheTestimonials.vue";
import TheFooter from "./components/sections/footer/TheFooter.vue";
import TheNavigation from "./components/sections/navigation/TheNavigation.vue";
import ThePreloader from "./components/sections/preloader/ThePreloader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheAbout,
    TheFeaturedProducts,
    TheQuestions,
    TheTestimonials,
    TheFooter,
    TheNavigation,
    ThePreloader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap");
.app {
  font-family: "Oswald", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>