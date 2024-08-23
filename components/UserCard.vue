<script setup>

const { info } =  defineProps({
  withHourPrice: Boolean,
  withSpecialization: Boolean,
  info: {
    type: Object,
    default: () => ({
      name: 'Мария Иванова',
      city: 'Шэньчжень',
      rating: 4.8,
      reviews: '12',
      price: '40',
      tag: 'Гид'
    })
  }
})

const { name, city, rating, reviews, price, tag } = info

</script>

<template lang="pug">
Card.user-card
  .user-card__col
    Avatar(size="80")
    Tag(isAccentColor v-if="withSpecialization")
      | {{ tag }}
    .user-card__info
      p.h5.user-card__name {{ name }}
      p.bt-medium.user-card__city {{ city }}
  .user-card__row
    Tag(isAccentColor)
      IconsStarFillIcon(size="20")
      | {{ rating }}
    Tag
      p.bt-bold {{ reviews }}
      p.st-medium.op5 отзывов
    Tag(v-if="withHourPrice")
      p.bt-bold.green ${{ price }}
      p.st-medium.op5 / час

</template>

<style scoped lang="scss">
.user-card {
  align-items: center;
  &__row {
    display: flex;
    gap: 6px;
  }
  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2px;
  }
}
</style>
