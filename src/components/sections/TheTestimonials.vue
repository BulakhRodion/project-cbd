<template>
  <section class="cbd-testimonials">
    <h1 class="cbd-testimonials__side-title">CBD every day</h1>
    <div class="cbd-testimonials__container">
      <v-carousel height="100%" hide-delimiters class="cbd-testimonials__carousel">
        <v-carousel-item
          v-for="i in 3"
          :key="i"
          class="cbd-testimonials__carousel-item"
        >
        <the-review />
        </v-carousel-item>
        <template v-slot:prev="{ on, attrs }" class="cbd-testimonials__prev-wrapper">
          <v-btn v-bind="attrs" v-on="on" class="cbd-testimonials__prev" height="100px" width="100px"></v-btn>
        </template>
        <template v-slot:next="{ on, attrs }" class="cbd-testimonials__prev-wrapper">
          <v-btn v-bind="attrs" v-on="on" class="cbd-testimonials__next" height="100px" width="100px"></v-btn>
        </template>
      </v-carousel>
    </div>
  </section>
</template>

<script>
import TheReview from '../TheReview.vue';
export default {
    components: { TheReview }
};
</script>

<style lang="scss">
.cbd-testimonials {
  background: url("../../assets/testimonials-bg.png") center no-repeat;
  background-size: cover;
  min-height: 80vh;
  position: relative; 
  &::before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    min-height: 80vh;
    background: rgba($color: #000000, $alpha: 0.4);
    top: 0;
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
  }
  &__side-title {
    color: #F7F8F3;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    position: absolute;
    bottom: 100px;
    left: 30px;
    transform: rotate(90deg);
  }
  &__carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__carousel-item {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  &__prev {
    top: 310px !important;
    left: 150px !important;
    border: 1px solid #FFFFFF;
    border-radius: 0px !important;
  }
  &__next {
    top: 310px !important;
    left: 250px !important;
    border: 1px solid #FFFFFF;
    border-radius: 0px !important;
  }
}
.cbd-testimonials__prev > .v-btn__content {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background-color:#FFFFFF !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    border-bottom:2px solid #FFFFFF !important;
    border-left:2px solid #FFFFFF !important;
    left: 20% !important;
    transform: rotate(45deg) !important;
  }
}
.cbd-testimonials__next > .v-btn__content {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background-color:#FFFFFF !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    border-top:2px solid #FFFFFF !important;
    border-right:2px solid #FFFFFF !important;
    left: 66% !important;
    transform: rotate(45deg) !important;
  }
}
</style>