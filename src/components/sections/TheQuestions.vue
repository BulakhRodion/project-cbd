<template>
  <section class="cbd-faq" id="faq">
    <div class="cbd-faq__container">
      <h1 class="cbd-faq__title">Frequently asked questions</h1>
      <v-expansion-panels accordion class="cbd-faq__accordion">
        <v-expansion-panel v-for="(item, i) in 4" :key="i" class="cbd-faq__accordion-panel">
          <v-expansion-panel-header class="cbd-faq__accordion-header"><span class="cbd-faq__accordion-header-icon"/>{{ faq[i] }}</v-expansion-panel-header>
          <v-expansion-panel-content class="cbd-faq__accordion-text">
            Because CBD from hemp has no psychoactive effects, the purchase,
            sales, or possession of hemp CBD products are completely legal in
            all 50 States.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        "What is Cannabidiol (CBD)?",
        "Is Hemp-Derived Cannabidiol (CBD) Legal?",
        "Are there any negative side effects?",
        "Do you offer a return policy?",
      ],
    };
  },
};
</script>

<style lang="scss">
.cbd-faq {
  padding: 0 0 100px;
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
    margin-bottom: 40px;
  }
  &__accordion {
      max-width: 572px;
  }
  &__accordion-panel{
      background-color: transparent !important;
      border-bottom: 2px solid #EAEDDE;
      &:nth-child(1) {
        border-top: 2px solid #EAEDDE;
      }

      &::before {
        box-shadow: none !important;
      }
  }
  &__accordion-header {
    color: #6E774A;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
    padding: 20px 40px !important;
  }
  &__accordion-text {
    color: #000000;
    font-size: 18px;
    font-weight: 300;
    padding: 0 40px 20px !important;
  }
  &__accordion-header-icon {
    position: absolute;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 1px;
      position: absolute;
      background-color: #6E774A;
      left: -40px;
    }
    &::after {
      transform: rotate(90deg);
    }
  }
}
.v-expansion-panel-header__icon {
  display: none !important;
}
.v-expansion-panel:not(:first-child)::after {
  border-top: none !important;
}
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
</style>