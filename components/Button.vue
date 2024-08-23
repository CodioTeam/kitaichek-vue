<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'button' },
  target: String,
  large: Boolean,
  outline: Boolean,
  dark: Boolean,
  danger: Boolean,
  yellow: Boolean,
  white: Boolean,
  green: Boolean
})

const buttonClasses = computed(() => ({
  'button--large': props.large,
  'button--outline': props.outline,
  'button--dark': props.dark,
  'button--danger': props.danger,
  'button--yellow': props.yellow,
  'button--white': props.white,
  'button--green': props.green
}))
</script>

<template lang="pug">
nuxt-link.button(
  v-if="$attrs.to"
  :to="$attrs.to"
  :target="target"
  :class="buttonClasses"
)
	slot
button.button(
	v-else
	:type="type"
	:class="buttonClasses"
)
	slot

</template>

<style scoped lang="scss">
.button {
	padding: 12px 24px;
	min-height: 41px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	line-height: 120%;
	border-radius: 100px;
	gap: 10px;
	transition: .3s ease;
	background: var(--color);
	color: var(--color-text, var(--color));
	@include hover {
		&:not:disabled {
			background: var(--color);
			color: var(--color-text, var(--color));
		}
	}
	&:disabled {
		color: var(--disabled-color, rgba(255, 255, 255, 0.2));
		background: var(--disabled-background, var(--GREY-100));
		border-color: var(--disabled-border, rgba(255, 255, 255, 0.2));
		cursor: default;
	}
	&--outline {
		background: var(--color-outline, transparent);
		border: 1px solid var(--color-outline-border, var(--color));
		color: var(--color-outline-text, var(--color-text), var(--color));
		:deep(svg) {
			color: var(--color-outline-text, var(--color-text), var(--color));
		}
		@include hover {
			&:not:disabled {
				background: var(--color-outline, var(--color));
				color: var(--color-outline-text, var(--color-text), var(--color));
				border-color: var(--color-outline-border, var(--color));
			}
		}
		&:disabled {
			background: transparent !important;
		}
	}
  &--large {
		min-height: 54px;
		font-size: 16px;
		font-weight: 700;
		padding: 16px 50px;
	}
	&--green {
		--color: var(--GREEN);
		--color-text: var(--GREY-400);
		--color-outline: var(--GREEN);
		--color-outline-text: var(--GREEN);
		--disabled-background: #142D1F;
		@include hover {
			--color: #37FF9F;
			--color-outline: #1A2619;
		}
	}
	&--yellow {
		--color: var(--ACCENT);
		--color-text: var(--GREY-400);
		--color-outline-text: var(--ACCENT);
		--color-outline-border: var(--ACCENT);
		@include hover {
			--color: #E6D010;
			--color-outline: var(--ACCENT);
			--color-outline-text: var(--GREY-400);
			--color-outline-border: var(--ACCENT);
		}
	}
	&--white {
		--color: var(--WHITE);
		--color-text: var(--GREY-400);
		--color-outline-border: rgba(255, 255, 255, 0.3);
		--color-outline-text: #fff;
		@include hover {
			--color: var(--LIGHT-GREY);
			--color-outline-border: #fff;
			--color-outline-text: #fff;
		}
	}
	&--danger {
		--color: var(--DARK);
		--color-text: var(--RED);
		--color-outline-text: var(--RED);
		--color-outline-border: var(--RED);
		@include hover {
			--color: #262019;
			--color-outline: #262019;
		}
	}
	&--dark {
		--color: var(--DARK);
		--color-text: var(--WHITE);
		--color-outline-text: var(--GREY-400);
		--color-outline-border: var(--GREY-400);
		@include hover {
			--color: var(--ACCENT);
			--color-text: var(--GREY-400);
			--color-outline: var(--GREY-400);
			--color-outline-text: #fff;
			--color-outline-border: var(--GREY-400);
		}
	}
}
</style>
