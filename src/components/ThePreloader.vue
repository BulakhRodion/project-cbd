<template>
  <transition name="dots" class="cbd-preloader">
    <div v-if="show" class="cbd-preloader__container" :class="{ loading: show }">
      <div class="cbd-preloader__circles">
        <span v-for="i in 5" :key="i" class="cbd-preloader__circle" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.show ? this.loaderToggle() : !this.show;
  },
  methods: {
    loaderToggle() {
      setTimeout(() => {
        this.show = !this.show;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.cbd-preloader {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #F7F8F3;
    z-index: 999;
  }
  &__circles {
    text-align: center;
    vertical-align: middle;
    position: relative;
    display: flex;
    background: #F7F8F3;
  }
  &__circle {
    display: block;
    width: 20px;
    height: 20px;
    background: #eeeeee;
    border-radius: 50%;
    margin: 0 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    &:nth-child(2) {
      background: #f07e6e;
    }
    &:nth-child(3) {
      background: #84cdfa;
    }
    &:nth-child(4) {
      background: #5ad1cd;
    }
    &:nth-child(5) {
      animation: jump 1s ease-in-out infinite;
      margin-right: 0;
    }
    &:not(:last-child) {
      animation: animate 1s linear infinite;
    }
    @keyframes animate {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(30px);
      }
    }
    @keyframes jump {
      0% {
        transform: translate(0, 0);
      }
      10% {
        transform: translate(10px, -10px);
      }
      20% {
        transform: translate(20px, 10px);
      }
      30% {
        transform: translate(30px, -50px);
      }
      70% {
        transform: translate(-150px, -50px);
      }
      80% {
        transform: translate(-140px, 10px);
      }
      90% {
        transform: translate(-130px, -10px);
      }
      100% {
        transform: translate(-120px, 0);
      }
    }
  }
}
.loading {
  position: fixed;
}
</style>