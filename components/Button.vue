<script setup>

const props = defineProps({
	type: {
		type: String,
		default: 'button'
	},
	large: {
		type: Boolean,
		default: false
	},
	dark: {
		type: Boolean,
		default: false
	},
	outline: {
		type: Boolean,
		default: false
	},
	red: {
		type: Boolean,
		default: false
	},
	white: {
		type: Boolean,
		default: false
	},
	accent: {
		type: Boolean,
		default: false
	},
	href: {
		type: String,
		default: null
	},
	target: {
		type: String,
		default: null
	}
})

</script>
	
<template lang="pug">
a.button(
	v-if="href"
	:href="href"
	:target="target"
	:class="{'button--large': large, 'button--dark': dark, 'button--outline': outline, 'button--red': red, 'button--white': white, 'button--accent': accent, }"
)
	slot
button.button(
	v-else
	:type="type"
	:class="{'button--large': large, 'button--dark': dark, 'button--outline': outline, 'button--red': red, 'button--white': white, 'button--accent': accent, }"
)
	slot

</template>
	
<style scoped lang="scss">
.button {
	padding: 10px 24px;
	min-height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
	line-height: 140%;
	border-radius: 4px;
	gap: 10px;
	transition: .3s ease;
	@include hover {
		background: var(--ACCENT);
		color: var(--DARK);
	}
	&--outline {
		border: 1px solid var(--WHITE);
		color: var(--WHITE);
		@include hover {
			background: var(--WHITE);
			color: var(--DARK);
		}
	}
	&--red {
		color: var(--RED);
		border: 1px solid var(--RED);
		@include hover {
			background: var(--RED);
			color: var(--WHITE);
		}
	}
	&--white {
		background: var(--WHITE);
		color: var(--DARK);
		@include hover {
			background: var(--ACCENT);
			color: var(--DARK);
		}
	}
	&--large {
		min-height: 54px;
		font-size: 16px;
		font-weight: 700;
		padding: 16px 50px;
	}
	&--dark {
		background: var(--DARK);
		color: var(--WHITE);
		@include hover {
			background: var(--GREY-300);
			color: var(--ACCENT);
		}
		&.button--outline {
			border: 1px solid var(--DARK);
			color: var(--DARK);
			background: transparent;
			@include hover {
				background: var(--DARK);
				color: var(--WHITE);
			}
		}
	}
	&--accent {
		background: var(--ACCENT);
		color: var(--DARK);
		@include hover {
			background: var(--WHITE);
			color: var(--DARK);
		}
	}
}
</style>