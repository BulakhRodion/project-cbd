<template>
  <section class="cbd-about">
    <div class="cbd-about__container">
      <div class="cbd-about__logo-wrapper">
        <h1 class="cbd-about__title">We are what we are</h1>
        <img src="@/assets/logos.png" alt="logos" class="cbd-about__logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
            background: url('../assets/holder.png') no-repeat center;
            background-size: cover;
            padding: 40px 50px 30px;
        }
        &__title {
            font-size:24px;
            color: #1C1C1B;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 4px;
            text-align: center;
            margin-bottom: 30px;
        }
    }
</style>