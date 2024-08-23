<script setup>
defineProps({
  src: String,
  alt: String,
  size: {
    default: 60 ,
    type: String || Number
  },
})
</script>

<template lang="pug">
.avatar(:style="{ '--size': size + 'px' }")
  img(:src="src", :alt="alt")
</template>

<style scoped lang="scss">
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  max-width: var(--size);
  max-height: var(--size);
  background: var(--GREY-300, #272723);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
