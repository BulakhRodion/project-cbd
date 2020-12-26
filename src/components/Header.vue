<template>
    <section class="cbd-header">
        <div class="cbd-header__container">
            <h1 class="cbd-header__title">Enhancing Life Excelling in Care</h1>
            <h2 class="cbd-header__subtitle">Choose Wisely. Choose CBD.</h2>
            <div class="cbd-header__links-wrapper">
                <div class="cbd-header__shopping-wrapper">
                    <a href="" class="cbd-header__shopping-link">Start Shopping</a>
                </div>
                <a href="" class="cbd-header__products-link">See all products</a>
            </div>
            <div class="cbd-header__product">CBD Potion health</div>
            <div class="cbd-header__scroll"></div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .cbd-header {
        min-height: 100vh;
        background: url('../assets/first-screen-bg.png') center no-repeat;
        background-size: cover;
        padding: 120px 0 100px;
        &__container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            max-width: 1200px;
            padding: 0 15px;
            margin: auto;
        }
        &__title {
            font-size: 55px;
            font-weight: 400;
            color: #F7F8F3;
            max-width: 558px;
            text-transform: uppercase;
            text-align: right;
            letter-spacing: 8px;
            margin-bottom: 38px;
        }
        &__subtitle {
            font-size: 24px;
            font-weight: 300;
            color: #F7F8F3;
            text-align: right;
            letter-spacing: 4px;
            margin-bottom: 60px;
        }
        &__links-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__shopping-wrapper {
            height: 60px;
            width: 230px;
            border: 1px solid #F7F8F3;
            margin-bottom: 20px;
        }
        &__shopping-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            font-size: 20px;
            font-weight: 400;
            color: #FFFFFF;
            text-transform: uppercase;
            padding-right: 50px;
            position: relative;
            &::after {
                content: '';
                width: 45px;
                height: 2px;
                position: absolute;
                background-color: #ffffff;
                left: 164px;
            }
        }
        &__products-link {
            font-size: 18px;
            font-weight: 300;
            color: #F7F8F3;
            letter-spacing: 4px;
            position: relative;
            &::after {
                content: '';
                width: 14px;
                height: 1px;
                position: absolute;
                background-color: #ffffff;
                top: 50%;
                left: 180px;
            }
            &::before {
                content: '';
                width: 5px;
                height: 5px;
                position: absolute;
                border-right: 1px solid #ffffff;
                border-bottom: 1px solid #ffffff;
                top: 11px;
                left: 188px;
                transform: rotate(-45deg);
            }
        }
        &__scroll {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            width: 20px;
            height: 20px; 
            border-right: 2px solid #ffffff;
            border-bottom: 2px solid #ffffff;
            cursor: pointer;
        }
        &__product {
            font-size: 26px;
            font-weight: 400;
            color: #FFFFFF;
            position: absolute;
            text-transform: uppercase;
            bottom: 160px;
            left: 20px;
            transform: rotate(-90deg);
            &::before {
                content: '';
                width: 50px;
                height: 2px;
                position: absolute;
                background-color: #FFFFFF;
                top: 50%;
                transform: translate(-50%);
                left: -55px;
            }
        }
    }
</style>