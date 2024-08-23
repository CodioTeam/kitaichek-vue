<script setup>
defineProps({
  refused: Boolean,
  viewEmployer: Boolean
})
let open = ref(false)
let modalOpen = ref(false)

let role = ref('Выберите роль')
let roles = ref(['Байер', 'Руководитель', 'Менеджер', 'Консультант'])
</script>

<template lang="pug">
Card.response
  .response-header
    Avatar(:size="80")
    .response-header__info
      .response-header__info-small
        p.response-header__name.h5
          | Мария Иванова
          Tag(isAccentColor) Байер
        p.response-header__city.bt-medium.op5 Шэньчжень
      .response-header__tags
        Tag(isAccentColor)
          IconsStarFillIcon
          | 4.94
          p.st-medium.op5 средняя оценка
        Tag
          p.bt-bold 78
          p.st-medium.op5 отзывов
        Tag
          p.green.bt-bold $25
          p.st-medium.op5 / час
    p.response-header__date.st.op5(v-if="!viewEmployer") 01.08.2024 в 12:15
    button.response-header__refused(v-if="viewEmployer")
      IconsDeleteDropdownIcon(size="24")

  .response-content
    p.h5.green $ 300, выполню до 30 мая
    hr.divider
    .response-content__wrapper(:class="open ? 'open' : ''")
      .response-content__content
        p.lt.response-content__text
          |Приветствую будущих клиентов!
          br
          |Я рад предложить вам свои услуги гида в Китае.
          br
          br
          |Я владею английским и китайским языками и хорошо знаком с культурой, историей и традициями этой удивительной страны. Я могу помочь вам организовать индивидуальный или групповой тур, а также предоставить следующие услуги:
          br
          br
          |1. Организация трансферов от аэропорта или вокзала до отеля и обратно.
          br
          |2. Помощь в бронировании отелей, билетов на транспорт и экскурсии.
          br
          |3. Проведение экскурсий по Пекину, Шанхаю, Сианяну, Гуйлиню и другим городам Китая.
          br
          |4. Посещение известных достопримечательностей, таких как Великая Китайская стена, Запретный город, Армия терракотты и другие.
          br
          |5. Организация дегустации китайской кухни и посещения местных ресторанов.
          br
          |6. Помощь в покупках сувениров и подарков для друзей и родственников.
          br
          |7. Предоставление информации о культуре, традициях и обычаях Китая.
          br
          |8. Гарантия индивидуального подхода, профессионального обслуживания и комфортного пребывания в Китае.
          br
          br
          |Я гарантирую, что ваше путешествие в Китай станет незабываемым и насыщенным яркими впечатлениями. С уважением, Мария Иванова.
    button.white.bl.op5(@click="open = !open") {{ open ? 'Скрыть' : 'Показать полностью' }}
  hr.divider(v-if="!refused && !viewEmployer")
  .response-footer(v-if="!refused && !viewEmployer")
    Button(green) Изменить отклик
    Button(white outline) Отказаться от закакза
  .response-footer(v-if="viewEmployer")
    Button(yellow @click="modalOpen = true") Выбрать исполнителем
    Button(white outline)
      IconsChatIcon(size=16)
      | Написать

ModalContainer(:open="modalOpen" @close="modalOpen = false; modalOpen = null;" blur centered)
  transition(name="fade-center" mode="out-in")
    Modal(v-if="modalOpen" noBorder @close="modalOpen = null; modalOpen = false" centered)
      template(#header)
        p.h5 Определите роль исполнителя
      template(#content)
        .response-modal
          Avatar(size=80)
          p.h5 Мария Иванова
          p.bt-medium.op5 Шэньчжень
        .response-modal__footer
          SingleDropdown( :value="role" @update:modelValue="role = $event" :list="roles" secondary)
          Button(dark :disabled="role === 'Выберите роль'") Выбрать исполнителем
</template>

<style scoped lang="scss">
.response-modal {
  &__footer {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }
  max-width: 640px;
  width: 100%;
  min-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .h5 {
    margin-top: 16px;
  }
  .bt-medium {
    margin-top: 6px;
  }
}
.response-header {
  display: flex;
  gap: 16px;
  align-items: center;
  &__refused {
    margin-left: auto;
    margin-bottom: auto;
  }
  &__date {
    margin-left: auto;
    margin-bottom: auto;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  &__name {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__info-small {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 4px;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
}
.response-content {
  &>.divider {
    margin: 12px 0px 24px;
  }
  &__wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: .3s ease;
    margin-bottom: 4px;
    &.open {
      grid-template-rows: 1fr;
    }
  }
  &__content {
    overflow: hidden;
    height: 100%;
    transition: .3s ease;
    min-height: 180px;
  }
}
.response-footer {
  display: flex;
  gap: 12px;
  &>* {
    flex: 1;
  }
}
</style>
