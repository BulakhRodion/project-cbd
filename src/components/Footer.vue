<template>
  <footer class="cbd-footer">
    <div class="cbd-footer__container">
      <h1 class="cbd-footer__title">CBD</h1>
      <div class="cbd-footer__col-wrapper">
        <ul class="cbd-footer__list">
          <li class="cbd-footer__list-item"><a href="">Privacy Policy</a></li>
          <li class="cbd-footer__list-item"><a href="">Terms of Use</a></li>
          <li class="cbd-footer__list-item"><a href="">Return Policy</a></li>
        </ul>
        <ul class="cbd-footer__list cbd-footer__list--icons">
          <li class="cbd-footer__list-icon">
            <a href="" target="_blank">
              <svg
                width="12"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                viewBox="0.239 0 11.523 22"
                fill="#6e774a"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="22"
                  viewBox="1 1.999 11 21.001"
                >
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M11.586 2.004l-2.639-.005c-2.964 0-4.88 2.029-4.88 5.168v2.384H1.416A.422.422 0 0 0 1 9.979v3.452c0 .237.186.429.415.429h2.652v8.712c0 .236.186.428.415.428h3.461c.23 0 .415-.192.415-.428V13.86h3.102c.229 0 .415-.192.415-.429V9.98a.434.434 0 0 0-.12-.303.408.408 0 0 0-.294-.125H8.358V7.53c0-.972.225-1.464 1.45-1.464h1.777a.422.422 0 0 0 .415-.43V2.433a.422.422 0 0 0-.414-.428z"
                  />
                </svg>
              </svg>
            </a>
          </li>
          <li class="cbd-footer__list-icon">
            <a href="" target="_blank">
              <svg
                width="23"
                height="19"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                viewBox="0 0.091 23 18.818"
                fill="#6e774a"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="19"
                  viewBox="2 2 22 18"
                >
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M23.393 2.332c-.873.52-1.84.899-2.868 1.104A4.484 4.484 0 0 0 17.232 2c-2.493 0-4.514 2.035-4.514 4.544 0 .356.04.703.117 1.035-3.75-.19-7.077-1.999-9.303-4.749a4.54 4.54 0 0 0-.61 2.285c0 1.577.798 2.968 2.007 3.783a4.486 4.486 0 0 1-2.044-.571v.057a4.543 4.543 0 0 0 3.62 4.457c-.378.103-.777.16-1.189.16a4.53 4.53 0 0 1-.85-.083 4.524 4.524 0 0 0 4.215 3.157 9.016 9.016 0 0 1-5.604 1.945c-.365 0-.724-.022-1.077-.062A12.719 12.719 0 0 0 8.918 20C17.22 20 21.76 13.074 21.76 7.068l-.015-.59A9.108 9.108 0 0 0 24 4.13a8.977 8.977 0 0 1-2.591.716 4.565 4.565 0 0 0 1.984-2.513z"
                  />
                </svg>
              </svg>
            </a>
          </li>
          <li class="cbd-footer__list-icon">
            <a href="" target="_blank">
              <svg
                width="28"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                viewBox="0 0.148 28 19.704"
                fill="#6e774a"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="20"
                  viewBox="1.005 1.999 27 19"
                >
                  <path
                    paint-order="stroke fill markers"
                    fill-rule="evenodd"
                    d="M28.005 6.059c0-2.243-1.807-4.06-4.035-4.06H5.04C2.81 2 1.005 3.816 1.005 6.06V16.94C1.005 19.182 2.81 21 5.04 21h18.93c2.228 0 4.035-1.818 4.035-4.06V6.06zm-16.2 10.032V5.87l7.71 5.111-7.71 5.111z"
                  />
                </svg>
              </svg>
            </a>
          </li>
        </ul>
        <ul class="cbd-footer__list">
          <li class="cbd-footer__list-item"><a href="">Shipping info</a></li>
          <li class="cbd-footer__list-item">
            <a href="">return / exchanges</a>
          </li>
          <li class="cbd-footer__list-item"><a href="">contact</a></li>
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
export default {};
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
    &::before, &::after {
        content: "";
        display: block;
        height: 2px;
        width: 370px;
        background-color: #6E774A;
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
      padding-left: 40px;
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
    &:hover {
      transform: scale(1.2);
    }
  }
  &__list-icon {
    margin-right: 60px;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.2);
    }
    &:last-child {
      margin-right: 0;
    }
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
        background-color: #6E774A;
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
      color: #6E774A;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
  }
}
</style>