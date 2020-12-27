<template>
  <div class="cbd-about__tab-inner">
    <div class="cbd-about__col">
      <h3 class="cbd-about__col-title">WHAT IT IS AND HOW IT WORKS</h3>
      <p class="cbd-about__col-text">
        CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and
        known for supporting the body and mind in many ways.* Charlotte’s Web
        products have cannabinoids with CBD extract.
      </p>
      <p class="cbd-about__col-text">
        Not to be confused with oil from hemp seeds (which doesn’t contain
        cannabinoids), CBD comes from the flowers and leaves of the hemp plant.
      </p>
      <p class="cbd-about__col-text">
        Why does CBD work? The human body has a vast network of receptors, the
        endocannabinoid system.
      </p>
    </div>
    <div class="cbd-about__col">
      <div class="cbd-about__img-wrapper">
        <img src="@/assets/a-fst-img.png" alt="firstimg" />
      </div>
      <div class="cbd-about__img-wrapper">
        <img src="@/assets/a-sec-img.png" alt="secondimg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.cbd-about {
    &__tab-inner {
      display: flex;
      padding-top: 80px;
      width: 100%;
      background-color: #F7F8F3;
  }
  &__col {
      display: flex;
      flex-direction: column;
      flex-basis: 50%;
      max-width: 50%;
      &:first-child {
          padding-top: 40px;
      }
  }
  &__col-title {
      text-align: left;
      text-transform: uppercase;
      color: #000000;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 4px;
      max-width: 270px;
      margin-bottom: 50px;
  }
  &__col-text {
      text-align: left;
      color: #6E774A;
      font-size: 18px;
      font-weight: 400;
      max-width: 400px;
      margin-bottom: 30px;
      &:last-child {
          margin-bottom: 0;
      }
  }
  &__img-wrapper {
      height: 300px;
      max-width: 570px;
      width: 100%;
      position: relative;
      padding-bottom: 51%;
      margin-bottom: 30px;
      &:last-child {
          margin-bottom: 0;
      }
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
}
</style>