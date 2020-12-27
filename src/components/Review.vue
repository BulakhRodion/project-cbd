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
    <h3 class="cbd-products__card-title">test</h3>
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

<style>
</style>