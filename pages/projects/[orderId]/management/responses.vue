<script setup>
import { useOrderStore } from '~/stores/order';

definePageMeta({
  layout: "edit-layout",
  middleware: 'load-order-details',
})

const orderStore = useOrderStore();
const order = orderStore.orderDetails;
let viewResponse = ref(false)
const PLACEHOLDER_REQUEST = {
	title: "Гид на куда-то, чтобы сделать что-то",
	description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
	price: "$40",
	city: "Шэньчжень",
	tags: ["Гид", "Посредник", "Инспектор"],
	createdAt: "2 ч 42 мин назад",
	deadline: '1-3 месяца',
	responses: '12'
}
</script>

<template lang="pug">
.management__header
	p.subtitle(@click="viewResponse = !viewResponse") Отобразить отклики
	p.h5 {{ order.views }} просмотра
	p.bt-medium.op5 {{ order.todayViews }} за сегодня
p.subtitle.op5(v-if="!viewResponse") Скоро здесь появятся отклики исполнителей
.management__responses(v-else)
	Response(viewEmployer)
</template>

<style scoped lang="scss">
.management {
	&__header {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--GREY-100);
	}
	&__responses {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
}
</style>
