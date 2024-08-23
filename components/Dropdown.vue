<script setup>

const props = defineProps({
	value: String,
	list: Array,
	title: String
})

let active = ref(false)
</script>

<template lang="pug">
.dropdown(@click="active = !active" :class="{ active }")
	p.dropdown__title {{ title }}
	.dropdown__header
		p.dropdown__placeholder.bt-medium Выберите из списка
		IconsChevronIcon
	.dropdown__wrapper
		.dropdown__content
			button(type="button" @click="$emit('update:modelValue', item);" v-for="item in list").dropdown__item.bt-medium
				span {{ item }}
				IconsDeleteDropdownIcon
	.dropdown__value
</template>

<style scoped lang="scss">
	// DROPDOWN
.dropdown {
	display: flex;
	flex-direction: column;
	position: relative;
	&__title {
		color: var(--DARK, #12120F);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%; /* 16.8px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
		opacity: 0.3;
	}
	&__header {
		padding: 12px;
		display: flex;
		justify-content: space-between;
		margin-top: 8px;
		cursor: pointer;
		border-bottom: 1px solid #E9E9E9;
		:deep(svg) {
			transition: .3s ease;
		}
	}
	&__placeholder {
		opacity: 0.5;
	}
	&__value {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
		&:has(.dropdown__value-item) {
			margin-top: 12px;
		}
	}
	&__value-item {
		padding: 4px 12px;
		display: flex;
		align-items: center;
		gap: 12px;
		border-radius: 100px;
		cursor: pointer;
		border: 1px solid var(--DARK, #12120F);
		path {
			fill: #12120F;
		}
		&:first-child {
			border-radius: 100px;
			border: 1px solid var(--DARK, #12120F);
			background: var(--DARK, #12120F);
			color: #ffff00;
			&::before {
				margin-right: -8px;
				content: '';
				background-image: url("data:image/svg+xml,%3Csvg width='12' height='13' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.12012 9.39073L5.99994 8.24028L7.87976 9.40586L7.38742 7.22607L9.04346 5.77288L6.86525 5.57609L5.99994 3.5174L5.13463 5.56095L2.95642 5.75774L4.61245 7.22607L4.12012 9.39073ZM3.21005 10.6611L3.95027 7.44382L1.48975 5.28149L4.73066 4.99621L5.99994 1.96289L7.26922 4.99621L10.5101 5.28149L8.04961 7.44382L8.78983 10.6611L5.99994 8.95291L3.21005 10.6611Z' fill='%23FFFF00'/%3E%3Cpath d='M4.12012 9.39073L5.99994 8.24028L7.87976 9.40586L7.38742 7.22607L9.04346 5.77288L6.86525 5.57609L5.99994 3.5174L5.13463 5.56095L2.95642 5.75774L4.61245 7.22607L4.12012 9.39073ZM3.21005 10.6611L3.95027 7.44382L1.48975 5.28149L4.73066 4.99621L5.99994 1.96289L7.26922 4.99621L10.5101 5.28149L8.04961 7.44382L8.78983 10.6611L5.99994 8.95291L3.21005 10.6611Z' fill='%23FFFF00'/%3E%3Cpath d='M4.12012 9.39073L5.99994 8.24028L7.87976 9.40586L7.38742 7.22607L9.04346 5.77288L6.86525 5.57609L5.99994 3.5174L5.13463 5.56095L2.95642 5.75774L4.61245 7.22607L4.12012 9.39073Z' fill='%23FFFF00'/%3E%3C/svg%3E%0A");
				width: 12px;
				height: 12px;
			}
			path {
				fill: #FFFF00;
			}
		}
	}
	&__wrapper {
		position: absolute;
		top: 75px;
		display: grid;
		z-index: 10;
		grid-template-rows: 0fr;
		padding: 0 4px;
		transition: .3s ease;
		border-radius: 16px;
		width: 100%;
		background: var(--GREY-400, #1C1C19);
		pointer-events: none;
	}
	&__content {
		overflow: hidden;
		height: 100%;
		transition: .3s ease;
		display: flex;
		flex-direction: column;
		gap: 1px;
		max-height: 269px;
		padding-right: 4px;
		&::-webkit-scrollbar {
			width: 5px;
			z-index: 1;
			position: relative;
		}
		&::-webkit-scrollbar-thumb {
			background: #8d8d8d;
			width: 5px;
			border-radius: 16px;
		}
		&::after {
			content: '';
			background: #484846;
			width: 1px;
			position: absolute;
			height: calc(100% - 32px);
			top: 16px;
			transition: .3s ease;
			z-index: -1;
			right: 10px;
			transform: scaleY(0);
			transform-origin: top;
		}
	}
	&__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
		color: #fff;
		transition: .3s ease;
		border-radius: 16px;
		&:not(.selected) {
			@include hover {
				background: var(--GREY-300, #272723);
			}
		}
		:deep(svg) {
			display: none;
		}
		&.first {
			color: #ffff00;
		}
		&.selected {
			background: var(--GREY-100, #333);
			:deep(svg) {
				display: flex;
			}
		}
	}
	&.active {
		.dropdown__wrapper {
			grid-template-rows: 1fr;
			padding: 8px 8px 8px 4px;
			pointer-events: all;
		}
		.dropdown__content {
			overflow: auto;
			&::after {
				transform: scaleY(1);
			}
		}
		.dropdown__header {
			:deep(svg) {
				transform: rotate(180deg);
			}
		}
	}
}
</style>
