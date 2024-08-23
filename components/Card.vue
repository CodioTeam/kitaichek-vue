<script setup>
defineProps({
  row: Boolean
})
</script>

<template lang="pug">
.card(:class="{ 'card--row': row }")
  slot
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  border-radius: 16px;
  background: var(--GREY-400);
  &--row {
    flex-direction: row;
  }
}
</style>
