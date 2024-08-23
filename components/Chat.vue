<script setup>

const { info } =  defineProps({
	info: {
		type: Object,
	}
})

defineEmits(['newMessage'])

const { sender, messages, city } = info

const isBlocked = ref(false)
const blockedWindow = ref(false)
const chat = ref(null)
const message = ref('')

onMounted(() => {
	chat.value.scrollTop = chat.value.scrollHeight
})
</script>

<template lang="pug">
.modal-chat__content
	.modal-chat-header(:class="{ 'active': blockedWindow }")
		.modal-chat-header__header
			a.modal-chat-header__avatar
			.modal-chat-header__info
				p.modal-chat-header__title.bt-bold {{ sender }}
				p.modal-chat-header__city {{ city }}
			button.modal-chat-header__button(@click="blockedWindow = !blockedWindow")
				IconsBlockUserIcon
		.modal-chat-header__wrapper
			.modal-chat-header__content
				p.modal-chat-header__sure-title.bt-bold Вы хотите заблокировать пользователя
				p.modal-chat-header__sure-text.st Данный пользователь больше не сможет отправлять вам сообщения. <br> Чтобы возобновить переписку отправьте ему любое сообщение.
				.modal-chat-header__row
					Button(danger @click="blockedWindow = false; isBlocked = true").modal-chat-header__confirm Заблокировать
					Button(white @click="blockedWindow = false").modal-chat-header__cancel Отменить

	.modal-chat__chat(ref="chat")
		template(v-for="(item, index) in messages")
			p.modal-chat-item__day(v-if="messages[index][2].split(' ')[0] !== messages[index - 1]?.[2]?.split(' ')?.[0]") {{ item[2].split(' ')[0] }}
			.modal-chat-item(:class="item[0] ? 'sender' : 'receiver'")
				p.modal-chat-item__text.bt {{ item[1] }}
				p.modal-chat-item__date {{ item[2].split(' ')[1] }}
		.modal-chat-item.closed(:class="{ 'active': isBlocked }")
			p.modal-chat-item__closed-title Заказчик завершил диалог
			p.modal-chat-item__closed-text.st Только заказчик может написать новое сообщение, чтобы продолжить обсуждение

	.modal-chat-label(v-if="!isBlocked" :class="{ 'active': message.length > 0 }")
		label.modal-chat-label__label
			textarea.modal-chat-label__textarea.bt-medium(placeholder="Сообщение" v-model="message")
		Button(dark @click="$emit('newMessage', message); message = ''").modal-chat-label__button
			IconsEnterIcon
			span Enter

</template>

<style scoped lang="scss">
// MODAL-CHAT
.modal-chat {
	transition: .3s ease;
	transform: translateX(100%);
	height: 100%;
	opacity: 0;
	&.active {
		transform: translateX(0);
		opacity: 1;
	}
	&__title {
		display: flex;
		align-items: center;
		gap: 4px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 24px;
		height: 100%;
	}
	&__chat {
		overflow: auto;
		display: flex;
		flex: 1 1 0;
		flex-direction: column;
		padding-right: 10px;
		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-thumb {
			background: #333;
			width: 5px;
			border-radius: 16px;
		}
	}
	&__header {
		display: flex;
	}
}
.modal-chat-label {
	display: flex;
	width: 100%;
	gap: 24px;
	align-items: flex-end;
	&__textarea {
		width: 100%;
		padding: 12px;
		resize: vertical;
		min-height: 64px;
		max-height: 128px;
		&::placeholder {
			opacity: 0.55;
		}
		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-thumb {
			background: #333;
			width: 5px;
			border-radius: 16px;
		}
	}
	&__button {
		position: relative;
		min-width: 48px;
		min-height: 48px;
		max-width: 48px;
		max-height: 48px;
		width: 48px;
		height: 48px;
		overflow: hidden;
		transform: translateX(48px);
		transition: .3s ease;
		opacity: 0;
		pointer-events: none;
		margin-left: -72px;
		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transition: .3s ease;
			transform: translate(-50%, -50%);
		}
		span:not(.icon) {
			position: absolute;
			top: 50%;
			left: 50%;
			transition: .3s ease;
			transform: translate(-50%, 150%);
		}
		@include hover {
			svg {
				transform: translate(-50%, -200%);
			}
			span:not(.icon) {
				transform: translate(-50%, -50%);
			}
		}
	}
	&__label {
		width: 100%;
		position: relative;
		border-bottom: 1px solid #E9E9E9;
		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			background: #12120F;
			height: 1px;
			display: block;
			transform-origin: left;
			width: 100%;
			transition: .3s ease;
			transform: scaleX(0);
		}
		&:focus-within::before {
			transform: scaleX(1);
		}
	}
	&.active {
		.modal-chat-label__button {
			opacity: 1;
			transform: translateX(0);
			pointer-events: all;
			margin-left: 0;
		}
	}
	&.hidden {
		display: none;
	}
}
.modal-chat-close {
	display: none;
}
.modal-chat-item {
	display: flex;
	gap: 12px;
	align-items: flex-start;
	margin-top: 24px;
	&__date {
		opacity: 0.3;
		font-size: 12px;
		font-weight: 600;
		line-height: 160%; /* 19.2px */
		white-space: nowrap;
	}
	&__text {
		padding: 12px 16px;
	}
	&__day {
		text-align: center;
		color: var(--GREY-300, #272723);
		font-size: 12px;
		font-weight: 600;
		line-height: 160%; /* 19.2px */
		margin-top: 24px;
	}
	&.sender {
		flex-direction: row-reverse;
		&+& {
			margin-top: 2px;
		}
		.modal-chat-item__text {
			border-radius: 16px;
			background: var(--GREY-300, #272723);
			color: var(--WHITE, #FFF);
		}
	}
	&.receiver {
		justify-content: flex-start;
		&+& {
			margin-top: 2px;
		}
		.modal-chat-item__text {
			border-radius: 16px;
			background: var(--LIGHT-GREY, #F8F8F8);
		}
	}
	&.closed {
		width: 100%;
		padding: 0px 4px;
		height: 100%;
		max-height: 0px;
		min-height: 0px;
		transition: .3s ease;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		overflow: hidden;
		border-radius: 16px;
		background: var(--LIGHT-GREY, #F8F8F8);
		&.active {
			padding: 8px 4px;
			max-height: 54px;
			height: 54px;
			min-height: 54px;
			margin-top: 24px;
		}
	}
	&__closed-title {
		color: var(--GREY-100, #333);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%; /* 16.8px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
		text-align: center;
	}
	&__closed-text {
		opacity: 0.5;
		text-align: center;
	}
}
.modal-chat-header {
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	padding: 12px;
	transition: .3s ease;
	background: var(--GREY-300, #272723);
	&__avatar {
		width: 40px;
		min-width: 40px;
		min-height: 40px;
		height: 40px;
		border-radius: 50%;
		background: #D9D9D9;
	}
	&__header {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	&__info {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	&__button {
		border-radius: 16px;
		background: var(--GREY-100, #333);
		padding: 4px;
		margin-left: auto;
		height: 32px;
		max-height: 32px;
		max-width: 32px;
		width: 32px;
	}
	&__title {
		color: var(--WHITE);
	}
	&__city {
		color: var(--WHITE, #FFF);
		font-size: 12px;
		font-weight: 500;
		opacity: 0.5;
		line-height: 100%; /* 12px */
	}
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: .3s ease;
	}
	&__content {
		height: 100%;
		transition: .3s ease;
		overflow: hidden;
		border-radius: 16px;
		background: var(--GREY-100, #333);
		padding: 0px 12px;
	}
	&__sure-title {
		color: var(--RED, #FF5C00);
		text-align: center;
	}
	&__sure-text {
		text-align: center;
		color: var(--WHITE);
		margin-top: 12px;
	}
	&__row {
		display: flex;
		margin-top: 24px;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}
	&.active {
		.modal-chat-header {
			&__wrapper {
				grid-template-rows: 1fr;
				margin-top: 12px;
			}
			&__content {
				padding: 12px;
			}
		}
	}
}
</style>
