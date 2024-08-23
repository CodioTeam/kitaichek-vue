<script setup>
definePageMeta({
  layout: "edit-layout",
  middleware: 'load-order-details',
})

const POSTFIX_BUDGET = ref('₽')

const POSTFIX_DEADLINE = ref(' дней')

import { useOrderStore } from '~/stores/order';
const orderStore = useOrderStore();
const order = orderStore.orderDetails;
const info = ref({
	title: order.title,
	description: order.description,
	budget: {
		min: order.budget.min,
		max: order.budget.max,
	},
	deadline: {
		min: order.deadline.min,
		max: order.deadline.max,
	},
})
</script>

<template lang="pug">
Card.order-content__card
	p.subtitle.op5 Заголовок должен быть коротким, но понятным
	Textarea(placeholder="Название проекта" :maxlength="100" resize="none" isBig v-model="info.title" :value="info.title" ).order-content__title
Card.order-content__card
	p.subtitle.op5 подробное описание задачи
	Textarea(placeholder="Описание" :maxlength="5000" v-model="info.description" :value="info.description").order-content__description
Card.order-content__card.order-content__card--row(row)
	.order-content__aside
		p.subtitle.op5 Кого ищем 1/3
	.order-content__content
		OrderFinder(:limit="3")
Card.order-content__card.order-content__card--row(row)
	.order-content__aside
		p.subtitle.op5 где
	.order-content__content
		// TODO: Сделать выпадающий список с поиском
		//- SearchDropdown
Card.order-content__card.order-content__card--row(row)
	.order-content__aside
		p.subtitle.op5 Условия
	.order-content__content
		SearchAccordion(alwaysOpen)
			template(#header)
				| Бюджет
				<span v-if="info.budget.min && info.budget.max">{{ info.budget.min }}{{POSTFIX_BUDGET}} - {{ info.budget.max }}{{POSTFIX_BUDGET}}</span>
				<span v-else-if="info.budget.min">{{ info.budget.min }}{{POSTFIX_BUDGET}}+</span>
				<span v-else-if="info.budget.max">0{{POSTFIX_BUDGET}} - {{ info.budget.max }}{{POSTFIX_BUDGET}}</span>
			FiltersFilterRange(
				@update:min="info.budget.min = $event"
				@update:max="info.budget.max = $event"
				@update:postfix="POSTFIX_BUDGET = $event"
				:min="info.budget.min"
				:max="info.budget.max"
				:postfix="POSTFIX_BUDGET"
			)
		SearchAccordion(alwaysOpen)
			template(#header)
				| срок выполнения
				<span v-if="info.deadline.min && info.deadline.max">{{ info.deadline.min }}{{POSTFIX_DEADLINE}} - {{ info.deadline.max }}{{POSTFIX_DEADLINE}}</span>
				<span v-else-if="info.deadline.min">{{ info.deadline.min }}{{POSTFIX_DEADLINE}}+</span>
				<span v-else-if="info.deadline.max">0{{POSTFIX_DEADLINE}} - {{ info.deadline.max }}{{POSTFIX_DEADLINE}}</span>
			FiltersFilterRange(
				@update:min="info.deadline.min = $event"
				@update:max="info.deadline.max = $event"
				@update:postfix="POSTFIX_DEADLINE = $event"
				:min="info.deadline.min"
				:max="info.deadline.max"
				:postfix="POSTFIX_DEADLINE"
				min-placeholder="5"
				max-placeholder="100"
			)
Button(green) Сохранить
</template>

<style scoped lang="scss">
.order-content {
	&__aside {
		max-width: 300px;
		width: 100%;
	}
	&__card-row {
		display: flex;
		gap: 24px;
	}
	&__content {
		display: flex;
		width: 100%;
		max-width: 100%;
		gap: 20px;
		flex-direction: column;
	}
	&__card {
		:deep(textarea.order-content__description) {
			min-height: 160px;
			height: 160px;
		}
	}
}
.order-aside {
	position: sticky;
	top: 16px;
	max-width: 332px;
	width: 100%;
}
</style>
