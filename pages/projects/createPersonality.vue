<script setup>
let published = ref(false)

const MIN_BUDGET_VALUE = ref(null)
const MAX_BUDGET_VALUE = ref(null)
const POSTFIX_BUDGET = ref('₽')

const MIN_DEADLINE_VALUE = ref(null)
const MAX_DEADLINE_VALUE = ref(null)
const POSTFIX_DEADLINE = ref('дней')
</script>

<template lang="pug">
Block.order
	p.subtitle Персональный заказ
	.order__wrapper
		.order-aside
			UserCard(withHourPrice withSpecialization)
		.order-content
			Card.order-content__card
				p.subtitle.op5 Заголовок должен быть коротким, но понятным
				Textarea(placeholder="Название проекта" :maxlength="100" resize="none" isBig).order-content__title
			Card.order-content__card
				p.subtitle.op5 подробное описание задачи
				Textarea(placeholder="Описание" :maxlength="5000").order-content__description
			Card.order-content__card.order-content__card--row(row)
				.order-content__aside
					p.subtitle.op5 Кого ищем 1/1
				.order-content__content
					OrderFinder(:limit="1")
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
							<span v-if="MIN_BUDGET_VALUE && MAX_BUDGET_VALUE">{{ MIN_BUDGET_VALUE }}{{POSTFIX_BUDGET}} - {{ MAX_BUDGET_VALUE }}{{POSTFIX_BUDGET}}</span>
							<span v-else-if="MIN_BUDGET_VALUE">{{ MIN_BUDGET_VALUE }}{{POSTFIX_BUDGET}}+</span>
							<span v-else-if="MAX_BUDGET_VALUE">0{{POSTFIX_BUDGET}} - {{ MAX_BUDGET_VALUE }}{{POSTFIX_BUDGET}}</span>
						FiltersFilterRange(
							@update:min="MIN_BUDGET_VALUE = $event"
							@update:max="MAX_BUDGET_VALUE = $event"
							@update:postfix="POSTFIX_BUDGET = $event"
							:min="MIN_BUDGET_VALUE"
							:max="MAX_BUDGET_VALUE"
							:postfix="POSTFIX_BUDGET"
						)
					SearchAccordion(alwaysOpen)
						template(#header)
							| срок выполнения
							<span v-if="MIN_DEADLINE_VALUE && MAX_DEADLINE_VALUE">{{ MIN_DEADLINE_VALUE }}{{POSTFIX_DEADLINE}} - {{ MAX_DEADLINE_VALUE }}{{POSTFIX_DEADLINE}}</span>
							<span v-else-if="MIN_DEADLINE_VALUE">{{ MIN_DEADLINE_VALUE }}{{POSTFIX_DEADLINE}}+</span>
							<span v-else-if="MAX_DEADLINE_VALUE">0{{POSTFIX_DEADLINE}} - {{ MAX_DEADLINE_VALUE }}{{POSTFIX_DEADLINE}}</span>
						FiltersFilterRange(
							@update:min="MIN_DEADLINE_VALUE = $event"
							@update:max="MAX_DEADLINE_VALUE = $event"
							@update:postfix="POSTFIX_DEADLINE = $event"
							:min="MIN_DEADLINE_VALUE"
							:max="MAX_DEADLINE_VALUE"
							:postfix="POSTFIX_DEADLINE"
							min-placeholder="5"
							max-placeholder="100"
						)
			Button(green) Создать объявление
</template>

<style scoped lang="scss">
.order-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	:deep(textarea.order-content__description) {
		min-height: 160px;
		height: 160px;
	}
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
}
.order {
	display: flex;
	flex: 1;
	background: var(--DARK);
	padding: 24px 0px 270px;
	gap: 24px;
	align-items: flex-start;
	position: relative;
	&__wrapper {
		display: flex;
		gap: 60px;
		margin-top: 16px;
	}
}
.order-aside {
	position: sticky;
	top: 16px;
	max-width: 332px;
	width: 100%;
}
</style>
