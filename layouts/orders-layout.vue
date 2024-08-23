<script setup>
definePageMeta({
	middleware: 'load-user-details',
})
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const user = userStore.userDetails;

const typeVisitor = ref('executor')

provide('typeVisitor', typeVisitor)
</script>

<template lang="pug">
button(@click="typeVisitor = 'executor'") executor
button(@click="typeVisitor = 'employer'") employer

Block.order
	.order-aside
		AsideLink(:to="`/users/${user.id}/orders`" count="2") Опубликованные
		AsideLink(:to="`/users/${user.id}/orders/work`" count="2") В работе
		AsideLink(:to="`/users/${user.id}/orders/waiting`" count="2" v-if="typeVisitor === 'executor'") Ожидают ответа
		AsideLink(:to="`/users/${user.id}/orders/personality`" count="2") Персональные
		AsideLink(:to="`/users/${user.id}/orders/refused`" count="2" v-if="typeVisitor === 'executor'") Отказы
		AsideLink(:to="`/users/${user.id}/orders/unpublished`" count="2" v-if="typeVisitor === 'employer'") Неопубликованные
		AsideLink(:to="`/users/${user.id}/orders/completed`" count="2") Завершенные
		Button(to="/projects/create" yellow v-if="typeVisitor === 'employer'").order-aside__button Разместить объявление
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
