<script setup>
definePageMeta({
	middleware: 'load-order-details',
})
import { useOrderStore } from '~/stores/order';
const orderStore = useOrderStore();
const order = orderStore.orderDetails;

const isEditPage = useRouter().currentRoute.value.path.includes('edit')
let published = ref(order.published)
</script>

<template lang="pug">
Block.order
	.order-aside
		AsideLink(:to="`/projects/${order.id}/management`") Управление заказом
		AsideLink(:to="`/projects/${order.id}/management/responses`" count="1000") Отклики
		AsideLink(:to="`/projects/${order.id}/management/recommended`" count="12") Рекомендованные специалисты
		AsideLink(:to="`/projects/${order.id}/management/edit`") редактирование
		SearchAccordion(alwaysOpen v-if="isEditPage" style="margin-top: 32px")
			template(#header) Видимость объявления
			FiltersFilterToggler(:value="published" @update:value="published = $event") {{ published ? 'Объявление опубликовано' : 'Объявление не опубликовано' }}
		p.bt-medium.op5(v-if="isEditPage" style="margin-top: 32px") Заказ создан 22 февраля 2024
	.order-content
		slot(typeVisitor="executor")

</template>

<style scoped lang="scss">
.order {
	display: flex;
	flex: 1;
	background: var(--DARK);
	padding: 24px 0px 270px;
	gap: 24px;
	align-items: flex-start;
	position: relative;
	:deep(.container) {
		display: flex;
		gap: 60px;
	}
}
.order-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
}
.order-aside {
	position: sticky;
	top: 16px;
	max-width: 332px;
	width: 100%;
	&__button {
		width: 100%;
		max-width: 100%;
		margin-top: 32px;
	}
}

</style>
