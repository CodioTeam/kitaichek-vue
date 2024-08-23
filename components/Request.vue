<script setup>
import Button from "./Button.vue";
import UserSmall from "./UserSmall.vue";
const { info, isEmployer, hasFeedback, sentFeedback } =  defineProps({
	info: Object,
	responseLeft: String,
	startWork: String,
	isWaiting: Boolean,
	isPersonality: Boolean,
	isRefused: Boolean,
	isCompleted: Boolean,
	hasFeedback: Boolean,
	sentFeedback: Boolean,
	atWork: Boolean,
	isEmployer: Boolean,
	isFull: Boolean
})

import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const user = userStore.userDetails;

const { title, description, price, tags, city, createdAt, deadline, responses } = info

const giveFeedback = sentFeedback ? 'Отзыв отправлен' : 'Оставить отзыв'
const checkFeedback =	ref('')

const typeVisitor = inject('typeVisitor')
// FIXME: Найти решение ошибки "optionalChainingAssign"
// onMounted(() => {
// 	if(typeVisitor?.value === 'employer') {
// 		checkFeedback?.value = hasFeedback ? 'Отзыв исполнителя' : 'Без отзыва исполнителя'
// 	} else {
// 		checkFeedback?.value = hasFeedback ? 'Отзыв заказчика' : 'Без отзыва заказчика'
// 	}
// })

// watch(typeVisitor, () => {
// 	if(typeVisitor.value === 'employer') {
// 		checkFeedback.value = hasFeedback ? 'Отзыв исполнителя' : 'Без отзыва исполнителя'
// 	} else {
// 		checkFeedback.value = hasFeedback ? 'Отзыв заказчика' : 'Без отзыва заказчика'
// 	}
// })
</script>

<template lang="pug">
a(href="#").request
	.request__col
		.request__header
			.request__header-main
				p.request__title.h5 {{ title }}
				p.request__time.st {{ createdAt }}
			.request__info
				p.request__price {{ price }}
				p.request__date.st-medium {{ deadline }}
		p.request__description(:class="{ 'request__description--full': isFull}") {{ description }}
		.request__tags
			Tag(v-for="tag, i in tags" :isAccent="i === 0") {{ tag }}
		.request__footer
			p.request__address.bt-medium
				IconsLocationIcon
				| {{ city }}
			p.request__response.st
				IconsResponseIcon(size="20")
				| {{ responses }} откликов
		.request__additional(v-if="responseLeft || isWaiting || isPersonality || isRefused || isCompleted || atWork")
			p.request__time.st(v-if="responseLeft") {{responseLeft}}
			p.request__time.st(v-if="atWork") {{startWork}}
			.request__waiting(v-if="isWaiting || isPersonality && !isEmployer")
				Button(green) Готов(а) начать
				Button(white outline) Отказаться от закакза
			.request__waiting(v-if="isPersonality && isEmployer")
				UserSmall(:info="user" isPersonality)
			.request__completed(v-if="isCompleted")
				Button(green :disabled="sentFeedback") {{ giveFeedback }}
				Button(white outline :disabled="!hasFeedback") {{ checkFeedback }}
			Refused(v-if="isRefused")

</template>

<style scoped lang="scss">
.request {
	display: flex;
	background: var(--GREY-400, #1C1C19);
	padding: 24px;
	gap: 24px;
	align-items: flex-start;
	transition: .3s ease;
	border-radius: 16px;
	&__waiting, &__completed {
		display: flex;
		gap: 12px;
		:deep(.button) {
			width: 100%;
			max-width: calc(50% - 6px);
		}
	}
	&__additional {
		border-top: 1px solid var(--GREY-100, #333);
		padding-top: 24px;
	}
	&+& {
		margin-top: 16px;
	}
	&__header {
		display: flex;
		justify-content: space-between;
		gap: 24px;
	}
	&__info {
		padding: 8px 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		position: relative;
		overflow: hidden;
		min-width: 106px;
		&>* {
			position: relative;
			z-index: 2;
		}
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__date {
		white-space: nowrap;
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		opacity: 0.7;
		text-align: right;
	}
	&__price {
		text-align: right;
		color: var(--GREEN, #00FF84) !important;
		font-size: 20px;
		font-weight: 600;
		line-height: 100%; /* 20px */
	}
	&__info-row {
		display: flex;
		.request__time {
			display: none;
		}
	}
	&__time {
		opacity: 0.5;
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		white-space: nowrap;
	}
	&__address {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #f8f8f880 !important;
	}
	&__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__response {
		display: flex;
		gap: 4px;
		align-items: center;
		color: #f8f8f880 !important;
	}
	&__tags {
		gap: 4px;
		display: flex;
	}
	&__tag {
		border-radius: 16px;
		background: var(--ACCENT, #FF0);
		padding: 4px 8px;
		color: var(--DARK) !important;
	}
	&__description {
		height: 56px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 16px;
		line-height: 160%;
		opacity: 0.8;
		&--full {
			-webkit-line-clamp: 9999;
			-webkit-box-orient: vertical;
			height: auto;
		}
	}
	@include hover {
		background: var(--GREY-400, #1C1C19);
	}
	@include r(768px) {
		padding: 16px;
		flex-direction: column;
		&__header {
			flex-direction: column-reverse;
		}
		&__header-main {
			margin-top: -8px;
		}
		&__title {
			font-size: 18px;
			line-height: 160%;
		}
		&__info {
			max-width: 100%;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			padding: 0;
		}
		&__info-row {
			justify-content: space-between;
			align-items: flex-end;
		}
	}
}
</style>
