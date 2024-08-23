<script setup>
import { useOrderStore } from '~/stores/order';

definePageMeta({
  layout: "edit-layout",
  middleware: 'load-order-details',
})

const orderStore = useOrderStore();
const order = orderStore.orderDetails;
console.log(order)

let modalOpen = ref(false);
let agreement = ref(false);
</script>

<template lang="pug">
.management__header
	p.management__title.h5 Управление заказом
	Button(yellow @click="modalOpen = true") Начать работу
p.subtitle
	| Чтобы найти исполнителей, перейдите в раздел
	<NuxtLink :to="`/projects/${order.id}/management/responses`"> отклики</NuxtLink>
.management-card(v-for="i in order.neededSpecialization")
	p.management-card__title.op5.subtitle {{ i }}
	.management-card__row
		OrderFinderButton(:selected="false" small :to="`/projects/${order.id}/management/responses`")

ModalContainer(:open="modalOpen" @close="modalOpen = false; modalOpen = null;" blur centered)
	transition(name="fade-center" mode="out-in")
		Modal(v-if="modalOpen" noBorder @close="modalOpen = null; modalOpen = false" centered)
			template(#header)
				p.h5 Внимание! Вы начинаете сотрудничество
			template(#content)
				.management-modal
					.management-modal__row
						.management-modal__card
							Avatar(size=80)
							p.h5 Мария Иванова
							p.bt-medium.op5 Переводчик
						.management-modal__card
							Avatar(size=80)
							p.h5 Мария Иванова
							p.bt-medium.op5 Гид
						.management-modal__card
							Avatar(size=80)
							p.h5 Мария Иванова
							p.bt-medium.op5 Перевозчик
				.management-modal__footer
					label.management-modal__check
						Checkbox(:value="agreement", @update:value="agreement = $event", secondary)
						p.st-medium.op5 Начиная работу над проектом, я осознаю, что беру на себя ответственность за выполнение всех обязательств и требований, оговоренных в договоре с нанимаемыми фрилансерами. Все возможные споры и разногласия будут урегулированы путем переговоров и согласований с фрилансерами. Ответственность за выполнение проекта лежит исключительно на заказчике и фрилансерах.
					Button(dark :disabled="!agreement") Выбрать исполнителем
</template>

<style scoped lang="scss">
.management {
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--GREY-100);
	}
}
.management-card {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
.subtitle {
	a {
		color: var(--ACCENT);
	}
}
.management-modal {
	max-width: 640px;
  width: 100%;
  min-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	&__row {
		display: flex;
		gap: 24px;
	}
	&__card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
  &__footer {
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 24px;
		margin-top: 24px;
  }
	&__check {
		display: flex;
		align-items: center;
		gap: 12px;
	}
  .h5 {
    margin-top: 16px;
  }
  .bt-medium {
    margin-top: 6px;
  }
}
</style>
