<script setup>
import ChevronIcon from './icons/ChevronIcon.vue';

defineProps({
	alwaysOpen: { type: Boolean, default: false },
})

const open = ref(false)
</script>

<template lang="pug">
.accordion(:class="{ 'open': open, 'accordion--alwaysOpen': alwaysOpen}")
	.accordion__header(@click="open = !open")
		p.accordion__title
			slot(name="header")
		ChevronIcon
	.accordion__wrapper
		.accordion__content
			slot
</template>

<style scoped lang="scss">
.accordion {
	width: 100%;
	max-width: 100%;
	&__header {
		cursor: pointer;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__title {
		color: var(--LIGHT-GREY, #F8F8F8);
		font-size: 12px;
		font-weight: 400;
		line-height: 140%;
		letter-spacing: 0.48px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 10px;
		:deep(span) {
			display: flex;
			align-items: center;
			gap: 4px;
			color: var(--ACCENT);
			font-size: 12px;
			font-weight: 400;
			line-height: 160%;
			&::before {
				content: "";
				display: block;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background: var(--ACCENT);
			}
		}
	}
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: .3s ease;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--GREY-100, #333);
	}
	&__content {
		height: 100%;
		overflow: hidden;
		transition: .3s ease;
	}
	&.open:not(&--alwaysOpen) & {
		&__header {
			:deep(svg) {
				transform: rotate(180deg);
			}
			:deep(path) {
				fill: var(--ACCENT);
			}
		}
		&__wrapper {
			grid-template-rows: 1fr;
			padding-top: 16px;
		}
	}
	&--alwaysOpen {
		:deep(svg) {
			display: none;
		}
		.accordion {
			&__wrapper {
				padding-top: 12px;
				grid-template-rows: 1fr;
			}
		}
	}
	@include hover {
		.accordion__wrapper {
			border-color: var(--ACCENT);
		}
	}
}
</style>
