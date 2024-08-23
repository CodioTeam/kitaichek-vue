<script setup>

</script>

<template lang="pug">
form.card.response-form
  p.subtitle.op5 Сопроводительное сообщение
  Textarea(placeholder="Ответить на проект..." :maxlength="5000")
  .response-form__row
    Input(title="Бюджет" type="number" placeholder="0" isDark postfix="$")
    Input(title="срок выполнения" type="number" placeholder="0" isDark postfix="дней")
  Button(type="submit" green) Откликнуться
</template>

<style scoped lang="scss">
.response-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  &__row {
    display: flex;
    gap: 20px;
    &>*{
      max-width: calc(50% - 10px);
    }
  }
}
</style>
