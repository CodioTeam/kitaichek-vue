<script setup>

</script>

<template lang="pug">
.user
  Avatar(avatar="assets/img/avatar-01.jpg", alt="Avatar")
  .user__info
    .user__header
      p.user__name.h5 Мария Иванова
      Tag(isAccentColor) Переводчик
    p.user__city.bt Шэньчжень
</template>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 16px;
  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__city {
    opacity: 0.5;
  }
}
</style>
