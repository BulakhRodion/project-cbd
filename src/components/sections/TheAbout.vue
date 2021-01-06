<template>
  <section class="cbd-about" id="about">
    <div class="cbd-about__container">
      <div class="cbd-about__logo-wrapper">
        <h1 class="cbd-about__title">We are what we are</h1>
        <img src="@/assets/logos.png" alt="logos" class="cbd-about__logo" />
      </div>

      <v-tabs v-model="tab" background-color="transparent" color="#1C1C1B" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" style="width: 100%;">
        <v-tab-item v-for="item in items" :key="item">
          <the-tab-inner />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </section>
</template>

<script>
import TheTabInner from '../TheTabInner.vue';
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    margin: auto;
  }
  &__logo-wrapper {
    border: 10px solid #95aa43da;
    padding: 40px 50px 30px;
    margin-bottom: 80px;
  }
  &__title {
    font-size: 24px;
    color: #1c1c1b;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 30px;
  }
  
}
.v-tab {
    background-color: #F7F8F3;
    font-size: 30px !important;
    color: #1C1C1B !important;
    font-weight: 400 !important;
    border-bottom: 2px solid #CED6AF;
}
.theme--light.v-tabs > .v-tabs-bar {
    background-color: #F7F8F3 !important;
}
</style>