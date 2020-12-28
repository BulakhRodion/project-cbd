<template>
  <nav class="cbd-nav">
    <ul class="cbd-nav__list">
      <li class="cbd-nav__list-anchor"><a href="">HOME</a></li>
      <li class="cbd-nav__list-anchor"><a href="">Products</a></li>
      <li class="cbd-nav__list-anchor"><a href="">FAQS</a></li>
      <li class="cbd-nav__list-anchor"><a href="">Contact Us</a></li>
    </ul>
    <h1 class="cbd-nav__title">CBD</h1>
    <ul class="cbd-nav__list cbd-nav__list--btns">
      <li class="cbd-nav__list-btns-item">
        <button class="cbd-nav__list-btn">Login</button>
      </li>
      <li class="cbd-nav__list-btns-item">
        <button class="cbd-nav__list-btn">
          <img src="@/assets/search.png" class="cbd-nav__list-btn-icon" />Search
        </button>
      </li>
      <li class="cbd-nav__list-btns-item">
        <button class="cbd-nav__list-btn">Cart (0)</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cbd-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.4);
  background-color: rgba(#1c1c1c, 0.3);
  &__list {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 314px;
    list-style: none;
    padding-left: 10px;
    width: 20%;
    justify-content: space-around;
    &--btns {
      padding-left: 0;
      width: fit-content;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  &__list-anchor {
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    text-transform: uppercase;
    transition: color 0.4s ease;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
    &:last-child {
        padding-right: 0;
    }
    &:hover {
      color: rgba(#ffffff, 0.4);
    }
  }
  &__title {
    font-size: 30px;
    color: #ffffff;
    font-weight: 400;
    text-transform: uppercase;
    padding-right: 10px;
  }
  &__list-btns-item {
    height: 100%;
  }
  &__list-btn {
    font-size: 16px;
    color: #ffffff;
    font-weight: 400;
    text-transform: uppercase;
    border-left: 1px solid rgba($color: #ffffff, $alpha: 0.4);
    height: 100%;
    padding: 30px 20px;
    transition: background-color 0.4s ease;
    &:hover {
      background-color: rgba(#ffffff, 0.4);
    }
  }
  &__list-btn-icon {
    margin-right: 8px;
  }
}
</style>