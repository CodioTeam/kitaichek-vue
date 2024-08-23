<script setup>
defineProps({
  placeholder: String,
  maxlength: {
    type: Number,
    default: 500
  },
  resize: {
    type: String,
    default: 'vertical'
  },
  isBig: Boolean,
  value: String,
})
defineEmits(['update:modelValue'])
let lengthMessage = ref(0)
</script>

<template lang="pug">
.textarea
  textarea(
    :class="isBig ? 'h4 big' : 'bt-medium'"
    :value="value"
    @input="$emit('update:modelValue', $event.target.value); lengthMessage = $event.target.value.length"
    :style="`resize: ${resize}`" :placeholder="placeholder" :maxlength="maxlength" v-bind="$attrs"
  )
  p.st-medium.op5 {{ lengthMessage }}/{{ maxlength }}
</template>

<style scoped lang="scss">
.textarea {
  width: 100%;
  max-width: 100%;
  textarea {
    color: #fff;
    width: 100%;
    max-width: 100%;
    padding-bottom: 12px;
    border-bottom: 1px solid #424242;
    margin-bottom: 12px;
    min-height: 36px;
    height: 36px;
    &::placeholder {
      opacity: 0.5;
    }
    &.big {
      min-height: 42px;
      height: 42px;
    }
  }
  p {
    text-align: right;
  }
}
</style>
