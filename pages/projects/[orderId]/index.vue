<script setup>
definePageMeta({
	middleware: 'load-user-details',
})

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
// TODO: Удалить после натяжки API, CTRL+F testToggler
let testToggler = ref("stateTwo")
</script>

<template lang="pug">
button(@click="testToggler = 'stateOne'") stateOne
button(@click="testToggler = 'stateTwo'") stateTwo
button(@click="testToggler = 'stateThree'") stateThree
button(@click="testToggler = 'stateFour'") stateFour
Block.order
	.order-aside
		p.subtitle Заказчик
		UserCard
	.order-content
		.order-content__header
			a(href="#").bt-medium Вернуться к заказам
			a(href="#").bt-medium Пожаловаться
		.order-content__main
			Request(:info="PLACEHOLDER_REQUEST" isFull)
			p.order-content__chosen(v-if="testToggler === 'stateFour'") Исполнителей выбрано — 3
			.order-content__response
				p.subtitle Ваш отклик
				hr.divider.order-content__divider
				ResponseForm(v-if="testToggler === 'stateOne'")
				Refused(v-if="testToggler === 'stateThree' || testToggler === 'stateFour'")
				Response(v-if="testToggler !== 'stateOne'" :refused="testToggler === 'stateFour' || testToggler === 'stateThree'" )

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
	gap: 16px;
	&__chosen {
		color: var(--ACCENT, #FFE712) !important;
		font-size: 12px;
		font-weight: 500;
		line-height: 140%; /* 16.8px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
	}
	&__divider {
		margin: -12px 0px 0px;
	}
	&__response {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__main {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: #fff;
			opacity: 0.5;
			transition: .3s ease;
			@include hover {
				opacity: 1;
			}
		}
	}
}
.order-aside {
	position: sticky;
	top: 16px;
	max-width: 332px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 18px;
}

</style>
