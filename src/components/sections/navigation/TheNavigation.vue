<template>
  <nav class="cbd-nav" :class="{ change_color: scrollPosition >= 100 }">
    <ul class="cbd-nav__list">
      <li v-for="item in sections" :key="item.id" class="cbd-nav__list-anchor">
        <a
          href="#"
          @click="atSection(item.id)"
          v-scroll-to="{ el: item.anchor, offset: -80 }"
          class="cbd-nav__anchor"
          :class="{ active: item.isActive }"
          >{{ item.section }}</a
        >
      </li>
    </ul>
    <h1 class="cbd-nav__title">CBD</h1>
    <ul class="cbd-nav__list cbd-nav__list--btns">
      <li v-for="j in 3" :key="j" class="cbd-nav__list-btns-item" data-app>
        <button v-if="j === 1" class="cbd-nav__list-btn">
          {{ buttons[j - 1] }}
        </button>
        <button v-else-if="j === 2" class="cbd-nav__list-btn">
          <img src="@/assets/search.png" class="cbd-nav__list-btn-icon" />{{
            buttons[j - 1]
          }}
        </button>
        <the-cart v-else />
      </li>
    </ul>
  </nav>
</template>

<script>
import TheCart from "./TheCart.vue";
export default {
  components: { TheCart },
  data() {
    return {
      sections: [
        { id: 0, section: "HOME", anchor: "#home", isActive: true },
        { id: 1, section: "Products", anchor: "#products", isActive: false },
        { id: 2, section: "FAQS", anchor: "#faq", isActive: false },
        { id: 3, section: "Contact Us", anchor: "#contacts", isActive: false },
      ],
      buttons: ["Login", "Search"],
      scrollPosition: null,
    };
  },
  methods: {
    atSection: function (id) {
      this.sections.map(function (nav) {
        return (nav.isActive = false);
      });
      this.sections[id].isActive = !this.sections[id].isActive;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
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
  border-bottom: 1px solid rgba($color: $white-color, $alpha: 0.4);
  background-color: rgba($white-color, 0.3);
  &__list {
    display: flex;
    max-width: 314px;
    padding-left: 10px;
    &--btns {
      padding-left: 0;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  &__list-anchor {
    font-size: $H160;
    color: $white-color;
    text-transform: uppercase;
    transition: color 0.4s ease;
    margin-right: 8px;
    @media screen and (max-width: 800px) {
      font-size: $H110;
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: rgba($white-color, 0.4);
    }
  }
  &__title {
    font-size: $H300;
    color: $white-color;
    text-transform: uppercase;
    font-weight: 400;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 800px) {
      font-size: $H200;
    }
  }
  &__list-btns-item {
    height: 100%;
  }
  &__list-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $H160;
    color: $white-color;
    text-transform: uppercase;
    border-left: 1px solid rgba($color: $white-color, $alpha: 0.4);
    outline: none;
    height: 100%;
    padding: 30px 20px;
    transition: background-color 0.4s ease;
    @media screen and (max-width: 800px) {
      font-size: $H110;
    }
    &:hover {
      background-color: rgba($white-color, 0.4);
    }
  }
  &__list-btn-icon {
    margin-right: 8px;
  }
  &__cart-header {
    display: flex;
    align-items: center;
    background-color: $main-color;
    height: 60px;
    padding: 8px 28px;
    color: #ffffff;
    font-size: $H180;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  &__cart-main {
    display: flex;
    flex-direction: column;
    min-height: 60px;
    padding: 8px 28px;
  }
  &__cart-title {
    color: $black-color;
    text-transform: uppercase;
    font-size: $H140;
    font-weight: 500;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  &__purchases-list {
    display: flex;
    flex-direction: column;
  }
  &__purchases-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__purchases-item-name,
  &__purchases-item-price {
    margin-right: 8px;
  }
  &__purchases-remove {
    color: $black-color;
    text-transform: uppercase;
    font-size: $H140;
    letter-spacing: 1.4px;
    outline: none;
    transition: background-color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    padding: 0 8px;
    height: 30px;
    border-radius: 4px;
    &:hover {
      background-color: rgba($black-color, 0.1);
    }
  }
  .active {
    text-decoration: line-through;
    color: rgba($color: $white-color, $alpha: 0.7);
  }
  .remove {
    animation: remove 0.6s linear;
    &:nth-of-type(1) {
      opacity: 1;
    }
  }
  @keyframes remove {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
.change_color {
  background-color: rgba($dark-color, 0.3);
}
</style>