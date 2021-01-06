<template>
  <footer class="cbd-footer" id="contacts">
    <div class="cbd-footer__container">
      <h1 class="cbd-footer__title">CBD</h1>
      <div class="cbd-footer__col-wrapper">
        <ul class="cbd-footer__list">
          <li
            class="cbd-footer__list-item"
            v-for="(link, idx) in 3"
            :key="link"
          >
            <a href="">{{ LinkList[idx] }}</a>
          </li>
        </ul>
        <ul class="cbd-footer__list cbd-footer__list--icons">
          <li
            v-for="i in 3"
            :key="i"
            class="cbd-footer__list-item cbd-footer__list-item--icons"
          >
            <a href="" target="_blank">
              <the-icons
                v-if="i === 1"
                icon="facebook"
                class="cbd-footer__list-icon"
              />
              <the-icons
                v-else-if="i === 2"
                icon="twitter"
                class="cbd-footer__list-icon"
              />
              <the-icons v-else icon="youtube" class="cbd-footer__list-icon" />
            </a>
          </li>
        </ul>
        <ul class="cbd-footer__list">
          <li
            class="cbd-footer__list-item"
            v-for="(link, idx) in 3"
            :key="link"
          >
            <a href="">{{ LinkList[idx + 3] }}</a>
          </li>
        </ul>
      </div>
      <h3 class="cbd-footer__subtitle">Subscribe to Newsletter</h3>
      <form class="cbd-footer__form">
        <input type="text" class="cbd-footer__input" placeholder="Email" />
        <button type="submit" class="cbd-footer__btn"></button>
      </form>
      <span class="cbd-footer__copyright">© 2018. CbD health.</span>
    </div>
  </footer>
</template>

<script>
import TheIcons from "../icons/TheIcons.vue";
export default {
  components: { TheIcons },
  data() {
    return {
      LinkList: [
        "Privacy Policy",
        "Terms of Use",
        "Return Policy",
        "Shipping info",
        "return / exchanges",
        "contact",
      ],
    };
  },
};
</script>

<style lang="scss">
.cbd-footer {
  padding: 100px 0 20px;
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
    font-size: 60px;
    color: #6e774a;
    font-weight: 400;
    margin-bottom: 60px;
    position: relative;
    &::before,
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 370px;
      background-color: #6e774a;
      position: absolute;
      top: 51%;
    }
    &::before {
      right: 170px;
    }
    &::after {
      left: 170px;
    }
  }
  &__col-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 40px;
    width: 80%;
  }
  &__list {
    list-style-type: none;
    &--icons {
      display: flex;
      padding-left: 30px;
    }
  }
  &__list-item {
    font-size: 14px;
    color: #6e774a;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-align: center;
    transition: transform 0.4s ease;
    &--icons {
      margin-bottom: 0;
      margin-right: 60px;
      &:last-child {
        margin-right: 0;
      }
    }
    &:hover {
      transform: scale(1.2);
    }
  }
  &__list-icon {
    fill: #6e774a;
    width: 20px;
    height: 20px;
  }
  &__subtitle {
    font-size: 18px;
    color: #1c1c1c;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 54px;
      background-color: #6e774a;
      position: absolute;
      bottom: 70px;
      left: 36%;
      transform: rotate(90deg);
    }
  }
  &__form {
    display: flex;
    margin-bottom: 40px;
  }
  &__input {
    width: 220px;
    height: 50px;
    border: 2px solid #ced6af;
    border-right: 2px solid transparent;
    outline: none;
    padding: 10px;
    color: #6e774a;
    font-size: 16px;
  }
  &__btn {
    height: 50px;
    width: 80px;
    border: 2px solid #ced6af;
    outline: none;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 30px;
      height: 1px;
      position: absolute;
      background-color: #6e774a;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      border-top: 1px solid #6e774a;
      border-right: 1px solid #6e774a;
      top: 40.2%;
      left: 56.4%;
      transform: rotate(45deg);
    }
  }
  &__copyright {
    color: #6e774a;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>