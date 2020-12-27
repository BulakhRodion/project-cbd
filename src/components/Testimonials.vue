<template>
  <section class="cbd-testimonials">
    <div class="cbd-testimonials__container">
      <v-carousel height="500px" hide-delimiters class="cbd-testimonials__carousel">
        <v-carousel-item
          v-for="i in 2"
          :key="i"
          class="cbd-testimonials__carousel-item"
        >
        <review />
          <!-- <product-card v-for="j in 3" :key="j" :cards="cards[j - 1]" /> -->
        </v-carousel-item>
        <template v-slot:prev="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"></v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"></v-btn>
        </template>
      </v-carousel>
    </div>
  </section>
</template>

<script>
import Review from './Review.vue';
export default {
    components: { Review }
};
</script>

<style lang="scss">
.cbd-testimonials {
  padding-bottom: 100px;
  background: url("../assets/testimonials-bg.png") center no-repeat;
  background-size: cover;
  min-height: 80vh;
}
</style>