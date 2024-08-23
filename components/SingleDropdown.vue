<script setup>

const props = defineProps({
	value: String,
	list: Array,
	secondary: Boolean,
})

defineEmits(['update:modelValue'])

const dropdown = ref(null)
const dropdownOptions = ref(null)
const open = ref(false)
const coordinates = ref({top: 0, left: 0})

nextTick(() => {
	getCoordinates()
	window.addEventListener('resize', getCoordinates)
	window.addEventListener('scroll', () => open.value = false)
	window.addEventListener('click', (e) => {
		if (!dropdown.value?.contains(e.target) && !dropdownOptions.value?.contains(e.target)) {
			open.value = false
		}
	})
})

const getCoordinates = () => {
	coordinates.value.left = dropdown.value.getBoundingClientRect().left + window.scrollX
	coordinates.value.top = dropdown.value.getBoundingClientRect().top + window.scrollY
	coordinates.value.width = dropdown.value.getBoundingClientRect().width
}
</script>

<template lang="pug">
.dropdown(ref="dropdown" :class="{ open, 'dropdown--secondary': secondary}")
	p.dropdown__value.subtitle(@click="open = !open; getCoordinates()")
		| {{ value }}
		IconsTriangleIcon(size="16")

	Teleport(to="body")
		.dropdown-options__wrapper(@click.self="open = false" ref="dropdownOptions" :class="{ open }" :style="{ top: `${coordinates.top}px`, left: `${coordinates.left}px`, minWidth: `${coordinates.width}px` }")
			.dropdown-options
				button.dropdown__button.subtitle.dropdown__button--selected( type="button" @click="open = !open") {{ value }}
				.dropdown__wrapper
					.dropdown__content
						button.dropdown__button.bt-medium(
							v-for="item,i in list.filter(i => i !== value)"
							@click="$emit('update:modelValue', item); open = false; getCoordinates()"
						) {{ item }}

</template>

<style scoped lang="scss">
.dropdown-options {
	display: flex;
	padding: 2px;
	background: var(--LIGHT-GREY);
	flex-direction: column;
	border-radius: 16px;
	&__wrapper {
		pointer-events: none;
		opacity: 0;
		position: absolute;
		width: auto;
		transition: opacity .3s ease, pointer-events .3s ease, min-width .3s ease;
		z-index: 100;
		&.open {
			opacity: 1;
			pointer-events: all;
			.dropdown__wrapper {
				grid-template-rows: 1fr;
			}
			.dropdown__content {
				padding: 2px;
				gap: 2px;
			}
		}
	}
	@include r(768px) {
		position: fixed !important;
		top: auto !important;
		bottom: 32px !important;
		left: 16px !important;
		right: 16px !important;
		min-width: calc(100% - 32px) !important;
		&__wrapper {
			position: fixed !important;
			top: 0 !important;
			width: 100vw;
			height: 100vh;
			left: 0 !important;

			background: rgba(0, 0, 0, 0.88);
		}
	}
}
.dropdown {
	padding: 2px;
	border-radius: 16px;
	position: relative;
	min-width: 0;
	transition: .3s ease;
	&__value {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		padding: 12px 8px 12px 16px;
	}
	&__wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition:grid-template-rows .3s ease, min-width .3s ease;
		min-width: 0px;
	}
	&__content {
		display: flex;
		flex-direction: column;
		height: 100%;
		transition: .3s ease;
		overflow: hidden;
	}
	&__button {
		display: flex;
		align-items: center;
		padding: 12px 16px 12px 16px;
		color: var(--GREY-300, #272723);
		transition: .3s ease;
		opacity: 0.5;
		&--selected {
			opacity: 1;
			border-bottom: 1px solid #E9E9E9;
			text-transform: uppercase;

		}
		@include hover {
			opacity: 1;
		}
	}
	&--secondary {
		width: 100%;
		max-width: 100%;
		background: var(--LIGHT-GREY);

	}
}
</style>
