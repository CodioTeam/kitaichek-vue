<script setup>

</script>

<template lang="pug">
Block.error-page
  img(src="@/assets/img/404-center.svg").error-page__center
  img(src="@/assets/img/404-left.svg").error-page__left
  img(src="@/assets/img/404-right.svg").error-page__right
  .error-page__col
    p.error-page__title Страница не найдена
    p.error-page__text Страница, на которую Вы пытаетесь попасть, <br> не существует или была удалена
    Button(to="/" yellow).error-page__button На главную страницу
</template>

<style scoped lang="scss">
.error-page {
  position: relative;
  min-height: 925px;
  :deep(.container) {
    height: 925px;

  }
  &__center {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100vw;
    max-height: 925px;
    transform: translate(-50%, -50%);
    height: 100%;
  }
  &__left {
    position: absolute;
    bottom: 92px;
    left: 0;
    z-index: 1;
    max-width: 38vw;
  }
  &__right {
    max-width: 38vw;
    position: absolute;
    bottom: 92px;
    right: 0;
    z-index: 1;
  }
  &__col {
    max-width: 345px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    position: relative;
    z-index: 2;
    height: 100%;
  }
  &__title {
    color: var(--WHITE, #FFF);
    font-size: 31px;
    font-weight: 600;
    line-height: 120%;
    text-align: center;
  }
  &__text {
    text-align: center;
    margin-top: 20px;
    color: var(--LIGHT-GREY, #F8F8F8);
    font-size: 14px;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
  &__button {
    margin-top: 48px;
  }
  @include r(768px) {
    min-height: 508px;
    :deep(.container) {
      height: 508px;
    }
    &__title {
      font-size: 24px;
    }
    &__left, &__right {
      bottom: 145px;
    }
    &__left {
      max-width: unset;
      width: 191px;
      margin-left: -46px;
    }
    &__right {
      width: 192px;
      max-width: unset;
      margin-right: -47px;
    }
    &__center {
      top: 23px;
      transform: translateX(-50%);
    }
    &__text {
      margin-top: 16px;
      font-size: 14px;
    }
    &__button {
      margin-top: 259px;
    }
  }
}
</style>
