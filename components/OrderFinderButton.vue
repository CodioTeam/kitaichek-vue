<script setup>
defineProps({
  selected: Boolean,
  small: Boolean
})
</script>

<template lang="pug">
button.finder-button(:class="{ 'finder-button--active': selected, 'finder-button--small': small }")
  p.bt-medium(v-if="selected") {{ selected }}
  IconsDeleteDropdownIcon(v-if="selected" size="24")
  IconsAddIcon(v-else)
</template>

<style scoped lang="scss">
.finder-button {
  height: 120px;
  display: flex;
  flex: 0 1 0;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
  padding: 16px 0;
  transition: .3s ease;
  border-radius: 16px;
  background: var(--GREY-300);
  max-width: 0px;
  p {
    display: flex;
    align-items: center;
    gap: 4px;
    transition: .3s ease;
  }
  &:not(&--active) {
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    @include hover {
      background: var(--GREY-100);
    }
    &:active {
      background: var(--GREY-100);
    }
  }
  &:first-child:last-child,
  &:first-child {
    flex: 1 1 0;
    max-width: 100%;
  }
  &--active {
    background: var(--ACCENT);
    flex-direction: row;
    padding: 16px;
    flex: 1 1 0;
    p {
      color: var(--GREY-400) !important;
    }
    :deep(svg) {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: .3s ease;
      color: var(--GREY-400) !important;
    }
    &:not(:last-child) {
      margin-right: 8px;
    }
    @include hover {
      :deep(svg) {
        opacity: 1;
      }
      p {
        opacity: 0;
      }
    }
  }
  &--active + & {
    max-width: 100%;
    padding: 16px;
    flex: 1 1 0;
  }
  &--small {
    max-width: 72px !important;
    flex: 1 1 0 !important;
    padding: 16px !important;
  }
}
</style>
