<script setup>

const { limit } = defineProps({
  limit: {
    type: Number,
    default: 3
  }
})
let selected = ref([])
let select = ref(false)
let variants = ref([
  "Гид",
  "Переводчик",
  "Логист",
  "Посредник",
  "Обменник",
  "Байер",
  "Инспектор",
  "Фабрика"
])
let clickedBy = ref(0)
const handleSelect = (index) => {
  if(selected.value[index]) {
    selected.value = selected.value.filter(i => i !== selected.value[index])
    return
  }
  select.value = true;
  clickedBy.value = index
}
const handleSelected = (variant) => {
  if(selected.value.includes(variant)) {
    selected.value = selected.value.filter(i => i !== variant)
  } else {
    if(selected.value.length === limit) {
      selected.value[clickedBy.value] = variant
      select.value = false
      return
    }
    selected.value = [...selected.value, variant]
  }
  select.value = false
}
</script>

<template lang="pug">
.finder
  .finder__row
    template(v-for="item, i in Number(limit)")
      OrderFinderButton(@click="handleSelect(i)" :selected="selected[i]")
  .finder__variants(:class="{ 'finder__variants--active': select }" )
    .finder__variants-row
      Tag(
        isClick
        v-for="variant, i in variants"
        :isAccent="selected.includes(variant)"
        @click="handleSelected(variant)"
      )
        | {{ variant }}
        IconsDeleteDropdownIcon(v-if="selected.includes(variant)" size="14")
</template>

<style scoped lang="scss">
.finder {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  &__row {
    display: flex;
  }
  &__variants {
    display: grid;
    grid-template-rows: 0fr;
    transition: .3s ease;
    &--active {
      margin-top: 24px;
      grid-template-rows: 1fr;
    }
  }
  &__variants-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: 100%;
    overflow: hidden;
    transition: .3s ease;
  }
}
</style>
