<template>
  <section class="cbd-products" id="products">
    <div class="cbd-products__container container">
      <h1 class="cbd-products__title">CBD Featured Products</h1>
      <v-carousel height="600px" hide-delimiters class="cbd-products__carousel">
        <v-carousel-item
          v-for="i in 2"
          :key="i"
          class="cbd-products__carousel-item"
        >
          <the-product-card v-for="item in cards" :key="item.id" :cards="cards[item.id]" />
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
import TheProductCard from "./TheProductCard.vue";
export default {
  components: { TheProductCard },
  data() {
    return {
      cards: [
        {
          id: 0,
          title: "CBD 500 mg Orange Flavor Tincture",
          price: 49.99,
          image: "fst-card.png",
          pcs: 1,
        },
        {
          id: 1,
          title: "Black ICE CBD Muscle Rub 200 mg",
          price: 49.99,
          image: "sec-card.png",
          pcs: 1,
        },
        {
          id: 2,
          title: "CBD+Curcumin Coffee 750 mg",
          price: 79.99,
          image: "thd-card.png",
          pcs: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cbd-products {
  &__container {
    flex-direction: column;
    align-items: center;
  }
  &__title {
    color: $dark-color;
    font-size: $H300;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    margin-bottom: 80px;
  }
  &__carousel-item {
    position: relative;
  }
  &__card {
    display: flex !important;
    flex-direction: column;
    flex-basis: 33%;
    max-width: 33% !important;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__card-main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: $white-color;
    padding: 20px 40px;
  }
  &__card-title {
    font-size: $H180;
    text-transform: uppercase;
    color: $dark-color;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &__img-wrapper {
    height: 150px;
    max-width: 170px;
    width: 100%;
    position: relative;
    padding-bottom: 75%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  &__card-footer {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $card-price-bgcolor;
    padding-left: 30px;
  }
  &__price {
    color: $dark-color;
    font-size: $H180;
  }
  &__btn {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100%;
    background-color: $main-color;
    outline: none;
    transition: background-color 0.4s ease;
    padding: 5px 10px;
    &:hover {
      background-color: lighten($main-color, 15%);
    }
  }
  &__btn-text {
    color: $white-color;
    text-transform: uppercase;
    font-size: $H180;
    position: relative;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 30px;
      background-color: $white-color;
      position: absolute;
      top: 50%;
      left: 45px;
    }
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
  height: 420px !important;
}
.v-window__prev > .v-btn > .v-btn__content {
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background-color: $main-color;
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
    border-bottom:2px solid $main-color;
    border-left:2px solid $main-color;
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
    background-color:$main-color;
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
    border-top:2px solid $main-color;
    border-right:2px solid$main-color;
    left: 84%;
    transform: rotate(45deg);
  }
}
</style>