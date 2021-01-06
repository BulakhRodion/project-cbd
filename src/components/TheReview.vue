<template>
  <div class="cbd-testimonials__couresel-item-content">
    <v-rating
      v-model="rating"
      background-color="#AAB384"
      color="#AAB384"
      dense
      hover
      size="30"
      updateInput
      class="cbd-testimonials__rating"
    />
    <p class="cbd-testimonials__card-text">
      I have tried another product after using this one successfully, and I am
      Back for good! The flavour, the lightness of the oil and the health
      benefits I have gotten with this oil are amazing!
    </p>
    <p class="cbd-testimonials__rev-author">Mark J.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 5,
    };
  },
};
</script>

<style lang="scss">
.cbd-testimonials {
  &__couresel-item-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__rating {
    margin-bottom: 40px;
  }
  &__card-text {
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    max-width: 568px;
    width: 100%;
    text-align: center;
    margin-bottom: 34px;
  }
  &__rev-author {
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 45px;
      height: 2px;
      background-color: #f7f8f3;
      top: 50%;
      left: -60px;
    }
  }
}
</style>