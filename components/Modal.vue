<script setup>
import CloseIcon from "~/components/icons/CloseIcon.vue"
import ChevronIcon from "~/components/icons/ChevronIcon.vue"
import { ref, useAttrs } from 'vue'

defineProps({
	noBorder: Boolean,
	isForm: Boolean,
	centered: Boolean
})

const emits = defineEmits(['close'])
</script>

<template lang="pug">
.modal(:class="{ 'modal--form': isForm, 'modal--centered': centered }")
	.modal__wrapper
		.modal__header(:class="{ 'modal__header--no-border': noBorder }")
			slot(name="header")
			button.modal__back(@click="$emit('back')" v-if="$attrs.onBack")
				ChevronIcon
				| Назад
			button.modal__close(@click="$emit('close')")
				CloseIcon
		.modal__content
			slot(name="content")
		.modal__footer(v-if="$slots.footer")
			slot(name="footer")
</template>

<style scoped lang="scss">
.modal {
	margin-left: auto;
	height: 100%;
	max-width: calc(50% - 24px); ;
	display: flex;
	width: 100%;
	flex-direction: column;
	background: white;
	border-radius: 16px;
	padding: 16px 24px;
	// right: 0;
	gap: 16px;
	top: 0;
	right: 0;
	// transform: translateX(100%);
	// opacity: 0;
	// position: absolute;
	// transition: .3s ease, position .1s ease .3s;
	// &.active {
	// 	transition: .3s ease, position 0s ease .3s;
	// 	transform: translateX(0);
	// 	opacity: 1;
	// 	position: relative;
	// }
	&--centered {
		padding: 24px;
		margin: auto;
		max-width: 100%;
		width: auto;
		height: auto;
	}
	&--form &__content {
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		grid-template-rows: 1fr;
		transition: .3s ease;
		max-width: 440px;
		width: 100%;
	}
	// &__content {
	// }
	&__wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&__header {
		padding-bottom: 8px;
		border-bottom: 1px solid #E9E9E9;
		display: flex;
		align-items: center;
		justify-content: space-between;
		&--no-border {
			border: 0;
		}
	}
	&__back {
		color: var(--DARK, #12120F);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%;
		letter-spacing: 0.48px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 4px;
		:deep(svg) {
			transform: rotate(90deg);
		}
	}
	&__close {
		padding: 4px;
		margin-left: auto;
	}
	&__title {
		color: var(--DARK, #12120F);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%;
		letter-spacing: 0.48px;
		text-transform: uppercase;
	}
	&__footer {
		display: flex;
		gap: 8px;
		opacity: 1;
		position: static;
		max-width: 440px;
		width: 100%;
		margin: 0 auto;
		pointer-events: all;
	}
	&__content {
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-right: 10px;
		overflow-y: auto;
		overflow-x: hidden;
		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-thumb {
			background: #333;
			width: 5px;
			border-radius: 16px;
		}
	}
	@include r(768px) {
		max-width: 100%;
	}
}

</style>
