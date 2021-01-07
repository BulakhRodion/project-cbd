<template>
  <div class="cbd-products__card">
    <div class="cbd-products__card-main">
      <v-rating
        v-model="rating"
        background-color="#6E774A"
        color="#6E774A"
        dense
        hover
        size="30"
        updateInput
        class="cbd-products__rating"
      />
      <h3 class="cbd-products__card-title">
        {{ cards.title }}
      </h3>
      <div class="cbd-products__img-wrapper">
        <img
          :src="require(`@/assets/${cards.image}`)"
          class="cbd-products__img"
        />
      </div>
    </div>
    <div class="cbd-products__card-footer">
      <span class="cbd-products__price">${{ cards.price }} USD</span>
      <button class="cbd-products__btn" @click="addProduct(cards)">
        <span class="cbd-products__btn-text">Shop</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ["cards"],
  data() {
    return {
      rating: 5,
    };
  },
  methods: {
    ...mapActions("cartStore", ["ADD_TO_CART"]),
    addProduct(product) {
     this.ADD_TO_CART({...product})
    }
  }
};
</script>