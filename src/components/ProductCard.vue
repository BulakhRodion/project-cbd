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
      <img :src="require(`@/assets/${cards.image}`)" class="cbd-products__img" />
    </div>
    <div class="cbd-products__card-footer">
      <span class="cbd-products__price">{{ cards.price }}</span>
      <a href="" class="cbd-products__btn">
        <span class="cbd-products__btn-text">Shop</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
  data() {
    return {
      rating: 5,
    };
  },
};
</script>

<style lang="scss">
.cbd-products {
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
    justify-content: flex-start;
    flex-direction: column;
    background-color: #ffffff;
    padding: 20px 40px;
  }
  &__card-title {
    font-size: 18px;
    text-transform: uppercase;
    color: #1c1c1b;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &__card-footer {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e9f1ed;
    padding-left: 30px;
  }
  &__price {
    color: #1c1c1b;
    font-size: 18px;
    font-weight: 400;
  }
  &__btn {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100%;
    background-color: #6e774a;
    outline: none;
    transition: background-color 0.4s ease;
    padding: 5px 10px;
    &:hover {
      background-color: lighten(#6e774a, 15%);
    }
  }
  &__btn-text {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    position: relative;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 30px;
      background-color: #ffffff;
      position: absolute;
      top: 50%;
      left: 45px;
    }
  }
}
</style>