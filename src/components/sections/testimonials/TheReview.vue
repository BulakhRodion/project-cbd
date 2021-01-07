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