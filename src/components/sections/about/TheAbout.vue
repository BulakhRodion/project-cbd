<template>
  <section class="cbd-about" id="about">
    <div class="cbd-about__container container">
      <div class="cbd-about__logo-wrapper">
        <h1 class="cbd-about__title">We are what we are</h1>
        <img src="@/assets/logos.png" alt="logos" class="cbd-about__logo" />
      </div>

      <v-tabs v-model="tab" background-color="transparent" color="#1C1C1B" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" style="width: 100%">
        <v-tab-item v-for="item in items" :key="item">
          <the-tab-inner />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </section>
</template>

<script>
import TheTabInner from "./TheTabInner.vue";
export default {
  components: { TheTabInner },
  data() {
    return {
      tab: null,
      items: ["What is CBD", "Benefits", "Our difference"],
    };
  },
};
</script>

<style lang="scss">
.cbd-about {
  min-height: 100vh;
  padding: 120px 0 100px;
  &__container {
    flex-direction: column;
    align-items: center;
  }
  &__logo-wrapper {
    border: 10px solid #95aa43da;
    padding: 40px 50px 30px;
    margin-bottom: 80px;
  }
  &__title {
    font-size: $H240;
    color: $dark-color;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__tab-inner {
    display: flex;
    padding-top: 80px;
    width: 100%;
    background-color: $semiwhite-color;
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
    color: $black-color;
    font-size: $H240;
    font-weight: 400;
    letter-spacing: 4px;
    max-width: 270px;
    margin-bottom: 50px;
  }
  &__col-text {
    text-align: left;
    color: $main-color;
    font-size: $H180;
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
.v-tab {
  background-color: $semiwhite-color;
  font-size: 30px !important;
  color: #1c1c1b !important;
  font-weight: 400 !important;
  border-bottom: 2px solid $muddy-border-color;
}
.theme--light.v-tabs > .v-tabs-bar {
  background-color: $semiwhite-color !important;
}
</style>