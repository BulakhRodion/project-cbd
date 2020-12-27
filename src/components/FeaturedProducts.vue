<template>
  <section class="cbd-products">
    <div class="cbd-products__container">
      <h1 class="cbd-products__title">CBD Featured Products</h1>
      <v-carousel height="500px" hide-delimiters class="cbd-products__carousel">
        <v-carousel-item
          v-for="i in 2"
          :key="i"
          class="cbd-products__carousel-item"
        >
          <product-card v-for="j in 3" :key="j" :cards="cards[j - 1]" />
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
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "CBD 500 mg Orange Flavor Tincture",
          price: "$49.99 USD",
          image: "@/assets/fst-card.png",
        },
        {
          id: 2,
          title: "Black ICE CBD Muscle Rub 200 mg",
          price: "$49.99 USD",
          image: "@/assets/sec-card.png",
        },
        {
          id: 3,
          title: "CBD+Curcumin Coffee 750 mg",
          price: "$79.99 USD",
          image: "@/assets/thd-card.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cbd-products {
  padding-bottom: 100px;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    margin: auto;
  }
  &__title {
    color: #1c1c1b;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    margin-bottom: 80px;
  }
  &__carousel-item {
    position: relative;
  }
}
.v-responsive__content {
  display: flex !important;
}
.v-window__prev > .v-btn {
  position: absolute !important;
  top: 200px;
  left: 480px;
  background-color: transparent !important;
  box-shadow: none !important;
}
.v-window__next > .v-btn {
  position: absolute !important;
  top: 200px;
  left: 580px;
  background-color: transparent !important;
  box-shadow: none !important;
}
.v-carousel__item {
  height: 400px !important;
}
.v-window__prev > .v-btn > .v-btn__content {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background-color:#6E774A;
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
    border-bottom:2px solid #6E774A;
    border-left:2px solid #6E774A;
    left: -16%;
    transform: rotate(45deg);
  }
}
.v-window__next > .v-btn > .v-btn__content {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background-color:#6E774A;
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
    border-top:2px solid #6E774A;
    border-right:2px solid #6E774A;
    left: 84%;
    transform: rotate(45deg);
  }
}
</style>